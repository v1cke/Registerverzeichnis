import { Person } from '@/app/types/types'
import { Box, DialogContentText, Grid, TextField } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface AdditionalInformationProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const AdditionalInformation = ({
  userData,
  setUserData,
}: AdditionalInformationProps) => {
  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <DialogContentText id="Zusaetzliche Angaben">
        4. Zusätzliche Angaben
      </DialogContentText>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Zusaetzliche Angaben Zelle 1"
            label="Zelle 1"
            value={userData.zusaetzlicheAngaben.zelle1}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                zusaetzlicheAngaben: {
                  ...prev.zusaetzlicheAngaben,
                  zelle1: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Zusaetzliche Angaben Zelle 2"
            label="Zelle 2"
            value={userData.zusaetzlicheAngaben.zelle2}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                zusaetzlicheAngaben: {
                  ...prev.zusaetzlicheAngaben,
                  zelle2: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Zusaetzliche Angaben Zelle 3"
            label="Zelle 3"
            value={userData.zusaetzlicheAngaben.zelle3}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                zusaetzlicheAngaben: {
                  ...prev.zusaetzlicheAngaben,
                  zelle3: event.target.value,
                },
              }))
            }
          />
        </Grid>
      </Grid>
    </Box>
  )
}
