import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SurveyVisitWithSafeLevel } from "@/lib/dto/accreditation";
import { Program } from "@/lib/generated/prisma";
import { formatAccreditationName } from "@/lib/utils";
import clsx from "clsx";
import {
  Calendar,
  CheckCircle,
  CircleDot,
  CircleSlash,
  FolderOpen,
  Loader,
  ScanEye,
  XCircle,
} from "lucide-react";
import Link from "next/link";

const PortfolioCards = ({
  program,
  surveyVisits,
}: {
  program: Program;
  surveyVisits: SurveyVisitWithSafeLevel[];
}) => {
  return (
    <div className="flex flex-wrap gap-5">
      {surveyVisits.map((visit) => {
        const phase =
          visit.level.phase === "PHASE_1"
            ? "accreditation"
            : visit.level.phase === "PHASE_2"
              ? "phase-two"
              : "";
        return (
          <Card
            key={visit.id}
            className={clsx("basis-[calc(33.33%-1rem)]", {
              "border-blue-500 bg-blue-500/5":
                visit.openForActualSurvey || visit.openForSelfSurvey,
            })}
          >
            <CardHeader>
              <CardTitle className="text-xl flex flex-col gap-2">
                {visit.openForActualSurvey && (
                  <p className="flex items-center gap-2 justify-end text-xs text-blue-500">
                    Actual Survey Ongoing
                    <ScanEye size={20} />
                  </p>
                )}
                {visit.openForSelfSurvey && (
                  <p className="flex items-center gap-2 justify-end text-xs text-blue-500">
                    Self Survey Ongoing
                    <ScanEye size={20} />
                  </p>
                )}
                {formatAccreditationName(program.code, visit.level)}
              </CardTitle>
              <CardDescription>{program.name}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 mb-2">
                <p>Self Survey</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <CircleDot size={15} />
                    Status
                  </p>
                  <p
                    className={clsx(
                      "flex items-center gap-1 text-sm px-2 py-1 border rounded-full",
                      {
                        "text-green-500 bg-green-500/5":
                          visit.selfSurveyStatus === "COMPLETE",
                      }
                    )}
                  >
                    {visit.selfSurveyStatus === "COMPLETE" ? (
                      <>
                        <CheckCircle size={12} />
                        Complete
                      </>
                    ) : (
                      <>
                        <Loader size={12} />
                        Pending
                      </>
                    )}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar size={15} />
                    Start Date
                  </p>
                  <p className="text-sm">
                    {new Date(visit.selfSurveyStartedAt!).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      }
                    )}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar size={15} />
                    End Date
                  </p>
                  <p className="text-sm">
                    {new Date(visit.selfSurveyEndedAt!).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      }
                    )}
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex flex-col gap-1">
                <p>Actual Survey</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <CircleDot size={15} />
                    Status
                  </p>
                  <p
                    className={clsx(
                      "flex items-center gap-1 text-sm px-2 py-1 border rounded-full",
                      {
                        "text-green-500 bg-green-500/5":
                          visit.surveyResultStatus === "GRANTED",
                        "text-red-500 bg-red-500/5":
                          visit.surveyResultStatus === "NOT_GRANTED",
                        "text-yellow-500 bg-yellow-500/5":
                          visit.surveyResultStatus === "DEFERRED",
                      }
                    )}
                  >
                    {visit.surveyResultStatus === "GRANTED" ? (
                      <>
                        <CheckCircle size={12} />
                        Granted
                      </>
                    ) : visit.surveyResultStatus === "PENDING" ? (
                      <>
                        <Loader size={12} />
                        Pending
                      </>
                    ) : visit.surveyResultStatus === "DEFERRED" ? (
                      <>
                        <CircleSlash size={12} />
                        Deferred
                      </>
                    ) : (
                      <>
                        <XCircle size={12} />
                        Not Granted
                      </>
                    )}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar size={15} />
                    Start Date
                  </p>
                  <p className="text-sm">
                    {visit.actualSurveyStartedAt
                      ? new Date(
                          visit.actualSurveyStartedAt!
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                      : "--"}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar size={15} />
                    End Date
                  </p>
                  <p className="text-sm">
                    {visit.actualSurveyEndedAt
                      ? new Date(visit.actualSurveyEndedAt!).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          }
                        )
                      : "--"}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Link
                href={`/admin/${phase}/${
                  visit.id
                }?${phase}=${formatAccreditationName(program.code, visit.level)
                  .split(" ")
                  .join("+")}`}
              >
                <Button variant="outline">
                  <FolderOpen />
                  Open
                </Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default PortfolioCards;
