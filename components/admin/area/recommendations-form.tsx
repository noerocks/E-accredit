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
import { useSidebar } from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { createNewComment } from "@/lib/action/comment";
import { SessionPayload } from "@/lib/definitions";
import { CommentType } from "@/lib/generated/prisma";
import { RecommendationsFormSchema } from "@/lib/zod-definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useEffect, useRef, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const RecommendationsForm = ({
  user,
  areaFolderId,
  recommendation,
}: {
  user: SessionPayload;
  areaFolderId: string | undefined;
  recommendation: string | undefined;
}) => {
  const { setOpen } = useSidebar();
  useEffect(() => {
    setOpen(true);
  });
  const form = useForm<z.infer<typeof RecommendationsFormSchema>>({
    resolver: zodResolver(RecommendationsFormSchema),
    defaultValues: {
      content: "",
    },
  });
  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [pending, startTransition] = useTransition();
  const onSubmit = (data: z.infer<typeof RecommendationsFormSchema>) => {
    startTransition(async () => {
      const result = await createNewComment({
        authorId: user.id,
        content: data.content,
        type: CommentType.SELF_SURVEY,
        areaFolderId: areaFolderId,
      });
      if (result?.failure) toast.error(result.failure.error);
    });
  };
  console.log(recommendation);
  return (
    <Form {...form}>
      <form
        className={"flex flex-col gap-5"}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recommendations</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="h-30 focus:ring-0 focus-visible:ring-0"
                  ref={textAreaRef}
                  value={recommendation}
                />
              </FormControl>
              <FormDescription>
                Please enter your recommendations for this area if you have any
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="self-end px-5">
          {pending ? (
            <>
              <Loader className="animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default RecommendationsForm;
