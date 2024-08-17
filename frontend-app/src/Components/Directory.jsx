import React, { useEffect, useState } from 'react';
import {
  createColumnHelper,
} from '@tanstack/react-table';
import Table from './Common/TanstackTable';
import axios from 'axios';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor(row => row.id, {
    id: 'select',
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        onChange={e => table.getToggleAllRowsSelectedHandler(e.target.checked)}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={e => row.getToggleSelectedHandler(e.target.checked)}
      />
    ),
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: info => (
      <div className='flex items-center py-2'>
        <span className="flex items-center space-x-2 text-sm font-semibold">
          <img
            className="h-8 w-8 min-h-8 min-w-8 rounded-full"
            src={info.row.original.userImageUrl}
            alt="User"
            width="36"
          />
        </span>


        <span className='text-sm flex flex-col justify-center'>
          <span className='text-sm '>{info.getValue()}</span>
          {info.row.original.tag}
        </span>
      </div>
    ),
    enableSorting: true,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: info => <div className='text-sm flex justify-start'>{info.getValue()?'Active':'Inactive'}</div>,
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    cell: info => <span className='text-sm '>{info.getValue()}</span>,
  }),
  columnHelper.accessor('role', {
    header: 'Role',
    cell: info => <span className='text-sm '>{info.getValue()}</span>,
  }),
  columnHelper.accessor('teams', {
    header: 'Teams',
    cell: info => <span className='text-sm '>
      {info.getValue().map((item, key) => (
        <span className='text-sm ' key={key}>{item}</span>
      ))}      </span>, // Display as a comma-separated list
  }),
];
// import.meta.env.VITE_
const Directory = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const rerender = React.useReducer(() => ({}), {})[1];

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_PROD_PORT}/api/user`)
      .then(response => {
        console.log({ response });
        setData(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Table data={data} columns={columns} />
      <div className="h-4" />
      {/* <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button> */}
    </div>
  );
};

export default Directory;