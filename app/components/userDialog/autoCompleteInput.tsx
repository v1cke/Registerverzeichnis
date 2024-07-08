import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

type Options = {
  text: string
  value: number
}

interface AutoCompleteInputProps {
  options: Options[]
  label: string
}

export const AutoCompleteInput = ({
  options,
  label,
}: AutoCompleteInputProps) => {
  return (
    <Autocomplete
      id={label}
      sx={{ width: 350 }}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option.text}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props
        return (
          <Box key={option.value} component="li" {...optionProps}>
            {option.text}
          </Box>
        )
      }}
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
