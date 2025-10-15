"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquareMore, Star } from "lucide-react";
import { useState } from "react";
import Rating from "./rating";
import { CommentDTO } from "@/lib/dto/comment";
import Comments from "./comments";
import { SessionPayload } from "@/lib/definitions";
import { RatingDTO } from "@/lib/dto/survey-visit";

const AccreditorSidebar = ({
  comments,
  user,
  rating,
}: {
  comments: CommentDTO[];
  user: SessionPayload;
  rating: RatingDTO | null;
}) => {
  console.log(comments);
  const [tab, setTab] = useState<string>("rating");
  return (
    <Sidebar
      className="w-[350px] bg-background border-l flex flex-col"
      collapsible="none"
    >
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuButton className="hover:bg-transparent">
            Evaluation
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex-1">
        <SidebarGroup className="h-full flex flex-col">
          <Tabs
            defaultValue={tab}
            onValueChange={setTab}
            className="h-full flex flex-col"
          >
            <TabsList className="bg-background border">
              <TabsTrigger value="rating">
                <Star />
                Rating
              </TabsTrigger>
              <TabsTrigger value="comments">
                <MessageSquareMore />
                Comments
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="rating"
              className="flex-1 min-h-0 overflow-hidden"
            >
              <Rating user={user} rating={rating} />
            </TabsContent>
            <TabsContent
              value="comments"
              className="flex-1 min-h-0 overflow-hidden"
            >
              <Comments comments={comments} user={user} />
            </TabsContent>
          </Tabs>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AccreditorSidebar;
