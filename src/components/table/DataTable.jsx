import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nome', headerName: 'Nome', width: 70 },
  { field: 'categoria', headerName: 'Categoria', width: 70 },
  { field: 'descricao', headerName: 'Descrição', width: 70 },
  { field: 'desconto', headerName: 'Desconto', width: 70 },
  { field: 'preco', headerName: 'Preço', width: 70 },
  { field: 'data_cadastro', headerName: 'Data de Cadastro', width: 70 },
   
];


export default function DataTable({dados}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={dados}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
