import { CodeBlock, dracula } from "react-code-blocks";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../utils";

const text = `import { useState, ChangeEvent } from "react";

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

export const BadExample = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === BASE_URL ? null : (
        <>
          <p> Bad example </p>
          <p> Avoid redundant state </p>
        </>
      )}
      <CodeBlock
        text={text}
        language={"jsx"}
        showLineNumbers={false}
        theme={dracula}
      />
    </>
  );
};
