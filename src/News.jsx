import React, { useState } from "react";

// Static news data (beginner-friendly)
const newsData = [
  {
    id: 1,
    title: "India Budget 2026",
    image: "https://picsum.photos/400/250?1",
    description: "Government announced new economic plans to boost growth and infrastructure.",
  },
  {
    id: 2,
    title: "ISRO Launch Success",
    image: "https://picsum.photos/400/250?2",
    description: "ISRO successfully launched a new satellite into orbit.",
  },
  {
    id: 3,
    title: "Education Policy Update",
    image: "https://picsum.photos/400/250?3",
    description: "New initiatives announced for skill-based education.",
  },
  {
    id: 4,
    title: "Startups & Innovation",
    image: "https://picsum.photos/400/250?4",
    description: "New funding programs support early-stage startups.",
  },
];

// Simple News page component
export default function News() {
  const [selected, setSelected] = useState(null);

  // Handler for Read More (simple, beginner-friendly)
  const handleReadMore = (item) => {
    // For now show an alert with the full title and description
    // In a real app you'd navigate to a detail page
    alert(item.title + " - " + item.description);
  };

  return (
    <section className="page">
      <div className="hero">
        <h1>Latest News</h1>
        <p className="sub">Easy, beginner-friendly news cards with React</p>
      </div>

      <div className="news-grid">
        {newsData.map((item) => (
          <article className="news-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <h3>{item.title}</h3>
              <p className="muted">{item.description}</p>
              <div className="card-actions">
                <button className="btn" onClick={() => handleReadMore(item)}>
                  Read More
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
