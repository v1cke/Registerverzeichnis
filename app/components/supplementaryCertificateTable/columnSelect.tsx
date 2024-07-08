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
  const columnChoices = [
    { text: 'Füherschein', value: 1 },
    { text: 'Angaben zum Inhaber', value: 2 },
    { text: 'Angaben zur Zusatzbescheinigung', value: 3 },
    { text: 'Ausstellende Organisationseinheit', value: 4 },
    { text: 'Bilder', value: 5 },
    { text: 'Verantwortliches Unternehmen', value: 6 },
    { text: 'Klasse', value: 7 },
    { text: 'Zusätzliche Angaben', value: 8 },
    { text: 'Einschränkungen', value: 9 },
    { text: 'Änderungen', value: 10 },
    { text: 'Aussetzung', value: 11 },
    { text: 'Entziehung', value: 12 },
    { text: 'Als verloren gemeldete Zusatzbescheinigung', value: 13 },
    { text: 'Als entwendet gemeldete Zusatzbescheinigung', value: 14 },
    { text: 'Als zerstoert gemeldete Zusatzbescheinigung', value: 15 },
    { text: 'Weitere Angaben', value: 16 },
    { text: 'Sprachkenntnisse', value: 17 },
    { text: 'Fahrzeugkenntnisse', value: 18 },
    { text: 'Infrastrukturkenntnisse', value: 19 },
  ]

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
    <div className="flex justify-end">
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
            columnChoices
              .filter((choice) => selected.includes(choice.value))
              .map((choice) => choice.text)
              .join(', ')
          }
          MenuProps={MenuProps}
        >
          {columnChoices.map((choice) => (
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
    </div>
  )
}
