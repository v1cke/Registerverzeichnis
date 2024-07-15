import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { ShowColumns } from '../../page'
import { Dispatch, SetStateAction } from 'react'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

interface ColumnSelectProps {
  showColumns: ShowColumns[]
  setShowColumns: Dispatch<SetStateAction<ShowColumns[]>>
}

export const ColumnSelect = ({
  showColumns,
  setShowColumns,
}: ColumnSelectProps) => {
  const handleChange = (event: SelectChangeEvent<number[]>) => {
    const {
      target: { value },
    } = event
    const selectedValues = value as number[]
    setShowColumns((prev) =>
      prev.map((column) => ({
        ...column,
        selected: selectedValues.includes(column.value),
      })),
    )
  }

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="Anzeige auswählen-label">Anzeige auswählen</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={showColumns
          .filter((item) => item.selected)
          .map((item) => item.value)}
        onChange={handleChange}
        input={<OutlinedInput label="Anzeige auswählen" />}
        renderValue={(selected) =>
          showColumns
            .filter((choice) => selected.includes(choice.value))
            .map((choice) => choice.text)
            .join(', ')
        }
        MenuProps={MenuProps}
      >
        {showColumns.map((choice) => (
          <MenuItem key={choice.value} value={choice.value}>
            <Checkbox
              checked={showColumns.some(
                (column) => column.value === choice.value && column.selected,
              )}
            />
            <ListItemText primary={choice.text} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
