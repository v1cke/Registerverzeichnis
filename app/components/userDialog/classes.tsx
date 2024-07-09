import { Person } from '@/app/types/types'
import {
  Box,
  Checkbox,
  DialogContentText,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface ClassesProps {
  userData: Person
  setUserData: Dispatch<SetStateAction<Person>>
}

export const Classes = ({ userData, setUserData }: ClassesProps) => {
  return (
    <Box className="border-2 border-cyan-500 rounded-lg p-2">
      <DialogContentText id="Klasse">3. Klasse</DialogContentText>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <FormControl className="flex justify-top">
            <DialogContentText className="ml-0">Klasse A</DialogContentText>
            <FormControlLabel
              className="ml-20"
              control={
                <Checkbox
                  checked={userData.klasse.A}
                  onChange={(event) =>
                    setUserData((prev) => ({
                      ...prev,
                      klasse: {
                        ...prev.klasse,
                        A: event.target.checked,
                      },
                    }))
                  }
                />
              }
              label="A (Umfassend)"
            />
            <FormControlLabel
              className="ml-20"
              control={
                <Checkbox
                  checked={userData.klasse.A1}
                  onChange={(event) =>
                    setUserData((prev) => ({
                      ...prev,
                      klasse: {
                        ...prev.klasse,
                        A1: event.target.checked,
                      },
                    }))
                  }
                />
              }
              label="A1"
            />
            <FormControlLabel
              className="ml-20"
              control={
                <Checkbox
                  checked={userData.klasse.A2}
                  onChange={(event) =>
                    setUserData((prev) => ({
                      ...prev,
                      klasse: {
                        ...prev.klasse,
                        A2: event.target.checked,
                      },
                    }))
                  }
                />
              }
              label="A2"
            />
            <FormControlLabel
              className="ml-20"
              control={
                <Checkbox
                  checked={userData.klasse.A3}
                  onChange={(event) =>
                    setUserData((prev) => ({
                      ...prev,
                      klasse: {
                        ...prev.klasse,
                        A3: event.target.checked,
                      },
                    }))
                  }
                />
              }
              label="A3"
            />
            <FormControlLabel
              className="ml-20"
              control={
                <Checkbox
                  checked={userData.klasse.A4}
                  onChange={(event) =>
                    setUserData((prev) => ({
                      ...prev,
                      klasse: {
                        ...prev.klasse,
                        A4: event.target.checked,
                      },
                    }))
                  }
                />
              }
              label="A4"
            />
            <FormControlLabel
              className="ml-20"
              control={
                <Checkbox
                  checked={userData.klasse.A5}
                  onChange={(event) => {
                    setUserData((prev) => ({
                      ...prev,
                      klasse: {
                        ...prev.klasse,
                        A5: event.target.checked,
                      },
                    }))
                    if (!event.target.checked) {
                      setUserData((prev) => ({
                        ...prev,
                        klasse: {
                          ...prev.klasse,
                          hinweiseKlasseA5: '',
                        },
                      }))
                    }
                  }}
                />
              }
              label="A5"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <TextField
            fullWidth
            id="Klasse Hinweise zu Klasse A5"
            label="Hinweise zu Klasse A5"
            type="text"
            multiline
            rows={6}
            value={userData.klasse.hinweiseKlasseA5}
            disabled={!userData.klasse.A5}
            onChange={(event) =>
              setUserData((prev) => ({
                ...prev,
                klasse: {
                  ...prev.klasse,
                  hinweiseKlasseA5: event.target.value,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="flex justify-center">
          <FormControl className="flex justify-top">
            <DialogContentText className="ml-0">Klasse B</DialogContentText>
            <FormControlLabel
              className="ml-20"
              control={
                <Checkbox
                  checked={userData.klasse.B}
                  onChange={(event) =>
                    setUserData((prev) => ({
                      ...prev,
                      klasse: {
                        ...prev.klasse,
                        B: event.target.checked,
                      },
                    }))
                  }
                />
              }
              label="B (Umfassend)"
            />
            <FormControlLabel
              className="ml-20"
              control={
                <Checkbox
                  checked={userData.klasse.B1}
                  onChange={(event) =>
                    setUserData((prev) => ({
                      ...prev,
                      klasse: {
                        ...prev.klasse,
                        B1: event.target.checked,
                      },
                    }))
                  }
                />
              }
              label="B1"
            />
            <FormControlLabel
              className="ml-20"
              control={
                <Checkbox
                  checked={userData.klasse.B2}
                  onChange={(event) =>
                    setUserData((prev) => ({
                      ...prev,
                      klasse: {
                        ...prev.klasse,
                        B2: event.target.checked,
                      },
                    }))
                  }
                />
              }
              label="B2"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
}
