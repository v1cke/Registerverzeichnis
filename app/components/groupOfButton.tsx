import { useState } from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { UserDialog } from './userDialog/userDialog'

export const GroupOfButton = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <UserDialog open={open} handleClose={handleClose} />
      <ButtonGroup
        className="shadow-none"
        variant="contained"
        aria-label="Basic button group"
      >
        <Button className="w-32" onClick={() => setOpen(true)}>
          Neu
        </Button>
        <Button className="w-32">Bearbeiten</Button>
        <Button className="w-32">Suchen</Button>
      </ButtonGroup>
    </div>
  )
}
