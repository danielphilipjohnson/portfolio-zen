import { cn } from "@/lib/utils";
import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  children: string;
  className?: string;
  language?: string;
}

export const CodeBlock = ({ children, className, language = "javascript" }: CodeBlockProps) => {
  return (
    <Highlight
      theme={themes.vsDark}
      code={children.trim()}
      language={language}
    >
      {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
        <pre 
          className={cn(
            "p-4 rounded-lg overflow-x-auto font-mono text-sm",
            highlightClassName,
            className
          )}
          style={style}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span className="mr-4 select-none opacity-30">{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}; 