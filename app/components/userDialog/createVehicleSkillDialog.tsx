import { Dispatch, SetStateAction, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import { ClusterA, ClusterB, Vehicle } from '@/app/types/types'
import { TransitionRight } from './createSkillDialog'

const defaultVehicle: Vehicle = {
  id: -1,
  value: '',
  clusterA: '',
  clusterB: '',
}

interface CreateVehicleSkillDialogProps {
  openNewVehicleSkill: boolean
  setOpenNewVehicleSkill: Dispatch<SetStateAction<boolean>>
  label: string
}

export const CreateVehicleSkillDialog = ({
  openNewVehicleSkill,
  setOpenNewVehicleSkill,
  label,
}: CreateVehicleSkillDialogProps) => {
  const [newVehicleSkill, setNewVehicleSkill] = useState<Vehicle>({
    ...defaultVehicle,
  })

  const handleNewSkillCloseAndClear = () => {
    setOpenNewVehicleSkill(false)
    setNewVehicleSkill({ ...defaultVehicle })
  }

  return (
    <Dialog
      open={openNewVehicleSkill}
      TransitionComponent={TransitionRight}
      keepMounted
      onClose={handleNewSkillCloseAndClear}
      aria-describedby={`Neue ${label}kenntniss Auswahl erstellen`}
    >
      <DialogTitle>{`Neue ${label}kenntniss Auswahl erstellen`}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          className="mt-3 mb-3"
          id={`${label}kenntniss Bezeichnung`}
          label={`${label}kenntniss Bezeichnung`}
          value={newVehicleSkill?.value}
          onChange={(event) =>
            setNewVehicleSkill((prev) => ({
              ...prev!,
              value: event.target.value,
            }))
          }
        />
        <FormControl>
          <FormLabel id="Cluster-A-label">Cluster A</FormLabel>
          <RadioGroup
            aria-labelledby="Cluster A"
            name="Cluster A"
            value={newVehicleSkill?.clusterA}
            onChange={(event) =>
              setNewVehicleSkill((prev) => ({
                ...prev!,
                clusterA: event.target.value as ClusterA,
              }))
            }
          >
            <FormControlLabel
              value="D"
              control={<Radio />}
              label="D (Dampf-Traktion)"
            />
            <FormControlLabel
              value="E"
              control={<Radio />}
              label="E (E-Traktion)"
            />
            <FormControlLabel
              value="V"
              control={<Radio />}
              label="V (V-Traktion)"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="Cluster-A-label">Cluster B</FormLabel>
          <RadioGroup
            aria-labelledby="Cluster B"
            name="Cluster B"
            value={newVehicleSkill?.clusterB}
            onChange={(event) =>
              setNewVehicleSkill((prev) => ({
                ...prev!,
                clusterB: event.target.value as ClusterB,
              }))
            }
          >
            <FormControlLabel
              value="D"
              control={<Radio />}
              label="D (Dampflok)"
            />
            <FormControlLabel
              value="EA"
              control={<Radio />}
              label="EA (Altbau-Elektrolok)"
            />
            <FormControlLabel
              value="ED"
              control={<Radio />}
              label="ED (Drehstrom-Elektrolok)"
            />
            <FormControlLabel
              value="ET"
              control={<Radio />}
              label="ET (Elektro-Triebwagen)"
            />
            <FormControlLabel
              value="VS"
              control={<Radio />}
              label="VS (Brennkraft-Streckenlok)"
            />
            <FormControlLabel
              value="VR"
              control={<Radio />}
              label="VR (Brennkraft-Rangierlok)"
            />
            <FormControlLabel
              value="VT"
              control={<Radio />}
              label="VT (Brennkraft-Triebwagen)"
            />
            <FormControlLabel
              value="ICE"
              control={<Radio />}
              label="ICE (ICE)"
            />
            <FormControlLabel
              value="Stwg"
              control={<Radio />}
              label="Stwg (Steuerwagen)"
            />
            <FormControlLabel
              value="Nfz"
              control={<Radio />}
              label="Nfz (Nebenfahrzeug)"
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleNewSkillCloseAndClear()
          }}
        >
          Abbrechen
        </Button>
        <Button
          disabled={!newVehicleSkill?.value}
          onClick={() => {
            // TODO: DB speichern!

            // selectableSkills.push({id: -1, value: newCreateSkill})
            handleNewSkillCloseAndClear()
          }}
        >
          Speichern
        </Button>
      </DialogActions>
    </Dialog>
  )
}
