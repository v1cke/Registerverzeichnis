import { Dispatch, forwardRef, SetStateAction, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  TextField,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { Kenntnisse } from '@/app/types/types'
import { formatDate } from './userDialog'

const TransitionLeft = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />
})

interface EditSkillDialogProps {
  openEditSkill: boolean
  setOpenEditSkill: Dispatch<SetStateAction<boolean>>
  label: string
  editSkill?: Kenntnisse
  setEditSkill: Dispatch<SetStateAction<Kenntnisse | undefined>>
}

export const EditSkillDialog = ({
  openEditSkill,
  setOpenEditSkill,
  label,
  editSkill,
  setEditSkill,
}: EditSkillDialogProps) => {
  const handleEditSkillClose = () => {
    setOpenEditSkill(false)
  }

  // TODO: DB speichern!
  const saveEditSkill = () => {
    if (editSkill) {
      // setUserData((prev) => ({
      //   ...prev,
      //   [skillKey]: prev[skillKey].map((skill) =>
      //     skill.bezeichnung === editSkill.bezeichnung
      //       ? { ...editSkill }
      //       : skill,
      //   ),
      // }))
      handleEditSkillClose()
    }
  }

  // TODO: DB speichern!
  const deleteSkill = () => {
    if (editSkill) {
      // setUserData((prev) => ({
      //   ...prev,
      //   [skillKey]: prev[skillKey].filter(
      //     (skill) => skill.bezeichnung !== editSkill.bezeichnung,
      //   ),
      // }))
      handleEditSkillClose()
    }
  }

  return (
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
  )
}
