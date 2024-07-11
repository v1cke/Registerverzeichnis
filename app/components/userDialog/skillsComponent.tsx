import { Dispatch, forwardRef, SetStateAction, useState } from 'react'
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
  Slide,
  TextField,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { skillsColumns } from './skillsColumns'
import { formatDate } from './userDialog'
import { AutoCompleteInput } from './autoCompleteInput'
import { TransitionProps } from '@mui/material/transitions'

export const defaultKenntnisse: Kenntnisse = {
  bezeichnung: '',
  erwerb: undefined,
  letzteUeberpruefung: undefined,
  naechsteUeberpruefung: undefined,
  hinweise: '',
}

export const TransitionRight = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="right" ref={ref} {...props} />
})

export const TransitionLeft = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />
})

interface SkillsComponentProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
  label: string
  labelNumber: number
  selectableSkills: string[]
  skillKey:
    | 'sprachkenntnisse'
    | 'fahrzeugkenntnisse'
    | 'infrastrukturkenntnisse'
}

export const SkillsComponent = ({
  userData,
  setUserData,
  label,
  labelNumber,
  selectableSkills,
  skillKey,
}: SkillsComponentProps) => {
  const [newSkill, setNewSkill] = useState<Kenntnisse>({ ...defaultKenntnisse })
  const [openNewSkill, setOpenNewSkill] = useState(false)
  const [openEditSkill, setOpenEditSkill] = useState(false)
  const [newCreateSkill, setNewCreateSkill] = useState('')
  const [editSkill, setEditSkill] = useState<Kenntnisse>()

  const handleNewSkillClose = () => {
    setOpenNewSkill(false)
  }

  const handleEditSkillClose = () => {
    setOpenEditSkill(false)
  }

  const saveEditSkill = () => {
    if (editSkill) {
      setUserData((prev) => ({
        ...prev,
        [skillKey]: prev[skillKey].map((skill) =>
          skill.bezeichnung === editSkill.bezeichnung
            ? { ...editSkill }
            : skill,
        ),
      }))
      handleEditSkillClose()
    }
  }

  const deleteSkill = () => {
    if (editSkill) {
      setUserData((prev) => ({
        ...prev,
        [skillKey]: prev[skillKey].filter(
          (skill) => skill.bezeichnung !== editSkill.bezeichnung,
        ),
      }))
      handleEditSkillClose()
    }
  }

  const options = selectableSkills
    .filter(
      (item) =>
        !userData[skillKey].some((kenntnis) => kenntnis.bezeichnung === item),
    )
    .map((item) => ({
      value: item,
    }))

  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <Dialog
        open={openNewSkill}
        TransitionComponent={TransitionRight}
        keepMounted
        onClose={handleNewSkillClose}
        aria-describedby={`Neue ${label}kenntniss Auswahl erstellen`}
      >
        <DialogTitle>{`Neue ${label}kenntniss Auswahl erstellen`}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            className="mt-3"
            id={`${label}kenntniss Bezeichnung`}
            label={`${label}kenntniss Bezeichnung`}
            value={newCreateSkill}
            onChange={(event) => setNewCreateSkill(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleNewSkillClose()
              setNewCreateSkill('')
            }}
          >
            Abbrechen
          </Button>
          <Button
            disabled={!newCreateSkill}
            onClick={() => {
              handleNewSkillClose()
              // TODO: DB speichern
              selectableSkills.push(newCreateSkill)
              setNewCreateSkill('')
            }}
          >
            Speichern
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openEditSkill}
        TransitionComponent={TransitionLeft}
        keepMounted
        maxWidth="lg"
        onClose={handleEditSkillClose}
        aria-describedby={`Bearbeiten ${label}kenntniss`}
      >
        <DialogTitle>{`Bearbeiten ${label}kenntniss`}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} className="mt-2 mb-2">
            <Grid item xs={12} sm={6} lg={3} className="flex justify-center">
              <TextField
                fullWidth
                id={`Bearbeiten ${label}kenntniss Bezeichnung`}
                label="Bezeichnung"
                disabled
                InputLabelProps={{ shrink: true }}
                value={editSkill?.bezeichnung}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
              <TextField
                fullWidth
                id={`Bearbeiten ${label}kenntniss Erwerb`}
                label="Erwerb"
                type="date"
                value={formatDate(editSkill?.erwerb)}
                InputLabelProps={{ shrink: true }}
                onChange={(event) =>
                  setEditSkill((prev) => ({
                    ...prev!,
                    erwerb: new Date(event.target.value),
                  }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
              <TextField
                fullWidth
                id={`Bearbeiten ${label}kenntniss letzte Ueberpruefung`}
                label="letzte Überprüfung"
                type="date"
                value={formatDate(editSkill?.letzteUeberpruefung)}
                InputLabelProps={{ shrink: true }}
                onChange={(event) =>
                  setEditSkill((prev) => ({
                    ...prev!,
                    letzteUeberpruefung: new Date(event.target.value),
                  }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
              <TextField
                fullWidth
                id={`Bearbeiten ${label}kenntniss naechste Ueberpruefung`}
                label="nächste Überprüfung"
                type="date"
                value={formatDate(editSkill?.naechsteUeberpruefung)}
                InputLabelProps={{ shrink: true }}
                onChange={(event) =>
                  setEditSkill((prev) => ({
                    ...prev!,
                    naechsteUeberpruefung: new Date(event.target.value),
                  }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3.3} className="flex justify-center">
              <TextField
                fullWidth
                id={`Bearbeiten ${label}kenntniss Hinweise`}
                label="Hinweise"
                value={editSkill?.hinweise}
                InputLabelProps={{ shrink: true }}
                onChange={(event) =>
                  setEditSkill((prev) => ({
                    ...prev!,
                    hinweise: event.target.value,
                  }))
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteSkill}>Löschen</Button>
          <Button
            onClick={() => {
              handleEditSkillClose()
            }}
          >
            Abbrechen
          </Button>
          <Button onClick={saveEditSkill}>Speichern</Button>
        </DialogActions>
      </Dialog>

      <DialogContentText id={`${label}kenntniss`}>
        {labelNumber}. {label}kenntnisse
      </DialogContentText>
      <Box className="border-2 rounded-lg p-2 mt-3 mb-3">
        <DialogContentText id={`Neue ${label}kenntniss`}>
          Neue {label}kenntnisse
        </DialogContentText>
        <Grid container spacing={2} className="mt-2 mb-2">
          <Grid item xs={12} sm={6} lg={3} className="flex justify-center">
            <AutoCompleteInput
              options={options}
              idLabel={`${label}kenntniss Bezeichnung`}
              label="Bezeichnung"
              value={{
                text: newSkill.bezeichnung,
                value: newSkill.bezeichnung,
              }}
              onChange={(_, value) => {
                if (value) {
                  setNewSkill((prev) => ({
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
              id={`${label}kenntniss Erwerb`}
              label="Erwerb"
              type="date"
              value={formatDate(newSkill.erwerb)}
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>
                setNewSkill((prev) => ({
                  ...prev,
                  erwerb: new Date(event.target.value),
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
            <TextField
              fullWidth
              id={`${label}kenntniss letzte Ueberpruefung`}
              label="letzte Überprüfung"
              type="date"
              value={formatDate(newSkill.letzteUeberpruefung)}
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>
                setNewSkill((prev) => ({
                  ...prev,
                  letzteUeberpruefung: new Date(event.target.value),
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={1.9} className="flex justify-center">
            <TextField
              fullWidth
              id={`${label}kenntniss naechste Ueberpruefung`}
              label="nächste Überprüfung"
              type="date"
              value={formatDate(newSkill.naechsteUeberpruefung)}
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>
                setNewSkill((prev) => ({
                  ...prev,
                  naechsteUeberpruefung: new Date(event.target.value),
                }))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3.3} className="flex justify-center">
            <TextField
              fullWidth
              id={`${label}kenntniss Hinweise`}
              label="Hinweise"
              value={newSkill.hinweise}
              onChange={(event) =>
                setNewSkill((prev) => ({
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
              weiterer {label}strukturkenntnisse
            </Button>
          </Box>
          <Box>
            <Button onClick={() => setNewSkill({ ...defaultKenntnisse })}>
              Abbrechen
            </Button>
            <Button
              onClick={() => {
                setUserData((prev) => ({
                  ...prev,
                  [skillKey]: [...prev[skillKey], newSkill],
                }))
                setNewSkill({ ...defaultKenntnisse })
              }}
            >
              Hinzufügen
            </Button>
          </Box>
        </Box>
      </Box>
      <DataGrid
        rows={userData[skillKey]}
        columns={skillsColumns}
        hideFooter={true}
        getRowId={(row) => row.bezeichnung}
        autoHeight
        onRowClick={(row) => {
          setEditSkill(row.row)
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
