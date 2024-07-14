import { Dispatch, SetStateAction, useRef } from 'react'
import { Person, ZusatzbescheinigungStatus } from '@/app/types/types'
import {
  Box,
  Button,
  DialogContentText,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { formatDate } from './userDialog'
import { useDropzone } from 'react-dropzone'
import SignatureCanvas from 'react-signature-canvas'

const ImageUpload = ({
  onImageUpload,
  imageSrc,
}: {
  onImageUpload: (file: File) => void
  imageSrc: string | null
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'], // Akzeptierte Bildformate
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onImageUpload(acceptedFiles[0])
      }
    },
  })

  return (
    <Box
      {...getRootProps()}
      border="1px dashed grey"
      p={2}
      textAlign="center"
      className="cursor-pointer"
    >
      <input {...getInputProps()} />
      <Typography className="mt-8 mb-8">
        Ziehen Sie ein Bild per Drag & Drop hierher oder klicken Sie, um eines
        auszuwählen
      </Typography>
      {imageSrc && (
        <Box mt={2}>
          <img src={imageSrc} alt="Uploaded" width="100%" />
        </Box>
      )}
    </Box>
  )
}

const SignatureInput = ({
  onSignatureChange,
  signatureSrc,
}: {
  onSignatureChange: (dataUrl: string) => void
  signatureSrc: string | null
}) => {
  const sigCanvas = useRef<SignatureCanvas>(null)

  const clearSignature = () => {
    sigCanvas.current?.clear()
    onSignatureChange('')
  }

  const saveSignature = () => {
    const dataUrl = sigCanvas.current?.getTrimmedCanvas().toDataURL('image/png')
    if (dataUrl) {
      onSignatureChange(dataUrl)
    }
  }

  return (
    <Box border="1px dashed grey" p={2} textAlign="center">
      <Typography>Sign here</Typography>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
      />
      <Box mt={2}>
        <Button onClick={saveSignature} variant="contained" color="primary">
          Save
        </Button>
        <Button onClick={clearSignature} variant="contained" color="secondary">
          Clear
        </Button>
      </Box>
      {signatureSrc && (
        <Box mt={2}>
          <img src={signatureSrc} alt="Signature" width="100%" />
        </Box>
      )}
    </Box>
  )
}

interface DetailsOfHolderProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const DetailsOfHolder = ({
  userData,
  setUserData,
}: DetailsOfHolderProps) => {
  const handleImageUpload = (key: string, file: File) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setUserData((prev) => ({
        ...prev,
        bilder: {
          ...prev.bilder,
          [key]: reader.result as string,
        },
      }))
    }
    reader.readAsDataURL(file)
  }

  const handleSignatureChange = (dataUrl: string) => {
    setUserData((prev) => ({
      ...prev,
      bilder: {
        ...prev.bilder,
        unterschrift: dataUrl,
      },
    }))
  }

  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <DialogContentText id="Angaben zum Inhaber">
        3. Angaben zum Inhaber
      </DialogContentText>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Angaben zum Inhaber Name"
            label="Name"
            value={userData.inhaber.name}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                inhaber: {
                  ...prev.inhaber,
                  name: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Angaben zum Inhaber Vorname"
            label="Vorname"
            value={userData.inhaber.vorname}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                inhaber: {
                  ...prev.inhaber,
                  vorname: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Angaben zum Inhaber Geburtsdatum"
            label="Geburtsdatum"
            type="date"
            value={formatDate(userData.inhaber.geburtstag)}
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                inhaber: {
                  ...prev.inhaber,
                  geburtstag: new Date(event.target.value),
                },
              }))
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Angaben zum Inhaber Geburtsort"
            label="Geburtsort"
            value={userData.inhaber.geburtsort}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                inhaber: {
                  ...prev.inhaber,
                  geburtsort: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Angaben zum Inhaber Staatsangehoerigkeit"
            label="Staatsangehörigkeit"
            value={userData.inhaber.staatsangehoerigkeit}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                inhaber: {
                  ...prev.inhaber,
                  staatsangehoerigkeit: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Angaben zum Inhaber Arbeitsort"
            label="Arbeitsort"
            // TODO: kommt arbeitsort in verantwortlichesUnternehmen oder inhaber???
            value={userData.verantwortlichesUnternehmen.arbeitsort}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                verantwortlichesUnternehmen: {
                  ...prev.verantwortlichesUnternehmen,
                  arbeitsort: event.target.value,
                },
              }))
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6} lg={6} className="flex justify-center">
          {/* <Box width="100%">
            <DialogContentText gutterBottom>Unterschrift</DialogContentText>
            <ImageUpload
              onImageUpload={(file) => handleImageUpload('unterschrift', file)}
              imageSrc={userData.bilder.unterschrift}
            />
          </Box> */}
          {/* TODO: vorbereitet für Unterschrifts Feld */}
          <SignatureInput
            onSignatureChange={handleSignatureChange}
            signatureSrc={userData.bilder.unterschrift}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} className="flex justify-center">
          <Box width="100%">
            <DialogContentText gutterBottom>Lichtbild</DialogContentText>
            <ImageUpload
              onImageUpload={(file) => handleImageUpload('lichtBild', file)}
              imageSrc={userData.bilder.lichtBild}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
