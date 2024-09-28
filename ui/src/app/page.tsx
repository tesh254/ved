import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { ArrowUp } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col place-items-center justify-center gap-y-4">
      <Logo size={96} />
      <div className="flex">
        <div className="w-[736px] h-auto relative border focus-within:border-alpha-600 border-alpha-400 bg-background relative rounded-xl border transition-colors p-[4px]">
          <Textarea
            placeholder="Ask ved_ a question..."
            className="min-h-[42px] overflow-auto border-0 w-full flex-1 bg-transparent p-3 pb-1.5 text-sm outline-none ring-0 placeholder-gray-500 resize-none h-auto"
          />
          <div className="w-full h-[42px] flex justify-end py-[12px] px-[4px] place-items-center">
            <Button className="" size="icon">
              <ArrowUp />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
