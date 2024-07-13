import { Person } from '@/app/types/types'
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    padding: '10',
    fontSize: 7,
    color: 'green',
    maxHeight: '10.5cm',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: '2px',
  },
  firstHeader: {
    fontSize: 8,
    minHeight: '10px',
    textAlign: 'center',
    borderBottom: '1px solid green',
  },
  header: {
    fontSize: 8,
    marginTop: 2,
    textAlign: 'center',
    fontWeight: 'extrabold',
  },
  headerFolowingRow: {
    fontSize: 8,
    textAlign: 'center',
    fontWeight: 'extrabold',
  },
  description: {
    fontSize: 6,
    textAlign: 'justify',
    marginBottom: 3,
    marginTop: 3,
  },
  text: {
    height: '12px',
    color: 'black',
    borderBottom: '1px dotted green',
    fontSize: 6,
    paddingLeft: 3,
  },
  descriptionAndBorder: {
    fontSize: 7,
    textAlign: 'justify',
    paddingBottom: 3.5,
    // marginBottom: 1.5,
    marginTop: 3,
    borderBottom: '1px solid green',
  },
  inputField: {
    marginBottom: 10,
  },
  inputLabel: {
    fontWeight: 'bold',
  },
  table: {
    // display: 'table',
    width: 'auto',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '100%',
    paddingLeft: '2px',
    paddingRight: '2px',
  },
  tableColRight: {
    width: '100%',
    paddingLeft: '2px',
    paddingRight: '24px',
  },
  tableColLeft: {
    width: '100%',
    paddingLeft: '24px',
    paddingRight: '2px',
  },
  tableColMiddle: {
    borderLeft: '1px solid green',
    borderRight: '1px solid green',
    width: '100%',
    padding: '0px 3px',
  },
  tableCell: {
    textAlign: 'left',
  },
  vehicleData: { display: 'flex', flexDirection: 'row', gap: 5 },
  klasse: {
    display: 'flex',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingTop: '1.7px',
    width: '16%',
    maxWidth: '30.5px',
    border: '1px solid green',
    color: 'black',
  },
  block: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '1px',
    width: '11px',
    height: '11px',
    border: '1px solid green',
    color: 'black',
    fontSize: 8,
  },
  blockStroke: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '11px',
    height: '11px',
    color: 'black',
    fontSize: 8,
  },
  dottedInputWithPadding: {
    marginTop: '5px',
    height: '12px',
    borderBottom: '1px dotted green',
    color: 'black',
    paddingLeft: '4px',
  },
  dottedInput: {
    height: '12px',
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px dotted green',
  },
  data30: {
    width: '30%',
    height: '15px',
    color: 'black',
    borderBottom: '1px dotted green',
  },
  data40: {
    width: '40%',
    height: '15px',
    color: 'black',
    borderBottom: '1px dotted green',
  },
})

