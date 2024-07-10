import { Dispatch, SetStateAction, useState } from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
import { UserDialog } from './userDialog/userDialog'

interface GroupOfButtonProps {
  openDialog: boolean
  setOpenDialog: Dispatch<SetStateAction<boolean>>
  selectedColumnId: number | undefined
  setSetselectedColumnId: Dispatch<SetStateAction<number | undefined>>
}

export const GroupOfButton = ({
  openDialog,
  setOpenDialog,
  selectedColumnId,
  setSetselectedColumnId,
}: GroupOfButtonProps) => {
  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <Box>
      <UserDialog
        open={openDialog}
        handleClose={handleClose}
        selectedColumnId={selectedColumnId}
      />
      <ButtonGroup
        className="shadow-none"
        variant="contained"
        aria-label="Basic button group"
      >
        <Button
          className="w-32"
          onClick={() => {
            setSetselectedColumnId(undefined)
            setOpenDialog(true)
          }}
        >
          Neu
        </Button>
        <Button className="w-32">Bearbeiten</Button>
        <Button className="w-32">Suchen</Button>
      </ButtonGroup>
    </Box>
  )
}
