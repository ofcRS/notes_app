import { createEvent, createStore } from 'effector';

export const addNote = createEvent<{ title: string; category: string }>();
export const editNote = createEvent<{ id: number; title: string; category: string }>();
export const deleteNote = createEvent<number>();

export const notesStore = createStore<{ id: number; title: string; category: string }[]>([])
  .on(addNote, (state, payload) => [...state, { id: Date.now(), ...payload }])
  .on(editNote, (state, payload) =>
    state.map((note) => (note.id === payload.id ? { ...note, ...payload } : note))
  )
  .on(deleteNote, (state, id) => state.filter((note) => note.id !== id));

export const categories = notesStore.map((notes) => {
  const uniqueCategories = new Set<string>();
  notes.forEach((note) => uniqueCategories.add(note.category));
  return Array.from(uniqueCategories);
});

