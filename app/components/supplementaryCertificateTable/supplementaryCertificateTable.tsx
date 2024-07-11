'use client'

import { Dispatch, SetStateAction, useEffect } from 'react'
import { DataGrid, GridColDef, GridColumnGroupingModel } from '@mui/x-data-grid'
import { fakeData } from '../../fakeData/fakeData'
import { SupplementaryCertificateTableColumns } from './supplementaryCertificateTableColumns'
import { Box, Card, CardContent, Grid } from '@mui/material'
import { ShowColumns } from '../../page'
import { nameColumns } from './nameColumns'
import { Person } from '@/app/types/types'

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
  const getSprachkenntnisse = (index: number) => {
    return [
      { field: `sprachkenntnisseBezeichnung${index + 1}` },
      { field: `sprachkenntnisseErwerb${index + 1}` },
      { field: `sprachkenntnisseLetzteUeberpruefung${index + 1}` },
      { field: `sprachkenntnisseNaechsteUeberpruefung${index + 1}` },
      { field: `sprachkenntnisseHinweise${index + 1}` },
    ]
  }

  const getFahrzeugkenntnisse = (index: number) => {
    return [
      { field: `fahrzeugkenntnisseBezeichnung${index + 1}` },
      { field: `fahrzeugkenntnisseErwerb${index + 1}` },
      { field: `fahrzeugkenntnisseLetzteUeberpruefung${index + 1}` },
      { field: `fahrzeugkenntnisseNaechsteUeberpruefung${index + 1}` },
      { field: `fahrzeugkenntnisseHinweise${index + 1}` },
    ]
  }

  const getInfrastrukturkenntnisse = (index: number) => {
    return [
      { field: `infrastrukturkenntnisseBezeichnung${index + 1}` },
      { field: `infrastrukturkenntnisseErwerb${index + 1}` },
      { field: `infrastrukturkenntnisseLetzteUeberpruefung${index + 1}` },
      { field: `infrastrukturkenntnisseNaechsteUeberpruefung${index + 1}` },
      { field: `infrastrukturkenntnisseHinweise${index + 1}` },
    ]
  }

  const columnGroupingModel: GridColumnGroupingModel = [
    {
      groupId: 'inhaberData',
      headerName: 'Angaben zum Inhaber',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader inhaber-header',
      children: [
        { field: 'name' },
        { field: 'vorname' },
        { field: 'fuehrerscheinNummer' },
        { field: 'fuehrerscheinStatus' },
        { field: 'geburtstag' },
        { field: 'geburtsort' },
        { field: 'staatsangehoerigkeit' },
      ],
    },
    {
      groupId: 'ZBData',
      headerName: 'Angaben zur Zusatzbescheinigung',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader zusatzbescheinigung-header ',
      children: [
        { field: 'zusatzbescheinigungNummer' },
        { field: 'zusatzbescheinigungStatus' },
        { field: 'zusatzbescheinigungAusstellungsDatum' },
        { field: 'zusatzbescheinigungAblaufGueltigkeit' },
      ],
    },
    {
      groupId: 'OrganisationData',
      headerName: 'Angaben zur ausstellenden Organisation',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader organisationseinheit-header',
      children: [
        { field: 'organisationseinheitBezeichnung' },
        { field: 'organisationseinheitStrasseUndNummer' },
        { field: 'organisationseinheitPlz' },
        { field: 'organisationseinheitOrt' },
        { field: 'organisationseinheitTelefon' },
        { field: 'organisationseinheitfax' },
        { field: 'organisationseinheitEmail' },
      ],
    },
    {
      groupId: 'BilderData',
      headerName: 'Bilder',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader bilder-header',
      children: [{ field: 'bilderLichtBild' }, { field: 'bilderUnterschrift' }],
    },
    {
      groupId: 'UnternehmenData',
      headerName: 'Verantwortliches Unternehmen',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader unternehmen-header ',
      children: [
        { field: 'unternehmenBezeichnung' },
        { field: 'unternehmenStrasseUndNummer' },
        { field: 'unternehmenOrt' },
        { field: 'unternehmenLand' },
        { field: 'unternehmenPlz' },
        { field: 'unternehmenTelefon' },
        { field: 'unternehmenFax' },
        { field: 'unternehmenEmail' },
        { field: 'unternehmenKategorie' },
        { field: 'unternehmenArbeitsort' },
      ],
    },
    {
      groupId: 'KlasseData',
      headerName: 'Klasse',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader klasse-header ',
      children: [
        { field: 'klasseA' },
        { field: 'klasseA1' },
        { field: 'klasseA2' },
        { field: 'klasseA3' },
        { field: 'klasseA4' },
        { field: 'klasseA5' },
        { field: 'klasseB' },
        { field: 'klasseB1' },
        { field: 'klasseB2' },
      ],
    },
    {
      groupId: 'ZusaetzlicheAngabenData',
      headerName: 'Zusätzliche Angaben',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader zusaetzlicheAngaben-header',
      children: [
        { field: 'zusaetzlicheAngabenZelle1' },
        { field: 'zusaetzlicheAngabenZelle2' },
        { field: 'zusaetzlicheAngabenZelle3' },
      ],
    },
    {
      groupId: 'EinschraenkungenData',
      headerName: 'Einschränkungen',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader einschraenkungen-header ',
      children: [
        { field: 'einschraenkungenZelle1' },
        { field: 'einschraenkungenZelle2' },
        { field: 'einschraenkungenZelle3' },
      ],
    },
    {
      groupId: 'AenderungData',
      headerName: 'Änderung',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader aenderung-header',
      children: [
        { field: 'aenderungDatum' },
        { field: 'aenderungFeld3Klasse' },
        { field: 'aenderungFeld4Angaben' },
        { field: 'aenderungFeld5Sprachen' },
        { field: 'aenderungFeld6Einschraenkung' },
        { field: 'aenderungFeld7Fahrzeug' },
        { field: 'aenderungFeld8Infrastruktur' },
        { field: 'aenderungSontiges' },
      ],
    },
    {
      groupId: 'AussetzungData',
      headerName: 'Aussetzung',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader aussetzung-header',
      children: [
        { field: 'aussetzungVon' },
        { field: 'aussetzungBis' },
        { field: 'aussetzungWegfallFuehrerschein' },
        { field: 'aussetzungWegfallNachweisAllgemeinKenntnisse' },
        { field: 'aussetzungWegfallNachweisBefaehigung' },
        { field: 'aussetzungWegfallNachweisBetriebsverfahren' },
        { field: 'aussetzungWegfallNachweisZugbeeinflussungSysteme' },
        { field: 'aussetzungWegfallNachweisSignalSysteme' },
        { field: 'aussetzungWegfallNachweisSchulung' },
        { field: 'aussetzungWegfallNachweisSprachkenntnisse' },
        { field: 'aussetzungSontiges' },
      ],
    },
    {
      groupId: 'EntziehungData',
      headerName: 'Entziehung',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader entziehung-header',
      children: [
        { field: 'entziehungDatum' },
        { field: 'entziehungWegfallFuehrerschein' },
        { field: 'entziehungWegfallNachweisAllgemeinKenntnisse' },
        { field: 'entziehungWegfallNachweisBefaehigung' },
        { field: 'entziehungWegfallNachweisBetriebsverfahren' },
        { field: 'entziehungWegfallNachweisZugbeeinflussungSysteme' },
        { field: 'entziehungWegfallNachweisSignalSysteme' },
        { field: 'entziehungWegfallNachweisSchulung' },
        { field: 'entziehungWegfallNachweisSprachkenntnisse' },
        { field: 'entziehungausscheidenUnternehmen' },
        { field: 'entziehungSontiges' },
      ],
    },
    {
      groupId: 'VerloreneData',
      headerName: 'Verloren gemeldete ZB',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader verloren-header',
      children: [
        { field: 'verlorenZbDatumMeldung' },
        { field: 'verlorenZbDatumAustellungErsatzbeschinigung' },
      ],
    },
    {
      groupId: 'EntwendetData',
      headerName: 'Entwendet gemeldete ZB',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader entwendet-header',
      children: [
        { field: 'entwendetZbDatumMeldung' },
        { field: 'entwendetZbDatumAustellungErsatzbeschinigung' },
      ],
    },
    {
      groupId: 'ZerstörtData',
      headerName: 'Zerstört gemeldete ZB',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader zerstoert-header',
      children: [
        { field: 'zerstoertZbDatumMeldung' },
        { field: 'zerstoertZbDatumAustellungErsatzbeschinigung' },
      ],
    },
    {
      groupId: 'WeitereAngabenData',
      headerName: 'Weitere Angaben',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader weitereAngaben-header',
      children: [
        { field: 'weitereAngabenTauglichkeitLetzteUntersuchung' },
        { field: 'weitereAngabenTauglichkeitNaechsteUntersuchung' },
        { field: 'weitereAngabenTauglichkeitHinweise' },
        { field: 'weitereAngabenSmsSchulungLetzteSchulung' },
        { field: 'weitereAngabenSmsSchulungNaechsteSchulung' },
      ],
    },
    {
      groupId: 'sprachkenntnisseData',
      headerName: 'Sprachkenntnisse',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader sprachkenntnisse-header',
      children: Array.from({ length: 4 }, (_, index) =>
        getSprachkenntnisse(index),
      ).flat(),
    },
    {
      groupId: 'fahrzeugkenntnisseData',
      headerName: 'Fahrzeugkenntnisse',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader fahrzeugkenntnisse-header',
      children: Array.from({ length: 100 }, (_, index) =>
        getFahrzeugkenntnisse(index),
      ).flat(),
    },
    {
      groupId: 'infrastrukturkenntnisseData',
      headerName: 'Infrastrukturkenntnisse',
      headerAlign: 'center',
      headerClassName: 'columnGroupingHeader infrastrukturkenntnisse-header',
      children: Array.from({ length: 42 }, (_, index) =>
        getInfrastrukturkenntnisse(index),
      ).flat(),
    },
  ]

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
