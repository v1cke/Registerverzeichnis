import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

type Options = {
  text: string
  value: string
}

interface AutoCompleteInputProps {
  options: Options[]
  idLabel: string
  label: string
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: Options | null,
  ) => void
}

export const AutoCompleteInput = ({
  options,
  idLabel,
  label,
  onChange,
}: AutoCompleteInputProps) => {
  return (
    <Autocomplete
      id={idLabel}
      sx={{ width: 350 }}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option.text}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props
        return (
          <Box key={option.value} component="li" {...optionProps}>
            {option.text}
          </Box>
        )
      }}
      onChange={(event, value) => onChange(event, value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          inputProps={{
            ...params.inputProps,
            autoComplete: { label },
          }}
        />
      )}
    />
  )
}
