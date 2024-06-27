import { CodeBlock } from "../Components/CodeBlock";

const theUglyExample = `function ProductPage({ product, addToCart }) {
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

const theGoodExample = `function ProductPage({ product, addToCart }) {
  // ✅ Good: Event-specific logic is called from event handlers
  function buyProduct() {
    addToCart(product);
    showNotification(\`Added \${product.name} to the shopping cart!\`);
  }

  function handleBuyClick() {
    buyProduct();
  }

  function handleCheckoutClick() {
    buyProduct();
    navigateTo('/checkout');
  }
  // ...
}`;

export const UnnecessaryEffectTwo = () => {
  return (
    <>
      <CodeBlock
        code={theUglyExample}
        type="Ugly"
        additionalMessage="You don’t need Effects to handle user events"
      />
      <CodeBlock code={theGoodExample} type="Good" />
    </>
  );
};
