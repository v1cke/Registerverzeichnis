import { Grid } from '@mui/material'
import { FbTable } from './components/fbTable'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Grid sx={{ width: '100%', height: '100vh' }}>
        <FbTable />
      </Grid>
    </main>
  )
}
