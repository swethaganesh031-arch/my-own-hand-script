import { useState } from "react";
import { TextEditor } from "@/components/TextEditor";
import { HandwritingPreview } from "@/components/HandwritingPreview";
import { CustomizationPanel } from "@/components/CustomizationPanel";
import { PenTool } from "lucide-react";

const Index = () => {
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [fontStyle, setFontStyle] = useState("font-handwriting");
  const [inkColor, setInkColor] = useState("blue");
  const [paperStyle, setPaperStyle] = useState("ruled");
  const [fontSize, setFontSize] = useState(20);
  const [lineSpacing, setLineSpacing] = useState(1.8);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <PenTool className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Handwriting Converter</h1>
              <p className="text-sm text-muted-foreground">Transform your typed assignments into handwritten style</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TextEditor 
              value={text} 
              onChange={setText}
              subject={subject}
              onSubjectChange={setSubject}
              topic={topic}
              onTopicChange={setTopic}
            />
            <HandwritingPreview
              text={text}
              fontStyle={fontStyle}
              inkColor={inkColor}
              paperStyle={paperStyle}
              fontSize={fontSize}
              lineSpacing={lineSpacing}
              subject={subject}
              topic={topic}
            />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CustomizationPanel
                fontStyle={fontStyle}
                onFontStyleChange={setFontStyle}
                inkColor={inkColor}
                onInkColorChange={setInkColor}
                paperStyle={paperStyle}
                onPaperStyleChange={setPaperStyle}
                fontSize={fontSize}
                onFontSizeChange={setFontSize}
                lineSpacing={lineSpacing}
                onLineSpacingChange={setLineSpacing}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
