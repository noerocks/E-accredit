import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { giveRating } from "@/lib/action/rating";
import { SessionPayload } from "@/lib/definitions";
import { RatingDTO } from "@/lib/dto/survey-visit";
import { SurveyTeamType } from "@/lib/generated/prisma";
import { CircleSlash, Loader, Puzzle, RotateCcw, Zap } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
const Rating = ({
  user,
  rating,
  authorized,
}: {
  user: SessionPayload;
  rating: RatingDTO | null;
  authorized: boolean;
}) => {
  const adequacyList = [
    { numeric: 5, descriptive: "Very adequate" },
    { numeric: 4, descriptive: "More than adequate" },
    { numeric: 3, descriptive: "Adequate" },
    { numeric: 2, descriptive: "Moderately adequate" },
    { numeric: 1, descriptive: "Not adequate" },
    { numeric: 0, descriptive: "Missing" },
  ];
  const effectivenessList = [
    { numeric: 5, descriptive: "Functioning and excellently effective" },
    { numeric: 4, descriptive: "Functioning and very effective" },
    { numeric: 3, descriptive: "Functioning and effective" },
    { numeric: 2, descriptive: "Functioning but not effective" },
    { numeric: 1, descriptive: "Functioning poorly" },
    { numeric: 0, descriptive: "Not functioning" },
  ];
  const { evidenceId } = useParams();
  const [adequacy, setAdequacy] = useState<string>(
    rating && rating.adequacy !== null ? rating.adequacy?.toString() : ""
  );
  const [effectiveness, setEffectivesness] = useState<string>(
    rating && rating.effectiveness !== null
      ? rating.effectiveness?.toString()
      : ""
  );
  const [NA, setNA] = useState<boolean>(
    rating && rating.NA ? rating.NA : false
  );
  let rate;
  let message = "";
  if (adequacy && effectiveness) {
    rate = (Number(adequacy) + Number(effectiveness)) / 2;
    message = "AE Rating";
  } else if (!adequacy && effectiveness) {
    rate = Number(effectiveness);
    message = "E Rating";
  } else if (adequacy && !effectiveness) {
    rate = Number(adequacy);
    message = "A Rating";
  }
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const reset = () => {
    setAdequacy("");
    setEffectivesness("");
  };
  useEffect(() => {
    if (!adequacy && !effectiveness && !NA) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [adequacy, effectiveness, NA]);
  const adequacyOnChange = (value: string) => {
    setNA(false);
    setAdequacy(value);
  };
  const effectivenessOnChange = (value: string) => {
    setNA(false);
    setEffectivesness(value);
  };
  const toggleNA = (checked: boolean) => {
    if (checked) {
      reset();
    }
    setNA(checked);
  };
  const [pending, startTransition] = useTransition();
  const submit = async () => {
    if (!adequacy && !effectiveness && !NA) {
      toast.error("Please choose your rating");
      return;
    }
    if (NA) {
      startTransition(async () => {
        const result = await giveRating({
          evidenceFileId: String(evidenceId),
          type: SurveyTeamType.INTERNAL,
          accreditorId: user.id,
          NA,
        });
        if (result?.failure) toast.error(result.failure.error);
        if (result.success) toast.success(result.success.message);
        return;
      });
    }
    const code = message.split(" ")[0];
    const parsedAdequacy = Number(adequacy);
    const parsedEffectiveness = Number(effectiveness);
    switch (code) {
      case "AE": {
        startTransition(async () => {
          const finalRate = (parsedAdequacy + parsedEffectiveness) / 2;
          const result = await giveRating({
            evidenceFileId: String(evidenceId),
            type: SurveyTeamType.INTERNAL,
            accreditorId: user.id,
            adequacy: parsedAdequacy,
            effectiveness: parsedEffectiveness,
            finalRate,
          });
          if (result?.failure) toast.error(result.failure.error);
          if (result.success) toast.success(result.success.message);
        });
        break;
      }
      case "A": {
        startTransition(async () => {
          const result = await giveRating({
            evidenceFileId: String(evidenceId),
            type: SurveyTeamType.INTERNAL,
            accreditorId: user.id,
            adequacy: parsedAdequacy,
            finalRate: parsedAdequacy,
          });
          if (result?.failure) toast.error(result.failure.error);
          if (result.success) toast.success(result.success.message);
        });
        break;
      }
      case "E": {
        startTransition(async () => {
          const result = await giveRating({
            evidenceFileId: String(evidenceId),
            type: SurveyTeamType.INTERNAL,
            accreditorId: user.id,
            effectiveness: parsedEffectiveness,
            finalRate: parsedEffectiveness,
          });
          if (result?.failure) toast.error(result.failure.error);
          if (result.success) toast.success(result.success.message);
        });
        break;
      }
    }
  };
  return (
    <ScrollArea className="h-full pr-3 pl-2">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Submit your ratings below
          </p>
          <Button
            size="icon"
            variant="outline"
            className="self-end"
            onClick={reset}
          >
            <RotateCcw />
          </Button>
        </div>
        <Card className="bg-background">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Puzzle size={15} />
              Adequacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={adequacy} onValueChange={adequacyOnChange}>
              {adequacyList.map((rating) => (
                <div
                  className="flex items-center justify-between gap-5"
                  key={rating.numeric}
                >
                  <RadioGroupItem
                    value={rating.numeric.toString()}
                    disabled={!authorized}
                  />
                  <div className="flex flex-1 justify-between items-center gap-5">
                    <p>{rating.numeric}</p>
                    <p className="text-[12px] text-muted-foreground flex-1">
                      {rating.descriptive}
                    </p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
        <Card className="bg-background">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Zap size={15} /> Effectiveness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={effectiveness}
              onValueChange={effectivenessOnChange}
            >
              {effectivenessList.map((rating) => (
                <div
                  className="flex items-center justify-between gap-5"
                  key={rating.numeric}
                >
                  <RadioGroupItem
                    value={rating.numeric.toString()}
                    disabled={!authorized}
                  />
                  <div className="flex flex-1 justify-between gap-5 items-center">
                    <p>{rating.numeric}</p>
                    <p className="text-[12px] text-muted-foreground flex-1">
                      {rating.descriptive}
                    </p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
        <Card className="bg-blue-500/5">
          <CardContent className="flex flex-col gap-5">
            <CardTitle className="text-blue-500">Final Rating</CardTitle>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={NA}
                onCheckedChange={toggleNA}
                disabled={!authorized}
              />
              <p className="flex items-center gap-2 text-xs">
                Not Applicable (N/A)
              </p>
            </div>
            {(adequacy || effectiveness) && (
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">{message}</p>
                <p>{rate}</p>
              </div>
            )}
          </CardContent>
        </Card>
        {authorized && (
          <Button onClick={submit}>
            {pending ? (
              <>
                <Loader className="animate-spin" />
                Submitting Rating...
              </>
            ) : (
              "Submit Rating"
            )}
          </Button>
        )}
      </div>
      <div ref={bottomRef} />
    </ScrollArea>
  );
};

export default Rating;
