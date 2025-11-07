import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const TextEditor = ({ value, onChange }: TextEditorProps) => {
  return (
    <div className="space-y-3">
      <Label htmlFor="text-input" className="text-lg font-semibold text-foreground">
        Type Your Assignment
      </Label>
      <Textarea
        id="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start typing your assignment here..."
        className="min-h-[400px] resize-none bg-card border-border focus:border-primary transition-colors text-base leading-relaxed"
      />
    </div>
  );
};
