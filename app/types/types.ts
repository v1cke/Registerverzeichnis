type Status = 'gültig' | 'ungültig' | 'abgelaufen' | 'entzogen' | 'Entwurf'

type Fuehrerschein = {
  fuehrerscheinNummer: string
  status: Status
}

type Inhaber = {
  name: string
  vorname: string
  geburtstag: Date
  geburtsort: string
  staatsangehoerigkeit: string
}

type Zusatzbescheinigung = {
  nummer: string
  status: Status
  ausstellungsDatum?: Date
  ablaufGueltigkeit?: Date
}

type AusstellendeOrganisationseinheit = {
  bezeichnung: string
  strasseUndNummer: string
  plz: number
  ort: string
  telefon: string
  fax?: string
  email: string
}

type Bilder = {
  lichtBild: string
  unterschrift: string
}

type VerantwortlichesUnternehmen = {
  bezeichnung: string
  strasseUndNummer: string
  plz: number
  ort: string
  land: string
  telefon: string
  fax?: string
  email: string
  unternehmensKategorie: string
  arbeitsort: string
}

type Klasse = {
  A: boolean
  A1: boolean
  A2: boolean
  A3: boolean
  A4: boolean
  A5: boolean
  B: boolean
  B1: boolean
  B2: boolean
  hinweiseKlasseA5: string
}

type ZusätzlicheAngaben = {
  zelle1: string
  zelle2: string
  zelle3: string
}

type Einschränkungen = {
  zelle1: string
  zelle2: string
  zelle3: string
}

type Meldung = {
  datumMeldung: Date
  datumAustellungErsatzbeschinigung?: Date
}

type Tauglichkeit = {
  letzteUntersuchung?: Date
  naechsteUntersuchung?: Date
  hinweise: string
}

type SmsSchulung = {
  letzteSchulung?: Date
  naechsteSchulung?: Date
}

type WeitereAngaben = {
  tauglichkeit: Tauglichkeit
  smsSchulung: SmsSchulung
}

type Sprachkenntnisse = {
  bezeichnung: string
  erwerb?: Date
  letzteUeberpruefung?: Date
  naechsteUeberpruefung?: Date
  hinweise: string
}

export type Person = {
  id: number
  fuehrerschein: Fuehrerschein
  inhaber: Inhaber
  zusatzbescheinigung: Zusatzbescheinigung
  ausstellendeOrganisationseinheit: AusstellendeOrganisationseinheit
  bilder: Bilder
  verantwortlichesUnternehmen: VerantwortlichesUnternehmen
  klasse: Klasse
  zusätzlicheAngaben: ZusätzlicheAngaben
  einschränkungen: Einschränkungen
  verlorenZb?: Meldung
  entwendetZb?: Meldung
  zerstoertZb?: Meldung
  weitereAngaben: WeitereAngaben
  sprachkenntnisse: {
    sprache1: Sprachkenntnisse
    sprache2?: Sprachkenntnisse
    sprache3?: Sprachkenntnisse
    sprache4?: Sprachkenntnisse
  }
}
