"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { deleteInstrument } from "@/lib/action/instrument";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash, TriangleAlert } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const DeleteInstrumentDialog = ({
  instrument,
}: {
  instrument: { id: string | undefined; name: string | undefined };
}) => {
  console.log(instrument);
  const DeleteInstrumentFormSchema = z
    .object({
      name: z.string().min(1, "This field is required").trim(),
    })
    .refine((data) => data.name === instrument.name, {
      message: "Instrument name does not match",
      path: ["name"],
    });
  const form = useForm<z.infer<typeof DeleteInstrumentFormSchema>>({
    resolver: zodResolver(DeleteInstrumentFormSchema),
    defaultValues: {
      name: "",
    },
  });
  const [pending, startTransition] = useTransition();
  const onSubmit = async (data: z.infer<typeof DeleteInstrumentFormSchema>) => {
    startTransition(async () => {
      if (!instrument.id) return;
      try {
        await deleteInstrument(instrument.id);
      } catch (error) {
        const e = error as Error;
        console.log(e);
        console.log(e.message);
        toast.error(e.message);
      }
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="destructive">
          <Trash />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Delete Instrument
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete instrument? This action will delete
            all the areas, parameters and indicators under this instrument.
          </DialogDescription>
          <Alert
            variant="destructive"
            className="bg-destructive/5 border-destructive"
          >
            <TriangleAlert />
            <AlertTitle>Warning!</AlertTitle>
            <AlertDescription>This action can't be undone</AlertDescription>
          </Alert>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormLabel className="text-muted-foreground text-sm">
                    To confirm, please type
                    <span className="dark:text-white text-foreground">{`${instrument.name}`}</span>{" "}
                    below.
                  </FormLabel>
                  <FormControl>
                    <Input {...field} autoComplete="off" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button variant="destructive">Delete</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteInstrumentDialog;
