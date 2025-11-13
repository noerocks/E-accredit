"use client";

import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/lib/zod-definitions";
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
import { useTransition, useState, useEffect } from "react";
import { login } from "@/lib/action/authentication";
import { verifyRecaptcha } from "@/lib/action/recaptcha";
import { toast } from "sonner";
import Image from "next/image";

const LoginForm = ({ className, ...props }: React.ComponentProps<"div">) => {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [pending, startTransition] = useTransition();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (document.getElementById("recaptcha-script")) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "recaptcha-script";
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    (window as any).onRecaptchaSuccess = (token: string) => {
      setRecaptchaToken(token);
    };
  }, []);

  const onSubmit = async (data: z.infer<typeof LoginFormSchema>) => {
    startTransition(async () => {
      if (!recaptchaToken) {
        toast.error("Please complete the reCAPTCHA!");
        return;
      }

      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      if (!recaptchaResult.success) {
        toast.error("reCAPTCHA verification failed!");
        if (window.grecaptcha) window.grecaptcha.reset();
        return;
      }

      const result = await login(data);
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
    <div
      className={cn("flex justify-center items-center min-h-screen", className)}
      {...props}
    >
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden">
            <Image src="/ctu-logo.png" height={80} width={80} alt="ctu logo" />
          </div>
          <CardTitle className="text-2xl text-center font-bold mt-2">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Log in to your E-Accredit Account
          </CardDescription>
        </CardHeader>
        <CardContent className="px-10 py-5">
          <Form {...form}>
            <form
              className="flex flex-col gap-5"
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
                        href="/forgot-password"
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
              {scriptLoaded ? (
                <div
                  className="g-recaptcha"
                  data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
                  data-callback="onRecaptchaSuccess"
                ></div>
              ) : (
                <p className="text-sm text-muted-foreground italic text-center">
                  Loading reCAPTCHA...
                </p>
              )}
              <Button disabled={pending}>
                {pending ? <Spinner message="Signing in..." /> : "Sign in"}
              </Button>

              <p className="text-center text-sm">
                Don't have an account?{" "}
                <Link href="/register" className="underline underline-offset-4">
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
