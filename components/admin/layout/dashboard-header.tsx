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
  let resource = searchParams.toString()?.split("=")[0];
  resource = resource[0]?.toUpperCase() + resource?.slice(1).toLowerCase();
  const name = searchParams.toString()?.split("=")[1]?.split("+").join(" ");
  const breadcrumbs = pathName
    .split("/")
    .filter((segment) => segment)
    .map((segment) => (segment === "admin" ? "dashboard" : segment)) //katangahan moments
    .reduce((withPaths, segment, index) => {
      if (name && withPaths.at(-1)?.name === name) return withPaths;
      const isResourceId =
        withPaths.some((p) => p.name === resource) &&
        withPaths.length === index;
      withPaths.push({
        path: `${withPaths[index - 1]?.path || ""}/${segment}`,
        name:
          isResourceId && name
            ? name
            : segment[0].toUpperCase() + segment.slice(1),
      });
      return withPaths;
    }, [] as { path: string; name: string }[]);
  return (
    <header className="h-16 flex items-center justify-between gap-4 p-5 border-b">
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
