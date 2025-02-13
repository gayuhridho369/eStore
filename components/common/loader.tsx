import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="w-full flex items-center justify-center">
      <Loader2 className="size-20 animate-spin" />
    </div>
  );
}
