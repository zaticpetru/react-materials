import { useState, ChangeEvent } from "react";
import { Input } from "../Components/Input";

export const Form = () => {
  //when data changes, re-render the UI
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  console.log({ fullName });

  return (
    <form>
      <h2>Let’s check you in</h2>
      <div className="flex-column">
        <Input
          value={firstName}
          onChange={handleFirstNameChange}
          label="First name"
        />
        <Input
          value={lastName}
          onChange={handleLastNameChange}
          label="Last name"
        />
      </div>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </form>
  );
};
