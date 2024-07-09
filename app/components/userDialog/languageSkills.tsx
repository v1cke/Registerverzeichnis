import { Dispatch, SetStateAction, useState } from 'react'
import { Kenntnisse, Person } from '@/app/types/types'
import { Box, Button, DialogContentText, Grid, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { languageSkillsColumns } from './languageSkillsColumns'
import { formatDate } from './userDialog'

const defaultKenntnisse: Kenntnisse = {
  bezeichnung: '',
  erwerb: undefined,
  letzteUeberpruefung: undefined,
  naechsteUeberpruefung: undefined,
  hinweise: '',
}

interface DetailsOfEmployerProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const LanguageSkills = ({
  userData,
  setUserData,
}: DetailsOfEmployerProps) => {
  const [newLanguageSkill, setNewLanguageSkill] =
    useState<Kenntnisse>(defaultKenntnisse)

  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <DialogContentText id="Sprachkenntnisse">
        7. Sprachkenntnisse
      </DialogContentText>
      <Box className="border-2 rounded-lg p-2 mb-3">
        <DialogContentText id="Neue Sprachkenntnisse">
          Neue Sprachkenntnisse
        </DialogContentText>
        <Grid container spacing={2} className="mt-2 mb-2">
          <Grid item xs={12} sm={6} lg={3} className="flex justify-center">
            <TextField
              fullWidth
              id="Sprachkenntnisse Bezeichnung"
              label="Bezeichnung"
              value={newLanguageSkill.bezeichnung}
              onChange={(event) =>
                setNewLanguageSkill((prev) => ({
                  ...prev,
                  bezeichnung: event.target.value,
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
            <TextField
              fullWidth
              id="Sprachkenntnisse Erwerb"
              label="Erwerb"
              type="date"
              value={formatDate(newLanguageSkill.erwerb)}
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>
                setNewLanguageSkill((prev) => ({
                  ...prev,
                  erwerb: new Date(event.target.value),
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
            <TextField
              fullWidth
              id="Sprachkenntnisse letzte Ueberpruefung"
              label="letzte Überprüfung"
              type="date"
              value={formatDate(newLanguageSkill.letzteUeberpruefung)}
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>
                setNewLanguageSkill((prev) => ({
                  ...prev,
                  letzteUeberpruefung: new Date(event.target.value),
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
            <TextField
              fullWidth
              id="Sprachkenntnisse naechste Ueberpruefung"
              label="nächste Überprüfung"
              type="date"
              value={formatDate(newLanguageSkill.naechsteUeberpruefung)}
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>
                setNewLanguageSkill((prev) => ({
                  ...prev,
                  naechsteUeberpruefung: new Date(event.target.value),
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3.3} className="flex justify-center">
            <TextField
              fullWidth
              id="Sprachkenntnisse Hinweise"
              label="Hinweise"
              value={newLanguageSkill.hinweise}
              onChange={(event) =>
                setNewLanguageSkill((prev) => ({
                  ...prev,
                  hinweise: event.target.value,
                }))
              }
            />
          </Grid>
        </Grid>
        <Box className="flex justify-end">
          <Button>Abbrechen</Button>
          <Button>Hinzufügen</Button>
        </Box>
      </Box>
      <DataGrid
        rows={userData.sprachkenntnisse}
        columns={languageSkillsColumns}
        hideFooter={true}
      />
    </Box>
  )
}
