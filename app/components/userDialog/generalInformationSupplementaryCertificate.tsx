import { Dispatch, SetStateAction } from 'react'
import { Person, ZusatzbescheinigungStatus } from '@/app/types/types'
import {
  Box,
  Checkbox,
  DialogContentText,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { formatDate } from './userDialog'
import { IssuingOrganizationUnit } from './issuingOrganizationUnit'

interface GeneralInformationSupplementaryCertificateProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const GeneralInformationSupplementaryCertificate = ({
  userData,
  setUserData,
}: GeneralInformationSupplementaryCertificateProps) => {
  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <DialogContentText id="Allgemeine Angaben zur Zusatzbescheinigung">
        1. Allgemeine Angaben zur Zusatzbescheinigung
      </DialogContentText>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6} lg={3} className="flex justify-center">
          <TextField
            fullWidth
            id="Nummer des Triebfahrzeugführerscheins"
            label="Nummer des Triebfahrzeugführerscheins"
            value={userData.fuehrerschein.fuehrerscheinNummer}
            onChange={(event) => {
              const inputValue = event.target.value
              const transformedValue =
                inputValue.slice(0, 2).toUpperCase() + inputValue.slice(2)
              setUserData((prev) => ({
                ...prev,
                fuehrerschein: {
                  ...prev.fuehrerschein,
                  fuehrerscheinNummer: transformedValue,
                },
              }))
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={1.5} className="flex justify-center">
          <FormControl fullWidth>
            <InputLabel id="Registernummer der Zusatzbescheinigung-label">
              Registernummer der Zusatzbescheinigung
            </InputLabel>
            <Select
              fullWidth
              labelId="Registernummer der Zusatzbescheinigung"
              id="Registernummer der Zusatzbescheinigung"
              value={userData.zusatzbescheinigung.nummer}
              label="Registernummer der Zusatzbescheinigung"
              onChange={(event) =>
                setUserData((prev) => ({
                  ...prev,
                  zusatzbescheinigung: {
                    ...prev.zusatzbescheinigung,
                    nummer: Number(event.target.value),
                  },
                }))
              }
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={3}>4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} lg={2} className="flex justify-center">
          <FormControl fullWidth>
            <InputLabel id="Status der Zusatzbescheinigung-label">
              Status der Zusatzbescheinigung
            </InputLabel>
            <Select
              fullWidth
              labelId="Status der Zusatzbescheinigung"
              id="Status der Zusatzbescheinigung"
              value={userData.zusatzbescheinigung.status}
              label="Status der Zusatzbescheinigung"
              onChange={(event) =>
                setUserData((prev) => ({
                  ...prev,
                  zusatzbescheinigung: {
                    ...prev.zusatzbescheinigung,
                    status: event.target.value as ZusatzbescheinigungStatus,
                  },
                }))
              }
            >
              <MenuItem value={'gültig'}>gültig</MenuItem>
              <MenuItem value={'ungültig'}>ungültig</MenuItem>
              <MenuItem value={'abgelaufen'}>abgelaufen</MenuItem>
              <MenuItem value={'entzogen'}>entzogen</MenuItem>
              <MenuItem value={'Entwurf'}>Entwurf</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} lg={2} className="flex justify-center">
          <TextField
            fullWidth
            id="Datum der Ausstellung"
            label="Datum der Ausstellung"
            type="date"
            value={formatDate(userData.zusatzbescheinigung.ausstellungsDatum)}
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                zusatzbescheinigung: {
                  ...prev.zusatzbescheinigung,
                  ausstellungsDatum: new Date(event.target.value),
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={2} className="flex justify-center">
          <TextField
            fullWidth
            id="Datum des Ablaufs der Gueltigkeit"
            label="Datum des Ablaufs der Gültigkeit"
            type="date"
            value={formatDate(userData.zusatzbescheinigung.ablaufGueltigkeit)}
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                zusatzbescheinigung: {
                  ...prev.zusatzbescheinigung,
                  ablaufGueltigkeit: new Date(event.target.value),
                },
              }))
            }
            disabled={userData.zusatzbescheinigung.unbefristet}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={1.5} className="flex justify-center">
          <FormControl fullWidth>
            <FormControlLabel
              control={
                <Checkbox
                  checked={userData.zusatzbescheinigung.unbefristet}
                  onChange={(event) => {
                    setUserData((prev) => ({
                      ...prev,
                      zusatzbescheinigung: {
                        ...prev.zusatzbescheinigung,
                        unbefristet: event.target.checked,
                      },
                    }))
                    if (event.target.checked) {
                      setUserData((prev) => ({
                        ...prev,
                        zusatzbescheinigung: {
                          ...prev.zusatzbescheinigung,
                          ablaufGueltigkeit: undefined,
                        },
                      }))
                    }
                  }}
                />
              }
              label="unbefristet"
            />
          </FormControl>
        </Grid>
      </Grid>
      <IssuingOrganizationUnit userData={userData} setUserData={setUserData} />
    </Box>
  )
}
