import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import { PageSize } from '@react-pdf/types'

const pageSize: PageSize = { height: '105mm', width: '210mm' }

const styles = StyleSheet.create({
  page: {
    padding: '10 5',
    fontSize: 7,
    color: 'green',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: '2px',
  },
  firstHeader: {
    fontSize: 8,
    minHeight: '20px',
    textAlign: 'center',
    borderBottom: '1px solid green',
  },
  header: {
    fontSize: 9,
    marginTop: 6,
    textAlign: 'center',
    fontWeight: 'extrabold',
  },
  description: {
    fontSize: 8,
    textAlign: 'justify',
    marginBottom: 5,
    marginTop: 5,
  },
  languageSkill: {
    fontSize: 8,
    textAlign: 'justify',
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
  },
  tableCell: {
    textAlign: 'left',
  },
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
    padding: '2px 1px 1.5px 4px',
    width: '12px',
    height: '12px',
    border: '1px solid green',
    color: 'black',
  },
})

export const SupplementaryCertificate = () => {
  return (
    <Document>
      <Page orientation="landscape" size="A5" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.tableCol}>
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
              <Text style={styles.klasse}>-</Text>
              <Text style={styles.klasse}>-</Text>
              <Text style={styles.klasse}>-</Text>
              <Text style={styles.klasse}>-</Text>
              <Text style={styles.klasse}>-</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2px',
                // justifyContent: 'space-between',
              }}
            >
              <Text style={styles.klasse}>B</Text>
              <Text style={styles.klasse}>-</Text>
              <Text style={styles.klasse}>2</Text>
            </View>
            <View
              style={{
                border: '1px solid green',
                height: '2.5cm',
                padding: '2px',
              }}
            >
              <Text style={{ textAlign: 'left' }}>Hinweise</Text>
            </View>
            <Text style={styles.header}>4. Zusätzliche Angaben</Text>
            <Text
              style={{
                height: '15px',
                color: 'black',
                borderBottom: '1px dotted green',
              }}
            ></Text>
            <Text
              style={{
                height: '15px',
                color: 'black',
                borderBottom: '1px dotted green',
              }}
            ></Text>
            <Text
              style={{
                height: '15px',
                color: 'black',
                borderBottom: '1px dotted green',
              }}
            ></Text>
            <Text style={styles.header}>5. Sprachkenntnisse</Text>
            <Text style={styles.description}>
              Sprachen, die für den Betrieb auf der Infrastruktur nötig sind und
              in denen der Inhaber Kenntnisse besitzt.
            </Text>
            <View
              style={{
                height: '12px',
                display: 'flex',
                flexDirection: 'row',
                borderBottom: '1px dotted green',
              }}
            >
              <Text style={{ width: '20%' }}>Datum</Text>
              <Text style={{ width: '25%' }}>Sprache</Text>
              <Text style={{ width: '55%' }}>Hinweis</Text>
            </View>
            <View
              style={{
                height: '12px',
                display: 'flex',
                flexDirection: 'row',
                borderBottom: '1px dotted green',
              }}
            >
              <Text style={{ color: 'black', width: '20%' }}></Text>
              <Text style={{ color: 'black', width: '25%' }}></Text>
              <Text style={{ color: 'black', width: '55%' }}></Text>
            </View>
            <View
              style={{
                height: '12px',
                display: 'flex',
                flexDirection: 'row',
                borderBottom: '1px dotted green',
              }}
            >
              <Text style={{ color: 'black', width: '20%' }}></Text>
              <Text style={{ color: 'black', width: '25%' }}></Text>
              <Text style={{ color: 'black', width: '55%' }}></Text>
            </View>
            <View
              style={{
                height: '12px',
                display: 'flex',
                flexDirection: 'row',
                borderBottom: '1px dotted green',
              }}
            >
              <Text style={{ color: 'black', width: '20%' }}></Text>
              <Text style={{ color: 'black', width: '25%' }}></Text>
              <Text style={{ color: 'black', width: '55%' }}></Text>
            </View>
            <View
              style={{
                height: '12px',
                display: 'flex',
                flexDirection: 'row',
                borderBottom: '1px dotted green',
              }}
            >
              <Text style={{ color: 'black', width: '20%' }}></Text>
              <Text style={{ color: 'black', width: '25%' }}></Text>
              <Text style={{ color: 'black', width: '55%' }}></Text>
            </View>
            <Text style={styles.header}>6. Einschränkungen</Text>
            <Text
              style={{
                height: '15px',
                color: 'black',
                borderBottom: '1px dotted green',
              }}
            >
              hallo 123
            </Text>
            <Text
              style={{
                height: '15px',
                borderBottom: '1px dotted green',
                color: 'black',
              }}
            >
              gbhbhhbhdhdbhfbhdfd
            </Text>
            <Text
              style={{
                height: '15px',
                borderBottom: '1px dotted green',
                color: 'black',
              }}
            ></Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.firstHeader}>
              Zusatzbescheinigung für Triebfahrzeugführer
            </Text>
            <Text style={styles.header}>1. Angaben zum </Text>
            <Text style={styles.header}>Arbeitgeber/Auftraggeber</Text>
            <View
              style={{
                height: '12px',
                display: 'flex',
                flexDirection: 'row',
                borderBottom: '1px dotted green',
              }}
            >
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
            <Text
              style={{
                marginTop: '5px',
                height: '15px',
                borderBottom: '1px dotted green',
                color: 'black',
                paddingLeft: '4px',
              }}
            >
              BA ITX
            </Text>
            <Text style={{ paddingLeft: '4px' }}>Arbeitsort</Text>
            <Text
              style={{
                marginTop: '5px',
                height: '15px',
                borderBottom: '1px dotted green',
                color: 'black',
                paddingLeft: '4px',
              }}
            >
              Franz-Lenz-Straße 1
            </Text>
            <Text style={{ paddingLeft: '4px' }}>Postanschrift</Text>
            <Text
              style={{
                marginTop: '5px',
                height: '15px',
                borderBottom: '1px dotted green',
                color: 'black',
                paddingLeft: '4px',
              }}
            >
              49084 Osnabrück - Deutschland
            </Text>
            <Text style={{ paddingLeft: '4px' }}>Ort/Land</Text>
            <Text style={styles.header}>2. Angaben zum Inhaber</Text>
            <Text
              style={{
                marginTop: '5px',
                height: '15px',
                borderBottom: '1px dotted green',
                color: 'black',
                paddingLeft: '4px',
              }}
            >
              Dessau
            </Text>
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
                <Text
                  style={{
                    padding: '2px 1px 1.5px 4px',
                    width: '12px',
                    height: '12px',
                    color: 'black',
                  }}
                >
                  -
                </Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>3</Text>
                <Text
                  style={{
                    padding: '2px 1px 1.5px 4px',
                    width: '12px',
                    height: '12px',
                    color: 'black',
                  }}
                >
                  -
                </Text>
                <Text style={styles.block}>2</Text>
                <Text style={styles.block}>3</Text>
              </View>
            </View>

            <Text
              style={{
                marginTop: '5px',
                height: '15px',
                borderBottom: '1px dotted green',
                color: 'black',
                paddingLeft: '4px',
              }}
            >
              Deutsch
            </Text>
            <Text style={{ paddingLeft: '4px' }}>Staatsangehörigkeit</Text>

            <View style={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
              <View
                style={{
                  width: '100%',
                  height: '100px',
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
                  height: '100px',
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
          <View style={styles.tableCol}>
            <Text style={{ minHeight: '20px' }}></Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
              <View
                style={{
                  border: '1px solid green',
                  width: '100%',
                  height: '50px',
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
                  height: '50px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{ display: 'flex', flexDirection: 'row', gap: '2px' }}
                >
                  <View
                    style={{
                      border: '1px solid green',
                      width: '35px',
                      height: '25px',
                    }}
                  >
                    {/* Image */}
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
            <Text style={{}}>Nummer der</Text>
            <Text style={{}}>Triebfahrzeugführerscheins</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
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
            <Text
              style={{
                borderBottom: '1px solid green',
                marginTop: '3px',
                marginBottom: '3px',
              }}
            />
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
              <Text style={{}}>Ausstellungsdatum</Text>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.block}>2</Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>2</Text>
                <Text style={styles.block}>4</Text>
                <Text
                  style={{
                    padding: '2px 1px 1.5px 4px',
                    width: '12px',
                    height: '12px',
                    color: 'black',
                  }}
                >
                  -
                </Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>5</Text>
                <Text
                  style={{
                    padding: '2px 1px 1.5px 4px',
                    width: '12px',
                    height: '12px',
                    color: 'black',
                  }}
                >
                  -
                </Text>
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
              <Text style={{}}>Ablauf der Gültigkeit</Text>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.block}>2</Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>2</Text>
                <Text style={styles.block}>7</Text>
                <Text
                  style={{
                    padding: '2px 1px 1.5px 4px',
                    width: '12px',
                    height: '12px',
                    color: 'black',
                  }}
                >
                  -
                </Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>6</Text>
                <Text
                  style={{
                    padding: '2px 1px 1.5px 4px',
                    width: '12px',
                    height: '12px',
                    color: 'black',
                  }}
                >
                  -
                </Text>
                <Text style={styles.block}>0</Text>
                <Text style={styles.block}>7</Text>
              </View>
            </View>

            <Text
              style={{
                marginTop: '5px',
                height: '15px',
                borderBottom: '1px dotted green',
                color: 'black',
                paddingLeft: '4px',
              }}
            >
              Weser Ems Eisenbahn GmbH
            </Text>
            <Text style={{ paddingLeft: '4px' }}>
              Ausstellende Oranisationseinheit
            </Text>

            <Text
              style={{
                marginTop: '5px',
                height: '15px',
                borderBottom: '1px dotted green',
                color: 'black',
                paddingLeft: '4px',
              }}
            >
              Franz-Lenz-Straße 1 - 49084 Osnabrück
            </Text>
            <Text style={{ paddingLeft: '4px' }}>Postanschrift</Text>

            <View style={{ display: 'flex', flexDirection: 'row', gap: '2px' }}>
              <View
                style={{
                  borderBottom: '1px solid green',
                  width: '100%',
                  height: '50px',
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
                  <Text>Registernummer:</Text>
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
                  height: '50px',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
              >
                <Text>Stempel</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
