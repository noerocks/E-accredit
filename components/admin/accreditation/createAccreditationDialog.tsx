"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createSurveyVisit } from "@/lib/action/accreditation";
import { InstrumentDisplayDTO } from "@/lib/dto/instrument";
import { LevelDTO } from "@/lib/dto/level";
import { ProgramDTO } from "@/lib/dto/programs";
import { CreateAccreditationFormSchema } from "@/lib/zod-definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const CreateAccreditationDialog = ({
  programs,
  instruments,
  levels,
}: {
  programs: ProgramDTO[];
  instruments: InstrumentDisplayDTO[] | null;
  levels: LevelDTO[] | null;
}) => {
  const form = useForm<z.infer<typeof CreateAccreditationFormSchema>>({
    resolver: zodResolver(CreateAccreditationFormSchema),
    defaultValues: {
      programId: "",
      levelId: "",
      instrumentId: "",
    },
  });
  const [pending, startTransition] = useTransition();
  const onSubmit = async (
    data: z.infer<typeof CreateAccreditationFormSchema>
  ) => {
    startTransition(async () => {
      const program = programs.filter(
        (program) => program.id === data.programId
      )[0];
      const level = levels?.filter((level) => level.id === data.levelId)[0];
      const instrument = instruments?.filter(
        (instrument) => instrument.id === data.instrumentId
      )[0];
      const result = await createSurveyVisit(program, level, instrument);
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
            Get a Program Accredited
          </DialogTitle>
          <DialogDescription>
            Create new accreditation by providing its details
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <FormField
              control={form.control}
              name="programId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Program</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem value={program.id} key={program.id}>
                          {program.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Please select a program</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="levelId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {levels?.map((level) => (
                        <SelectItem value={level.id} key={level.id}>
                          {`${level.label} ${
                            ["Level IV", "Level III"].includes(level.label)
                              ? level.phase
                                  .split("_")
                                  .map(
                                    (word) =>
                                      word[0] +
                                      word.slice(1).toLocaleLowerCase()
                                  )
                                  .join(" ")
                              : ""
                          }`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Please select a program</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instrumentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instrument</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {instruments?.map((instrument) => (
                        <SelectItem value={instrument.id} key={instrument.id}>
                          {instrument.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Please select an instrument</FormDescription>
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

export default CreateAccreditationDialog;
