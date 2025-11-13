"use client";

import Image from "next/image";
import { FolderKanban, GitBranch, MessageSquare, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const features = [
  {
    title: "Portfolio File Management",
    description:
      "Organize, upload, and manage accreditation documents with an intuitive file management interface designed for program chairs and committees.",
    icon: FolderKanban,
    image: "/file-management.png",
    lightImage: "/file-management-white.png",
  },
  {
    title: "Version Control",
    description:
      "Track document revisions and maintain a transparent history of updates for every accreditation requirement and folder.",
    icon: GitBranch,
    image: "/file-versions.png",
    lightImage: "/file-versions-white.png",
  },
  {
    title: "Built-in Rating System",
    description:
      "Evaluate program performance through built-in rating tools that generate real-time insights for accreditation assessments.",
    icon: Star,
    image: "/rating-system.png",
    lightImage: "/rating-system-white.png",
  },
  {
    title: "Integrated Chatting System",
    description:
      "Collaborate effortlessly with peers and accreditors using a built-in chat platform that supports group and one-on-one messaging.",
    icon: MessageSquare,
    image: "/chat-system.png",
    lightImage: "/chat-system-light.png",
  },
];

const Features = () => {
  const { theme } = useTheme();
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-3">
            System Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the powerful modules built to streamline CTU Naga’s
            accreditation workflow from documentation to collaboration.
          </p>
        </div>

        <div className="grid gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon size={28} className="text-blue-500" />
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="flex-1 relative h-64 w-full md:h-72 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={theme === "light" ? feature.lightImage : feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
