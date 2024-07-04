import { GridColDef } from '@mui/x-data-grid'
import { Person } from '../types/types'
import { Typography } from '@mui/material'

export const fbTableColumns = (): GridColDef<Person>[] => {
  return [
    {
      field: 'fuehrerscheinNummer',
      headerName: 'Führerschein Nummer',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.fuehrerschein.fuehrerscheinNummer}
          </Typography>
        )
      },
    },
    {
      field: 'fuehrerscheinStatus',
      headerName: 'Status',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.fuehrerschein.status}
          </Typography>
        )
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      headerAlign: 'center',
      align: 'right',
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
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.inhaber.vorname}
          </Typography>
        )
      },
    },
    {
      field: 'geburtstag',
      headerName: 'Geburtstag',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        const date = row.inhaber.geburtstag
        return date
          ? new Date(date).toLocaleDateString('de-DE', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })
          : ''
      },
    },
    {
      field: 'geburtsort',
      headerName: 'Geburtsort',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.inhaber.geburtsort}
          </Typography>
        )
      },
    },
    {
      field: 'staatsangehoerigkeit',
      headerName: 'Staatsangehoerigkeit',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.inhaber.staatsangehoerigkeit}
          </Typography>
        )
      },
    },
    {
      field: 'zusatzbescheinigungNummer',
      headerName: 'Nummer',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.zusatzbescheinigung.nummer}
          </Typography>
        )
      },
    },
    {
      field: 'zusatzbescheinigungStatus',
      headerName: 'Status',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.zusatzbescheinigung.status}
          </Typography>
        )
      },
    },
    {
      field: 'zusatzbescheinigungAusstellungsDatum',
      headerName: 'Ausstellungs Datum',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        const date = row.zusatzbescheinigung.ausstellungsDatum
        return date
          ? new Date(date).toLocaleDateString('de-DE', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })
          : ''
      },
    },
    {
      field: 'zusatzbescheinigungAblaufGueltigkeit',
      headerName: 'Ablauf Gueltigkeit',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        const date = row.zusatzbescheinigung.ablaufGueltigkeit
        return date
          ? new Date(date).toLocaleDateString('de-DE', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })
          : ''
      },
    },
  ]
}
