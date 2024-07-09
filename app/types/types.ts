export type Status =
  | 'gültig'
  | 'ungültig'
  | 'abgelaufen'
  | 'entzogen'
  | 'Entwurf'

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
  nummer: number
  status: Status
  ausstellungsDatum?: Date
  ablaufGueltigkeit?: Date
  unbefristet: boolean
}

type AusstellendeOrganisationseinheit = {
  bezeichnung: string
  strasseUndNummer: string
  plz?: number
  ort: string
  telefon: string
  fax: string
  email: string
}

type Bilder = {
  lichtBild: string
  unterschrift: string
}

type VerantwortlichesUnternehmen = {
  bezeichnung: string
  strasseUndNummer: string
  plz?: number
  ort: string
  land: string
  telefon: string
  fax: string
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

type ZusaetzlicheAngaben = {
  zelle1: string
  zelle2: string
  zelle3: string
}

type Einschraenkungen = {
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

export type Kenntnisse = {
  bezeichnung: string
  erwerb?: Date
  letzteUeberpruefung?: Date
  naechsteUeberpruefung?: Date
  hinweise: string
}

type Aenderung = {
  datum: Date
  aenderungFeld3Klasse: string
  aenderungFeld4Angaben: string
  aenderungFeld5Sprachen: string
  aenderungFeld6Einschraenkung: string
  aenderungFeld7Fahrzeug: string
  aenderungFeld8Infrastruktur: string
  sontiges: string
}

type Aussetzung = {
  von: Date
  bis: Date
  wegfallFuehrerschein: boolean
  wegfallNachweisAllgemeinKenntnisse: boolean
  wegfallNachweisBefaehigung: boolean
  wegfallNachweisBetriebsverfahren: boolean
  wegfallNachweisZugbeeinflussungSysteme: boolean
  wegfallNachweisSignalSysteme: boolean
  wegfallNachweisSchulung: boolean
  wegfallNachweisSprachkenntnisse: boolean
  sontiges: string
}

type Entziehung = {
  datum: Date
  wegfallFuehrerschein: boolean
  wegfallNachweisAllgemeinKenntnisse: boolean
  wegfallNachweisBefaehigung: boolean
  wegfallNachweisBetriebsverfahren: boolean
  wegfallNachweisZugbeeinflussungSysteme: boolean
  wegfallNachweisSignalSysteme: boolean
  wegfallNachweisSchulung: boolean
  wegfallNachweisSprachkenntnisse: boolean
  ausscheidenUnternehmen: boolean
  sontiges: string
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
  zusaetzlicheAngaben: ZusaetzlicheAngaben
  einschraenkungen: Einschraenkungen
  aenderung?: Aenderung
  aussetzung?: Aussetzung
  entziehung?: Entziehung
  verlorenZb?: Meldung
  entwendetZb?: Meldung
  zerstoertZb?: Meldung
  weitereAngaben: WeitereAngaben
  sprachkenntnisse: Kenntnisse[]
  fahrzeugkenntnisse: Kenntnisse[]
  infrastrukturkenntnisse: Kenntnisse[]
}
