import { Person } from '@/app/types/types'
import { DialogContentText, Grid, TextField } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface IssuingOrganizationUnitProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const IssuingOrganizationUnit = ({
  userData,
  setUserData,
}: IssuingOrganizationUnitProps) => {
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
            value={userData.ausstellendeOrganisationseinheit.bezeichnung}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                ausstellendeOrganisationseinheit: {
                  ...prev.ausstellendeOrganisationseinheit,
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
            value={userData.ausstellendeOrganisationseinheit.strasseUndNummer}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                ausstellendeOrganisationseinheit: {
                  ...prev.ausstellendeOrganisationseinheit,
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
            value={userData.ausstellendeOrganisationseinheit.plz ?? ''}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                ausstellendeOrganisationseinheit: {
                  ...prev.ausstellendeOrganisationseinheit,
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
            value={userData.ausstellendeOrganisationseinheit.ort}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                ausstellendeOrganisationseinheit: {
                  ...prev.ausstellendeOrganisationseinheit,
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
            value={userData.ausstellendeOrganisationseinheit.telefon}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                ausstellendeOrganisationseinheit: {
                  ...prev.ausstellendeOrganisationseinheit,
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
            value={userData.ausstellendeOrganisationseinheit.fax}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                ausstellendeOrganisationseinheit: {
                  ...prev.ausstellendeOrganisationseinheit,
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
            value={userData.ausstellendeOrganisationseinheit.email}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                ausstellendeOrganisationseinheit: {
                  ...prev.ausstellendeOrganisationseinheit,
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
