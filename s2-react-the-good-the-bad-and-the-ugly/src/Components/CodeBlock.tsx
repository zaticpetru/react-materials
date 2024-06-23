import { CodeBlock as JSXCodeBlock, dracula } from "react-code-blocks";

type CodeBlockProps = {
  type: "Bad" | "Good" | "Ugly" | "Better";
  code: string;
  additionalMessage?: string;
};

export const CodeBlock = ({
  type,
  code,
  additionalMessage,
}: CodeBlockProps) => {
  return (
    <>
      <strong>The {type}</strong>
      {additionalMessage ? <p> {additionalMessage} </p> : null}
      <JSXCodeBlock
        text={code}
        language={"jsx"}
        showLineNumbers={false}
        theme={dracula}
      />
    </>
  );
};
