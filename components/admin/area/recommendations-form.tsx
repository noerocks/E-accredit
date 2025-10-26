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
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const RecommendationsForm = ({
  user,
  recommendedFolderId,
  strongFolderId,
  weakFolderId,
  defaultContent,
}: {
  user: SessionPayload;
  recommendedFolderId?: string | undefined;
  strongFolderId?: string | undefined;
  weakFolderId?: string | undefined;
  defaultContent: string | undefined;
}) => {
  const { setOpen } = useSidebar();
  useEffect(() => {
    setOpen(true);
  });
  const form = useForm<z.infer<typeof RecommendationsFormSchema>>({
    resolver: zodResolver(RecommendationsFormSchema),
    defaultValues: {
      content: defaultContent,
    },
  });
  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);
  const params = useParams();
  const pathName = usePathname();
  const root = pathName
    .split("/")
    .filter((segment) => segment)
    .at(1);
  let commentType: CommentType;
  switch (root) {
    case "self-survey": {
      commentType = CommentType.SELF_SURVEY;
      break;
    }
    case "actual-survey": {
      commentType = CommentType.ACTUAL_SURVEY;
      break;
    }
  }
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [pending, startTransition] = useTransition();
  const onSubmit = (data: z.infer<typeof RecommendationsFormSchema>) => {
    startTransition(async () => {
      const result = await createNewComment({
        authorId: user.id,
        content: data.content,
        type: commentType,
        recommendedFolderId,
        strongFolderId,
        weakFolderId,
      });
      if (result?.failure) toast.error(result.failure.error);
      if (result.success) toast.success(result.success.message);
    });
  };
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
              <FormLabel>
                {recommendedFolderId
                  ? "Recommendations"
                  : strongFolderId
                  ? "Strengths"
                  : "Weaknesses"}
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="h-30 focus:ring-0 focus-visible:ring-0"
                  ref={textAreaRef}
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
