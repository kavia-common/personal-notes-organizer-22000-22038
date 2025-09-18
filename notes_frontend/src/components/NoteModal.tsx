"use client";
import { useEffect } from "react";
import { Note } from "../types";

/**
 * Simple modal dialog using fixed positioning
 */

// PUBLIC_INTERFACE
export default function NoteModal({
  note,
  open,
  onClose,
  onSave,
}: {
  note?: Note | null;
  open: boolean;
  onClose: () => void;
  onSave: (note: Pick<Note, "id" | "title" | "content">) => void;
}) {
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;
  const isEdit = Boolean(note);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title")?.toString() ?? "";
    const content = formData.get("content")?.toString() ?? "";
    onSave({ id: note?.id ?? crypto.randomUUID(), title, content });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-surface rounded-lg w-full max-w-lg mx-2 shadow-lg">
        <header className="p-4 border-b">
          <h2 className="text-lg font-semibold">
            {isEdit ? "Edit Note" : "New Note"}
          </h2>
        </header>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              name="title"
              defaultValue={note?.title}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Content</label>
            <textarea
              name="content"
              defaultValue={note?.content}
              className="w-full border rounded px-3 py-2 h-40"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-primary text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
