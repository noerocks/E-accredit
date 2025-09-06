import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UsersDTO } from "@/lib/dto/user";
import { Info, Send } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { AcceptUserFormSchema } from "@/lib/zod-definitions";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const AcceptUserDialog = ({
  selectedUser,
}: {
  selectedUser: UsersDTO | undefined;
}) => {
  const form = useForm<z.infer<typeof AcceptUserFormSchema>>({
    resolver: zodResolver(AcceptUserFormSchema),
    defaultValues: {
      role: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof AcceptUserFormSchema>) => {
    console.log(data);
  };
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-center text-2xl">Accept User</DialogTitle>
        <DialogDescription>
          Assign role to{" "}
          <span className="dark:text-white text-black">{`${selectedUser?.firstName} ${selectedUser?.lastName}`}</span>{" "}
          and designate a program
        </DialogDescription>
        <Alert className="border border-blue-400 text-blue-400 bg-blue-400/5">
          <Info />
          <AlertTitle>Confirmation Notice</AlertTitle>
          <AlertDescription className="text-blue-400">
            Accepting this user will trigger an email notification
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
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CHAIRPERSON">
                      Taskforce Chairperson
                    </SelectItem>
                    <SelectItem value="MEMBER">Taskforce Member</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Please assign a role</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Confirm</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default AcceptUserDialog;
