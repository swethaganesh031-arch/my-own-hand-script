import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface CustomizationPanelProps {
  fontStyle: string;
  onFontStyleChange: (value: string) => void;
  inkColor: string;
  onInkColorChange: (value: string) => void;
  paperStyle: string;
  onPaperStyleChange: (value: string) => void;
  fontSize: number;
  onFontSizeChange: (value: number) => void;
  lineSpacing: number;
  onLineSpacingChange: (value: number) => void;
}

export const CustomizationPanel = ({
  fontStyle,
  onFontStyleChange,
  inkColor,
  onInkColorChange,
  paperStyle,
  onPaperStyleChange,
  fontSize,
  onFontSizeChange,
  lineSpacing,
  onLineSpacingChange,
}: CustomizationPanelProps) => {
  return (
    <div className="space-y-6 p-6 bg-card rounded-lg border border-border">
      <h2 className="text-lg font-semibold text-foreground">Customize Style</h2>

      <div className="space-y-3">
        <Label htmlFor="font-style">Handwriting Style</Label>
        <Select value={fontStyle} onValueChange={onFontStyleChange}>
          <SelectTrigger id="font-style">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="font-handwriting">Classic Script</SelectItem>
            <SelectItem value="font-handwriting2">Elegant Cursive</SelectItem>
            <SelectItem value="font-handwriting3">Casual Hand</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label htmlFor="ink-color">Ink Color</Label>
        <Select value={inkColor} onValueChange={onInkColorChange}>
          <SelectTrigger id="ink-color">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="blue">Blue Ink</SelectItem>
            <SelectItem value="black">Black Ink</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label htmlFor="paper-style">Paper Style</Label>
        <Select value={paperStyle} onValueChange={onPaperStyleChange}>
          <SelectTrigger id="paper-style">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="blank">Blank Paper</SelectItem>
            <SelectItem value="ruled">Ruled Lines</SelectItem>
            <SelectItem value="grid">Grid Paper</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label htmlFor="font-size">
          Text Size: {fontSize}px
        </Label>
        <Slider
          id="font-size"
          min={16}
          max={32}
          step={1}
          value={[fontSize]}
          onValueChange={(value) => onFontSizeChange(value[0])}
          className="cursor-pointer"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="line-spacing">
          Line Spacing: {lineSpacing.toFixed(1)}
        </Label>
        <Slider
          id="line-spacing"
          min={1.2}
          max={2.5}
          step={0.1}
          value={[lineSpacing]}
          onValueChange={(value) => onLineSpacingChange(value[0])}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};
