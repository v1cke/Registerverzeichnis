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
    useState<Kenntnisse>({ ...defaultKenntnisse })
  const [openNewSkill, setOpenNewSkill] = useState(false)
  const [openEditSkill, setOpenEditSkill] = useState(false)
  const [newInfrastructure, setNewInfrastructure] = useState('')
  const [editInfrastructureSkill, setEditInfrastructureSkill] =
    useState<Kenntnisse>()

  const handleNewSkillClose = () => {
    setOpenNewSkill(false)
  }

  const handleEditSkillClose = () => {
    setOpenEditSkill(false)
  }

  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <Dialog
        open={openNewSkill}
        TransitionComponent={TransitionRight}
        keepMounted
        onClose={handleNewSkillClose}
        aria-describedby="Neue Infrastrukturkenntnisse Auswahl erstellen"
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
              handleNewSkillClose()
              setNewInfrastructure('')
            }}
          >
            Abbrechen
          </Button>
          <Button
            onClick={() => {
              handleNewSkillClose()
              // TODO: DB speichern
              infrastructure.push(newInfrastructure)
              setNewInfrastructure('')
            }}
          >
            Speichern
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openEditSkill}
        TransitionComponent={TransitionRight}
        keepMounted
        maxWidth="lg"
        onClose={handleEditSkillClose}
        aria-describedby="Bearbeiten Infrastrukturkenntniss"
      >
        <DialogTitle>{'Bearbeiten Infrastrukturkenntniss'}</DialogTitle>
        <DialogContent>
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
                idLabel="Bearbeiten Infrastrukturkenntniss Bezeichnung"
                label="Bezeichnung"
                value={{
                  text: editInfrastructureSkill?.bezeichnung ?? '',
                  value: editInfrastructureSkill?.bezeichnung ?? '',
                }}
                onChange={(_, value) => {
                  {
                    if (value)
                      setEditInfrastructureSkill((prev) => ({
                        ...prev!,
                        bezeichnung: value?.value,
                      }))
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
              <TextField
                fullWidth
                id="Bearbeiten Infrastrukturkenntnisse Erwerb"
                label="Erwerb"
                type="date"
                value={formatDate(editInfrastructureSkill?.erwerb)}
                InputLabelProps={{ shrink: true }}
                onChange={(event) =>
                  setEditInfrastructureSkill((prev) => ({
                    ...prev!,
                    erwerb: new Date(event.target.value),
                  }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
              <TextField
                fullWidth
                id="Bearbeiten Infrastrukturkenntnisse letzte Ueberpruefung"
                label="letzte Überprüfung"
                type="date"
                value={formatDate(editInfrastructureSkill?.letzteUeberpruefung)}
                InputLabelProps={{ shrink: true }}
                onChange={(event) =>
                  setEditInfrastructureSkill((prev) => ({
                    ...prev!,
                    letzteUeberpruefung: new Date(event.target.value),
                  }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
              <TextField
                fullWidth
                id="Bearbeiten Infrastrukturkenntnisse naechste Ueberpruefung"
                label="nächste Überprüfung"
                type="date"
                value={formatDate(
                  editInfrastructureSkill?.naechsteUeberpruefung,
                )}
                InputLabelProps={{ shrink: true }}
                onChange={(event) =>
                  setEditInfrastructureSkill((prev) => ({
                    ...prev!,
                    naechsteUeberpruefung: new Date(event.target.value),
                  }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3.3} className="flex justify-center">
              <TextField
                fullWidth
                id="Bearbeiten Infrastrukturkenntnisse Hinweise"
                label="Hinweise"
                value={editInfrastructureSkill?.hinweise}
                onChange={(event) =>
                  setEditInfrastructureSkill((prev) => ({
                    ...prev!,
                    hinweise: event.target.value,
                  }))
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {}}>Löschen</Button>
          <Button
            onClick={() => {
              handleEditSkillClose()
              // setNewInfrastructure('')
            }}
          >
            Abbrechen
          </Button>
          <Button
            onClick={() => {
              // setNewInfrastructure('')
            }}
          >
            Speichern
          </Button>
        </DialogActions>
      </Dialog>

      <DialogContentText id="Infrastrukturkenntniss">
        9. Infrastrukturkenntnisse
      </DialogContentText>
      <Box className="border-2 rounded-lg p-2 mt-3 mb-3">
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
              value={{
                text: newInfrastructureSkill.bezeichnung,
                value: newInfrastructureSkill.bezeichnung,
              }}
              onChange={(_, value) => {
                if (value) {
                  setNewInfrastructureSkill((prev) => ({
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
            <Button onClick={() => setOpenNewSkill(true)}>
              weiterer Infrastrukturkenntnisse
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() =>
                setNewInfrastructureSkill({ ...defaultKenntnisse })
              }
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
                setNewInfrastructureSkill({ ...defaultKenntnisse })
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
        onRowClick={(row) => {
          console.log('row: ', row)
          setEditInfrastructureSkill(row.row)
          setOpenEditSkill(true)
        }}
        sx={{
          width: '100%',
          '& .MuiDataGrid-row:hover': {
            cursor: 'pointer',
          },
        }}
      />
    </Box>
  )
}
