// // import React, { useState } from 'react'
// // import Home from "./Home"
// // import About from "./About";
// // import Profile from "./Profile";
// // import UserContext from "./Context";
// // import Blog from './Blog';
// // import CurrentAffairs from './CurrentAffairs';
// // import NotFound from './NotFound';
// // import Navbar from './Navbar';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';


// // function App() {
// //   const user ={
// //     name: "Kaniga",
// //     age:22,
// //     phone: 9876543210,
// //     message: "Learning React props with destructuring",
// //     skills: ["HTML", "CSS", "JavaScript", "React"],
// //     isStudent: true,
// //     isWorking: false
// //   }

// //   const array = ["React", "JavaScript", "HTML", "CSS"]
// //   const message = () => alert("Hello World from App.jsx")
// //   return (
// //     <div>
// //       Hello World
// //       <Home user={user}/>
// //       {/* <UserContext.Provider value={user}>
// //         <Home />
// //         <About />
// //         <Profile />
// //       </UserContext.Provider>
// //       <Blog /> */}
// //       <CurrentAffairs />
// //       <Navbar />
// //       <BrowserRouter> 
// //         <Routes>
// //           <Route path='/' element={<Home />} />
// //           <Route path='/about' element={<About />} />
// //           <Route path='/profile' element={<Profile />} />
// //           <Route path='*' element={<NotFound />} />
// //         </Routes>
// //       </BrowserRouter>
// //     </div>
// //   )
// // }
// // export default App

// // // import React from "react";
// // // import Home from "./Home";

// // // function App() {
// // //   return (
// // //     <div>
// // //       <Home
// // //         name="Kaniga"
// // //         age={21}
// // //         phone={9876543210}
// // //         message="Learning React props with destructuring"
// // //         skills={["HTML", "CSS", "JavaScript", "React"]}
// // //         isStudent={true}
// // //         isWorking={false}
// // //       />
// // //     </div>
// // //   );
// // // }

// // // export default App;
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// // import News from "./News";
// // import About from "./About";
// import Navbar from "./Navbar";
// // import './styles.css';
// // import CallBack from "./CallBack";
// // import Memo from "./Memo";
// import UseCounter from "./UseCounter";
// // // import Api from "./API";
// // // import UseApi from "./UseApi";
// import UseTheme from "./UseTheme";
// import Condition from "./Condition";
// import Form from "./Form";



// function App() {

//  const { theme, toggleTheme } = UseTheme();

// const {count, increment, decrement, reset} = UseCounter(10);

// // const {data, loading, error} = UseApi("https://fakestoreapi.com/products");
// // console.log("app", data);
// // if(loading) return <p>Loading...</p>
// // if(error) return <p>Error: {error.message}</p>

// // const message = () => alert("Hello World from button");
// // console.log(message);
//   return (
//     <>
      
//       <BrowserRouter>
//         <Navbar />

//         <main className="container">
//           <Routes>
//             {/* <Route path="/" element={<Home />} />
//             <Route path="/news" element={<News />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/callback" element={<CallBack />} />
//             <Route path="/memo" element={<Memo />} />
//             {/* <Route path="/api" element={<Api />} />  */}
//             {/* <Route path="/useapi" element={<UseApi url="https://fakestoreapi.com/products" />} /> */}
//             <Route path="/usecounter" element={<UseCounter />} />
//             <Route path="/usetheme" element={<UseTheme />} /> 
//             <Route path="/condition" element={<Condition />} />
//             <Route path="/form" element={<Form />} />
//           </Routes> 
//         </main>
//       </BrowserRouter>
//       <div>
//         <h1>Count: {count}</h1>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//         <button onClick={reset}>Reset</button>
//       </div>
// {/* 
//       <div> 
//         {data.map((item, index)=>{
//           return(
//             <div key={index}>
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//               </div>
//           )
//         })}
//       </div> */}

//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>

//         <button onClick={toggleTheme}
//           style={{
//             padding: "10px 20px",
//             cursor: "pointer",
//             marginTop: "20px",
//           }}>
//             Change Theme
//           </button>
//       </div>
//     </>
//   );
// }

// export default App; 






import React, { useEffect, useState }from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;