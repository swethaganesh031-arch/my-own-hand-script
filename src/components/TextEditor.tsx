import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  subject: string;
  onSubjectChange: (value: string) => void;
  topic: string;
  onTopicChange: (value: string) => void;
}

export const TextEditor = ({ value, onChange, subject, onSubjectChange, topic, onTopicChange }: TextEditorProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium text-foreground">
            Subject
          </Label>
          <Input
            id="subject"
            value={subject}
            onChange={(e) => onSubjectChange(e.target.value)}
            placeholder="e.g., Mathematics"
            className="bg-card border-border"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="topic" className="text-sm font-medium text-foreground">
            Topic
          </Label>
          <Input
            id="topic"
            value={topic}
            onChange={(e) => onTopicChange(e.target.value)}
            placeholder="e.g., Calculus"
            className="bg-card border-border"
          />
        </div>
      </div>
      
      <div className="space-y-2">
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
    </div>
  );
};
