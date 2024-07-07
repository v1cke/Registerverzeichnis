'use client'

import { Grid } from '@mui/material'
import { FbTable } from './components/fbTable/fbTable'
import { useState } from 'react'
import { ColumnSelect } from './components/fbTable/columnSelect'
import { GroupOfButton } from './components/groupOfButton'

export type ShowColumns = { selected: boolean; value: number }

export default function Home() {
  const [showColumns, setShowColumns] = useState<ShowColumns[]>([
    { selected: true, value: 1 },
    { selected: true, value: 2 },
    { selected: true, value: 3 },
    { selected: true, value: 4 },
    { selected: true, value: 5 },
    { selected: true, value: 6 },
    { selected: true, value: 7 },
    { selected: true, value: 8 },
    { selected: true, value: 9 },
    { selected: true, value: 10 },
    { selected: true, value: 11 },
    { selected: true, value: 12 },
    { selected: true, value: 13 },
    { selected: true, value: 14 },
    { selected: true, value: 15 },
    { selected: true, value: 16 },
    { selected: true, value: 17 },
    { selected: true, value: 18 },
    { selected: true, value: 19 },
  ])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Grid className="flex flex-col" sx={{ width: '100%', height: '100vh' }}>
        <GroupOfButton />
        <ColumnSelect
          showColumns={showColumns}
          setShowColumns={setShowColumns}
        />
        <FbTable showColumns={showColumns} />
      </Grid>
    </main>
  )
}
