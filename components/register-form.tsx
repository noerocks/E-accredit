"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { registerFormSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { register } from "@/lib/actions";
import { toast } from "sonner";

const RegisterForm = ({ className, ...props }: React.ComponentProps<"div">) => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirm: "",
    },
  });
  const [pending, startTransition] = useTransition();
  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    startTransition(async () => {
      const result = await register(values);
      if (result.status === "success") toast.success(result.message);
      else toast.error(result.message);
    });
  };
  return (
    <div className={cn(className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Register</CardTitle>
          <CardDescription>
            An email will be sent confirming your account creation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="flex gap-5 items-center">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Juan"
                          {...field}
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormDescription>
                        Please enter your first name
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Dela Cruz"
                          {...field}
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormDescription>
                        Please enter your last name
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="09XXXXXXXXX"
                        {...field}
                        type="number"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormDescription>
                      Please enter your phone number
                    </FormDescription>
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
                      <Input
                        placeholder="sample@gmail.com"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormDescription>Please enter your email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-5 items-center">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" autoComplete="off" />
                      </FormControl>
                      <FormDescription>
                        Please enter your password
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirm"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" autoComplete="off" />
                      </FormControl>
                      <FormDescription>Please confirm password</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button>Sign up</Button>
              <p className="text-center">
                Already had an account?{" "}
                <Link href={"/login"} className="hover:underline">
                  Log in
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
