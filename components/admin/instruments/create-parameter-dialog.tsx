import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createNewParameter } from "@/lib/action/parameter";
import { CreateParameterFormSchema } from "@/lib/zod-definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { FolderPlus } from "lucide-react";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const CreateParameterDialog = () => {
  const { areaId } = useParams();
  const form = useForm<z.infer<typeof CreateParameterFormSchema>>({
    resolver: zodResolver(CreateParameterFormSchema),
    defaultValues: {
      label: "",
      description: "",
    },
  });
  const [pending, startTransition] = useTransition();
  const onSubmit = async (data: z.infer<typeof CreateParameterFormSchema>) => {
    startTransition(async () => {
      const result = await createNewParameter(data, Number(areaId));
      switch (result.status) {
        case "success":
          toast.success(result.message);
          break;
        case "error":
          toast.error(result.message);
          break;
      }
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <FolderPlus />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            {"Add New Parameter"}
          </DialogTitle>
          <DialogDescription>
            Create new parameter under this area
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parameter Label</FormLabel>
                  <FormControl>
                    <Input autoComplete="off" {...field} />
                  </FormControl>
                  <FormDescription>e.g. Parameter A</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea autoComplete="off" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please enter the description accordingly
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button>Add</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateParameterDialog;
