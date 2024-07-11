import { GridColDef } from '@mui/x-data-grid'
import { Person } from '../../types/types'
import { Box, Typography, useTheme } from '@mui/material'
import { ShowColumns } from '../../page'

export const formatDateToGermanLocale = (date?: Date) => {
  return date
    ? new Date(date).toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : ''
}

export const SupplementaryCertificateTableColumns = (
  showColumns: ShowColumns[],
): GridColDef<Person>[] => {
  const nameColumns: GridColDef<Person>[] = [
    {
      field: 'name',
      headerName: 'Name',
      headerAlign: 'center',
      align: 'center',
      minWidth: 130,
      headerClassName: 'inhaber-header iconColor  rotateTitle',
      cellClassName: 'name-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.inhaber.name}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'vorname',
      headerName: 'Vorname',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'inhaber-header iconColor  rotateTitle border-right',
      cellClassName: 'name-cell border-right',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.inhaber.vorname}
            </Typography>
          </Box>
        )
      },
    },
  ]

  const fuehrerscheinColumns: GridColDef<Person>[] = [
    {
      field: 'fuehrerscheinNummer',
      headerName: 'Führerschein Nummer',
      headerAlign: 'center',
      align: 'center',
      minWidth: 130,
      headerClassName: 'inhaber-header iconColor  rotateTitle',
      cellClassName: 'fuehrerschein-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Nummer des
              <br />
              Triebfahrzeug-
              <br />
              führerschein
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.fuehrerschein.fuehrerscheinNummer}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'fuehrerscheinStatus',
      headerName: 'Status',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'inhaber-header iconColor  rotateTitle border-right',
      cellClassName: 'fuehrerschein-cell border-right',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.fuehrerschein.status}
            </Typography>
          </Box>
        )
      },
    },
  ]

  const inhaberColumns: GridColDef<Person>[] = [
    {
      field: 'geburtstag',
      headerName: 'Geburtstag',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'inhaber-header iconColor  rotateTitle',
      cellClassName: 'inhaber-cell',
      renderCell: ({ row }) => formatDateToGermanLocale(row.inhaber.geburtstag),
    },
    {
      field: 'geburtsort',
      headerName: 'Geburtsort',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'inhaber-header iconColor  rotateTitle',
      cellClassName: 'inhaber-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.inhaber.geburtsort}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'staatsangehoerigkeit',
      headerName: 'Staatsangehoerigkeit',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'inhaber-header iconColor  rotateTitle border-right',
      cellClassName: 'inhaber-cell border-right',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Staatsange-
              <br />
              hörigkeit
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.inhaber.staatsangehoerigkeit}
            </Typography>
          </Box>
        )
      },
    },
  ]

  const zusatzbescheinigungColumns: GridColDef<Person>[] = [
    {
      field: 'zusatzbescheinigungNummer',
      headerName: 'Nummer',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'zusatzbescheinigung-header iconColor  rotateTitle',
      cellClassName: 'zusatzbescheinigung-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.zusatzbescheinigung.nummer}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'zusatzbescheinigungStatus',
      headerName: 'Status',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'zusatzbescheinigung-header iconColor  rotateTitle',
      cellClassName: 'zusatzbescheinigung-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.zusatzbescheinigung.status}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'zusatzbescheinigungAusstellungsDatum',
      headerName: 'Ausstellungs Datum',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'zusatzbescheinigung-header iconColor  rotateTitle',
      cellClassName: 'zusatzbescheinigung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Ausstellungs-
              <br />
              Datum
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) =>
        formatDateToGermanLocale(row.zusatzbescheinigung.ausstellungsDatum),
    },
    {
      field: 'zusatzbescheinigungAblaufGueltigkeit',
      headerName: 'Ablauf Gueltigkeit',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName:
        'zusatzbescheinigung-header iconColor  rotateTitle border-right',
      cellClassName: 'zusatzbescheinigung-cell border-right',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Ablauf
              <br />
              Gültigkeit
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) =>
        formatDateToGermanLocale(row.zusatzbescheinigung.ablaufGueltigkeit),
    },
  ]

  const organisationseinheitColumns: GridColDef<Person>[] = [
    {
      field: 'organisationseinheitBezeichnung',
      headerName: 'Bezeichnung',
      headerAlign: 'center',
      align: 'center',
      minWidth: 250,
      headerClassName: 'organisationseinheit-header iconColor  rotateTitle',
      cellClassName: 'organisationseinheit-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.ausstellendeOrganisationseinheit.bezeichnung}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'organisationseinheitStrasseUndNummer',
      headerName: 'Strasse und Hausnummer',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'organisationseinheit-header iconColor  rotateTitle',
      cellClassName: 'organisationseinheit-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.ausstellendeOrganisationseinheit.strasseUndNummer}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'organisationseinheitPlz',
      headerName: 'Postleitzahl',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'organisationseinheit-header iconColor  rotateTitle',
      cellClassName: 'organisationseinheit-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.ausstellendeOrganisationseinheit.plz}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'organisationseinheitOrt',
      headerName: 'Ort',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'organisationseinheit-header iconColor  rotateTitle',
      cellClassName: 'organisationseinheit-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.ausstellendeOrganisationseinheit.ort}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'organisationseinheitTelefon',
      headerName: 'Telefonnummer',
      headerAlign: 'center',
      align: 'center',
      minWidth: 130,
      headerClassName: 'organisationseinheit-header iconColor  rotateTitle',
      cellClassName: 'organisationseinheit-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.ausstellendeOrganisationseinheit.telefon}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'organisationseinheitfax',
      headerName: 'Faxnummer',
      headerAlign: 'center',
      align: 'center',
      minWidth: 130,
      headerClassName: 'organisationseinheit-header iconColor  rotateTitle',
      cellClassName: 'organisationseinheit-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.ausstellendeOrganisationseinheit.fax}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'organisationseinheitEmail',
      headerName: 'E-Mail-Adresse',
      headerAlign: 'center',
      align: 'center',
      minWidth: 250,
      headerClassName:
        'organisationseinheit-header iconColor  rotateTitle border-right',
      cellClassName: 'organisationseinheit-cell border-right',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.ausstellendeOrganisationseinheit.email}
            </Typography>
          </Box>
        )
      },
    },
  ]

  const bilderColumns: GridColDef<Person>[] = [
    {
      field: 'bilderLichtBild',
      headerName: 'LichtBild',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'bilder-header iconColor  rotateTitle',
      cellClassName: 'bilder-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.bilder.lichtBild ? 'vorhanden' : 'nicht vorhanden'}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'bilderUnterschrift',
      headerName: 'Unterschrift',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'bilder-header iconColor  rotateTitle border-right',
      cellClassName: 'bilder-cell border-right',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.bilder.unterschrift ? 'vorhanden' : 'nicht vorhanden'}
            </Typography>
          </Box>
        )
      },
    },
  ]

  const unternehmenColumns: GridColDef<Person>[] = [
    {
      field: 'unternehmenBezeichnung',
      headerName: 'Bezeichnung',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.verantwortlichesUnternehmen.bezeichnung}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'unternehmenStrasseUndNummer',
      headerName: 'Strasse und Hausummer',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.verantwortlichesUnternehmen.strasseUndNummer}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'unternehmenOrt',
      headerName: 'Ort',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.verantwortlichesUnternehmen.ort}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'unternehmenLand',
      headerName: 'Land',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.verantwortlichesUnternehmen.land}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'unternehmenPlz',
      headerName: 'Postleitzahl',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.verantwortlichesUnternehmen.plz}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'unternehmenTelefon',
      headerName: 'Telefonnummer',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.verantwortlichesUnternehmen.telefon}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'unternehmenFax',
      headerName: 'Faxnummer',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.verantwortlichesUnternehmen.fax}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'unternehmenEmail',
      headerName: 'E-Mail-Adresse',
      headerAlign: 'center',
      align: 'center',
      minWidth: 250,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.verantwortlichesUnternehmen.email}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'unternehmenKategorie',
      headerName: 'Unternehmenskategorie (RU/IM)',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Unternehmenskategorie
              <br />
              (RU/IM)
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.verantwortlichesUnternehmen.unternehmensKategorie}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'unternehmenArbeitsort',
      headerName: 'Arbeitsort',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'unternehmen-header iconColor  rotateTitle border-right',
      cellClassName: 'unternehmen-cell border-right',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.verantwortlichesUnternehmen.arbeitsort}
            </Typography>
          </Box>
        )
      },
    },
  ]

  const klasseColumns: GridColDef<Person>[] = [
    {
      field: 'klasseA',
      headerName: 'A',
      headerAlign: 'center',
      align: 'center',
      minWidth: 50,
      headerClassName: 'klasse-header iconColor  rotateTitle',
      cellClassName: 'klasse-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.klasse.A ? 'ja' : 'nein'}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'klasseA1',
      headerName: 'A1',
      headerAlign: 'center',
      align: 'center',
      minWidth: 50,
      headerClassName: 'klasse-header iconColor  rotateTitle',
      cellClassName: 'klasse-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.klasse.A1 ? 'ja' : 'nein'}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'klasseA2',
      headerName: 'A2',
      headerAlign: 'center',
      align: 'center',
      minWidth: 50,
      headerClassName: 'klasse-header iconColor  rotateTitle',
      cellClassName: 'klasse-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.klasse.A2 ? 'ja' : 'nein'}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'klasseA3',
      headerName: 'A3',
      headerAlign: 'center',
      align: 'center',
      minWidth: 50,
      headerClassName: 'klasse-header iconColor  rotateTitle',
      cellClassName: 'klasse-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.klasse.A3 ? 'ja' : 'nein'}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'klasseA4',
      headerName: 'A4',
      headerAlign: 'center',
      align: 'center',
      minWidth: 50,
      headerClassName: 'klasse-header iconColor  rotateTitle',
      cellClassName: 'klasse-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.klasse.A4 ? 'ja' : 'nein'}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'klasseA5',
      headerName: 'A5',
      headerAlign: 'center',
      align: 'center',
      minWidth: 50,
      headerClassName: 'klasse-header iconColor  rotateTitle',
      cellClassName: 'klasse-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.klasse.A5 ? 'ja' : 'nein'}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'klasseB',
      headerName: 'B',
      headerAlign: 'center',
      align: 'center',
      minWidth: 50,
      headerClassName: 'klasse-header iconColor  rotateTitle',
      cellClassName: 'klasse-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.klasse.B ? 'ja' : 'nein'}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'klasseB1',
      headerName: 'B1',
      headerAlign: 'center',
      align: 'center',
      minWidth: 50,
      headerClassName: 'klasse-header iconColor  rotateTitle',
      cellClassName: 'klasse-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.klasse.B1 ? 'ja' : 'nein'}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'klasseB2',
      headerName: 'B2',
      headerAlign: 'center',
      align: 'center',
      minWidth: 50,
      headerClassName: 'klasse-header iconColor  rotateTitle border-right',
      cellClassName: 'klasse-cell border-right',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.klasse.B2 ? 'ja' : 'nein'}
            </Typography>
          </Box>
        )
      },
    },
  ]

  const zusaetzlicheAngabenColumns: GridColDef<Person>[] = [
    {
      field: 'zusaetzlicheAngabenZelle1',
      headerName: 'Zelle 1',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'zusaetzlicheAngaben-header iconColor  rotateTitle',
      cellClassName: 'zusaetzlicheAngaben-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.zusaetzlicheAngaben.zelle1}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'zusaetzlicheAngabenZelle2',
      headerName: 'Zelle 2',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'zusaetzlicheAngaben-header iconColor  rotateTitle',
      cellClassName: 'zusaetzlicheAngaben-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.zusaetzlicheAngaben.zelle2}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'zusaetzlicheAngabenZelle3',
      headerName: 'Zelle 3',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName:
        'zusaetzlicheAngaben-header iconColor  rotateTitle border-right',
      cellClassName: 'zusaetzlicheAngaben-cell border-right',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.zusaetzlicheAngaben.zelle3}
            </Typography>
          </Box>
        )
      },
    },
  ]

  const einschraenkungenColumns: GridColDef<Person>[] = [
    {
      field: 'einschraenkungenZelle1',
      headerName: 'Zelle 1',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'einschraenkungen-header iconColor  rotateTitle',
      cellClassName: 'einschraenkungen-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.einschraenkungen.zelle1}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'einschraenkungenZelle2',
      headerName: 'Zelle 2',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'einschraenkungen-header iconColor  rotateTitle',
      cellClassName: 'einschraenkungen-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.einschraenkungen.zelle2}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'einschraenkungenZelle3',
      headerName: 'Zelle 3',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName:
        'einschraenkungen-header iconColor  rotateTitle border-right',
      cellClassName: 'einschraenkungen-cell border-right',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.einschraenkungen.zelle3}
            </Typography>
          </Box>
        )
      },
    },
  ]

  const aenderungColumns: GridColDef<Person>[] = [
    {
      field: 'aenderungDatum',
      headerName: 'Datum',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'aenderung-header iconColor  rotateTitle',
      cellClassName: 'aenderung-cell',
      renderCell: ({ row }) => formatDateToGermanLocale(row.aenderung?.datum),
    },
    {
      field: 'aenderungFeld3Klasse',
      headerName: 'Änderung in Feld 3 "Klasse"',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'aenderung-header iconColor  rotateTitle',
      cellClassName: 'aenderung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Änderung in Feld 3
              <br />
              "Klasse"
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aenderung?.aenderungFeld3Klasse ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aenderungFeld4Angaben',
      headerName: 'Änderung in Feld 4 "Zusätzliche Angaben"',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'aenderung-header iconColor  rotateTitle',
      cellClassName: 'aenderung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Änderung in Feld 4
              <br />
              "Zusätzliche Angaben"
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aenderung?.aenderungFeld4Angaben ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aenderungFeld5Sprachen',
      headerName: 'Änderung in Feld 5 "Sprachen"',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'aenderung-header iconColor  rotateTitle',
      cellClassName: 'aenderung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Änderung in Feld 5
              <br />
              "Sprachen"
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aenderung?.aenderungFeld5Sprachen ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aenderungFeld6Einschraenkung',
      headerName: 'Änderung in Feld 6 "Einschränkungen"',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'aenderung-header iconColor  rotateTitle',
      cellClassName: 'aenderung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Änderung in Feld 6
              <br />
              "Einschränkungen"
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aenderung?.aenderungFeld6Einschraenkung ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aenderungFeld7Fahrzeug',
      headerName: 'Änderung in Feld 7 "Fahrzeuge"',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'aenderung-header iconColor  rotateTitle',
      cellClassName: 'aenderung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Änderung in Feld 7
              <br />
              "Fahrzeuge"
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aenderung?.aenderungFeld7Fahrzeug ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aenderungFeld8Infrastruktur',
      headerName: 'Änderung in Feld 8 "Infrastruktur"',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'aenderung-header iconColor  rotateTitle',
      cellClassName: 'aenderung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Änderung in Feld 8
              <br />
              "Infrastruktur"
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aenderung?.aenderungFeld8Infrastruktur ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aenderungSontiges',
      headerName: 'Sontiges',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'aenderung-header iconColor  rotateTitle border-right',
      cellClassName: 'aenderung-cell border-right',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aenderung?.sontiges ?? ''}
            </Typography>
          </Box>
        )
      },
    },
  ]

  const aussetzungColumns: GridColDef<Person>[] = [
    {
      field: 'aussetzungVon',
      headerName: 'Von',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderCell: ({ row }) => formatDateToGermanLocale(row.aussetzung?.von),
    },
    {
      field: 'aussetzungBis',
      headerName: 'Bis',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderCell: ({ row }) => formatDateToGermanLocale(row.aussetzung?.bis),
    },
    {
      field: 'aussetzungWegfallFuehrerschein',
      headerName: 'Wegfall Führerschein',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall
              <br />
              Führerschein
              <br />
              §5 Abs. 2 S. 1 Nr. 1 TfV
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aussetzung?.wegfallFuehrerschein ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisAllgemeinKenntnisse',
      headerName: 'Wegfall Nachweis Allgemeine Kenntnisse',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Allgemeine Kenntnisse
              <br />
              §5 Abs. 2 S. 1 Nr. 2 TfV
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aussetzung?.wegfallNachweisAllgemeinKenntnisse ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisBefaehigung',
      headerName: 'Wegfall Nachweis Befähigung für Fahrzeug Tfz',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Befähigung für
              <br />
              Fahrzeug TfZ
              <br />
              §5 Abs. 2 S. 1 Nr. 2 TfV
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aussetzung?.wegfallNachweisBefaehigung ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisBetriebsverfahren',
      headerName: 'Wegfall Nachweis Betriebsverfahren',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Betriebsverfahren
              <br />
              §5 Abs. 2 S. 1 Nr. 3 TfV
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aussetzung?.wegfallNachweisBetriebsverfahren ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisZugbeeinflussungSysteme',
      headerName: 'Wegfall Nachweis Zugbeeinflussungssysteme',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Zugbeeinflussungs-
              <br />
              systeme
              <br />
              §5 Abs. 2 S. 1 Nr. 3 TfV
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aussetzung?.wegfallNachweisZugbeeinflussungSysteme ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisSignalSysteme',
      headerName: 'Wegfall Nachweis SignalSysteme',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Signalsystem
              <br />
              §5 Abs. 2 S. 1 Nr. 3 TfV
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aussetzung?.wegfallNachweisSignalSysteme ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisSchulung',
      headerName: 'Wegfall Nachweis Schulung SMS',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Schulung SMS
              <br />
              §5 Abs. 2 S. 1 Nr. 4 TfV
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aussetzung?.wegfallNachweisSchulung ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisSprachkenntnisse',
      headerName: 'Wegfall Nachweis Sprachkenntnisse',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Sprachkenntnisse
              <br />
              §5 Abs. 2 S. 2 TfV
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aussetzung?.wegfallNachweisSprachkenntnisse ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'aussetzungSontiges',
      headerName: 'Sontiges',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      headerClassName: 'aussetzung-header iconColor  rotateTitle border-right',
      cellClassName: 'aussetzung-cell border-right',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.aussetzung?.sontiges ?? ''}
            </Typography>
          </Box>
        )
      },
    },
  ]

  const entziehungColumns: GridColDef<Person>[] = [
    {
      field: 'entziehungDatum',
      headerName: 'Datum',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderCell: ({ row }) => formatDateToGermanLocale(row.entziehung?.datum),
    },
    {
      field: 'entziehungWegfallFuehrerschein',
      headerName: 'Wegfall Führerschein',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.entziehung?.wegfallFuehrerschein ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisAllgemeinKenntnisse',
      headerName: 'Wegfall Nachweis Allgemeine Kenntnisse',
      headerAlign: 'center',
      align: 'center',
      minWidth: 160,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Allgemeine Kenntnisse
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.entziehung?.wegfallNachweisAllgemeinKenntnisse ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisBefaehigung',
      headerName: 'Wegfall Nachweis Befähigung für Fahrzeug Tfz',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Befähigung für
              <br />
              Fahrzeug TfZ
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.entziehung?.wegfallNachweisBefaehigung ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisBetriebsverfahren',
      headerName: 'Wegfall Nachweis Betriebsverfahren',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Betriebsverfahren
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.entziehung?.wegfallNachweisBetriebsverfahren ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisZugbeeinflussungSysteme',
      headerName: 'Wegfall Nachweis Zugbeeinflussungssysteme',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Zugbeeinflussungs-
              <br />
              Systeme
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.entziehung?.wegfallNachweisZugbeeinflussungSysteme ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisSignalSysteme',
      headerName: 'Wegfall Nachweis SignalSysteme',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              SignalSysteme
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.entziehung?.wegfallNachweisSignalSysteme ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisSchulung',
      headerName: 'Wegfall Nachweis Schulung SMS',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Schulung SMS
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.entziehung?.wegfallNachweisSchulung ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisSprachkenntnisse',
      headerName: 'Wegfall Nachweis Sprachkenntnisse',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Wegfall Nachweis
              <br />
              Sprachkenntnisse
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.entziehung?.wegfallNachweisSprachkenntnisse ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'entziehungausscheidenUnternehmen',
      headerName: 'Ausscheiden aus Unternehmen',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Ausscheiden aus
              <br />
              Unternehmen
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.entziehung?.ausscheidenUnternehmen ?? ''}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'entziehungSontiges',
      headerName: 'Sontiges',
      headerAlign: 'center',
      align: 'center',
      minWidth: 250,
      headerClassName: 'entziehung-header iconColor  rotateTitle border-right',
      cellClassName: 'entziehung-cell border-right',
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.entziehung?.sontiges ?? ''}
            </Typography>
          </Box>
        )
      },
    },
  ]

  const verlorenZbColumns: GridColDef<Person>[] = [
    {
      field: 'verlorenZbDatumMeldung',
      headerName: 'Datum der Meldung',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'verloren-header iconColor  rotateTitle',
      cellClassName: 'verloren-cell',
      renderCell: ({ row }) =>
        formatDateToGermanLocale(row.verlorenZb?.datumMeldung),
    },
    {
      field: 'verlorenZbDatumAustellungErsatzbeschinigung',
      headerName: 'Datum der Austellung der Ersatzbescheinigung',
      headerAlign: 'center',
      align: 'center',
      minWidth: 175,
      headerClassName: 'verloren-header iconColor  rotateTitle',
      cellClassName: 'verloren-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Datum der Ausstellung
              <br />
              der Ersatzbescheinigung
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) =>
        formatDateToGermanLocale(
          row.verlorenZb?.datumAustellungErsatzbeschinigung,
        ),
    },
  ]
  const entwendetZbColumns: GridColDef<Person>[] = [
    {
      field: 'entwendetZbDatumMeldung',
      headerName: 'Datum der Meldung',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'entwendet-header iconColor  rotateTitle',
      cellClassName: 'entwendet-cell',
      renderCell: ({ row }) =>
        formatDateToGermanLocale(row.entwendetZb?.datumMeldung),
    },
    {
      field: 'entwendetZbDatumAustellungErsatzbeschinigung',
      headerName: 'Datum der Austellung der Ersatzbescheinigung',
      headerAlign: 'center',
      align: 'center',
      minWidth: 175,
      headerClassName: 'entwendet-header iconColor  rotateTitle border-right',
      cellClassName: 'entwendet-cell border-right',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Datum der Ausstellung
              <br />
              der Ersatzbescheinigung
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) =>
        formatDateToGermanLocale(
          row.entwendetZb?.datumAustellungErsatzbeschinigung,
        ),
    },
  ]
  const zerstoertZbColumns: GridColDef<Person>[] = [
    {
      field: 'zerstoertZbDatumMeldung',
      headerName: 'Datum der Meldung',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'zerstoert-header iconColor  rotateTitle',
      cellClassName: 'zerstoert-cell',
      renderCell: ({ row }) =>
        formatDateToGermanLocale(row.zerstoertZb?.datumMeldung),
    },
    {
      field: 'zerstoertZbDatumAustellungErsatzbeschinigung',
      headerName: 'Datum der Austellung der Ersatzbescheinigung',
      headerAlign: 'center',
      align: 'center',
      minWidth: 175,
      headerClassName: 'zerstoert-header iconColor  rotateTitle border-right',
      cellClassName: 'zerstoert-cell border-right',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Datum der Ausstellung
              <br />
              der Ersatzbescheinigung
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) =>
        formatDateToGermanLocale(
          row.zerstoertZb?.datumAustellungErsatzbeschinigung,
        ),
    },
  ]

  const weitereAngabenColumns: GridColDef<Person>[] = [
    {
      field: 'weitereAngabenTauglichkeitLetzteUntersuchung',
      headerName: 'Tauglichkeit letzte Untersuchung',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'weitereAngaben-header iconColor  rotateTitle',
      cellClassName: 'weitereAngaben-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Tauglichkeit
              <br />
              letzte Untersuchung
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) =>
        formatDateToGermanLocale(
          row.weitereAngaben.tauglichkeit.letzteUntersuchung,
        ),
    },
    {
      field: 'weitereAngabenTauglichkeitNaechsteUntersuchung',
      headerName: 'Tauglichkeit nächste Untersuchung',
      headerAlign: 'center',
      align: 'center',
      minWidth: 160,
      headerClassName: 'weitereAngaben-header iconColor  rotateTitle',
      cellClassName: 'weitereAngaben-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Tauglichkeit
              <br />
              nächste Untersuchung
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) =>
        formatDateToGermanLocale(
          row.weitereAngaben.tauglichkeit.naechsteUntersuchung,
        ),
    },
    {
      field: 'weitereAngabenTauglichkeitHinweise',
      headerName: 'Tauglichkeit Hinweise',
      headerAlign: 'center',
      align: 'center',
      minWidth: 250,
      headerClassName: 'weitereAngaben-header iconColor  rotateTitle',
      cellClassName: 'weitereAngaben-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Tauglichkeit
              <br />
              Hinweise
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              {row.weitereAngaben.tauglichkeit.hinweise}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'weitereAngabenSmsSchulungLetzteSchulung',
      headerName: 'Schulung SMS letzte Schulug',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'weitereAngaben-header iconColor  rotateTitle',
      cellClassName: 'weitereAngaben-cell',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Schulung SMS
              <br />
              letzte Schulung
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) =>
        formatDateToGermanLocale(row.weitereAngaben.smsSchulung.letzteSchulung),
    },
    {
      field: 'weitereAngabenSmsSchulungNaechsteSchulung',
      headerName: 'Schulung SMS nächste Schulug',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName:
        'weitereAngaben-header iconColor  rotateTitle border-right',
      cellClassName: 'weitereAngaben-cell border-right',
      renderHeader: () => {
        return (
          <Box className="flex h-full items-center justify-center">
            <Typography noWrap variant="body2">
              Schulung SMS
              <br />
              nächste Schulung
            </Typography>
          </Box>
        )
      },
      renderCell: ({ row }) =>
        formatDateToGermanLocale(
          row.weitereAngaben.smsSchulung.naechsteSchulung,
        ),
    },
  ]

  const generateSprachkenntnisseColumns = (index: number) => {
    const columns: GridColDef<Person>[] = [
      {
        field: `sprachkenntnisseBezeichnung${index + 1}`,
        headerName: `Sprachkenntnisse ${index + 1} Bezeichnung`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 130,
        headerClassName: 'sprachkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'sprachkenntnisse-cell',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Sprache {index + 1}
                <br />
                Bezeichnung
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) => {
          const value = row.sprachkenntnisse[index]?.bezeichnung
          return value ? (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                {value}
              </Typography>
            </Box>
          ) : (
            ''
          )
        },
      },
      {
        field: `sprachkenntnisseErwerb${index + 1}`,
        headerName: `Sprachkenntnisse ${index + 1} Erwerb`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 130,
        headerClassName: 'sprachkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'sprachkenntnisse-cell',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Sprache {index + 1}
                <br />
                Erwerb
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) =>
          formatDateToGermanLocale(row.sprachkenntnisse[index]?.erwerb),
      },
      {
        field: `sprachkenntnisseLetzteUeberpruefung${index + 1}`,
        headerName: `Sprachkenntnisse ${index + 1} letzte Überpruefung`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 150,
        headerClassName: 'sprachkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'sprachkenntnisse-cell',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Sprache {index + 1}
                <br />
                letzte Überprüfung
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) =>
          formatDateToGermanLocale(
            row.sprachkenntnisse[index]?.letzteUeberpruefung,
          ),
      },
      {
        field: `sprachkenntnisseNaechsteUeberpruefung${index + 1}`,
        headerName: `Sprachkenntnisse ${index + 1} nächste Überpruefung`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 160,
        headerClassName: 'sprachkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'sprachkenntnisse-cell',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Sprache {index + 1}
                <br />
                nächste Überprüfung
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) =>
          formatDateToGermanLocale(
            row.sprachkenntnisse[index]?.naechsteUeberpruefung,
          ),
      },
      {
        field: `sprachkenntnisseHinweise${index + 1}`,
        headerName: `Sprachkenntnisse ${index + 1} Hinweise`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 200,
        headerClassName:
          'sprachkenntnisse-header iconColor  rotateTitle border-right',
        cellClassName: 'sprachkenntnisse-cell border-right',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Sprache {index + 1}
                <br />
                Hinweis
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) => {
          const value = row.sprachkenntnisse[index]?.hinweise
          return value ? (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                {value}
              </Typography>
            </Box>
          ) : (
            ''
          )
        },
      },
    ]
    return columns
  }

  const sprachkenntnisseColumns: GridColDef<Person>[] = Array.from(
    { length: 4 },
    (_, index) => generateSprachkenntnisseColumns(index),
  ).flat()

  const generateFahrzeugkenntnisseColumns = (index: number) => {
    const columns: GridColDef<Person>[] = [
      {
        field: `fahrzeugkenntnisseBezeichnung${index + 1}`,
        headerName: `Fahrzeugkenntnisse ${index + 1} Bezeichnung`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 150,
        headerClassName: 'fahrzeugkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'fahrzeugkenntnisse-cell',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Triebfahrzeug {index + 1}
                <br />
                Bezeichnung
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) => {
          const value = row.fahrzeugkenntnisse[index]?.bezeichnung
          return value ? (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                {value}
              </Typography>
            </Box>
          ) : (
            ''
          )
        },
      },
      {
        field: `fahrzeugkenntnisseErwerb${index + 1}`,
        headerName: `Fahrzeugkenntnisse ${index + 1} Erwerb`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 150,
        headerClassName: 'fahrzeugkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'fahrzeugkenntnisse-cell',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Triebfahrzeug {index + 1}
                <br />
                Erwerb
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) =>
          formatDateToGermanLocale(row.fahrzeugkenntnisse[index]?.erwerb),
      },
      {
        field: `fahrzeugkenntnisseLetzteUeberpruefung${index + 1}`,
        headerName: `Fahrzeugkenntnisse ${index + 1} letzte Überpruefung`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 170,
        headerClassName: 'fahrzeugkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'fahrzeugkenntnisse-cell',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Triebfahrzeug {index + 1}
                <br />
                letzte Ueberpruefung
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) =>
          formatDateToGermanLocale(
            row.fahrzeugkenntnisse[index]?.letzteUeberpruefung,
          ),
      },
      {
        field: `fahrzeugkenntnisseNaechsteUeberpruefung${index + 1}`,
        headerName: `Fahrzeugkenntnisse ${index + 1} nächste Überpruefung`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 180,
        headerClassName: 'fahrzeugkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'fahrzeugkenntnisse-cell',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Triebfahrzeug {index + 1}
                <br />
                nächste Überpruefung
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) =>
          formatDateToGermanLocale(
            row.fahrzeugkenntnisse[index]?.naechsteUeberpruefung,
          ),
      },
      {
        field: `fahrzeugkenntnisseHinweise${index + 1}`,
        headerName: `Fahrzeugkenntnisse ${index + 1} Hinweise`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 200,
        headerClassName:
          'fahrzeugkenntnisse-header iconColor  rotateTitle border-right',
        cellClassName: 'fahrzeugkenntnisse-cell border-right',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Triebfahrzeug {index + 1}
                <br />
                Hinweise
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) => {
          const value = row.fahrzeugkenntnisse[index]?.hinweise
          return value ? (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                {value}
              </Typography>
            </Box>
          ) : (
            ''
          )
        },
      },
    ]
    return columns
  }

  const fahrzeugkenntnisseColumns: GridColDef<Person>[] = Array.from(
    { length: 100 },
    (_, index) => generateFahrzeugkenntnisseColumns(index),
  ).flat()

  const generateInfrastrukturkenntnisseColumns = (index: number) => {
    const columns: GridColDef<Person>[] = [
      {
        field: `infrastrukturkenntnisseBezeichnung${index + 1}`,
        headerName: `Infrastrukturkenntnisse ${index + 1} Bezeichnung`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 200,
        headerClassName:
          'infrastrukturkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'infrastrukturkenntnisse-cell',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Infrastruktur {index + 1}
                <br />
                Bezeichnung
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) => {
          const value = row.infrastrukturkenntnisse[index]?.bezeichnung
          return value ? (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                {value}
              </Typography>
            </Box>
          ) : (
            ''
          )
        },
      },
      {
        field: `infrastrukturkenntnisseErwerb${index + 1}`,
        headerName: `Infrastrukturkenntnisse ${index + 1} Erwerb`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 130,
        headerClassName:
          'infrastrukturkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'infrastrukturkenntnisse-cell',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Infrastruktur {index + 1}
                <br />
                Erwerb
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) =>
          formatDateToGermanLocale(row.infrastrukturkenntnisse[index]?.erwerb),
      },
      {
        field: `infrastrukturkenntnisseLetzteUeberpruefung${index + 1}`,
        headerName: `Infrastrukturkenntnisse ${index + 1} letzte Überpruefung`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 160,
        headerClassName:
          'infrastrukturkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'infrastrukturkenntnisse-cell',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Infrastruktur {index + 1}
                <br />
                letzte Überpruefung
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) =>
          formatDateToGermanLocale(
            row.infrastrukturkenntnisse[index]?.letzteUeberpruefung,
          ),
      },
      {
        field: `infrastrukturkenntnisseNaechsteUeberpruefung${index + 1}`,
        headerName: `Infrastrukturkenntnisse ${index + 1} nächste Überpruefung`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 180,
        headerClassName:
          'infrastrukturkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'infrastrukturkenntnisse-cell',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Infrastruktur {index + 1}
                <br />
                nächste Überpruefung
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) =>
          formatDateToGermanLocale(
            row.infrastrukturkenntnisse[index]?.naechsteUeberpruefung,
          ),
      },
      {
        field: `infrastrukturkenntnisseHinweise${index + 1}`,
        headerName: `Infrastrukturkenntnisse ${index + 1} Hinweise`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 200,
        headerClassName:
          'infrastrukturkenntnisse-header iconColor  rotateTitle border-right',
        cellClassName: 'infrastrukturkenntnisse-cell border-right',
        renderHeader: () => {
          return (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                Infrastruktur {index + 1}
                <br />
                Hinweise
              </Typography>
            </Box>
          )
        },
        renderCell: ({ row }) => {
          const value = row.infrastrukturkenntnisse[index]?.hinweise
          return value ? (
            <Box className="flex h-full items-center justify-center">
              <Typography noWrap variant="body2">
                {value}
              </Typography>
            </Box>
          ) : (
            ''
          )
        },
      },
    ]
    return columns
  }

  const infrastrukturkenntnisseColumns: GridColDef<Person>[] = Array.from(
    { length: 42 },
    (_, index) => generateInfrastrukturkenntnisseColumns(index),
  ).flat()

  const fuehrerschein = showColumns.find((item) => item.value === 1)
  const inhaber = showColumns.find((item) => item.value === 2)
  const zusatzbescheinigung = showColumns.find((item) => item.value === 3)
  const organisationseinheit = showColumns.find((item) => item.value === 4)
  const bilder = showColumns.find((item) => item.value === 5)
  const unternehmen = showColumns.find((item) => item.value === 6)
  const klasse = showColumns.find((item) => item.value === 7)
  const zusaetzlicheAngaben = showColumns.find((item) => item.value === 8)
  const einschraenkungen = showColumns.find((item) => item.value === 9)
  const aenderung = showColumns.find((item) => item.value === 10)
  const aussetzung = showColumns.find((item) => item.value === 11)
  const entziehung = showColumns.find((item) => item.value === 12)
  const verloren = showColumns.find((item) => item.value === 13)
  const entwendet = showColumns.find((item) => item.value === 14)
  const zerstoert = showColumns.find((item) => item.value === 15)
  const weitereAngaben = showColumns.find((item) => item.value === 16)
  const sprachkenntnisse = showColumns.find((item) => item.value === 17)
  const fahrzeugkenntnisse = showColumns.find((item) => item.value === 18)
  const infrastrukturkenntnisse = showColumns.find((item) => item.value === 19)

  return [
    ...nameColumns,
    ...(fuehrerschein?.selected ? fuehrerscheinColumns : []),
    ...(inhaber?.selected ? inhaberColumns : []),
    ...(zusatzbescheinigung?.selected ? zusatzbescheinigungColumns : []),
    ...(organisationseinheit?.selected ? organisationseinheitColumns : []),
    ...(bilder?.selected ? bilderColumns : []),
    ...(unternehmen?.selected ? unternehmenColumns : []),
    ...(klasse?.selected ? klasseColumns : []),
    ...(zusaetzlicheAngaben?.selected ? zusaetzlicheAngabenColumns : []),
    ...(einschraenkungen?.selected ? einschraenkungenColumns : []),
    ...(aenderung?.selected ? aenderungColumns : []),
    ...(aussetzung?.selected ? aussetzungColumns : []),
    ...(entziehung?.selected ? entziehungColumns : []),
    ...(verloren?.selected ? verlorenZbColumns : []),
    ...(entwendet?.selected ? entwendetZbColumns : []),
    ...(zerstoert?.selected ? zerstoertZbColumns : []),
    ...(weitereAngaben?.selected ? weitereAngabenColumns : []),
    ...(sprachkenntnisse?.selected ? sprachkenntnisseColumns : []),
    ...(fahrzeugkenntnisse?.selected ? fahrzeugkenntnisseColumns : []),
    ...(infrastrukturkenntnisse?.selected
      ? infrastrukturkenntnisseColumns
      : []),
  ]
}
