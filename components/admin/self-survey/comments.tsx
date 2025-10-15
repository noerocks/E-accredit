"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createNewComment } from "@/lib/action/comment";
import { SessionPayload } from "@/lib/definitions";
import { CommentDTO } from "@/lib/dto/comment";
import { CommentType } from "@/lib/generated/prisma";
import clsx from "clsx";
import { formatDistanceToNow } from "date-fns";
import { Loader, MessageSquareX, Send } from "lucide-react";
import { useParams } from "next/navigation";
import { useRef, useState, useTransition } from "react";
import { toast } from "sonner";

const Comments = ({
  comments,
  user,
}: {
  comments: CommentDTO[];
  user: SessionPayload;
}) => {
  const params = useParams();
  const [message, setMessage] = useState<string>("");
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMessage(value);
  };
  const [pending, startTransition] = useTransition();
  const send = async (e: React.MouseEvent<HTMLButtonElement>) => {
    startTransition(async () => {
      const result = await createNewComment({
        authorId: user.id,
        content: message,
        type: CommentType.SELF_SURVEY,
        evidenceFileId: String(params.evidenceId),
      });
      if (result.failure) toast.error(result.failure.error);
    });
    setMessage("");
  };
  return (
    <div className="h-full flex flex-col">
      <ScrollArea className="flex-1 min-h-0 pt-5">
        {comments && comments.length > 0 ? (
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
      <div className="flex items-center gap-2 p-2">
        <Input value={message} onChange={onChange} />
        <Button size="icon" onClick={send}>
          {pending ? <Loader className="animate-spin" /> : <Send />}
        </Button>
      </div>
    </div>
  );
};

export default Comments;
