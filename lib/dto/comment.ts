import { Comment, User } from "../generated/prisma";

export type CommentDTO = Comment & { author: User };