export const SupplementaryCertificate = ({
  userData,
}: {
  userData: Person
}) => {
  const formatDate = (dateInput?: Date) => {
    if (!dateInput) {
      return ''
    }
    const date = new Date(dateInput)

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const getDateCharacter = (
    position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
    dateInput?: Date,
  ) => {
    if (!dateInput) {
      return ''
    }
    const date = new Date(dateInput)

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const dateString = `${year}${month}${day}`

    return dateString.charAt(position - 1)
  }

  return (
    <Document>
      <Page orientation="landscape" size="A5" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.tableColLeft}>
            <Text style={styles.firstHeader}>
              Zusatzbescheinigung für Triebfahrzeugführer
            </Text>
            <Text style={styles.header}>3. Klasse</Text>
            <Text style={styles.description}>
              Felder ausfüllen bzw. Felder, die nicht vergeben werden, mit einem
              Strich versehen.
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2px',
              }}
            >
              <Text style={styles.klasse}>A</Text>
              <Text style={styles.klasse}>
                {userData.klasse.A || userData.klasse.A1 ? '1' : '-'}
              </Text>
              <Text style={styles.klasse}>
                {userData.klasse.A || userData.klasse.A2 ? '2' : '-'}
              </Text>
              <Text style={styles.klasse}>
                {userData.klasse.A || userData.klasse.A3 ? '3' : '-'}
              </Text>
              <Text style={styles.klasse}>
                {userData.klasse.A || userData.klasse.A4 ? '4' : '-'}
              </Text>
              <Text style={styles.klasse}>
                {userData.klasse.A || userData.klasse.A5 ? '5' : '-'}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2px',
                marginTop: 2,
              }}
            >
              <Text style={styles.klasse}>B</Text>
              <Text style={styles.klasse}>
                {userData.klasse.B || userData.klasse.B1 ? '1' : '-'}
              </Text>
              <Text style={styles.klasse}>
                {userData.klasse.B || userData.klasse.B2 ? '2' : '-'}
              </Text>
            </View>
            <View
              style={{
                marginTop: '3px',
                border: '1px solid green',
                height: '1.5cm',
                padding: '2px',
              }}
            >
              <Text style={{ textAlign: 'left' }}>Hinweise</Text>
              <Text style={{ textAlign: 'left', color: 'black' }}>
                {userData.klasse.hinweiseKlasseA5}
              </Text>
            </View>
            <Text style={styles.header}>4. Zusätzliche Angaben</Text>
            <Text style={styles.text}>
              {userData.zusaetzlicheAngaben.zelle1}
            </Text>
            <Text style={styles.text}>
              {userData.zusaetzlicheAngaben.zelle2}
            </Text>
            <Text style={styles.text}>
              {userData.zusaetzlicheAngaben.zelle3}
            </Text>
            <Text style={styles.header}>5. Sprachkenntnisse</Text>
            <Text style={styles.descriptionAndBorder}>
              Sprachen, die für den Betrieb auf der Infrastruktur nötig sind und
              in denen der Inhaber Kenntnisse besitzt.
            </Text>
            <View style={styles.dottedInput}>
              <Text style={{ width: '20%', fontSize: 6 }}>Datum</Text>
              <Text style={{ width: '25%', fontSize: 6 }}>Sprache</Text>
              <Text style={{ width: '55%', fontSize: 6 }}>Hinweis</Text>
            </View>
            <View style={styles.dottedInput}>
              <Text style={{ color: 'black', width: '20%', fontSize: 6 }}>
                {formatDate(userData.sprachkenntnisse.at(0)?.erwerb)}
              </Text>
              <Text style={{ color: 'black', width: '25%', fontSize: 6 }}>
                {userData.sprachkenntnisse.at(0)?.bezeichnung ?? ''}
              </Text>
              <Text style={{ color: 'black', width: '55%', fontSize: 6 }}>
                {userData.sprachkenntnisse.at(0)?.hinweise ?? ''}
              </Text>
            </View>
            <View style={styles.dottedInput}>
              <Text style={{ color: 'black', width: '20%', fontSize: 6 }}>
                {formatDate(userData.sprachkenntnisse.at(1)?.erwerb)}
              </Text>
              <Text style={{ color: 'black', width: '25%', fontSize: 6 }}>
                {userData.sprachkenntnisse.at(1)?.bezeichnung ?? ''}
              </Text>
              <Text style={{ color: 'black', width: '55%', fontSize: 6 }}>
                {userData.sprachkenntnisse.at(1)?.hinweise ?? ''}
              </Text>
            </View>
            <View style={styles.dottedInput}>
              <Text style={{ color: 'black', width: '20%', fontSize: 6 }}>
                {formatDate(userData.sprachkenntnisse.at(2)?.erwerb)}
              </Text>
              <Text style={{ color: 'black', width: '25%', fontSize: 6 }}>
                {userData.sprachkenntnisse.at(2)?.bezeichnung ?? ''}
              </Text>
              <Text style={{ color: 'black', width: '55%', fontSize: 6 }}>
                {userData.sprachkenntnisse.at(2)?.hinweise ?? ''}
              </Text>
            </View>
            <View style={styles.dottedInput}>
              <Text style={{ color: 'black', width: '20%', fontSize: 6 }}>
                {formatDate(userData.sprachkenntnisse.at(3)?.erwerb)}
              </Text>
              <Text style={{ color: 'black', width: '25%', fontSize: 6 }}>
                {userData.sprachkenntnisse.at(3)?.bezeichnung ?? ''}
              </Text>
              <Text style={{ color: 'black', width: '55%', fontSize: 6 }}>
                {userData.sprachkenntnisse.at(3)?.hinweise ?? ''}
              </Text>
            </View>
            <Text style={styles.header}>6. Einschränkungen</Text>
            <Text style={styles.text}>{userData.einschraenkungen.zelle1}</Text>
            <Text style={styles.text}>{userData.einschraenkungen.zelle2}</Text>
            <Text style={styles.text}>{userData.einschraenkungen.zelle3}</Text>
          </View>
          <View style={styles.tableColMiddle}>
            <Text style={styles.firstHeader}>
              Zusatzbescheinigung für Triebfahrzeugführer
            </Text>
            <Text style={styles.header}>1. Angaben zum </Text>
            <Text style={styles.header}>Arbeitgeber/Auftraggeber</Text>
            <View style={styles.dottedInput}>
              <Text
                style={{ width: '100%', color: 'black', textAlign: 'center' }}
              >
                Weser Ems Eisenbahn Gmbh
              </Text>
            </View>
            <Text style={{ textAlign: 'center' }}>Name des Unternehmens</Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <Text style={{ fontSize: 6.5 }}>
                  Verkehrsunternehmen/Halter
                </Text>
                <Text
                  style={{
                    padding: '1px 1px 1px 2.5px',
                    width: '10px',
                    height: '10px',
                    border: '1px solid green',
                    color: 'black',
                  }}
                >
                  X
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <Text style={{ fontSize: 6.5 }}>Infrastrukturunternehmen</Text>
                <Text
                  style={{
                    padding: '1px 1px 1px 2.5px',
                    width: '10px',
                    height: '10px',
                    border: '1px solid green',
                    color: 'black',
                  }}
                ></Text>
              </View>
            </View>
            <Text style={styles.dottedInputWithPadding}>BA ITX</Text>
            <Text style={{ paddingLeft: '4px' }}>Arbeitsort</Text>
            <Text style={styles.dottedInputWithPadding}>
              Franz-Lenz-Straße 1
            </Text>
            <Text style={{ paddingLeft: '4px' }}>Postanschrift</Text>
            <Text style={styles.dottedInputWithPadding}>
              49084 Osnabrück - Deutschland
            </Text>
            <Text style={{ paddingLeft: '4px' }}>Ort/Land</Text>
            <Text style={styles.header}>2. Angaben zum Inhaber</Text>
            <Text style={styles.dottedInputWithPadding}>Dessau</Text>
            <Text style={{ paddingLeft: '4px' }}>Geburtsort</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '5px',
                paddingLeft: '4px',
              }}
            >
              <Text style={{}}>Geburtsdatum</Text>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.block}>2</Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>2</Text>
                <Text style={styles.blockStroke}>-</Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>3</Text>
                <Text style={styles.blockStroke}>-</Text>
                <Text style={styles.block}>2</Text>
                <Text style={styles.block}>3</Text>
              </View>
            </View>

            <Text style={styles.dottedInputWithPadding}>Deutsch</Text>
            <Text style={{ paddingLeft: '4px' }}>Staatsangehörigkeit</Text>

            <View style={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
              <View
                style={{
                  width: '100%',
                  height: '80px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    height: '50%',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  {/* Image */}
                  <Image
                    style={{ height: 'auto', width: '90%' }}
                    src={'/testImages/unterschrift.png'}
                  />
                </View>
                <View
                  style={{
                    height: '50%',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Text
                    style={{
                      width: '100%',
                      borderBottom: '1px dotted green',
                    }}
                  ></Text>
                  <Text style={{ paddingLeft: '4px' }}>Unterschrift</Text>
                </View>
              </View>
              <View
                style={{
                  border: '1px solid green',
                  width: '100%',
                  height: '80px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Image */}
                <Image
                  style={{ height: 'auto', width: '90%' }}
                  src={'/testImages/testImage.png'}
                />
              </View>
            </View>
          </View>
          <View style={styles.tableColRight}>
            <Text style={{ minHeight: '10px' }}></Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
              <View
                style={{
                  border: '1px solid green',
                  width: '100%',
                  height: '30px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Image */}
                <Image
                  style={{ height: 'auto', width: '90%' }}
                  src={'/testImages/weeLogo.png'}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  height: '30px',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '2px',
                  }}
                >
                  <View
                    style={{
                      border: '1px solid green',
                      width: '25px',
                      height: '15px',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {/* Image */}
                    <Image
                      style={{ height: 'auto', width: '100%' }}
                      src={'/testImages/europaeischeModell.jpeg'}
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Text>Europäisches</Text>
                    <Text>Modell</Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={{ marginTop: 2 }}>Nummer der</Text>
            <Text style={{ marginBottom: 2 }}>Triebfahrzeugführerscheins</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                borderBottom: '1px solid green',
                paddingBottom: '3px',
              }}
            >
              <Text style={styles.block}>D</Text>
              <Text style={styles.block}>E</Text>
              <Text style={styles.block}>7</Text>
              <Text style={styles.block}>1</Text>
              <Text style={styles.block}>2</Text>
              <Text style={styles.block}>0</Text>
              <Text style={styles.block}>2</Text>
              <Text style={styles.block}>2</Text>
              <Text style={styles.block}>1</Text>
              <Text style={styles.block}>2</Text>
              <Text style={styles.block}>7</Text>
              <Text style={styles.block}>6</Text>
            </View>
            {/* <Text
              style={{
                borderBottom: '1px solid green',
                marginTop: '3px',
                // marginBottom: '3px',
              }}
            /> */}
            <Text style={styles.header}>Zusatzbescheinigung</Text>
            <Text style={styles.description}>
              für die Infrastruktur, auf der der Triebfahrzeugführer fahren
              darf, und für die Fahrzeuge, die der Triebfahrzeugführer führen
              darf, nach der Richtline 2007/59/EG und der
              Triebfahrzeugführerscheinverordnung
            </Text>

            <Text
              style={{
                marginTop: '5px',
                height: '15px',
                borderBottom: '1px dotted green',
                color: 'black',
                textAlign: 'center',
              }}
            >
              Becker
            </Text>
            <Text style={{ textAlign: 'center' }}>Name</Text>
            <Text
              style={{
                marginTop: '5px',
                height: '15px',
                borderBottom: '1px dotted green',
                color: 'black',
                textAlign: 'center',
              }}
            >
              Florian
            </Text>
            <Text style={{ textAlign: 'center' }}>Vorname</Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '5px',
                paddingLeft: '4px',
              }}
            >
              <Text style={{ fontSize: 5 }}>Ausstellungsdatum</Text>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.block}>2</Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>2</Text>
                <Text style={styles.block}>4</Text>
                <Text style={styles.blockStroke}>-</Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>5</Text>
                <Text style={styles.blockStroke}>-</Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>8</Text>
              </View>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '5px',
                paddingLeft: '4px',
              }}
            >
              <Text style={{ fontSize: 5 }}>Ablauf der Gültigkeit</Text>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.block}>2</Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>2</Text>
                <Text style={styles.block}>7</Text>
                <Text style={styles.blockStroke}>-</Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>6</Text>
                <Text style={styles.blockStroke}>-</Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>7</Text>
              </View>
            </View>

            <Text style={styles.dottedInputWithPadding}>
              Weser Ems Eisenbahn GmbH
            </Text>
            <Text style={{ paddingLeft: '4px' }}>
              Ausstellende Oranisationseinheit
            </Text>

            <Text style={styles.dottedInputWithPadding}>
              Franz-Lenz-Straße 1 - 49084 Osnabrück
            </Text>
            <Text style={{ paddingLeft: '4px', fontSize: 5 }}>
              Postanschrift
            </Text>

            <View style={{ display: 'flex', flexDirection: 'row', gap: '2px' }}>
              <View
                style={{
                  borderBottom: '1px solid green',
                  width: '100%',
                  height: '35px',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <Text style={{ fontSize: 5 }}>Registernummer:</Text>
                  <Text
                    style={{
                      marginLeft: '10px',
                      color: 'black',
                    }}
                  >
                    1
                  </Text>
                </View>
              </View>
              <View
                style={{
                  border: '1px solid green',
                  width: '100%',
                  height: '35px',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
              >
                {/* TODO: Stempel Image */}
                <Text>Stempel</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
      <Page orientation="landscape" size="A5" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.tableColLeft}>
            <Text style={styles.firstHeader}>
              Zusatzbescheinigung für Triebfahrzeugführer
            </Text>
            <Text style={styles.header}>7. Fahrzeuge, die der</Text>
            <Text style={styles.headerFolowingRow}>
              Triebfahrzeugführer führen darf
            </Text>
            <View style={styles.dottedInput}>
              <Text style={{ width: '30%' }}>Datum</Text>
              <Text style={{ width: '40%' }}>Beschreibung</Text>
              <Text style={{ width: '30%' }}>Hinweis</Text>
            </View>

            {Array.from({ length: 15 }).map((_, index) => (
              <View key={index} style={styles.vehicleData}>
                <Text style={styles.data30}></Text>
                <Text style={styles.data40}></Text>
                <Text style={styles.data30}></Text>
              </View>
            ))}
          </View>
          <View style={styles.tableColMiddle}>
            <Text style={styles.firstHeader}>
              Zusatzbescheinigung für Triebfahrzeugführer
            </Text>
            <Text style={styles.header}>8. Infrastruktur, auf der der</Text>
            <Text style={styles.headerFolowingRow}>
              Triebfahrzeugführer fahren darf
            </Text>
            <View style={styles.dottedInput}>
              <Text style={{ width: '30%' }}>Datum</Text>
              <Text style={{ width: '40%' }}>Ausweitung</Text>
              <Text style={{ width: '30%' }}>Hinweis</Text>
            </View>
            {Array.from({ length: 15 }).map((_, index) => (
              <View key={index} style={styles.vehicleData}>
                <Text style={styles.data30}></Text>
                <Text style={styles.data40}></Text>
                <Text style={styles.data30}></Text>
              </View>
            ))}
          </View>
          <View style={styles.tableColRight}>
            <Text style={styles.firstHeader}>
              Zusatzbescheinigung für Triebfahrzeugführer
            </Text>
            <Text style={styles.header}>8. Infrastruktur, auf der der</Text>
            <Text style={styles.headerFolowingRow}>
              Triebfahrzeugführer fahren darf
            </Text>
            <View style={styles.dottedInput}>
              <Text style={{ width: '30%' }}>Datum</Text>
              <Text style={{ width: '40%' }}>Ausweitung</Text>
              <Text style={{ width: '30%' }}>Hinweis</Text>
            </View>

            {Array.from({ length: 15 }).map((_, index) => (
              <View key={index} style={styles.vehicleData}>
                <Text style={styles.data30}></Text>
                <Text style={styles.data40}></Text>
                <Text style={styles.data30}></Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  )
}
