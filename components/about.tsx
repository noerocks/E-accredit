import { BarChart3, ClipboardCheck, FileText, Users } from "lucide-react";

export const About = () => {
  const features = [
    {
      title: "Simplified Documentation",
      desc: "Easily upload, organize, and manage accreditation files in one centralized platform.",
      icon: FileText,
    },
    {
      title: "Performance Tracking",
      desc: "Monitor program compliance and progress through real-time dashboards and analytics.",
      icon: BarChart3,
    },
    {
      title: "Survey Visit Management",
      desc: "Coordinate survey visits and evaluations with structured tools for chairs and members.",
      icon: ClipboardCheck,
    },
    {
      title: "Collaborative Workflow",
      desc: "Enhance coordination among faculty, committees, and administrators for accreditation readiness.",
      icon: Users,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 lg:px-32 bg-background text-center"
    >
      <h2 className="text-3xl font-bold text-blue-500 mb-6">
        About E-ACCREDIT
      </h2>
      <p className="max-w-4xl mx-auto text-lg text-muted-foreground mb-12">
        E-ACCREDIT is an innovative accreditation management system developed
        for Cebu Technological University – Naga Extension Campus. It
        streamlines the entire accreditation process — from document preparation
        and evaluation to monitoring and reporting — ensuring accuracy,
        efficiency, and transparency across all departments and programs.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto text-left">
        {features.map((feature, i) => (
          <div
            key={i}
            className="p-6 rounded-xl shadow-md border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <feature.icon className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
