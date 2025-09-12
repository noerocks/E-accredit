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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createInstrument } from "@/lib/action/instrument";
import { CreateInstrumentFormSchema } from "@/lib/zod-definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, Plus } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const CreateInstrumentDialog = () => {
  const form = useForm<z.infer<typeof CreateInstrumentFormSchema>>({
    resolver: zodResolver(CreateInstrumentFormSchema),
    defaultValues: {
      name: "",
    },
  });
  const [pending, startTransition] = useTransition();
  const onSubmit = async (data: z.infer<typeof CreateInstrumentFormSchema>) => {
    startTransition(async () => {
      const result = await createInstrument(data);
      switch (result?.status) {
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
        <Button>
          <span className="flex items-center gap-2">
            <Plus />
            New
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Add New Instrument
          </DialogTitle>
          <DialogDescription>
            Provide a name for the instrument
          </DialogDescription>
          <Alert className="border border-blue-400 text-blue-400 bg-blue-400/5">
            <Info />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription className="text-blue-400">
              This will be the instrument’s name. You’ll organize its areas,
              parameters, and indicators once it’s opened.
            </AlertDescription>
          </Alert>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instrument Name</FormLabel>
                  <FormControl>
                    <Input {...field} autoComplete="off" />
                  </FormControl>
                  <FormDescription>{`Could be standard instrument names (e.g., AACCUP Master Survey Instrument)`}</FormDescription>
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

export default CreateInstrumentDialog;
