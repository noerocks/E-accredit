import { Loader } from "lucide-react";

interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
  message: string;
}

export default function Spinner({
  size = 24,
  className = "",
  message,
}: SpinnerProps) {
  return (
    <div className="flex items-center space-x-2">
      <Loader
        className={`animate-spin  ${className}`}
        width={size}
        height={size}
      />
      <p>{message}</p>
    </div>
  );
}
