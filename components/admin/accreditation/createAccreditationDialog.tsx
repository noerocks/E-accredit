"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createSurveyVisit } from "@/lib/action/accreditation";
import { getProgramCurrentAccredidtationStatus } from "@/lib/action/program";
import { InstrumentDisplayDTO } from "@/lib/dto/instrument";
import { LevelDTO } from "@/lib/dto/level";
import { ProgramDTO } from "@/lib/dto/programs";
import { Area, Instrument } from "@/lib/generated/prisma";
import { cn, formatLevelNameAndPhase } from "@/lib/utils";
import { CreateAccreditationFormSchema } from "@/lib/zod-definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CheckLine, Loader, Plus } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const CreateAccreditationDialog = ({
  programs,
  instruments,
  levels,
  levelThreePhaseTwoInstrument,
}: {
  programs: ProgramDTO[];
  instruments: InstrumentDisplayDTO[];
  levels: LevelDTO[] | null;
  levelThreePhaseTwoInstrument: (Instrument & { area: Area[] }) | null;
}) => {
  const form = useForm<z.infer<typeof CreateAccreditationFormSchema>>({
    resolver: zodResolver(CreateAccreditationFormSchema),
    defaultValues: {
      programId: "",
      levelId: "",
      instrumentId: "",
    },
  });
  const [openElectives, setOpenElectives] = useState<boolean>();
  const levelInput = form.watch("levelId");
  const programInput = form.watch("programId");
  const levelThreePhaseTwo = levels?.find((level) => level.rank === 3);
  const levelThreePhaseTwoAreas = levelThreePhaseTwoInstrument?.area;
  useEffect(() => {
    form.setValue("instrumentId", instruments[0].id);
    if (levelInput === levelThreePhaseTwo?.id) {
      setOpenElectives(true);
      return;
    }
    setOpenElectives(false);
  }, [levelInput]);
  useEffect(() => {
    form.setValue("levelId", "");
  }, [programInput]);
  const [selectedProgramRank, setSelectedProgramRank] = useState<number>(8);
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState<boolean>(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [criterias, setCriterias] = useState<Area[]>(
    levelThreePhaseTwoAreas?.slice(0, 2) ?? []
  );
  const onSubmit = async (
    data: z.infer<typeof CreateAccreditationFormSchema>
  ) => {
    startTransition(async () => {
      if (criterias.length !== 4) {
        toast.error("You must proceed with four criterias");
        return;
      }
      const program = programs.filter(
        (program) => program.id === data.programId
      )[0];
      const level = levels?.filter((level) => level.id === data.levelId)[0];
      const instrument =
        levelThreePhaseTwoInstrument ||
        instruments?.filter(
          (instrument) => instrument.id === data.instrumentId
        )[0];
      const result = await createSurveyVisit(
        program,
        level,
        instrument,
        data.actualSurveyDate,
        criterias
      );
      if (result.failure) toast.error(result.failure.error);
      if (result.success) toast.success(result.success.message);
      setOpen(false);
    });
  };
  const onCheckChange = (areaId: number, checked: boolean) => {
    const area = levelThreePhaseTwoAreas?.find((area) => area.id === areaId);
    if (!area) return;
    if (checked) {
      setCriterias((prev) => [...prev, area]);
    } else {
      const filteredCriterias = criterias.filter(
        (criteria) => criteria.id !== areaId
      );
      setCriterias(filteredCriterias);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            Create New Portfolio
          </DialogTitle>
          <DialogDescription>
            Initialize a survey visit portfolio by providing the details below
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
                    onValueChange={async (value) => {
                      const currentRank =
                        await getProgramCurrentAccredidtationStatus(value);
                      setSelectedProgramRank(currentRank || 8);
                      field.onChange(value);
                    }}
                    value={field.value}
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
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {levels
                        ?.sort((a, b) => a.rank - b.rank)
                        .map((level) => (
                          <SelectItem
                            value={level.id}
                            key={level.id}
                            disabled={level.rank !== selectedProgramRank - 1}
                          >
                            {formatLevelNameAndPhase(level)}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Please select a level</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {openElectives && (
              <div>
                <p className="text-sm mb-2">
                  Please add two more elective criteria to the mandatory
                  criteria.
                </p>
                {levelThreePhaseTwoAreas?.map((area, i) => (
                  <div className="flex items-center gap-2" key={area.id}>
                    <Checkbox
                      defaultChecked={i <= 1}
                      disabled={
                        i <= 1 ||
                        (criterias.length === 4 &&
                          !criterias.find(
                            (criteria) => criteria.id === area.id
                          ))
                      }
                      onCheckedChange={onCheckChange.bind(null, area.id)}
                    />
                    <p className="text-sm text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {!openElectives && (
              <FormField
                control={form.control}
                name="instrumentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instrument</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select an instrument" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {instruments
                          ?.filter(
                            (instrument) =>
                              instrument.id !== levelThreePhaseTwoInstrument?.id
                          )
                          .map((instrument) => (
                            <SelectItem
                              value={instrument.id}
                              key={instrument.id}
                            >
                              {instrument.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Please select an instrument
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="actualSurveyDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Actual Survey Date</FormLabel>
                  <Popover
                    open={datePickerOpen}
                    onOpenChange={setDatePickerOpen}
                  >
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            <p>{field.value.toLocaleDateString("en-US")}</p>
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(data) => {
                          field.onChange(data);
                          setDatePickerOpen(false);
                        }}
                        captionLayout="dropdown"
                        startMonth={new Date(new Date().getFullYear(), 0)}
                        endMonth={new Date(new Date().getFullYear() + 10, 11)}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Please select the date of actual survey visit
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              {pending ? (
                <>
                  <Button disabled={pending}>
                    <Loader className="animate-spin" />
                    Initializing...
                  </Button>
                </>
              ) : (
                <Button disabled={pending}>Initialize Portfolio</Button>
              )}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAccreditationDialog;
