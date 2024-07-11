import { Button, ButtonGroup } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface ViewButtonsProps {
  tableView: 'activ' | 'draft' | 'history'
  setTableView: Dispatch<SetStateAction<'activ' | 'draft' | 'history'>>
}

export const ViewButtons = ({ tableView, setTableView }: ViewButtonsProps) => {
  return (
    <ButtonGroup
      className="shadow-none max-h-10"
      variant="contained"
      aria-label="Basic button group"
    >
      <Button
        disabled={tableView === 'activ'}
        onClick={() => setTableView('activ')}
        className="w-32"
      >
        Active
      </Button>
      <Button
        disabled={tableView === 'draft'}
        onClick={() => setTableView('draft')}
        className="w-32"
      >
        Entwürfe
      </Button>
      <Button
        disabled={tableView === 'history'}
        onClick={() => setTableView('history')}
        className="w-32"
      >
        History
      </Button>
    </ButtonGroup>
  )
}
