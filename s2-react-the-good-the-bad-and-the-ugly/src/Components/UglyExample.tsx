import { CodeBlock } from "./CodeBlock";

const theUglyExample = `import { useState, useEffect, ChangeEvent } from "react";

export const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value);
    }

    useEffect(() => {
        setFullName(firstName + ' ' + lastName);
    }, [firstName, lastName]);

    // ...
};`;

export const UglyExample = () => {
  return (
    <CodeBlock
      code={theUglyExample}
      type="Ugly"
      additionalMessage="You don’t need Effects to transform data for rendering"
    />
  );
};
