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
import { deleteArea } from "@/lib/action/area";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash, TriangleAlert } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const DeleteAreaDialog = ({
  area,
}: {
  area: {
    id: number | undefined;
    label: string | undefined;
    instrumentId: string | undefined;
  };
}) => {
  const searchParams = useSearchParams();
  const DeleteAreaFormSchema = z
    .object({
      label: z.string().min(1, "This field is required").trim(),
    })
    .refine((data) => data.label === area.label, {
      message: "Instrument label does not match",
      path: ["label"],
    });
  const form = useForm<z.infer<typeof DeleteAreaFormSchema>>({
    resolver: zodResolver(DeleteAreaFormSchema),
    defaultValues: {
      label: "",
    },
  });
  const [pending, startTransition] = useTransition();
  const onSubmit = async (data: z.infer<typeof DeleteAreaFormSchema>) => {
    startTransition(async () => {
      if (!area.id) return;
      try {
        await deleteArea(Number(area.id), {
          instrumentId: area.instrumentId,
          searchParams: searchParams.toString(),
        });
      } catch (error) {
        const e = error as Error;
        if (e.message === "NEXT_REDIRECT") return;
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
            Delete Area
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete area? This action will delete all
            parameters and indicators under this area.
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
              name="label"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormLabel className="text-muted-foreground text-sm">
                    To confirm, please type
                    <span className="dark:text-white text-foreground">{`${area.label}`}</span>{" "}
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

export default DeleteAreaDialog;
