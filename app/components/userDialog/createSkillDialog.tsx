import { Dispatch, forwardRef, SetStateAction, useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

export const TransitionRight = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="right" ref={ref} {...props} />
})

interface CreateSkillDialogProps {
  openNewSkill: boolean
  setOpenNewSkill: Dispatch<SetStateAction<boolean>>
  label: string
}

export const CreateSkillDialog = ({
  openNewSkill,
  setOpenNewSkill,
  label,
}: CreateSkillDialogProps) => {
  const [newCreateSkill, setNewCreateSkill] = useState('')

  const handleNewSkillClose = () => {
    setOpenNewSkill(false)
  }

  return (
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
            // TODO: DB speichern!

            // selectableSkills.push({id: -1, value: newCreateSkill})
            setNewCreateSkill('')
          }}
        >
          Speichern
        </Button>
      </DialogActions>
    </Dialog>
  )
}
