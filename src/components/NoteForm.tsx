import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

interface NoteFormProps {
  onSubmit: (formData: { title: string; category: string }) => void;
  onCancel: () => void;
  initialData: { title: string; category: string };
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState(initialData || { title: '', category: '' });

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Form layout="vertical">
      <Form.Item label="Заголовок">
        <Input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Категория">
        <Input
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Сохранить
        </Button>
        <Button onClick={onCancel} style={{ marginLeft: 8 }}>
          Отмена
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NoteForm;

