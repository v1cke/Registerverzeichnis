import { GridColDef } from '@mui/x-data-grid'
import { Person } from '../types/types'
import { makeStyles, Typography } from '@mui/material'
import { ShowColumns } from '../page'

// const useStyles = makeStyles({
//   headerName: {
//     backgroundColor: '#f0f0f0',
//   },
//   headerVorname: {
//     backgroundColor: '#d0f0c0',
//   },
//   headerFuehrerscheinNummer: {
//     backgroundColor: '#f8d7da',
//   },
//   headerFuehrerscheinStatus: {
//     backgroundColor: '#d1ecf1',
//   },
// })

export const fbTableColumns = (
  showColumns: ShowColumns[],
): GridColDef<Person>[] => {
  const columns: GridColDef<Person>[] = [
    {
      field: 'name',
      headerName: 'Name',
      headerAlign: 'center',
      align: 'right',
      minWidth: 100,
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
  ]

  const fuehrerscheinColumns: GridColDef<Person>[] = [
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
  ]

  const inhaberColumns: GridColDef<Person>[] = [
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
  ]

  const zusatzbescheinigungColumns: GridColDef<Person>[] = [
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

  const organisationseinheitColumns: GridColDef<Person>[] = [
    {
      field: 'organisationseinheitBezeichnung',
      headerName: 'bezeichnung',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.ausstellendeOrganisationseinheit.bezeichnung}
          </Typography>
        )
      },
    },
    {
      field: 'organisationseinheitStrasseUndNummer',
      headerName: 'Strasse und Hausnummer',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.ausstellendeOrganisationseinheit.strasseUndNummer}
          </Typography>
        )
      },
    },
    {
      field: 'organisationseinheitPlz',
      headerName: 'Postleitzahl',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.ausstellendeOrganisationseinheit.plz}
          </Typography>
        )
      },
    },
    {
      field: 'organisationseinheitTelefon',
      headerName: 'Telefonnummer',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.ausstellendeOrganisationseinheit.telefon}
          </Typography>
        )
      },
    },
    {
      field: 'organisationseinheitfax',
      headerName: 'Faxnummer',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.ausstellendeOrganisationseinheit.fax}
          </Typography>
        )
      },
    },
    {
      field: 'organisationseinheitEmail',
      headerName: 'E-Mail-Adresse',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.ausstellendeOrganisationseinheit.email}
          </Typography>
        )
      },
    },
    {
      field: 'organisationseinheitOrt',
      headerName: 'Ablauf Gueltigkeit',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.ausstellendeOrganisationseinheit.ort}
          </Typography>
        )
      },
    },
  ]

  const bilderColumns: GridColDef<Person>[] = [
    {
      field: 'fuehrerscheinLichtBild',
      headerName: 'LichtBild',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {/* {row.bilder.lichtBild} */}
            lichtBild
          </Typography>
        )
      },
    },
    {
      field: 'fuehrerscheinUnterschrift',
      headerName: 'Unterschrift',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {/* {row.bilder.unterschrift} */}
            unterschrift
          </Typography>
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
      minWidth: 180,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.verantwortlichesUnternehmen.bezeichnung}
          </Typography>
        )
      },
    },
    {
      field: 'unternehmenStrasseUndNummer',
      headerName: 'Strasse und Hausummer',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.verantwortlichesUnternehmen.strasseUndNummer}
          </Typography>
        )
      },
    },
    {
      field: 'unternehmenOrt',
      headerName: 'Ort',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.verantwortlichesUnternehmen.ort}
          </Typography>
        )
      },
    },
    {
      field: 'unternehmenLand',
      headerName: 'Land',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.verantwortlichesUnternehmen.land}
          </Typography>
        )
      },
    },
    {
      field: 'unternehmenPlz',
      headerName: 'Postleitzahl',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.verantwortlichesUnternehmen.plz}
          </Typography>
        )
      },
    },
    {
      field: 'unternehmenTelefon',
      headerName: 'Telefonnummer',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.verantwortlichesUnternehmen.telefon}
          </Typography>
        )
      },
    },
    {
      field: 'unternehmenFax',
      headerName: 'Faxnummer',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.verantwortlichesUnternehmen.fax}
          </Typography>
        )
      },
    },
    {
      field: 'unternehmenEmail',
      headerName: 'E-Mail-Adresse',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.verantwortlichesUnternehmen.email}
          </Typography>
        )
      },
    },
    {
      field: 'unternehmenKategorie',
      headerName: 'Unternehmenskategorie (RU/IM)',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.verantwortlichesUnternehmen.unternehmensKategorie}
          </Typography>
        )
      },
    },
    {
      field: 'unternehmenArbeitsort',
      headerName: 'Arbeitsort',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.verantwortlichesUnternehmen.arbeitsort}
          </Typography>
        )
      },
    },
  ]

  const klasseColumns: GridColDef<Person>[] = [
    {
      field: 'fuehrerscheinA',
      headerName: 'A',
      headerAlign: 'center',
      align: 'center',
      minWidth: 180,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.klasse.A ? 'ja' : 'nein'}
          </Typography>
        )
      },
    },
    {
      field: 'fuehrerschein',
      headerName: 'A1',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.klasse.A1 ? 'ja' : 'nein'}
          </Typography>
        )
      },
    },
    {
      field: 'fuehrerscheinA2',
      headerName: 'A2',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.klasse.A2 ? 'ja' : 'nein'}
          </Typography>
        )
      },
    },
    {
      field: 'fuehrerscheinA3',
      headerName: 'A3',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.klasse.A3 ? 'ja' : 'nein'}
          </Typography>
        )
      },
    },
    {
      field: 'fuehrerscheinA4',
      headerName: 'A4',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.klasse.A4 ? 'ja' : 'nein'}
          </Typography>
        )
      },
    },
    {
      field: 'fuehrerscheinA5',
      headerName: 'A5',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.klasse.A5 ? 'ja' : 'nein'}
          </Typography>
        )
      },
    },
    {
      field: 'fuehrerscheinB',
      headerName: 'B',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.klasse.B ? 'ja' : 'nein'}
          </Typography>
        )
      },
    },
    {
      field: 'fuehrerscheinB1',
      headerName: 'B1',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.klasse.B1 ? 'ja' : 'nein'}
          </Typography>
        )
      },
    },
    {
      field: 'fuehrerscheinB2',
      headerName: 'B2',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.klasse.B2 ? 'ja' : 'nein'}
          </Typography>
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
      minWidth: 180,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.zusaetzlicheAngaben.zelle1}
          </Typography>
        )
      },
    },
    {
      field: 'zusaetzlicheAngabenZelle2',
      headerName: 'Zelle 2',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.zusaetzlicheAngaben.zelle2}
          </Typography>
        )
      },
    },
    {
      field: 'zusaetzlicheAngabenZelle3',
      headerName: 'Zelle 3',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.zusaetzlicheAngaben.zelle3}
          </Typography>
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
      minWidth: 180,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.einschraenkungen.zelle1}
          </Typography>
        )
      },
    },
    {
      field: 'einschraenkungenZelle2',
      headerName: 'Zelle 2',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.einschraenkungen.zelle2}
          </Typography>
        )
      },
    },
    {
      field: 'einschraenkungenZelle3',
      headerName: 'Zelle 3',
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.einschraenkungen.zelle3}
          </Typography>
        )
      },
    },
  ]

  const fuehrerschein = showColumns.find((item) => item.value === 1)
  const inhaber = showColumns.find((item) => item.value === 2)
  const zusatzbescheinigung = showColumns.find((item) => item.value === 3)
  const organisationseinheit = showColumns.find((item) => item.value === 4)
  const bilder = showColumns.find((item) => item.value === 5)
  const unternehmen = showColumns.find((item) => item.value === 6)
  const klasse = showColumns.find((item) => item.value === 7)
  const zusaetzlicheAngaben = showColumns.find((item) => item.value === 8)
  const einschraenkungen = showColumns.find((item) => item.value === 9)
  const aenderungen = showColumns.find((item) => item.value === 10)
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
    ...columns,
    ...(fuehrerschein?.selected ? fuehrerscheinColumns : []),
    ...(inhaber?.selected ? inhaberColumns : []),
    ...(zusatzbescheinigung?.selected ? zusatzbescheinigungColumns : []),
    ...(organisationseinheit?.selected ? organisationseinheitColumns : []),
    ...(bilder?.selected ? bilderColumns : []),
    ...(unternehmen?.selected ? unternehmenColumns : []),
    ...(klasse?.selected ? klasseColumns : []),
    ...(zusaetzlicheAngaben?.selected ? zusaetzlicheAngabenColumns : []),
    ...(einschraenkungen?.selected ? einschraenkungenColumns : []),
    // ...(aenderungen?.selected ? organisationseinheitColumns : []),
    // ...(aussetzung?.selected ? organisationseinheitColumns : []),
    // ...(entziehung?.selected ? organisationseinheitColumns : []),
    // ...(verloren?.selected ? organisationseinheitColumns : []),
    // ...(entwendet?.selected ? organisationseinheitColumns : []),
    // ...(zerstoert?.selected ? organisationseinheitColumns : []),
    // ...(weitereAngaben?.selected ? organisationseinheitColumns : []),
    // ...(sprachkenntnisse?.selected ? organisationseinheitColumns : []),
    // ...(fahrzeugkenntnisse?.selected ? organisationseinheitColumns : []),
    // ...(infrastrukturkenntnisse?.selected ? organisationseinheitColumns : []),
  ]
}

// showColumns.find((item) => item.value === 2)?.selected &&
