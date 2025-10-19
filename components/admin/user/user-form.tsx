"use client";

import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { createAndUpdateUser } from "@/lib/action/user";
import { UsersDTO } from "@/lib/dto/user";
import { Role } from "@/lib/generated/prisma";
import { cn, screamingSnakeToTitle } from "@/lib/utils";
import { CreateNewUserFormSchema } from "@/lib/zod-definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const CreateUserForm = ({
  user,
  hideTrigger,
}: {
  user?: UsersDTO | null;
  hideTrigger?: boolean;
}) => {
  const form = useForm<z.infer<typeof CreateNewUserFormSchema>>({
    resolver: zodResolver(CreateNewUserFormSchema),
    defaultValues: {
      firstName: user ? user.firstName : "",
      lastName: user ? user.lastName : "",
      email: user ? user.email : "",
      phoneNumber: user ? user.phoneNumber : "",
    },
  });
  const [pending, startTransition] = useTransition();
  const onSubmit = async (data: z.infer<typeof CreateNewUserFormSchema>) => {
    startTransition(async () => {
      let result;
      if (user) {
        result = await createAndUpdateUser(data, true);
      } else {
        result = await createAndUpdateUser(data);
      }
      if (result?.failure) toast.error(result.failure.error);
      if (result?.success) toast.success(result.success.message);
    });
  };
  return (
    <Form {...form}>
      <form
        className="px-4 flex flex-col gap-5 h-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} autoComplete="off" />
              </FormControl>
              <FormDescription>Please enter first name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} autoComplete="off" />
              </FormControl>
              <FormDescription>Please enter last name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} autoComplete="off" />
              </FormControl>
              <FormDescription>Please enter email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} autoComplete="off" />
              </FormControl>
              <FormDescription>Please enter Phone number</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Please select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(Role)
                    .filter(
                      (role) => role !== Role.ADMIN && role !== Role.PENDING
                    )
                    .map((role) => (
                      <SelectItem key={role} value={role}>
                        {screamingSnakeToTitle(role)}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <SheetFooter className="w-full px-0 flex flex-col gap-2">
          <Button>Save Changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </form>
    </Form>
  );
};

export default CreateUserForm;
