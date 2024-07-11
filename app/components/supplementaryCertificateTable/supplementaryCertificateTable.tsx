'use client'

import { Dispatch, SetStateAction } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { fakeData } from '../../fakeData/fakeData'
import { SupplementaryCertificateTableColumns } from './supplementaryCertificateTableColumns'
import { Box } from '@mui/material'
import { ShowColumns } from '../../page'
import { columnGroupingModel } from './columnGroupingModel'

interface SupplementaryCertificateTableProps {
  showColumns: ShowColumns[]
  setOpenDialog: Dispatch<SetStateAction<boolean>>
  tableView: 'activ' | 'draft' | 'history'
  setSetselectedColumnId: Dispatch<SetStateAction<number | undefined>>
}

export const SupplementaryCertificateTable = ({
  showColumns,
  setOpenDialog,
  tableView,
  setSetselectedColumnId,
}: SupplementaryCertificateTableProps) => {
  const getRows = () => {
    const activRow = fakeData.filter(
      (item) => item.zusatzbescheinigung.status === 'gültig',
    )
    const draftRow = fakeData.filter(
      (item) => item.zusatzbescheinigung.status === 'Entwurf',
    )
    const historygRow = fakeData.filter(
      (item) => item.zusatzbescheinigung.status === 'gültig',
    )

    if (tableView === 'draft') {
      return draftRow
    }
    if (tableView === 'history') {
      return historygRow
    }
    return activRow
  }

  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      <DataGrid
        rows={getRows()}
        columns={SupplementaryCertificateTableColumns(showColumns)}
        hideFooter={true}
        pageSizeOptions={[1]}
        columnHeaderHeight={230}
        onRowClick={(row) => {
          setSetselectedColumnId(Number(row.id))
          setOpenDialog(true)
        }}
        columnGroupingModel={columnGroupingModel}
        sx={{
          width: '100%',
          '& .MuiDataGrid-row:hover': {
            cursor: 'pointer',
          },
        }}
      />
    </Box>
  )
}
