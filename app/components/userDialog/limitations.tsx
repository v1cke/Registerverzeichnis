import { Person } from '@/app/types/types'
import { Box, DialogContentText, Grid, TextField } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface AdditionalInformationProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const Limitations = ({
  userData,
  setUserData,
}: AdditionalInformationProps) => {
  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <DialogContentText id="Einschraenkungen">
        5. Einschränkungen
      </DialogContentText>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Einschraenkungen Zelle 1"
            label="Zelle 1"
            value={userData.einschraenkungen.zelle1}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                einschraenkungen: {
                  ...prev.einschraenkungen,
                  zelle1: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Einschraenkungen Zelle 2"
            label="Zelle 2"
            value={userData.einschraenkungen.zelle2}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                einschraenkungen: {
                  ...prev.einschraenkungen,
                  zelle2: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Einschraenkungen Zelle 3"
            label="Zelle 3"
            value={userData.einschraenkungen.zelle3}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                einschraenkungen: {
                  ...prev.einschraenkungen,
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
