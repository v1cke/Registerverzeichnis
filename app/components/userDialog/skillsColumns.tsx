import { GridColDef } from '@mui/x-data-grid'
import { Kenntnisse } from '@/app/types/types'
import { Box, Typography } from '@mui/material'
import { formatDateToGermanLocale } from '../supplementaryCertificateTable/supplementaryCertificateTableColumns'

export const skillsColumns: GridColDef<Kenntnisse>[] = [
  {
    field: 'bezeichnung',
    headerName: 'Bezeichnung',
    headerClassName: 'skill-header',
    headerAlign: 'center',
    align: 'center',
    flex: 0.25,
    renderCell: ({ row }) => {
      return (
        <Box className="flex h-full items-center justify-center">
          <Typography noWrap variant="body2">
            {row.bezeichnung}
          </Typography>{' '}
        </Box>
      )
    },
  },
  {
    field: 'erwerb',
    headerName: 'Erwerb',
    headerClassName: 'skill-header',
    headerAlign: 'center',
    align: 'center',
    flex: 0.15,
    renderCell: ({ row }) => formatDateToGermanLocale(row.erwerb),
  },
  {
    field: 'letzteUeberpruefung',
    headerName: 'letzte Überprüfung',
    headerClassName: 'skill-header',
    headerAlign: 'center',
    align: 'center',
    flex: 0.15,
    renderCell: ({ row }) => formatDateToGermanLocale(row.letzteUeberpruefung),
  },
  {
    field: 'naechsteUeberpruefung',
    headerName: 'nächste Überprüfung',
    headerClassName: 'skill-header',
    headerAlign: 'center',
    align: 'center',
    flex: 0.15,
    renderCell: ({ row }) =>
      formatDateToGermanLocale(row.naechsteUeberpruefung),
  },
  {
    field: 'hinweise',
    headerName: 'Hinweise',
    headerClassName: 'skill-header',
    headerAlign: 'center',
    align: 'center',
    flex: 0.3,
    renderCell: ({ row }) => {
      return (
        <Box className="flex h-full items-center justify-center">
          <Typography noWrap variant="body2">
            {row.hinweise}
          </Typography>{' '}
        </Box>
      )
    },
  },
]
