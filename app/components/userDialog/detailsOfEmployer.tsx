import { Person } from '@/app/types/types'
import { DialogContentText, Grid, TextField } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface DetailsOfEmployerProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const DetailsOfEmployer = ({
  userData,
  setUserData,
}: DetailsOfEmployerProps) => {
  return (
    <>
      <DialogContentText
        id="Ausstellende Oranisationseinheit"
        className="mt-3 ml-2"
      >
        Ausstellende Oranisationseinheit
      </DialogContentText>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6} lg={3.5} className="flex justify-center">
          <TextField
            fullWidth
            id="Ausstellende Oranisationseinheit Name"
            label="Name"
            value={userData.verantwortlichesUnternehmen.bezeichnung}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                verantwortlichesUnternehmen: {
                  ...prev.verantwortlichesUnternehmen,
                  bezeichnung: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3.5} className="flex justify-center">
          <TextField
            fullWidth
            id="Ausstellende Oranisationseinheit Adresse"
            label="Adresse"
            value={userData.verantwortlichesUnternehmen.strasseUndNummer}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                verantwortlichesUnternehmen: {
                  ...prev.verantwortlichesUnternehmen,
                  strasseUndNummer: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={2.5} className="flex justify-center">
          <TextField
            fullWidth
            id="Ausstellende Oranisationseinheit Plz"
            label="Plz"
            type="number"
            value={userData.verantwortlichesUnternehmen.plz ?? ''}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                verantwortlichesUnternehmen: {
                  ...prev.verantwortlichesUnternehmen,
                  plz: Number(event.target.value),
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={2.5} className="flex justify-center">
          <TextField
            fullWidth
            id="Ausstellende Oranisationseinheit Ort"
            label="Ort"
            value={userData.verantwortlichesUnternehmen.ort}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                verantwortlichesUnternehmen: {
                  ...prev.verantwortlichesUnternehmen,
                  ort: event.target.value,
                },
              }))
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Ausstellende Oranisationseinheit Telefonnummer"
            label="Telefonnummer"
            type="tel"
            value={userData.verantwortlichesUnternehmen.telefon}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                verantwortlichesUnternehmen: {
                  ...prev.verantwortlichesUnternehmen,
                  telefon: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Ausstellende Oranisationseinheit Faxnummer"
            label="Faxnummer"
            type="tel"
            value={userData.verantwortlichesUnternehmen.fax}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                verantwortlichesUnternehmen: {
                  ...prev.verantwortlichesUnternehmen,
                  fax: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Ausstellende Oranisationseinheit E-Mail-Adresse"
            label="E-Mail-Adresse"
            type="email"
            value={userData.verantwortlichesUnternehmen.email}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                verantwortlichesUnternehmen: {
                  ...prev.verantwortlichesUnternehmen,
                  email: event.target.value,
                },
              }))
            }
          />
        </Grid>
      </Grid>
    </>
  )
}
