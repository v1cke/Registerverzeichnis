import { Dispatch, SetStateAction } from 'react'
import { Person } from '@/app/types/types'
import { Box, DialogContentText, Grid, TextField } from '@mui/material'
import { formatDate } from './userDialog'
import { IssuingOrganizationUnit } from './issuingOrganizationUnit'

interface FurtherInformationProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const FurtherInformation = ({
  userData,
  setUserData,
}: FurtherInformationProps) => {
  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <DialogContentText id="Weitere Angaben">
        9. Weitere Angaben (optional)
      </DialogContentText>
      <DialogContentText className="mt-2 ml-2">Tauglichkeit</DialogContentText>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6} lg={3.5} className="flex justify-center">
          <TextField
            fullWidth
            id="Tauglichkeit Datum der letzten Untersuchung"
            label="Datum der letzten Untersuchung"
            type="date"
            value={formatDate(
              userData.weitereAngaben.tauglichkeit.letzteUntersuchung,
            )}
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                weitereAngaben: {
                  ...prev.weitereAngaben,
                  tauglichkeit: {
                    ...prev.weitereAngaben.tauglichkeit,
                    letzteUntersuchung: new Date(event.target.value),
                  },
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3.5} className="flex justify-center">
          <TextField
            fullWidth
            id="Tauglichkeit Datum der naechsten Untersuchung"
            label="Datum der nächsten Untersuchung"
            type="date"
            value={formatDate(
              userData.weitereAngaben.tauglichkeit.naechsteUntersuchung,
            )}
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                weitereAngaben: {
                  ...prev.weitereAngaben,
                  tauglichkeit: {
                    ...prev.weitereAngaben.tauglichkeit,
                    naechsteUntersuchung: new Date(event.target.value),
                  },
                },
              }))
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={5} className="flex justify-center">
          <TextField
            fullWidth
            id="Tauglichkeit Hinweise"
            label="Hinweise"
            type="text"
            multiline
            rows={6}
            value={userData.weitereAngaben.tauglichkeit.hinweise}
            disabled={!userData.klasse.A5}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                weitereAngaben: {
                  ...prev.weitereAngaben,
                  tauglichkeit: {
                    ...prev.weitereAngaben.tauglichkeit,
                    hinweise: event.target.value,
                  },
                },
              }))
            }
          />
        </Grid>
      </Grid>
      <DialogContentText className="mt-2 ml-2">
        Schulung Sicherheitsmanagementsystem
      </DialogContentText>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6} lg={3.5} className="flex justify-center">
          <TextField
            fullWidth
            id="SMS Schulung Datum der letzten Schulung"
            label="Datum der letzten Schulung"
            type="date"
            value={formatDate(
              userData.weitereAngaben.smsSchulung.letzteSchulung,
            )}
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                weitereAngaben: {
                  ...prev.weitereAngaben,
                  smsSchulung: {
                    ...prev.weitereAngaben.smsSchulung,
                    letzteSchulung: new Date(event.target.value),
                  },
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3.5} className="flex justify-center">
          <TextField
            fullWidth
            id="SMS Schulung Datum der naechsten Schulung"
            label="Datum der nächsten Schulung"
            type="date"
            value={formatDate(
              userData.weitereAngaben.smsSchulung.naechsteSchulung,
            )}
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                weitereAngaben: {
                  ...prev.weitereAngaben,
                  smsSchulung: {
                    ...prev.weitereAngaben.smsSchulung,
                    naechsteSchulung: new Date(event.target.value),
                  },
                },
              }))
            }
          />
        </Grid>
      </Grid>
    </Box>
  )
}
