import { useState, useCallback, memo } from "react";

function App() {
  //  const [count, setCount] = useState(0);
    const [text, setText] = useState("Hello World");

    const handleClick = useCallback(() => {
        console.log("Child button clicked");
    }, []);

    console.log("Parent rendered");
    
    return (
        <>
        {/* <h3>Count: {count}</h3> */}
        <h3>Text: {text}</h3>
        {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
        <button onClick={() => setText()}>Text</button>
        <Child onClick={handleClick}/>
        </>
    );
}

const Child = memo(function Child({ onClick }) {
// function Child({ onClick }) {
    console.log("Child rendered");
    return <button onClick={onClick}>Child Button</button>;
}
);

export default App;