import { CodeBlock } from "./CodeBlock";

const text = `import { useState, ChangeEvent } from "react";

export const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const fullName = firstName + " " + lastName;

    function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value);
    }
  // ...
};`;

export const GoodExample = () => {
  return (
    <CodeBlock
      code={text}
      type="Good"
      additionalMessage="fullName doesn't need to be a state"
    />
  );
};
