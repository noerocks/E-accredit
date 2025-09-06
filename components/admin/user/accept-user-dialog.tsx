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
import { Info } from "lucide-react";
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
import { useTransition } from "react";
import { acceptUser } from "@/lib/action/user";
import { Role } from "@/lib/generated/prisma";
import Spinner from "@/components/spinner";
import { toast } from "sonner";

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
  const [pending, startTransition] = useTransition();
  const onSubmit = async (data: z.infer<typeof AcceptUserFormSchema>) => {
    startTransition(async () => {
      const result = await acceptUser(selectedUser?.id, data.role as Role);
      switch (result.status) {
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
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-center text-2xl">Accept User</DialogTitle>
        <DialogDescription>
          Assign role to{" "}
          <span className="dark:text-white text-black">{`${selectedUser?.firstName} ${selectedUser?.lastName}`}</span>{" "}
          before confirming registration
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
                    <SelectItem value="ACCREDITATION_OFFICER">
                      Accreditation Officer
                    </SelectItem>
                    <SelectItem value="ACCREDITOR">Accreditor</SelectItem>
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
            <Button>
              {pending ? <Spinner message="Approving..." /> : "Confirm"}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default AcceptUserDialog;
