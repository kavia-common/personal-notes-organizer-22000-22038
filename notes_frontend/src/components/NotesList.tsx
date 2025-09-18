"use client";
import { Note } from "../types";
import { format } from "date-fns";

// PUBLIC_INTERFACE
export default function NotesList({
  notes,
  onSelect,
}: {
  notes: Note[];
  onSelect: (note: Note) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {notes.map((note) => (
        <article
          key={note.id}
          className="cursor-pointer border rounded-lg p-4 bg-surface shadow-sm hover:shadow-md transition"
          onClick={() => onSelect(note)}
        >
          <h2 className="font-semibold text-lg mb-2">{note.title}</h2>
          <p className="text-sm line-clamp-3">{note.content}</p>
          <footer className="text-xs text-gray-500 mt-4">
            {format(note.updatedAt, "PP p")}
          </footer>
        </article>
      ))}
    </div>
  );
}
