import { CodeBlock, dracula } from "react-code-blocks";

const text = `import { useState, useEffect, ChangeEvent } from "react";

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

const text2 = `function ProductPage({ product, addToCart }) {
  // 🔴 Avoid: Event-specific logic inside an Effect
  useEffect(() => {
    if (product.isInCart) {
      showNotification(\`Added \${product.name} to the shopping cart!\`);
    }
  }, [product]);

  function handleBuyClick() {
    addToCart(product);
  }

  function handleCheckoutClick() {
    addToCart(product);
    navigateTo('/checkout');
  }
  // ...
}`;

export const UglyExample = () => {
  return (
    <>
      <p>Ugly example</p>
      <p>You don’t need Effects to transform data for rendering</p>
      <CodeBlock
        text={text}
        language={"jsx"}
        showLineNumbers={false}
        theme={dracula}
      />
      <p>You don’t need Effects to handle user events</p>
      <CodeBlock
        text={text2}
        language={"jsx"}
        showLineNumbers={false}
        theme={dracula}
      />
    </>
  );
};
