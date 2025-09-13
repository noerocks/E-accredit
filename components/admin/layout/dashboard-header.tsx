"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { ModeToggle } from "../../mode-toggle";
import { SidebarTrigger } from "../../ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../../ui/breadcrumb";
import { Fragment } from "react";
import Link from "next/link";

const DashboardHeader = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const instrumentName = searchParams.get("instrumentName");
  console.log(instrumentName);
  const breadcrumbs = pathName
    .split("/")
    .filter((segment) => segment)
    .reduce((withPaths, segment, index) => {
      const isInstrumentId =
        withPaths.some((p) => p.name === "Instruments") &&
        withPaths.length === index;

      withPaths.push({
        path: `${withPaths[index - 1]?.path || ""}/${segment}`,
        name:
          isInstrumentId && instrumentName
            ? instrumentName
            : segment[0].toUpperCase() + segment.slice(1),
      });
      return withPaths;
    }, [] as { path: string; name: string }[]);
  return (
    <header className="h-16 flex items-center justify-between gap-4 p-5 border-b bg-muted">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <Fragment key={breadcrumb.path}>
                {index !== breadcrumbs.length - 1 ? (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href={breadcrumb.path}>{breadcrumb.name}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbPage>{breadcrumb.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                )}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ModeToggle />
    </header>
  );
};

export default DashboardHeader;
