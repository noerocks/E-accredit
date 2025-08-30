"use client";

import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/lib/zodDefinitions";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Spinner from "./spinner";
import Link from "next/link";
import { useTransition } from "react";
import { login } from "@/lib/action/authentication";
import { toast } from "sonner";

const LoginForm = ({ className, ...props }: React.ComponentProps<"div">) => {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [pending, startTransition] = useTransition();
  const onSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
    startTransition(async () => {
      const result = await login(values);
      if (result.status === "error") toast.error(result.message);
      else toast.success(result.message);
    });
  };
  return (
    <div className={cn(className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Log in</CardTitle>
          <CardDescription>
            Welcome back! Please sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-5 select-none"
              onSubmit={form.handleSubmit(onSubmit)}
            >
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel>Password</FormLabel>
                      <Link
                        href={"/login"}
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input type="password" {...field} autoComplete="off" />
                    </FormControl>
                    <FormDescription>
                      Please enter your password
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={pending}>
                {pending ? <Spinner message="Signing up..." /> : "Sign up"}
              </Button>
              <p className="text-center text-sm">
                Don't have an account?{" "}
                <Link
                  href={"/register"}
                  className="underline underline-offset-4"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
