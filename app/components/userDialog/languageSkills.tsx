import { Dispatch, SetStateAction } from 'react'
import { Person } from '@/app/types/types'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

interface DetailsOfEmployerProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const LanguageSkills = ({
  userData,
  setUserData,
}: DetailsOfEmployerProps) => {
  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <DataGrid rows={userData.sprachkenntnisse} />
    </Box>
  )
}
