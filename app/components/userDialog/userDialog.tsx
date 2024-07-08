import { forwardRef, useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slide,
  TextField,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { Person, Status } from '@/app/types/types'
import { GeneralInformationSupplementaryCertificate } from './generalInformationSupplementaryCertificate'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />
})

const defaultPerson = {
  id: -1,
  fuehrerschein: {
    fuehrerscheinNummer: '',
    status: 'gültig' as Status,
  },
  inhaber: {
    name: '',
    vorname: '',
    geburtstag: new Date(),
    geburtsort: '',
    staatsangehoerigkeit: '',
  },
  zusatzbescheinigung: {
    nummer: 0,
    status: 'Entwurf' as Status,
    ausstellungsDatum: undefined,
    ablaufGueltigkeit: undefined,
    unbefristet: false,
  },
  ausstellendeOrganisationseinheit: {
    bezeichnung: '',
    strasseUndNummer: '',
    plz: undefined,
    ort: '',
    telefon: '',
    fax: '',
    email: '',
  },
  bilder: {
    lichtBild: '',
    unterschrift: '',
  },
  verantwortlichesUnternehmen: {
    bezeichnung: '',
    strasseUndNummer: '',
    plz: undefined,
    ort: '',
    land: '',
    telefon: '',
    fax: '',
    email: '',
    unternehmensKategorie: '',
    arbeitsort: '',
  },
  klasse: {
    A: false,
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    A5: false,
    B: false,
    B1: false,
    B2: false,
    hinweiseKlasseA5: '',
  },
  zusaetzlicheAngaben: {
    zelle1: '',
    zelle2: '',
    zelle3: '',
  },
  einschraenkungen: {
    zelle1: '',
    zelle2: '',
    zelle3: '',
  },
  aenderung: undefined,
  aussetzung: undefined,
  entziehung: undefined,
  verlorenZb: undefined,
  entwendetZb: undefined,
  zerstoertZb: undefined,
  weitereAngaben: {
    tauglichkeit: {
      letzteUntersuchung: undefined,
      naechsteUntersuchung: undefined,
      hinweise: '',
    },
    smsSchulung: {
      letzteSchulung: undefined,
      naechsteSchulung: undefined,
    },
  },
  sprachkenntnisse: [],
  fahrzeugkenntnisse: [],
  infrastrukturkenntnisse: [],
}

export const formatDate = (date: Date | undefined): string => {
  if (!date) return ''
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

interface UserDialogProps {
  open: boolean
  handleClose: () => void
}

export const UserDialog = ({ open, handleClose }: UserDialogProps) => {
  const [userData, setUserData] = useState<Person>(defaultPerson)

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      // TODO: was macht das?
      keepMounted
      fullWidth
      maxWidth="xl"
      onClose={handleClose}
      aria-describedby="dialog-slide-new"
    >
      <DialogTitle>Neuer anlegen</DialogTitle>
      <DialogContent>
        <GeneralInformationSupplementaryCertificate
          userData={userData}
          setUserData={setUserData}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Abbrechen</Button>
        <Button onClick={handleClose}>Speichern</Button>
      </DialogActions>
    </Dialog>
  )
}
