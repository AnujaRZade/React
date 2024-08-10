# Day-2 React

## Arrow functions vs regular functions in event handlers

When a component is re-rendered

- **State Changes:** When `useState` updates the state.
- **Prop Changes:** When the parent component passes new props.
- **Context Changes:** When a value from `useContext` changes.
- **Force Updates:** Explicitly forcing a re-render using methods like `forceUpdate()` (in class components).

**Example** with Arrow Function in JSX

```javascript
function MyComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>{count}</p>
    </div>
  );
}
```

**Explanation:**
The arrow function inside `onClick={() => setCount(count + 1)}` is created anew every time `MyComponent` re-renders.
Output: Each click increments count, and MyComponent re-renders, creating a new function each time. This can be inefficient in large applications.

Example with Regular Function

```javascript
function MyComponent() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{count}</p>
    </div>
  );
}
```

**Explanation:**

`handleClick` is defined once and reused on every render.

**Output:** Each click still increments `count` and re-renders the component, but the `handleClick` function is not recreated, leading to better performance.

**Key Difference:**

- **Arrow Function:** Creates a new function on every render (potentially causing unnecessary re-renders).
- **Regular Function:** Reuses the same function, improving performance.

## React Developer Tools

- **Installation:** You can install the React Developer Tools for Chrome from the [Chrome Web Store](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?pli=1).

## Lifting State Up

- **Definition:** Lifting state up involves moving the state to a common ancestor component when multiple child components need to share or synchronize state.
- **How It Works:**
  - **Passing Data from Child to Parent:** To communicate a change from a child to a parent, the parent component provides functions (as props) that the child can call to update the state in the parent.
  - **Passing State and Functions Down to Children:** The parent component manages the state and passes the current state and update functions as props to its children.

## Props

- **Definition:** Props are used to pass data from a parent component to a child component.
- **Usage:** Props allow you to configure child components or pass data to them. Props are read-only and can include variables or functions that the child component can use.
