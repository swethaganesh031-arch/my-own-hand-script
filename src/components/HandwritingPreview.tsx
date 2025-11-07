import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import { toast } from "sonner";

interface HandwritingPreviewProps {
  text: string;
  fontStyle: string;
  inkColor: string;
  paperStyle: string;
  fontSize: number;
  lineSpacing: number;
  subject?: string;
  topic?: string;
}

export const HandwritingPreview = ({
  text,
  fontStyle,
  inkColor,
  paperStyle,
  fontSize,
  lineSpacing,
  subject,
  topic,
}: HandwritingPreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!previewRef.current || !text) {
      toast.error("Please write something first!");
      return;
    }

    try {
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: null,
        scale: 2,
      });

      const link = document.createElement("a");
      link.download = `handwritten-assignment-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();

      toast.success("Downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download. Please try again.");
    }
  };

  const getPaperClass = () => {
    switch (paperStyle) {
      case "ruled":
        return "bg-paper bg-[linear-gradient(transparent_calc(1.5rem_-_1px),hsl(var(--paper-ruled))_calc(1.5rem_-_1px),hsl(var(--paper-ruled))_1.5rem,transparent_1.5rem)] bg-[length:100%_1.5rem]";
      case "grid":
        return "bg-paper bg-[linear-gradient(hsl(var(--paper-ruled))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--paper-ruled))_1px,transparent_1px)] bg-[length:1.5rem_1.5rem]";
      default:
        return "bg-paper";
    }
  };

  const getInkColorClass = () => {
    switch (inkColor) {
      case "blue":
        return "text-ink-blue";
      case "black":
        return "text-ink-black";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Preview</h2>
        <Button
          onClick={handleDownload}
          disabled={!text}
          variant="default"
          size="sm"
          className="gap-2"
        >
          <Download className="h-4 w-4" />
          Download
        </Button>
      </div>

      <div
        ref={previewRef}
        className={`min-h-[400px] p-8 rounded-lg shadow-lg border border-border overflow-auto ${getPaperClass()}`}
      >
        {(subject || topic) && (
          <div className={`mb-6 pb-4 border-b ${getInkColorClass()} border-current/20`}>
            {subject && (
              <div className={`${fontStyle} ${getInkColorClass()} text-lg mb-1`}>
                <span className="font-semibold">Subject: </span>{subject}
              </div>
            )}
            {topic && (
              <div className={`${fontStyle} ${getInkColorClass()} text-lg`}>
                <span className="font-semibold">Topic: </span>{topic}
              </div>
            )}
          </div>
        )}
        <div
          className={`${fontStyle} ${getInkColorClass()} whitespace-pre-wrap`}
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: `${lineSpacing}`,
          }}
        >
          {text || (
            <span className="text-muted-foreground italic">
              Your handwritten text will appear here...
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
