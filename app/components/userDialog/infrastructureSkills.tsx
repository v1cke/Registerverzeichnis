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
import { AutoCompleteInput } from './autoCompleteInput'
import { defaultKenntnisse, TransitionRight } from './languageSkills'

const infrastructure = [
  'FV-DB',
  'FV-NE',
  'ZLB',
  'SZB',
  'Steilstreckenbetrieb',
  'PZB',
  'LZB',
  'LZB CE',
  'GNT',
  'FFB',
  'ETCS Stufe 1',
  'ETCS Stufe 2',
  'ETCS Stufe 3',
  'ZBS',
  'H/V',
  'Hl',
  'Ks',
  'Sv',
  'Sk',
  // 'GNT',
]

interface InfrastructureSkillsProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const InfrastructureSkills = ({
  userData,
  setUserData,
}: InfrastructureSkillsProps) => {
  const [newInfrastructureSkill, setNewInfrastructureSkill] =
    useState<Kenntnisse>(defaultKenntnisse)
  const [open, setOpen] = useState(false)
  const [newInfrastructure, setNewInfrastructure] = useState('')

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
        <DialogTitle>
          {'Neue Infrastrukturkenntnisse Auswahl erstellen'}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            id="Infrastrukturkenntnisse Bezeichnung"
            label="Infrastrukturkenntnisse Bezeichnung"
            value={newInfrastructure}
            onChange={(event) => setNewInfrastructure(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose()
              setNewInfrastructure('')
            }}
          >
            Abbrechen
          </Button>
          <Button
            onClick={() => {
              handleClose()
              // TODO: DB speichern
              infrastructure.push(newInfrastructure)
              setNewInfrastructure('')
            }}
          >
            Speichern
          </Button>
        </DialogActions>
      </Dialog>
      <DialogContentText id="Infrastrukturkenntniss">
        9. Infrastrukturkenntnisse
      </DialogContentText>
      <Box className="border-2 rounded-lg p-2 mb-3">
        <DialogContentText id="Neue Infrastrukturkenntniss">
          Neue Infrastrukturkenntnisse
        </DialogContentText>
        <Grid container spacing={2} className="mt-2 mb-2">
          <Grid item xs={12} sm={6} lg={3} className="flex justify-center">
            <AutoCompleteInput
              options={infrastructure
                .filter(
                  (item) =>
                    !userData.infrastrukturkenntnisse.some(
                      (kenntnis) => kenntnis.bezeichnung === item,
                    ),
                )
                .map((item) => ({
                  text: item,
                  value: item,
                }))}
              idLabel="Infrastrukturkenntniss Bezeichnung"
              label="Bezeichnung"
              onChange={(_, value) =>
                setNewInfrastructureSkill((prev) => ({
                  ...prev,
                  bezeichnung: value?.value ?? '',
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
            <TextField
              fullWidth
              id="Infrastrukturkenntnisse Erwerb"
              label="Erwerb"
              type="date"
              value={formatDate(newInfrastructureSkill.erwerb)}
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>
                setNewInfrastructureSkill((prev) => ({
                  ...prev,
                  erwerb: new Date(event.target.value),
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
            <TextField
              fullWidth
              id="Infrastrukturkenntnisse letzte Ueberpruefung"
              label="letzte Überprüfung"
              type="date"
              value={formatDate(newInfrastructureSkill.letzteUeberpruefung)}
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>
                setNewInfrastructureSkill((prev) => ({
                  ...prev,
                  letzteUeberpruefung: new Date(event.target.value),
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
            <TextField
              fullWidth
              id="Infrastrukturkenntnisse naechste Ueberpruefung"
              label="nächste Überprüfung"
              type="date"
              value={formatDate(newInfrastructureSkill.naechsteUeberpruefung)}
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>
                setNewInfrastructureSkill((prev) => ({
                  ...prev,
                  naechsteUeberpruefung: new Date(event.target.value),
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3.3} className="flex justify-center">
            <TextField
              fullWidth
              id="Infrastrukturkenntnisse Hinweise"
              label="Hinweise"
              value={newInfrastructureSkill.hinweise}
              onChange={(event) =>
                setNewInfrastructureSkill((prev) => ({
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
              weiterer Infrastrukturkenntnisse
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => setNewInfrastructureSkill(defaultKenntnisse)}
            >
              Abbrechen
            </Button>
            <Button
              onClick={() => {
                setUserData((prev) => ({
                  ...prev,
                  infrastrukturkenntnisse: [
                    ...prev.infrastrukturkenntnisse,
                    newInfrastructureSkill,
                  ],
                }))
                setNewInfrastructureSkill(defaultKenntnisse)
              }}
            >
              Hinzufügen
            </Button>
          </Box>
        </Box>
      </Box>
      <DataGrid
        rows={userData.infrastrukturkenntnisse}
        columns={skillsColumns}
        hideFooter={true}
        getRowId={(row) => row.bezeichnung}
        autoHeight
      />
    </Box>
  )
}
