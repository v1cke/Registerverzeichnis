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

const languages = [
  'Deutsch',
  'Englisch',
  'Französisch',
  'Spanisch',
  'Italienisch',
  'Niederländisch',
  'Portugiesisch',
  'Russisch',
  'Chinesisch',
  'Japanisch',
  'Koreanisch',
  'Arabisch',
  'Türkisch',
  'Hindi',
  'Bengalisch',
  'Punjabi',
  'Urdu',
  'Vietnamesisch',
  'Persisch',
  'Thai',
  'Griechisch',
  'Schwedisch',
  'Norwegisch',
  'Dänisch',
  'Finnisch',
  'Ungarisch',
  'Tschechisch',
  'Slowakisch',
  'Polnisch',
  'Rumänisch',
  'Bulgarisch',
  'Serbisch',
  'Kroatisch',
  'Slowenisch',
  'Litauisch',
  'Lettisch',
  'Estnisch',
  'Maltesisch',
  'Isländisch',
  'Irisch',
  'Walisisch',
  'Schottisch-Gälisch',
  'Hebräisch',
  'Jiddisch',
  'Afrikaans',
  'Swahili',
  'Zulu',
  'Xhosa',
  'Igbo',
  'Yoruba',
  'Hausa',
  'Amharisch',
  'Somali',
  'Madagassisch',
]

export const TransitionRight = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="right" ref={ref} {...props} />
})

export const defaultKenntnisse: Kenntnisse = {
  bezeichnung: '',
  erwerb: undefined,
  letzteUeberpruefung: undefined,
  naechsteUeberpruefung: undefined,
  hinweise: '',
}

interface LanguageSkillsProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const LanguageSkills = ({
  userData,
  setUserData,
}: LanguageSkillsProps) => {
  const [newLanguageSkill, setNewLanguageSkill] = useState<Kenntnisse>({
    ...defaultKenntnisse,
  })
  console.log('defaultKenntnisse: ', defaultKenntnisse)
  console.log('newLanguageSkill: ', newLanguageSkill)
  const [open, setOpen] = useState(false)
  const [newLanguage, setNewLanguage] = useState('')

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
        <DialogTitle>{'Neue Sprachkenntnisse Auswahl erstellen'}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            id="Sprachkenntniss Bezeichnung"
            label="Sprachkenntniss Bezeichnung"
            value={newLanguage}
            onChange={(event) => setNewLanguage(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose()
              setNewLanguage('')
            }}
          >
            Abbrechen
          </Button>
          <Button
            onClick={() => {
              handleClose()
              // TODO: DB speichern
              languages.push(newLanguage)
              setNewLanguage('')
            }}
          >
            Speichern
          </Button>
        </DialogActions>
      </Dialog>
      <DialogContentText id="Sprachkenntnisse">
        7. Sprachkenntnisse
      </DialogContentText>
      <Box className="border-2 rounded-lg p-2 mt-3 mb-3">
        <DialogContentText id="Neue Sprachkenntnisse">
          Neue Sprachkenntnisse
        </DialogContentText>
        <Grid container spacing={2} className="mt-2 mb-2">
          <Grid item xs={12} sm={6} lg={3} className="flex justify-center">
            <AutoCompleteInput
              options={languages
                .filter(
                  (item) =>
                    !userData.sprachkenntnisse.some(
                      (kenntnis) => kenntnis.bezeichnung === item,
                    ),
                )
                .map((item) => ({
                  text: item,
                  value: item,
                }))}
              idLabel="Sprachkenntnisse Bezeichnung"
              label="Bezeichnung"
              value={{
                text: newLanguageSkill.bezeichnung,
                value: newLanguageSkill.bezeichnung,
              }}
              onChange={(_, value) => {
                if (value) {
                  setNewLanguageSkill((prev) => ({
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
        <Box className="flex justify-between">
          <Box>
            <Button onClick={() => setOpen(true)}>
              weiterer Sprachkenntnisse
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => setNewLanguageSkill({ ...defaultKenntnisse })}
            >
              Abbrechen
            </Button>
            <Button
              disabled={!newLanguageSkill.bezeichnung}
              onClick={() => {
                setUserData((prev) => ({
                  ...prev,
                  sprachkenntnisse: [
                    ...prev.sprachkenntnisse,
                    newLanguageSkill,
                  ],
                }))
                setNewLanguageSkill({ ...defaultKenntnisse })
              }}
            >
              Hinzufügen
            </Button>
          </Box>
        </Box>
      </Box>
      <DataGrid
        rows={userData.sprachkenntnisse}
        columns={skillsColumns}
        hideFooter={true}
        getRowId={(row) => row.bezeichnung}
        autoHeight
      />
    </Box>
  )
}
