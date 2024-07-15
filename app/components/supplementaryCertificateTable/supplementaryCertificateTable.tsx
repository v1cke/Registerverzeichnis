'use client'

import { Dispatch, SetStateAction } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { fakeData } from '../../fakeData/fakeData'
import { SupplementaryCertificateTableColumns } from './supplementaryCertificateTableColumns'
import { Box } from '@mui/material'
import { ShowColumns } from '../../page'
import { columnGroupingModel } from './columnGroupingModel'
import { Person } from '@/app/types/types'

interface SupplementaryCertificateTableProps {
  showColumns: ShowColumns[]
  setOpenDialog: Dispatch<SetStateAction<boolean>>
  tableView: 'activ' | 'draft' | 'history'
  setSetselectedColumnId: Dispatch<SetStateAction<number | undefined>>
}

export const SupplementaryCertificateTable = ({
  showColumns,
  setOpenDialog,
  tableView,
  setSetselectedColumnId,
}: SupplementaryCertificateTableProps) => {
  const getRows = () => {
    const activRow = fakeData.filter(
      (item) => item.zusatzbescheinigung.status === 'gültig',
    )
    const draftRow = fakeData.filter(
      (item) => item.zusatzbescheinigung.status === 'Entwurf',
    )
    const historygRow = fakeData.filter(
      (item) => item.zusatzbescheinigung.status === 'gültig',
    )

    if (tableView === 'draft') {
      return draftRow
    }
    if (tableView === 'history') {
      return historygRow
    }
    return activRow
  }

  const findMaxLengths = (users: Person[]) => {
    let maxLanguageSkillLength = 1
    let maxVehicleSkillLength = 1
    let maxInfrastructureSkillLength = 1

    users.forEach((user) => {
      if (user.sprachkenntnisse.length > maxLanguageSkillLength) {
        maxLanguageSkillLength = user.sprachkenntnisse.length
      }
      if (user.fahrzeugkenntnisse.length > maxVehicleSkillLength) {
        maxVehicleSkillLength = user.fahrzeugkenntnisse.length
      }
      if (user.infrastrukturkenntnisse.length > maxInfrastructureSkillLength) {
        maxInfrastructureSkillLength = user.infrastrukturkenntnisse.length
      }
    })

    return {
      maxLanguageSkillLength,
      maxVehicleSkillLength,
      maxInfrastructureSkillLength,
    }
  }

  const {
    maxLanguageSkillLength,
    maxVehicleSkillLength,
    maxInfrastructureSkillLength,
  } = findMaxLengths(fakeData)

  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      <DataGrid
        rows={getRows()}
        columns={SupplementaryCertificateTableColumns(
          showColumns,
          maxLanguageSkillLength,
          maxVehicleSkillLength,
          maxInfrastructureSkillLength,
        )}
        hideFooter={true}
        pageSizeOptions={[1]}
        columnHeaderHeight={230}
        onRowClick={(row) => {
          setSetselectedColumnId(Number(row.id))
          setOpenDialog(true)
        }}
        columnGroupingModel={columnGroupingModel(
          maxLanguageSkillLength,
          maxVehicleSkillLength,
          maxInfrastructureSkillLength,
        )}
        sx={{
          width: '100%',
          '& .MuiDataGrid-row:hover': {
            cursor: 'pointer',
          },
        }}
      />
    </Box>
  )
}
