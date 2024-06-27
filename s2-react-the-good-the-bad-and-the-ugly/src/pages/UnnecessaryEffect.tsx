import { CodeBlock } from "../Components/CodeBlock";

const theUglyExample = `function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [visibleTodos, setVisibleTodos] = useState([]);
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [todos, filter]);

  // ...
}`;

const theGoodExample = `function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');
  // ✅ This is fine if getFilteredTodos() is not slow.
  const visibleTodos = getFilteredTodos(todos, filter);
  // ...
}`;

const theBetterExample = `import { useMemo, useState } from 'react';
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');
  const visibleTodos = useMemo(() => {
    // ✅ Does not re-run unless todos or filter change
    return getFilteredTodos(todos, filter);
  }, [todos, filter]);
  // ...
}`;

export const UnnecessaryEffect = () => {
  return (
    <>
      <CodeBlock
        code={theUglyExample}
        type="Ugly"
        additionalMessage="You don’t need Effects to transform data for rendering"
      />
      <CodeBlock
        code={theGoodExample}
        type="Good"
        additionalMessage="visibleTodos doesn't need to be a state"
      />
      <CodeBlock
        code={theBetterExample}
        type="Better"
        additionalMessage="⚠️Only use useMemo when you have performace problems"
      />
    </>
  );
};
