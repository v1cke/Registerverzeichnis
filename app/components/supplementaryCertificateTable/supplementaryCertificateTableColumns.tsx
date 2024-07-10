import { GridColDef } from '@mui/x-data-grid'
import { Person } from '../../types/types'
import { Typography, useTheme } from '@mui/material'
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
      align: 'right',
      minWidth: 130,
      headerClassName: 'name-header iconColor  rotateTitle',
      cellClassName: 'name-cell',
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
      minWidth: 100,
      headerClassName: 'name-header iconColor  rotateTitle border-right',
      cellClassName: 'name-cell border-right',
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
      minWidth: 130,
      headerClassName: 'fuehrerschein-header iconColor  rotateTitle',
      cellClassName: 'fuehrerschein-cell',
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
      minWidth: 100,
      headerClassName:
        'fuehrerschein-header iconColor  rotateTitle border-right',
      cellClassName: 'fuehrerschein-cell border-right',
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
      minWidth: 100,
      headerClassName: 'inhaber-header iconColor  rotateTitle border-right',
      cellClassName: 'inhaber-cell border-right',
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
      minWidth: 100,
      headerClassName: 'zusatzbescheinigung-header iconColor  rotateTitle',
      cellClassName: 'zusatzbescheinigung-cell',
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
      minWidth: 100,
      headerClassName: 'zusatzbescheinigung-header iconColor  rotateTitle',
      cellClassName: 'zusatzbescheinigung-cell',
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
      minWidth: 100,
      headerClassName: 'zusatzbescheinigung-header iconColor  rotateTitle',
      cellClassName: 'zusatzbescheinigung-cell',
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
      minWidth: 200,
      headerClassName: 'organisationseinheit-header iconColor  rotateTitle',
      cellClassName: 'organisationseinheit-cell',
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
      minWidth: 100,
      headerClassName: 'organisationseinheit-header iconColor  rotateTitle',
      cellClassName: 'organisationseinheit-cell',
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
      minWidth: 130,
      headerClassName: 'organisationseinheit-header iconColor  rotateTitle',
      cellClassName: 'organisationseinheit-cell',
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
      minWidth: 130,
      headerClassName: 'organisationseinheit-header iconColor  rotateTitle',
      cellClassName: 'organisationseinheit-cell',
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
      minWidth: 250,
      headerClassName: 'organisationseinheit-header iconColor  rotateTitle',
      cellClassName: 'organisationseinheit-cell',
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
      minWidth: 200,
      headerClassName:
        'organisationseinheit-header iconColor  rotateTitle border-right',
      cellClassName: 'organisationseinheit-cell border-right',
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
      field: 'bilderLichtBild',
      headerName: 'LichtBild',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      headerClassName: 'bilder-header iconColor  rotateTitle',
      cellClassName: 'bilder-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.bilder.lichtBild ? 'vorhanden' : 'nicht vorhanden'}
          </Typography>
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
          <Typography noWrap variant="body2">
            {row.bilder.unterschrift ? 'vorhanden' : 'nicht vorhanden'}
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
      minWidth: 200,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
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
      minWidth: 200,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
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
      minWidth: 150,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
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
      minWidth: 150,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
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
      minWidth: 100,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
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
      minWidth: 200,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
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
      minWidth: 150,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
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
      minWidth: 250,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
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
      minWidth: 200,
      headerClassName: 'unternehmen-header iconColor  rotateTitle',
      cellClassName: 'unternehmen-cell',
      renderHeader: () => {
        return (
          <Typography noWrap variant="body2">
            Unternehmenskategorie
            <br />
            (RU/IM)
          </Typography>
        )
      },
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
      minWidth: 150,
      headerClassName: 'unternehmen-header iconColor  rotateTitle border-right',
      cellClassName: 'unternehmen-cell border-right',
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
      field: 'klasseA',
      headerName: 'A',
      headerAlign: 'center',
      align: 'center',
      minWidth: 50,
      headerClassName: 'klasse-header iconColor  rotateTitle',
      cellClassName: 'klasse-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.klasse.A ? 'ja' : 'nein'}
          </Typography>
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
          <Typography noWrap variant="body2">
            {row.klasse.A1 ? 'ja' : 'nein'}
          </Typography>
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
          <Typography noWrap variant="body2">
            {row.klasse.A2 ? 'ja' : 'nein'}
          </Typography>
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
          <Typography noWrap variant="body2">
            {row.klasse.A3 ? 'ja' : 'nein'}
          </Typography>
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
          <Typography noWrap variant="body2">
            {row.klasse.A4 ? 'ja' : 'nein'}
          </Typography>
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
          <Typography noWrap variant="body2">
            {row.klasse.A5 ? 'ja' : 'nein'}
          </Typography>
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
          <Typography noWrap variant="body2">
            {row.klasse.B ? 'ja' : 'nein'}
          </Typography>
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
          <Typography noWrap variant="body2">
            {row.klasse.B1 ? 'ja' : 'nein'}
          </Typography>
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
      minWidth: 100,
      headerClassName: 'zusaetzlicheAngaben-header iconColor  rotateTitle',
      cellClassName: 'zusaetzlicheAngaben-cell',
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
      minWidth: 100,
      headerClassName: 'zusaetzlicheAngaben-header iconColor  rotateTitle',
      cellClassName: 'zusaetzlicheAngaben-cell',
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
      minWidth: 100,
      headerClassName:
        'zusaetzlicheAngaben-header iconColor  rotateTitle border-right',
      cellClassName: 'zusaetzlicheAngaben-cell border-right',
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
      minWidth: 100,
      headerClassName: 'einschraenkungen-header iconColor  rotateTitle',
      cellClassName: 'einschraenkungen-cell',
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
      minWidth: 100,
      headerClassName: 'einschraenkungen-header iconColor  rotateTitle',
      cellClassName: 'einschraenkungen-cell',
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
      minWidth: 100,
      headerClassName:
        'einschraenkungen-header iconColor  rotateTitle border-right',
      cellClassName: 'einschraenkungen-cell border-right',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.einschraenkungen.zelle3}
          </Typography>
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
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aenderung?.aenderungFeld3Klasse ?? ''}
          </Typography>
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
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aenderung?.aenderungFeld4Angaben ?? ''}
          </Typography>
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
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aenderung?.aenderungFeld5Sprachen ?? ''}
          </Typography>
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
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aenderung?.aenderungFeld6Einschraenkung ?? ''}
          </Typography>
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
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aenderung?.aenderungFeld7Fahrzeug ?? ''}
          </Typography>
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
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aenderung?.aenderungFeld8Infrastruktur ?? ''}
          </Typography>
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
          <Typography noWrap variant="body2">
            {row.aenderung?.sontiges ?? ''}
          </Typography>
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
      minWidth: 100,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aussetzung?.wegfallFuehrerschein ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisAllgemeinKenntnisse',
      headerName: 'Wegfall Nachweis Allgemeine Kenntnisse',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aussetzung?.wegfallNachweisAllgemeinKenntnisse ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisBefaehigung',
      headerName: 'Wegfall Nachweis Befähigung für Fahrzeug Tfz',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aussetzung?.wegfallNachweisBefaehigung ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisBetriebsverfahren',
      headerName: 'Wegfall Nachweis Betriebsverfahren',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aussetzung?.wegfallNachweisBetriebsverfahren ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisZugbeeinflussungSysteme',
      headerName: 'Wegfall Nachweis Zugbeeinflussungssysteme',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aussetzung?.wegfallNachweisZugbeeinflussungSysteme ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisSignalSysteme',
      headerName: 'Wegfall Nachweis SignalSysteme',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aussetzung?.wegfallNachweisSignalSysteme ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisSchulung',
      headerName: 'Wegfall Nachweis Schulung SMS',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aussetzung?.wegfallNachweisSchulung ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'aussetzungWegfallNachweisSprachkenntnisse',
      headerName: 'Wegfall Nachweis Sprachkenntnisse',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'aussetzung-header iconColor  rotateTitle',
      cellClassName: 'aussetzung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.aussetzung?.wegfallNachweisSprachkenntnisse ?? ''}
          </Typography>
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
          <Typography noWrap variant="body2">
            {row.aussetzung?.sontiges ?? ''}
          </Typography>
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
      minWidth: 100,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.entziehung?.wegfallFuehrerschein ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisAllgemeinKenntnisse',
      headerName: 'Wegfall Nachweis Allgemeine Kenntnisse',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.entziehung?.wegfallNachweisAllgemeinKenntnisse ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisBefaehigung',
      headerName: 'Wegfall Nachweis Befähigung für Fahrzeug Tfz',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.entziehung?.wegfallNachweisBefaehigung ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisBetriebsverfahren',
      headerName: 'Wegfall Nachweis Betriebsverfahren',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.entziehung?.wegfallNachweisBetriebsverfahren ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisZugbeeinflussungSysteme',
      headerName: 'Wegfall Nachweis Zugbeeinflussungssysteme',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.entziehung?.wegfallNachweisZugbeeinflussungSysteme ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisSignalSysteme',
      headerName: 'Wegfall Nachweis SignalSysteme',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.entziehung?.wegfallNachweisSignalSysteme ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisSchulung',
      headerName: 'Wegfall Nachweis Schulung SMS',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.entziehung?.wegfallNachweisSchulung ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'entziehungWegfallNachweisSprachkenntnisse',
      headerName: 'Wegfall Nachweis Sprachkenntnisse',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.entziehung?.wegfallNachweisSprachkenntnisse ?? ''}
          </Typography>
        )
      },
    },
    {
      field: 'entziehungausscheidenUnternehmen',
      headerName: 'Ausscheiden aus Unternehmen',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'entziehung-header iconColor  rotateTitle',
      cellClassName: 'entziehung-cell',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.entziehung?.ausscheidenUnternehmen ?? ''}
          </Typography>
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
          <Typography noWrap variant="body2">
            {row.entziehung?.sontiges ?? ''}
          </Typography>
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
      minWidth: 100,
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
      minWidth: 100,
      headerClassName: 'verloren-header iconColor  rotateTitle',
      cellClassName: 'verloren-cell',
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
      minWidth: 100,
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
      minWidth: 100,
      headerClassName: 'entwendet-header iconColor  rotateTitle border-right',
      cellClassName: 'entwendet-cell border-right',
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
      minWidth: 100,
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
      minWidth: 100,
      headerClassName: 'zerstoert-header iconColor  rotateTitle border-right',
      cellClassName: 'zerstoert-cell border-right',
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
      minWidth: 100,
      headerClassName: 'weitereAngaben-header iconColor  rotateTitle',
      cellClassName: 'weitereAngaben-cell',
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
      minWidth: 100,
      headerClassName: 'weitereAngaben-header iconColor  rotateTitle',
      cellClassName: 'weitereAngaben-cell',
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
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.weitereAngaben.tauglichkeit.hinweise}
          </Typography>
        )
      },
    },
    {
      field: 'weitereAngabenSmsSchulungLetzteSchulung',
      headerName: 'Schulung SMS letzte Schulug',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName: 'weitereAngaben-header iconColor  rotateTitle',
      cellClassName: 'weitereAngaben-cell',
      renderCell: ({ row }) =>
        formatDateToGermanLocale(row.weitereAngaben.smsSchulung.letzteSchulung),
    },
    {
      field: 'weitereAngabenSmsSchulungNaechsteSchulung',
      headerName: 'Schulung SMS nächste Schulug',
      headerAlign: 'center',
      align: 'center',
      minWidth: 100,
      headerClassName:
        'weitereAngaben-header iconColor  rotateTitle border-right',
      cellClassName: 'weitereAngaben-cell border-right',
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
        minWidth: 100,
        headerClassName: 'sprachkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'sprachkenntnisse-cell',
        renderCell: ({ row }) => {
          const value = row.sprachkenntnisse[index]?.bezeichnung
          return value ? (
            <Typography noWrap variant="body2">
              {value}
            </Typography>
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
        minWidth: 100,
        headerClassName: 'sprachkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'sprachkenntnisse-cell',
        renderCell: ({ row }) =>
          formatDateToGermanLocale(row.sprachkenntnisse[index]?.erwerb),
      },
      {
        field: `sprachkenntnisseLetzteUeberpruefung${index + 1}`,
        headerName: `Sprachkenntnisse ${index + 1} letzte Überpruefung`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
        headerClassName: 'sprachkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'sprachkenntnisse-cell',
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
        minWidth: 100,
        headerClassName: 'sprachkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'sprachkenntnisse-cell',
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
        renderCell: ({ row }) => {
          const value = row.sprachkenntnisse[index]?.hinweise
          return value ? (
            <Typography noWrap variant="body2">
              {value}
            </Typography>
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
        minWidth: 100,
        headerClassName: 'fahrzeugkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'fahrzeugkenntnisse-cell',
        renderCell: ({ row }) => {
          const value = row.fahrzeugkenntnisse[index]?.bezeichnung
          return value ? (
            <Typography noWrap variant="body2">
              {value}
            </Typography>
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
        minWidth: 100,
        headerClassName: 'fahrzeugkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'fahrzeugkenntnisse-cell',
        renderCell: ({ row }) =>
          formatDateToGermanLocale(row.fahrzeugkenntnisse[index]?.erwerb),
      },
      {
        field: `fahrzeugkenntnisseLetzteUeberpruefung${index + 1}`,
        headerName: `Fahrzeugkenntnisse ${index + 1} letzte Überpruefung`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
        headerClassName: 'fahrzeugkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'fahrzeugkenntnisse-cell',
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
        minWidth: 100,
        headerClassName: 'fahrzeugkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'fahrzeugkenntnisse-cell',
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
        renderCell: ({ row }) => {
          const value = row.fahrzeugkenntnisse[index]?.hinweise
          return value ? (
            <Typography noWrap variant="body2">
              {value}
            </Typography>
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
        minWidth: 250,
        headerClassName:
          'infrastrukturkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'infrastrukturkenntnisse-cell',
        renderCell: ({ row }) => {
          const value = row.infrastrukturkenntnisse[index]?.bezeichnung
          return value ? (
            <Typography noWrap variant="body2">
              {value}
            </Typography>
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
        minWidth: 100,
        headerClassName:
          'infrastrukturkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'infrastrukturkenntnisse-cell',
        renderCell: ({ row }) =>
          formatDateToGermanLocale(row.infrastrukturkenntnisse[index]?.erwerb),
      },
      {
        field: `infrastrukturkenntnisseLetzteUeberpruefung${index + 1}`,
        headerName: `Infrastrukturkenntnisse ${index + 1} letzte Überpruefung`,
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
        headerClassName:
          'infrastrukturkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'infrastrukturkenntnisse-cell',
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
        minWidth: 100,
        headerClassName:
          'infrastrukturkenntnisse-header iconColor  rotateTitle',
        cellClassName: 'infrastrukturkenntnisse-cell',
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
        renderCell: ({ row }) => {
          const value = row.infrastrukturkenntnisse[index]?.hinweise
          return value ? (
            <Typography noWrap variant="body2">
              {value}
            </Typography>
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
