// import React, {useRef, useState} from 'react';

// const Ref = () => {
//     const [count, setCount] = useState(0);
//     const prevCount = useRef(0);
//     const inputRef = useRef();

//     const focusInput = () => {
//         inputRef.current.focus();
//         console.log("focus");
//     }

//     useEffect(() => {
//         prevCount.current = count;
//     }, [count]);

//     return (
//         <div>
//             <h3>Current Count: {count}</h3>
//             <h3>Previous Count: {prevCount.current}</h3>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//             <input ref={inputRef} type="text" placeholder="Focus on me" />
//             <button onClick={focusInput}>Focus Input</button>
//         </div>
//     )
// }

// export default Ref;