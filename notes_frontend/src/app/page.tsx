"use client";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import NotesList from "../components/NotesList";
import NoteModal from "../components/NoteModal";
import { Note } from "../types";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [category] = useState("All");
  const [selected, setSelected] = useState<Note | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = notes.filter(() => true); // categories placeholder

  const handleSave = (noteData: Pick<Note, "id" | "title" | "content">) => {
    setNotes((prev) => {
      const exists = prev.find((n) => n.id === noteData.id);
      if (exists) {
        return prev.map((n) =>
          n.id === noteData.id ? { ...n, ...noteData, updatedAt: new Date() } : n,
        );
      }
      return [...prev, { ...noteData, updatedAt: new Date() }];
    });
  };

  return (
    <>
      <Header />
      <div className="flex flex-1">
        <Sidebar
          onSelect={() => {
            /* category selection to implement later */
          }}
        />
        <main className="flex-1 overflow-y-auto">
          <div className="flex justify-end p-4">
            <button
              className="px-4 py-2 bg-primary text-white rounded"
              onClick={() => {
                setSelected(null);
                setModalOpen(true);
              }}
            >
              New Note
            </button>
          </div>
          {filtered.length > 0 ? (
            <NotesList
              notes={filtered}
              onSelect={(note) => {
                setSelected(note);
                setModalOpen(true);
              }}
            />
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No notes in <span className="font-medium">{category}</span>
            </p>
          )}
        </main>
      </div>
      <NoteModal
        open={modalOpen}
        note={selected}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />
    </>
  );
}
