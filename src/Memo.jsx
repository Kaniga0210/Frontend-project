import React, {useState, useMemo} from "react";

function Memo() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [theme, setTheme] = useState("light");

    const calculation = () => {
        console.log("Calculating...");
        return count * 2;
    }

        const result = useMemo(() => {
            if (theme === "dark") {
                return calculation();
            } else {
                return count * 2;
            }
        }, [count, theme]);
    
        // const result = calculation();
    
        return (
            <div>
                <h3>Result: {result}</h3>
                <button onClick = {()=> setCount(count + 1)}>Increment</button> <br />
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} /> <br />
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Mode: {theme}</button>
            </div>
        )
    }
export default Memo;