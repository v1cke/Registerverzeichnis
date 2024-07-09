import { GridColDef } from '@mui/x-data-grid'
import { Kenntnisse } from '@/app/types/types'
import { Typography } from '@mui/material'
import { formatDateToGermanLocale } from '../supplementaryCertificateTable/supplementaryCertificateTableColumns'

export const languageSkillsColumns: GridColDef<Kenntnisse>[] = [
  {
    field: 'bezeichnung',
    headerName: 'Bezeichnung',
    headerAlign: 'center',
    align: 'center',
    flex: 0.25,
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant="body2">
          {row.bezeichnung}
        </Typography>
      )
    },
  },
  {
    field: 'erwerb',
    headerName: 'Erwerb',
    headerAlign: 'center',
    align: 'center',
    flex: 0.15,
    renderCell: ({ row }) => formatDateToGermanLocale(row.erwerb),
  },
  {
    field: 'letzteUeberpruefung',
    headerName: 'letzte Überprüfung',
    headerAlign: 'center',
    align: 'center',
    flex: 0.15,
    renderCell: ({ row }) => formatDateToGermanLocale(row.letzteUeberpruefung),
  },
  {
    field: 'naechsteUeberpruefung',
    headerName: 'nächste Überprüfung',
    headerAlign: 'center',
    align: 'center',
    flex: 0.15,
    renderCell: ({ row }) =>
      formatDateToGermanLocale(row.naechsteUeberpruefung),
  },
  {
    field: 'hinweise',
    headerName: 'Hinweise',
    headerAlign: 'center',
    align: 'center',
    flex: 0.3,
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant="body2">
          {row.hinweise}
        </Typography>
      )
    },
  },
]
