"use client";

import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
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
import { UsersDTO } from "@/lib/dto/user";
import { AddProgramPersonnelFormSchema } from "@/lib/zod-definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
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
  const onSubmit = (data: z.infer<typeof AddProgramPersonnelFormSchema>) => {
    console.log(data);
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
                <FormMessage />
                <DialogFooter>
                  <DialogClose>
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
