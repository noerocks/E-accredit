"use client";

import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
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
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { AddProgramPersonnel } from "@/lib/action/program-personnel";
import { UsersDTO } from "@/lib/dto/user";
import { AddProgramPersonnelFormSchema } from "@/lib/zod-definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const ProgramPersonnelList = ({
  params,
  accreditationOfficers,
}: {
  params: { id: string };
  accreditationOfficers: UsersDTO[] | null;
}) => {
  const form = useForm<z.infer<typeof AddProgramPersonnelFormSchema>>({
    resolver: zodResolver(AddProgramPersonnelFormSchema),
    defaultValues: {
      userId: "",
    },
  });
  const [pending, startTransition] = useTransition();
  const onSubmit = (data: z.infer<typeof AddProgramPersonnelFormSchema>) => {
    startTransition(async () => {
      const result = await AddProgramPersonnel.bind(null, params.id)(data);
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
    <div>
      <p>{params.id}</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add Program Personnel</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose accreditation officer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {accreditationOfficers?.map((officer) => (
                      <SelectItem
                        value={officer.id}
                        key={officer.id}
                      >{`${officer.firstName} ${officer.lastName}`}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Assign an accreditation officer to this program
                </FormDescription>
                <FormMessage />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button>
                        <UserPlus /> Add
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                </DialogFooter>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default ProgramPersonnelList;
