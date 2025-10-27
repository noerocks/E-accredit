"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { denyAccreditationStatus } from "@/lib/action/accreditation";
import { scheduleActualSurveyRevisit } from "@/lib/action/surveyVisit";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import { SurveyResultStatus } from "@/lib/generated/prisma";
import { cn } from "@/lib/utils";
import { RevisitScheduleFormSchema } from "@/lib/zod-definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Loader } from "lucide-react";
import { useParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const ScheduleRevisit = ({
  failedAreas,
  surveyResultStatus,
}: {
  failedAreas: AreaFolderDTO[];
  surveyResultStatus: SurveyResultStatus;
}) => {
  const params = useParams();
  const form = useForm<z.infer<typeof RevisitScheduleFormSchema>>({
    resolver: zodResolver(RevisitScheduleFormSchema),
    defaultValues: {
      actualSurveyDate: undefined,
    },
  });
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const onSubmit = async (data: z.infer<typeof RevisitScheduleFormSchema>) => {
    startTransition(async () => {
      switch (surveyResultStatus) {
        case "DEFERRED": {
          const result = await scheduleActualSurveyRevisit(
            String(params.id),
            failedAreas,
            data.actualSurveyDate
          );
          if (result.failure) toast.error(result.failure.error);
          if (result.success) toast.success(result.success.message);
          break;
        }
        case "NOT_GRANTED": {
          const result = await denyAccreditationStatus(
            String(params.id),
            data.actualSurveyDate
          );
          if (result.failure) toast.error(result.failure.error);
          if (result.success) toast.success(result.success.message);
          break;
        }
      }
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <CalendarIcon />
          Schedule Revisit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Schedule Revisit</DialogTitle>
          <DialogDescription>{`Schedule revisit for area(s): ${failedAreas
            .map((area) => area.area.label)
            .join(", ")}.`}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
              {pending ? (
                <Button>
                  <Loader className="animate-spin" />
                  Submitting...
                </Button>
              ) : (
                <Button>Submit</Button>
              )}
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleRevisit;
