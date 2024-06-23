import { CodeBlock } from "./CodeBlock";

const theBadExample = `import { useState, ChangeEvent } from "react";
export const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
        setFullName(e.target.value + " " + lastName);
    };

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
        setFullName(firstName + " " + e.target.value);
    };
    // ...
};`;

export const BadExample = () => {
  return (
    <CodeBlock
      type="Bad"
      code={theBadExample}
      additionalMessage="Avoid redundant state"
    />
  );
};
