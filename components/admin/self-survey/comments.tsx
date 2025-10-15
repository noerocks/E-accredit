import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SessionPayload } from "@/lib/definitions";
import { CommentDTO } from "@/lib/dto/comment";
import clsx from "clsx";
import { formatDistanceToNow } from "date-fns";
import { MessageSquareX, Send } from "lucide-react";
import { useRef } from "react";

const Comments = ({
  comments,
  user,
}: {
  comments: CommentDTO[];
  user: SessionPayload;
}) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
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
        <Input />
        <Button size="icon">
          <Send />
        </Button>
      </div>
    </div>
  );
};

export default Comments;
