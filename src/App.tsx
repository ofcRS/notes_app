import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { useStore } from 'effector-react';
import NotesTable from './components/NotesTable';
import NoteForm from './components/NoteForm';
import FilterByCategory from './components/FilterByCategory';
import SearchBar from './components/SearchBar';
import { addNote, editNote, deleteNote, notesStore, categories } from './store/notes';

function App() {
  const notes = useStore(notesStore);
  const categoryList = useStore(categories);

  const [isEditing, setIsEditing] = useState(false);
  const [initialData, setInitialData] = useState({ title: '', category: '' });

  const addNewNote = (formData: { title: string; category: string }) => {
    addNote(formData);
  };

  const editExistingNote = (id: number, formData: { title: string; category: string }) => {
    editNote({ id, ...formData });
  };

  const deleteExistingNote = (id: number) => {
    deleteNote(id);
  };

  const startEdit = (id: number) => {
    const noteToEdit = notes.find((note) => note.id === id);
    if (noteToEdit) {
      setIsEditing(true);
      setInitialData({ title: noteToEdit.title, category: noteToEdit.category });
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setInitialData({ title: '', category: '' });
  };

  return (
    <div className="App">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <NoteForm onSubmit={addNewNote} onCancel={cancelEdit} initialData={initialData} />
        </Col>
        <Col span={12}>
          <FilterByCategory categories={categoryList} onChange={console.log} />
        </Col>
        <Col span={24}>
          <SearchBar onSearch={console.log} />
        </Col>
        <Col span={24}>
          <NotesTable rowData={notes} onEdit={startEdit} onDelete={deleteExistingNote} />
        </Col>
      </Row>
    </div>
  );
}

export default App;



