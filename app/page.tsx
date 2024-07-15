'use client'

import { Box, Grid } from '@mui/material'
import { SupplementaryCertificateTable } from './components/supplementaryCertificateTable/supplementaryCertificateTable'
import { useState } from 'react'
import { ColumnSelect } from './components/supplementaryCertificateTable/columnSelect'
import { UserDialog } from './components/userDialog/userDialog'
import { ViewButtons } from './components/viewButtons/viewButtons'

export type ShowColumns = { selected: boolean; value: number; text: string }

export default function Home() {
  const [showColumns, setShowColumns] = useState<ShowColumns[]>([
    { selected: true, value: 1, text: 'Füherschein' },
    { selected: true, value: 2, text: 'Zusatzbescheinigung & Organisationen' },
    { selected: true, value: 3, text: 'Klasse' },
    { selected: true, value: 4, text: 'Änderungen/Entziehung/Aussetzung' },
    {
      selected: true,
      value: 5,
      text: 'Verlust Zusatzbescheinigung',
    },
    { selected: true, value: 6, text: 'Weitere Angaben' },
    { selected: true, value: 7, text: 'Kenntnisse' },
  ])
  const [selectedColumnId, setSelectedColumnId] = useState<number>()
  const [openDialog, setOpenDialog] = useState(false)
  const [tableView, setTableView] = useState<'activ' | 'draft' | 'history'>(
    'activ',
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Grid className="flex flex-col" sx={{ width: '100%', height: '100vh' }}>
        <UserDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          selectedColumnId={selectedColumnId}
          setSelectedColumnId={setSelectedColumnId}
        />
        <Box className="flex justify-between items-center">
          <ViewButtons tableView={tableView} setTableView={setTableView} />
          <ColumnSelect
            showColumns={showColumns}
            setShowColumns={setShowColumns}
          />
        </Box>
        <SupplementaryCertificateTable
          showColumns={showColumns}
          setOpenDialog={setOpenDialog}
          tableView={tableView}
          setSetselectedColumnId={setSelectedColumnId}
        />
      </Grid>
    </main>
  )
}
