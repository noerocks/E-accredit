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
import { migrateFiles } from "@/lib/action/file-version";
import { SurveyVisitDisplayDTO } from "@/lib/dto/survey-visit";
import { formatAccreditationName } from "@/lib/utils";
import { MigratePortfolioFormSchema } from "@/lib/zod-definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, UploadCloud } from "lucide-react";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const MigrateFiles = ({
  surveyVisitPortfolios,
}: {
  surveyVisitPortfolios: SurveyVisitDisplayDTO[];
}) => {
  const params = useParams();
  const currentPortfolioId = String(params.id);
  const filterdSurveyVisitPortfolios = surveyVisitPortfolios.filter(
    (portfolio) => portfolio.id !== currentPortfolioId
  );
  const form = useForm<z.infer<typeof MigratePortfolioFormSchema>>({
    resolver: zodResolver(MigratePortfolioFormSchema),
    defaultValues: {
      surveyVisitId: "",
    },
  });
  const [pending, startTransition] = useTransition();
  const onSubmit = async (data: z.infer<typeof MigratePortfolioFormSchema>) => {
    startTransition(async () => {
      const result = await migrateFiles(currentPortfolioId, data.surveyVisitId);
      if (result.failure) toast.error(result.failure.error);
      if (result.success) toast.success(result.success.message);
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <UploadCloud />
          Migrate Files
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Migrate Files</DialogTitle>
          <DialogDescription>
            Migrate active file versions from this portfolio to another
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="surveyVisitId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Survey Visit Portfolio</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Please choose a portfolio" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {filterdSurveyVisitPortfolios.map((portfolio) => (
                        <SelectItem
                          key={portfolio.id}
                          value={portfolio.id}
                        >{`${formatAccreditationName(
                          portfolio.accreditation.program.code,
                          portfolio.level
                        )}`}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Please choose a portfolio of the same instrument
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button disabled={pending}>
                {pending ? (
                  <>
                    <Loader className="animate-spin" />
                    Migrating...
                  </>
                ) : (
                  <>
                    <UploadCloud />
                    Migrate
                  </>
                )}
              </Button>
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

export default MigrateFiles;
