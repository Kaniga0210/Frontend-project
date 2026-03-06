import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "antd";

/* =========================
   Carousel Images
========================= */
const images = [
  "CA1.jfif",
  //"https://picsum.photos/1200/360?random=1",
  "https://picsum.photos/1200/360?random=2",
  "https://picsum.photos/1200/360?random=3",
  "https://picsum.photos/1200/360?random=4",
];

export function Home({ user = {} }) {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  /* =========================
     useEffect
  ========================= */
  useEffect(() => {
    setCount(10);
    setTheme("dark");
  }, []);

  /* =========================
     Functions
  ========================= */
  const addItems = () => {
    if (text.trim() === "") return;
    setItems([...items, text]);
    setText("");
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  /* =========================
     Theme Style
  ========================= */
  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#121212",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={style}>
      {/* =========================
         Carousel with MAP
      ========================= */}
      <Carousel autoplay>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </Carousel>

      {/* =========================
         Animated Heading
      ========================= */}
      <motion.div
        style={pageStyle}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>India Current Affairs</h1>
        <p>Daily important news for exams & general knowledge</p>

        {/* Counter */}
        {/* <h3>Counter: {count}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement} style={{ marginLeft: 10 }}>
          -
        </button>

        <br /><br /> */}

        {/* Theme */}
        {/* <button onClick={toggleTheme}>
          Toggle Theme ({theme})
        </button>

        <br /><br /> */}

        {/* Add Items */}
        {/* <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add item"
        />
        <button onClick={addItems} style={{ marginLeft: 10 }}>
          Add
        </button> */}

        {/* <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button
                onClick={() => deleteItem(index)}
                style={{ marginLeft: 10 }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul> */}
      </motion.div>
    </div>
  );
}
const pageStyle = {
  padding: 40,
};
export default Home;
