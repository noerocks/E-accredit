"use client";

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
import { Info, Plus } from "lucide-react";
import { SidebarGroupAction } from "@/components/ui/sidebar";
import { useSearchParams } from "next/navigation";
import z from "zod";
import { useForm } from "react-hook-form";
import { CreateAreaFormSchema } from "@/lib/zod-definitions";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CreateAreaDialog = () => {
  const searchParams = useSearchParams();
  const instrument = searchParams.get("instrumentName");
  const form = useForm<z.infer<typeof CreateAreaFormSchema>>({
    resolver: zodResolver(CreateAreaFormSchema),
    defaultValues: {
      label: "",
      description: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof CreateAreaFormSchema>) => {
    console.log(data);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SidebarGroupAction title="Add Area">
          <Plus />
        </SidebarGroupAction>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Add New Area
          </DialogTitle>
          <DialogDescription>{`Create new Area under ${instrument}`}</DialogDescription>
          <Alert className="border-blue-400 text-blue-400 bg-blue-400/5">
            <Info />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription className="text-blue-400">
              For standard instruments, please refer to the official instrument
              provided by the accrediting body when writing the area
              description.
            </AlertDescription>
          </Alert>
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
                  <FormLabel>Area Label</FormLabel>
                  <FormControl>
                    <Input autoComplete="off" {...field} />
                  </FormControl>
                  <FormDescription>
                    e.g. Area I, Area II, ... Area IX
                  </FormDescription>
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

export default CreateAreaDialog;
