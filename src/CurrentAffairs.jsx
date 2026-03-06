// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";

// const newsData = [
//   {
//     id: 1,
//     title: "Union Budget 2026",
//     desc: "Focus on digital economy, startups and employment growth.",
//   },
//   {
//     id: 2,
//     title: "ISRO Satellite Launch",
//     desc: "ISRO successfully launched a new satellite from Sriharikota.",
//   },
//   {
//     id: 3,
//     title: "Education Policy Update",
//     desc: "Government announced skill-based education reforms.",
//   },
// ];

// export default function CurrentAffairs() {
//   const [search, setSearch] = useState("");
//   const [selectedNews, setSelectedNews] = useState(null);

//   const filteredNews = newsData.filter(item =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={page}>
//       {/* Page Heading */}
//       <h1 style={heading}>🗞️ India Current Affairs</h1>
//       <p style={subText}>Latest important news in a simple way</p>

//       {/* Search Box */}
//       <div style={searchBox}>
//         <Search size={18} />
//         <input
//           style={input}
//           placeholder="Search current affairs..."
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Cards */}
//       <div style={cardContainer}>
//         {filteredNews.map(item => (
//           <motion.div
//             key={item.id}
//             style={card}
//             whileHover={{ scale: 1.03 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <h3>{item.title}</h3>
//             <p style={{ color: "#555" }}>{item.desc}</p>

//             <button
//               style={btn}
//               onClick={() => setSelectedNews(item)}
//             >
//               Read More
//             </button>
//           </motion.div>
//         ))}
//       </div>
//       {selectedNews && (
//         <div style={modalOverlay} onClick={() => setSelectedNews(null)}>
//           <div style={modal} onClick={e => e.stopPropagation()}>
//             <h2>{selectedNews.title}</h2>
//             <p>{selectedNews.desc}</p>

//             <button style={closeBtn} onClick={() => setSelectedNews(null)}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// const page = {
//   minHeight: "200vh",
//   padding: "50px",
//   background: "#0e0f10",
// };

// const heading = {
//   textAlign: "center",
//   marginBottom: 5,
// };

// const subText = {
//   textAlign: "center",
//   color: "#e7f3f8",
//   marginBottom: 30,
// };

// const searchBox = {
//   display: "flex",
//   alignItems: "center",
//   gap: 10,
//   background: "black",
//   padding: 12,
//   borderRadius: 8,
//   maxWidth: 400,
//   margin: "0 auto 40px",
//   boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
// };

// const input = {
//   border: "none",
//   outline: "none",
//   width: "100%",
//   fontSize: 16,
// };

// const cardContainer = {
//   display: "flex",
//   flexWrap: "wrap",
//   gap: 20,
//   justifyContent: "center",
// };

// const card = {
//   background: "black",
//   padding: 20,
//   width: 300,
//   borderRadius: 10,
//   boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
// };

// const btn = {
//   marginTop: 10,
//   padding: "8px 14px",
//   background: "#1976d2",
//   color: "white",
//   border: "none",
//   borderRadius: 6,
//   cursor: "pointer",
// };

// const modalOverlay = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   background: "rgba(0,0,0,0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const modal = {
//   background: "white",
//   padding: 30,
//   borderRadius: 10,
//   maxWidth: 400,
//   width: "90%",
// };

// const closeBtn = {
//   marginTop: 20,
//   padding: "8px 14px",
//   background: "#333",
//   color: "white",
//   border: "none",
//   borderRadius: 6,
//   cursor: "pointer",
// };

import React from "react";

const newsData = [
  {
    id: 1,
    title: "India Budget 2026",
    image: "https://picsum.photos/300/200?1",
    description: "Government announced new economic plans."
  },
  {
    id: 2,
    title: "ISRO New Launch",
    image: "https://picsum.photos/300/200?2",
    description: "ISRO successfully launched a new satellite."
  },
  {
    id: 3,
    title: "Education Policy Update",
    image: "https://picsum.photos/300/200?3",
    description: "Major updates in NEP announced."
  }
];

function CurrentAffairs() {
  return (
    <div className="page">
      <h1>Latest News</h1>

      <div className="news-grid">
        {newsData.map((item) => (
          <div key={item.id} className="news-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentAffairs;
