import { Dispatch, SetStateAction, useState } from 'react'
import { Kenntnisse, Person } from '@/app/types/types'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { skillsColumns } from './skillsColumns'
import { formatDate } from './userDialog'
import { defaultKenntnisse, TransitionRight } from './languageSkills'
import { AutoCompleteInput } from './autoCompleteInput'

const vehicle = ['111', '143']

interface VehicleSkillsProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const VehicleSkills = ({
  userData,
  setUserData,
}: VehicleSkillsProps) => {
  const [newVehicleSkill, setNewVehicleSkill] = useState<Kenntnisse>({
    ...defaultKenntnisse,
  })
  const [open, setOpen] = useState(false)
  const [newVehicle, setNewVehicle] = useState('')

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <Dialog
        open={open}
        TransitionComponent={TransitionRight}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Neue Fahrzeugkenntnisse Auswahl erstellen'}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            id="Fahrzeugkenntnisse Bezeichnung"
            label="Fahrzeugkenntnisse Bezeichnung"
            value={newVehicle}
            onChange={(event) => setNewVehicle(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose()
              setNewVehicle('')
            }}
          >
            Abbrechen
          </Button>
          <Button
            onClick={() => {
              handleClose()
              // TODO: DB speichern
              vehicle.push(newVehicle)
              setNewVehicle('')
            }}
          >
            Speichern
          </Button>
        </DialogActions>
      </Dialog>
      <DialogContentText id="Fahrzeugkenntnisse">
        8. Fahrzeugkenntnisse
      </DialogContentText>
      <Box className="border-2 rounded-lg p-2 mt-3 mb-3">
        <DialogContentText id="Neue Fahrzeugkenntnisse">
          Neue Fahrzeugkenntnisse
        </DialogContentText>
        <Grid container spacing={2} className="mt-2 mb-2">
          <Grid item xs={12} sm={6} lg={3} className="flex justify-center">
            <AutoCompleteInput
              options={vehicle
                .filter(
                  (item) =>
                    !userData.fahrzeugkenntnisse.some(
                      (kenntnis) => kenntnis.bezeichnung === item,
                    ),
                )
                .map((item) => ({
                  text: item,
                  value: item,
                }))}
              idLabel="Fahrzeugkenntnisse Bezeichnung"
              label="Bezeichnung"
              value={{
                text: newVehicleSkill.bezeichnung,
                value: newVehicleSkill.bezeichnung,
              }}
              onChange={(_, value) => {
                if (value) {
                  setNewVehicleSkill((prev) => ({
                    ...prev,
                    bezeichnung: value?.value,
                  }))
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
            <TextField
              fullWidth
              id="Fahrzeugkenntnisse Erwerb"
              label="Erwerb"
              type="date"
              value={formatDate(newVehicleSkill.erwerb)}
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>
                setNewVehicleSkill((prev) => ({
                  ...prev,
                  erwerb: new Date(event.target.value),
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
            <TextField
              fullWidth
              id="Fahrzeugkenntnisse letzte Ueberpruefung"
              label="letzte Überprüfung"
              type="date"
              value={formatDate(newVehicleSkill.letzteUeberpruefung)}
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>
                setNewVehicleSkill((prev) => ({
                  ...prev,
                  letzteUeberpruefung: new Date(event.target.value),
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
            <TextField
              fullWidth
              id="Fahrzeugkenntnisse naechste Ueberpruefung"
              label="nächste Überprüfung"
              type="date"
              value={formatDate(newVehicleSkill.naechsteUeberpruefung)}
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>
                setNewVehicleSkill((prev) => ({
                  ...prev,
                  naechsteUeberpruefung: new Date(event.target.value),
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3.3} className="flex justify-center">
            <TextField
              fullWidth
              id="Fahrzeugkenntnisse Hinweise"
              label="Hinweise"
              value={newVehicleSkill.hinweise}
              onChange={(event) =>
                setNewVehicleSkill((prev) => ({
                  ...prev,
                  hinweise: event.target.value,
                }))
              }
            />
          </Grid>
        </Grid>
        <Box className="flex justify-between">
          <Box>
            <Button onClick={() => setOpen(true)}>
              weiterer Fahrzeugkenntnisse
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => setNewVehicleSkill({ ...defaultKenntnisse })}
            >
              Abbrechen
            </Button>
            <Button
              onClick={() => {
                setUserData((prev) => ({
                  ...prev,
                  fahrzeugkenntnisse: [
                    ...prev.fahrzeugkenntnisse,
                    newVehicleSkill,
                  ],
                }))
                setNewVehicleSkill({ ...defaultKenntnisse })
              }}
            >
              Hinzufügen
            </Button>
          </Box>
        </Box>
      </Box>
      <DataGrid
        rows={userData.fahrzeugkenntnisse}
        columns={skillsColumns}
        hideFooter={true}
        getRowId={(row) => row.bezeichnung}
        autoHeight
      />
    </Box>
  )
}
