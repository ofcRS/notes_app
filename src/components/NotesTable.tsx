import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef } from "ag-grid-community";

interface NotesTableProps {
  rowData: Array<{ id: number; title: string; category: string }>;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const columnDefs: ColDef[] = [
    { headerName: 'Заголовок', field: 'title' },
    { headerName: 'Категория', field: 'category' },
];
const NotesTable: React.FC<NotesTableProps> = ({ rowData, onEdit, onDelete }) => {


  const onRowClicked = (event: any) => {
    if (event.event.target.classList.contains('edit-button')) {
      onEdit(event.data.id);
    }
  };

  const frameworkComponents = {
    editButtonRenderer: (params: any) => (
      <button
        className="edit-button"
        onClick={() => onEdit(params.data.id)}
      >
        Редактировать
      </button>
    ),
  };


  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        onRowClicked={onRowClicked}
        // frameworkComponents={frameworkComponents as never}
      />
    </div>
  );
};

export default NotesTable;

