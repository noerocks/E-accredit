"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquareMore, Send, Star } from "lucide-react";
import { useState } from "react";
import Rating from "./rating";

const AccreditorSidebar = () => {
  const [tab, setTab] = useState<string>("rating");
  return (
    <Sidebar
      className="w-[300px] bg-background h-full border-l"
      collapsible="none"
    >
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuButton className="hover:bg-transparent">
            Evaluation
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="h-full overflow-clip">
          <ScrollArea className="h-full px-3">
            <Tabs defaultValue={tab} onValueChange={setTab}>
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
              <TabsContent value="rating">
                <Rating />
              </TabsContent>
              <TabsContent value="comments">
                <p>Comments</p>
              </TabsContent>
            </Tabs>
          </ScrollArea>
        </SidebarGroup>
      </SidebarContent>
      {tab === "comments" && (
        <SidebarFooter className="border-t">
          <div className="flex flex-row gap-2">
            <Input />
            <Button size="icon">
              <Send />
            </Button>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  );
};

export default AccreditorSidebar;
