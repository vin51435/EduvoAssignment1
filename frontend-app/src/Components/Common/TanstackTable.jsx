import React, { useEffect, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel
} from '@tanstack/react-table';

const Table = ({ data, columns }) => {
  const [selectedRows, setSelectedRows] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // Add pagination row model
    initialState: { pagination: { pageIndex: 0, pageSize: 10 } }, // Initial pagination state
  });

  // Handle row selection
  const handleRowSelection = (rowId) => {
    setSelectedRows(prev => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  // Handle master checkbox
  const handleSelectAll = (checked) => {
    const newSelection = {};
    table.getRowModel().rows.forEach(row => {
      newSelection[row.id] = checked;
    });
    setSelectedRows(newSelection);
  };


  // Check if all rows are selected
  const allRowsSelected = table.getRowModel().rows.every(row => selectedRows[row.id]);

  // Update master checkbox state based on row selection
  useEffect(() => {
    const allSelected = table.getRowModel().rows.every(row => selectedRows[row.id]);
    const someSelected = table.getRowModel().rows.some(row => selectedRows[row.id]);

    // Set master checkbox state
    setSelectAllChecked(allSelected);
    setSelectSomeChecked(!allSelected && someSelected);
  }, [selectedRows, table.getRowModel().rows]);

  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [selectSomeChecked, setSelectSomeChecked] = useState(false);
  return (
    <div className="p-2">
      <table className='w-full'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} >
              {headerGroup.headers.map(header => (
                <th key={header.id} className='fle'>
                  <div className='flex'>
                    {header.id === 'select' ? (
                      <input
                        type="checkbox"
                        checked={selectAllChecked}
                        // indeterminate={selectSomeChecked}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                      />
                    ) : (
                      <span>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className=''>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className=''>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {cell.column.id === 'select' ? (
                    <input
                      type="checkbox"
                      checked={selectedRows[row.id] || false}
                      onChange={() => handleRowSelection(row.id)}
                    />
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <span>
          Page{' '}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>{' '}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            style={{ width: '50px' }}
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Table;
