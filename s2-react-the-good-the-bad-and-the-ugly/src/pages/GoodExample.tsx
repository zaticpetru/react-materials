import { CodeBlock, dracula } from "react-code-blocks";

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

    return (
        <form>
        <h2>Let’s check you in</h2>
        <label>
            First name:
            <input value={firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
            Last name:
            <input value={lastName} onChange={handleLastNameChange} />
        </label>
        <p>
            Your ticket will be issued to: <b>{fullName}</b>
        </p>
        </form>
    );
};`;

export const GoodExample = () => {
  return (
    <>
      <p>Good Example</p>
      <p>fullName doesn&apos;t need to be a state </p>
      <CodeBlock
        text={text}
        language={"jsx"}
        showLineNumbers={false}
        theme={dracula}
      />
    </>
  );
};
