import { Dispatch, SetStateAction } from 'react'
import { Person } from '@/app/types/types'
import {
  Box,
  DialogContentText,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'

interface DetailsOfEmployerProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const DetailsOfEmployer = ({
  userData,
  setUserData,
}: DetailsOfEmployerProps) => {
  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <DialogContentText id="Angaben zum Arbeitgeber">
        2. Angaben zum Arbeitgeber / Auftraggeber
      </DialogContentText>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6} lg={3.5} className="flex justify-center">
          <TextField
            fullWidth
            id="Angaben zum Arbeitgeber Name"
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
            id="Angaben zum Arbeitgeber Adresse"
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
            id="Angaben zum Arbeitgeber Plz"
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
            id="Angaben zum Arbeitgeber Ort"
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
        <Grid item xs={12} sm={6} lg={3} className="flex justify-center">
          <TextField
            fullWidth
            id="Angaben zum Arbeitgeber Telefonnummer"
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
        <Grid item xs={12} sm={6} lg={3} className="flex justify-center">
          <TextField
            fullWidth
            id="Angaben zum Arbeitgeber Faxnummer"
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
        <Grid item xs={12} sm={6} lg={3} className="flex justify-center">
          <TextField
            fullWidth
            id="Angaben zum Arbeitgeber E-Mail-Adresse"
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
        <Grid item xs={12} sm={6} lg={3} className="flex justify-center">
          <FormControl>
            <FormLabel id="Angaben zum Arbeitgeber Kategorie-label">
              Kategorie
            </FormLabel>
            <RadioGroup
              aria-labelledby="Angaben zum Arbeitgeber Kategorie"
              name="Angaben zum Arbeitgeber Kategorie"
              value={userData.verantwortlichesUnternehmen.unternehmensKategorie}
              onChange={(event) =>
                setUserData((prev) => ({
                  ...prev,
                  verantwortlichesUnternehmen: {
                    ...prev.verantwortlichesUnternehmen,
                    unternehmensKategorie: event.target.value,
                  },
                }))
              }
            >
              <FormControlLabel
                value="Verkehrsunternehmen"
                control={<Radio />}
                label="Verkehrsunternehmen / Halter (RU)"
              />
              <FormControlLabel
                value="Infrastrukturunternehmen"
                control={<Radio />}
                label="Infrastrukturunternehmen (IM)"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
}
