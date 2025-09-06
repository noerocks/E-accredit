import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UsersDTO } from "@/lib/dto/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleAlert } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const DeleteUserDialog = ({
  selectedUser,
}: {
  selectedUser: UsersDTO | undefined;
}) => {
  const deleteUserSchema = z
    .object({
      userFullname: z.string().min(1, "This field is required").trim(),
    })
    .refine(
      (data) =>
        data.userFullname ===
        `${selectedUser?.firstName} ${selectedUser?.lastName}`,
      {
        message: "Full name does not match",
        path: ["userFullname"],
      }
    );
  const form = useForm<z.infer<typeof deleteUserSchema>>({
    resolver: zodResolver(deleteUserSchema),
    defaultValues: {
      userFullname: "",
    },
  });
  const onSubmit = (data: z.infer<typeof deleteUserSchema>) => {
    console.log(data.userFullname);
  };
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl text-center">Delete User</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete this user?
        </DialogDescription>
        <Alert
          variant="destructive"
          className="bg-destructive/5 border-destructive"
        >
          <TriangleAlert />
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>This action can't be undone</AlertDescription>
        </Alert>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="userFullname"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel className="text-muted-foreground text-sm">
                  To confirm, please type{" "}
                  <span className="dark:text-white text-foreground">{`${selectedUser?.firstName} ${selectedUser?.lastName}`}</span>{" "}
                  below.
                </FormLabel>
                <FormControl>
                  <Input {...field} autoComplete="off" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Delete</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default DeleteUserDialog;
