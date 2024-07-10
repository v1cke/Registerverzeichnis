import { forwardRef, useEffect, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { Person, Status } from '@/app/types/types'
import { GeneralInformationSupplementaryCertificate } from './generalInformationSupplementaryCertificate'
import { DetailsOfEmployer } from './detailsOfEmployer'
import { DetailsOfHolder } from './detailsOfHolder'
import { Classes } from './classes'
import { FurtherInformation } from './furtherInformation'
import { AdditionalInformation } from './additionalInformation'
import { Limitations } from './limitations'
import { LanguageSkills } from './languageSkills'
import { VehicleSkills } from './vehicleSkills'
import { InfrastructureSkills } from './infrastructureSkills'
import { fakeData } from '@/app/fakeData/fakeData'

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
    geburtstag: new Date(new Date().setFullYear(new Date().getFullYear() - 20)),
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
  open: boolean
  handleClose: () => void
  selectedColumnId?: number
}

export const UserDialog = ({
  open,
  handleClose,
  selectedColumnId,
}: UserDialogProps) => {
  const selectetPerson = fakeData.find((item) => item.id === selectedColumnId)

  const [userData, setUserData] = useState<Person>(defaultPerson)
  useEffect(() => {
    if (selectetPerson) {
      setUserData(selectetPerson)
    }
  }, [selectetPerson])

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
      <DialogTitle>Zusatzbescheinigung</DialogTitle>
      <DialogContent className="flex flex-col gap-4">
        <GeneralInformationSupplementaryCertificate
          userData={userData}
          setUserData={setUserData}
        />
        <DetailsOfEmployer userData={userData} setUserData={setUserData} />
        <DetailsOfHolder userData={userData} setUserData={setUserData} />
        <Classes userData={userData} setUserData={setUserData} />
        <AdditionalInformation userData={userData} setUserData={setUserData} />
        <Limitations userData={userData} setUserData={setUserData} />
        <LanguageSkills userData={userData} setUserData={setUserData} />
        <VehicleSkills userData={userData} setUserData={setUserData} />
        <InfrastructureSkills userData={userData} setUserData={setUserData} />
        <FurtherInformation userData={userData} setUserData={setUserData} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Abbrechen</Button>
        <Button onClick={handleClose}>Speichern</Button>
      </DialogActions>
    </Dialog>
  )
}
