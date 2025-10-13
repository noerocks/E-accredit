"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { createNewComment } from "@/lib/action/comment";
import { SessionPayload } from "@/lib/definitions";
import { CommentDTO } from "@/lib/dto/comment";
import { Comment, CommentType } from "@/lib/generated/prisma";
import clsx from "clsx";
import { Loader, MessageSquareMore, MessageSquareX, Send } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";

const Comments = ({
  user,
  type,
  evidenceFileId,
  areaFileId,
  comments,
}: {
  user: SessionPayload;
  type: CommentType;
  evidenceFileId?: string;
  areaFileId?: string;
  comments: CommentDTO[];
}) => {
  const [message, setMessage] = useState<string>("");
  const [pending, startTransition] = useTransition();
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (message.length === 0) return;
    setMessage("");
    startTransition(async () => {
      const result = await createNewComment({
        authorId: user.id,
        content: message,
        type,
        evidenceFileId,
        areaFileId,
      });
      if (result.failure) {
        toast.error(result.failure.error);
      }
    });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMessage(value);
  };
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);
  return (
    <Sheet
      onOpenChange={(open) => {
        if (open) {
          setTimeout(() => {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 0);
        }
      }}
    >
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MessageSquareMore />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Comments</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 min-h-0 px-4">
          {comments.length > 0 ? (
            <div className="flex flex-col gap-5">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className={clsx("flex", {
                    "justify-end": comment.authorId === user.id,
                  })}
                >
                  <div className="flex max-w-3/4 gap-2">
                    <Avatar
                      className={clsx({
                        "order-2 self-end": comment.authorId === user.id,
                      })}
                    >
                      <AvatarFallback>
                        {comment.authorId === user.id
                          ? `${user.name
                              .split(" ")
                              .map((name) => name[0].toUpperCase())
                              .join("")
                              .slice(0, 2)}`
                          : `${comment.author.firstName
                              .concat(` ${comment.author.lastName}`)
                              .split(" ")
                              .map((name) => name[0].toUpperCase())
                              .join("")
                              .slice(0, 2)}`}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-muted-foreground">{`${comment.author.email}`}</p>
                      <div className="border p-2 rounded-lg break-all whitespace-pre-wrap max-w-full">
                        <p className="text-sm break-all">{comment.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(comment.createdAt, {
                          addSuffix: true,
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          ) : (
            <div className="flex flex-col items-center text-muted-foreground gap-2">
              <MessageSquareX />
              <p className="text-sm">No Comments.</p>
            </div>
          )}
        </ScrollArea>
        <SheetFooter className="border-t">
          <div className="flex items-center gap-2 w-full">
            <Input
              className="focus-visible:ring-0 ring-offset-0"
              value={message}
              onChange={onChange}
            />
            <Button onClick={onClick}>
              {pending ? <Loader className="animate-spin" /> : <Send />}
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Comments;
