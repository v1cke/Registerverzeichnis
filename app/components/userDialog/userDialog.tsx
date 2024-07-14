import {
  Dispatch,
  forwardRef,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import {
  FuehrerscheinStatus,
  Person,
  ZusatzbescheinigungStatus,
} from '@/app/types/types'
import { GeneralInformationSupplementaryCertificate } from './generalInformationSupplementaryCertificate'
import { DetailsOfEmployer } from './detailsOfEmployer'
import { DetailsOfHolder } from './detailsOfHolder'
import { Classes } from './classes'
import { FurtherInformation } from './furtherInformation'
import { AdditionalInformation } from './additionalInformation'
import { Limitations } from './limitations'
import {
  fakeData,
  infrastructure,
  languages,
  vehicle,
} from '@/app/fakeData/fakeData'
import { SkillsComponent } from './skillsComponent'
import { CreatePdf } from './createPdf'

const TransitionDown = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />
})

const defaultPerson: Person = {
  id: -1,
  fuehrerschein: {
    fuehrerscheinNummer: '',
    status: 'gültig' as FuehrerscheinStatus,
  },
  inhaber: {
    name: '',
    vorname: '',
    geburtstag: new Date(new Date().setFullYear(new Date().getFullYear() - 20)),
    geburtsort: '',
    staatsangehoerigkeit: '',
  },
  zusatzbescheinigung: {
    nummer: 0,
    status: 'Entwurf' as ZusatzbescheinigungStatus,
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
    bezeichnung: 'Weser Ems Eisenbahn GmbH',
    strasseUndNummer: 'Franz-Lenz-Straße 1',
    plz: 49084,
    ort: 'Osnabrück',
    land: 'Deutschland',
    telefon: '0541-4444040',
    fax: '0541444404911',
    email: 'info@wee.gmbh',
    unternehmensKategorie: 'Verkehrsunternehmen',
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
  openDialog: boolean
  setOpenDialog: Dispatch<SetStateAction<boolean>>
  selectedColumnId?: number
  setSetselectedColumnId: Dispatch<SetStateAction<number | undefined>>
}

export const UserDialog = ({
  openDialog,
  setOpenDialog,
  selectedColumnId,
  setSetselectedColumnId,
}: UserDialogProps) => {
  const [userData, setUserData] = useState<Person>({ ...defaultPerson })
  const [openPdf, setOpenPdf] = useState(false)

  const handleClose = () => {
    setOpenDialog(false)
  }

  const clearDataAndClose = () => {
    setUserData({ ...defaultPerson })
    handleClose()
  }

  const selectedPerson = fakeData.find((item) => item.id === selectedColumnId)
  useEffect(() => {
    if (selectedPerson) {
      setUserData({ ...selectedPerson })
    }
  }, [selectedPerson])

  return (
    <Box>
      <CreatePdf
        openPdf={openPdf}
        setOpenPdf={setOpenPdf}
        userData={userData}
      />
      <Dialog
        open={openDialog}
        TransitionComponent={TransitionDown}
        keepMounted
        fullWidth
        maxWidth="xl"
        onClose={handleClose}
        aria-describedby="dialog-slide-new"
        className="z-10"
      >
        <DialogTitle>Zusatzbescheinigung</DialogTitle>
        <DialogContent className="flex flex-col gap-4">
          <GeneralInformationSupplementaryCertificate
            userData={userData}
            setUserData={setUserData}
          />
          <DetailsOfEmployer userData={userData} setUserData={setUserData} />
          <DetailsOfHolder userData={userData} setUserData={setUserData} />
          <Classes userData={userData} setUserData={setUserData} />
          <AdditionalInformation
            userData={userData}
            setUserData={setUserData}
          />
          <Limitations userData={userData} setUserData={setUserData} />
          <SkillsComponent
            userData={userData}
            setUserData={setUserData}
            label="Sprach"
            labelNumber={7}
            selectableSkills={languages}
            skillKey="sprachkenntnisse"
          />
          <SkillsComponent
            userData={userData}
            setUserData={setUserData}
            label="Fahrzeug"
            labelNumber={8}
            selectableSkills={vehicle}
            skillKey="fahrzeugkenntnisse"
          />
          <SkillsComponent
            userData={userData}
            setUserData={setUserData}
            label="Infrastruktur"
            labelNumber={9}
            selectableSkills={infrastructure}
            skillKey="infrastrukturkenntnisse"
          />
          <FurtherInformation userData={userData} setUserData={setUserData} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPdf(true)}>Drucken</Button>
          <Button onClick={clearDataAndClose}>Abbrechen</Button>
          {/* TODO: DB speichern! */}
          <Button onClick={clearDataAndClose}>Speichern</Button>
        </DialogActions>
      </Dialog>
      <Button
        variant="contained"
        className="w-32"
        onClick={() => {
          setSetselectedColumnId(undefined)
          setOpenDialog(true)
        }}
      >
        Neu
      </Button>
    </Box>
  )
}
