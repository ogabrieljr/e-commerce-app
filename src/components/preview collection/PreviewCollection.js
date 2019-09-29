import React from "react";

export default function PreviewCollection({ title, items }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
}
