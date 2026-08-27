import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({ code, language = html, filename, showLineNumbers }: CodeBlockProps) {
    return (
        <pre>
            <code>
                {/* {children} */}
            </code>
        </pre>
    )
}