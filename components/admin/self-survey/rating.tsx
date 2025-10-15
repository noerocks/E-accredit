import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CircleSlash, Puzzle, RotateCcw, Zap } from "lucide-react";
import { useRef, useState } from "react";
import { fa } from "zod/v4/locales";
const Rating = () => {
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
  const [adequacy, setAdequacy] = useState<string>("");
  const [effectiveness, setEffectivesness] = useState<string>("");
  const [NA, setNA] = useState<boolean>(false);
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
  const adequacyOnChange = (value: string) => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setNA(false);
    setAdequacy(value);
  };
  const effectivenessOnChange = (value: string) => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setNA(false);
    setEffectivesness(value);
  };
  const toggleNA = (checked: boolean) => {
    if (checked) {
      reset();
    }
    setNA(checked);
  };
  return (
    <div className="flex flex-col gap-3 mb-3">
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
                <RadioGroupItem value={rating.numeric.toString()} />
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
            value={effectiveness.toString()}
            onValueChange={effectivenessOnChange}
          >
            {effectivenessList.map((rating) => (
              <div
                className="flex items-center justify-between gap-5"
                key={rating.numeric}
              >
                <RadioGroupItem value={rating.numeric.toString()} />
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
      <Card className="bg-background">
        <CardContent className="flex flex-col gap-5">
          <CardTitle className="text-sm">Final Rating</CardTitle>
          <div className="flex items-center gap-2">
            <Checkbox checked={NA} onCheckedChange={toggleNA} />
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
      <Button>Submit Rating</Button>
      <div ref={bottomRef} />
    </div>
  );
};

export default Rating;
