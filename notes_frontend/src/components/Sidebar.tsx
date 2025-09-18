"use client";
import { useState } from "react";

const defaultCategories = ["All", "Work", "Personal", "Ideas"];

// PUBLIC_INTERFACE
export default function Sidebar({
  onSelect,
}: {
  onSelect: (category: string) => void;
}) {
  const [active, setActive] = useState("All");
  return (
    <aside className="w-56 bg-surface border-r border-gray-200 h-full">
      <ul>
        {defaultCategories.map((cat) => (
          <li key={cat}>
            <button
              className={`block w-full text-left px-4 py-2 hover:bg-primary/10 ${
                active === cat ? "bg-primary/10 font-medium" : ""
              }`}
              onClick={() => {
                setActive(cat);
                onSelect(cat);
              }}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
