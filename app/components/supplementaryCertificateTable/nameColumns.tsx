import { GridColDef } from '@mui/x-data-grid'
import { Person } from '../../types/types'
import { Typography } from '@mui/material'

export const nameColumns: GridColDef<Person>[] = [
  {
    field: 'name',
    headerName: 'Name',
    headerAlign: 'center',
    align: 'right',
    minWidth: 100,
    headerClassName: 'custom-header',
    cellClassName: 'custom-cell',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant="body2">
          {row.inhaber.name}
        </Typography>
      )
    },
  },
  {
    field: 'vorname',
    headerName: 'Vorname',
    headerAlign: 'center',
    align: 'left',
    headerClassName: 'custom-header',
    cellClassName: 'custom-cell',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant="body2">
          {row.inhaber.vorname}
        </Typography>
      )
    },
  },
]
