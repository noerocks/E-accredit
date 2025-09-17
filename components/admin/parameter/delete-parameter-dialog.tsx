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
import { deleteParameter } from "@/lib/action/parameter";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash, TriangleAlert } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const DeleteParameterDialog = ({
  parameter,
}: {
  parameter: {
    id: number | undefined;
    label: string | undefined;
    areaId: number | undefined;
  };
}) => {
  const { id: instrumentId } = useParams();
  const searchParams = useSearchParams();
  const DeleteParameterFormSchema = z
    .object({
      label: z.string().min(1, "This field is required").trim(),
    })
    .refine((data) => data.label === parameter.label, {
      message: "Parameter label does not match",
      path: ["label"],
    });
  const form = useForm<z.infer<typeof DeleteParameterFormSchema>>({
    resolver: zodResolver(DeleteParameterFormSchema),
    defaultValues: {
      label: "",
    },
  });
  const [pending, startTransition] = useTransition();
  const onSubmit = async (data: z.infer<typeof DeleteParameterFormSchema>) => {
    startTransition(async () => {
      if (!parameter.id) return;
      try {
        await deleteParameter(Number(parameter.id), {
          instrumentId: String(instrumentId),
          areaId: parameter.areaId,
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
            Delete Parameter
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete parameter? This action will delete
            all indicators under this parameter.
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
                    <span className="dark:text-white text-foreground">{`${parameter.label}`}</span>{" "}
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

export default DeleteParameterDialog;
