import { Dispatch, SetStateAction, useState } from 'react'
import {
  Infrastructure,
  Kenntnisse,
  Language,
  Person,
  Vehicle,
} from '@/app/types/types'
import { Box, Button, DialogContentText, Grid, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { skillsColumns } from './skillsColumns'
import { formatDate } from './userDialog'
import { AutoCompleteInput } from './autoCompleteInput'
import { CreateSkillDialog } from './createSkillDialog'
import { EditSkillDialog } from './editSkillDialog'
import { CreateVehicleSkillDialog } from './createVehicleSkillDialog'

export const defaultKenntnisse: Kenntnisse = {
  bezeichnung: '',
  erwerb: undefined,
  letzteUeberpruefung: undefined,
  naechsteUeberpruefung: undefined,
  hinweise: '',
}

type SkillKey =
  | 'sprachkenntnisse'
  | 'fahrzeugkenntnisse'
  | 'infrastrukturkenntnisse'

type SelectableSkillsMap = {
  sprachkenntnisse: Language[]
  fahrzeugkenntnisse: Vehicle[]
  infrastrukturkenntnisse: Infrastructure[]
}

interface SkillsComponentProps<K extends SkillKey> {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
  label: string
  labelNumber: number
  selectableSkills: SelectableSkillsMap[K]
  skillKey: K
}

export const SkillsComponent = <K extends SkillKey>({
  userData,
  setUserData,
  label,
  labelNumber,
  selectableSkills,
  skillKey,
}: SkillsComponentProps<K>) => {
  const [newSkill, setNewSkill] = useState<Kenntnisse>({ ...defaultKenntnisse })
  const [openNewSkill, setOpenNewSkill] = useState(false)
  const [openEditSkill, setOpenEditSkill] = useState(false)
  const [openNewVehicleSkill, setOpenNewVehicleSkill] = useState(false)
  const [editSkill, setEditSkill] = useState<Kenntnisse>()

  const options = selectableSkills
    .filter(
      (item) =>
        !userData[skillKey].some(
          (kenntnis) => kenntnis.bezeichnung === item.value,
        ),
    )
    .map((item) => ({
      value: item.value,
    }))

  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <CreateSkillDialog
        openNewSkill={openNewSkill}
        setOpenNewSkill={setOpenNewSkill}
        label={label}
      />

      <EditSkillDialog
        openEditSkill={openEditSkill}
        setOpenEditSkill={setOpenEditSkill}
        label={label}
        editSkill={editSkill}
        setEditSkill={setEditSkill}
      />

      <CreateVehicleSkillDialog
        openNewVehicleSkill={openNewVehicleSkill}
        setOpenNewVehicleSkill={setOpenNewVehicleSkill}
        label={label}
      />

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
            <Button
              onClick={() => {
                if (skillKey === 'fahrzeugkenntnisse') {
                  setOpenNewVehicleSkill(true)
                } else {
                  setOpenNewSkill(true)
                }
              }}
            >
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
