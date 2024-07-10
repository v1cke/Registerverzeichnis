'use client'

import { Dispatch, SetStateAction, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { fakeData } from '../../fakeData/fakeData'
import { SupplementaryCertificateTableColumns } from './supplementaryCertificateTableColumns'
import { Card, CardContent, Grid } from '@mui/material'
import { ShowColumns } from '../../page'
import { nameColumns } from './nameColumns'

interface SupplementaryCertificateTableProps {
  showColumns: ShowColumns[]
  setOpenDialog: Dispatch<SetStateAction<boolean>>
  setSetselectedColumnId: Dispatch<SetStateAction<number | undefined>>
}

export const SupplementaryCertificateTable = ({
  showColumns,
  setOpenDialog,
  setSetselectedColumnId,
}: SupplementaryCertificateTableProps) => {
  // const handleScrollHorizontal = () => {
  //   const virtualScrollerElement = document.querySelector(
  //     '.MuiDataGrid-virtualScroller',
  //   )
  //   if (virtualScrollerElement) {
  //     const currentScrollPos = virtualScrollerElement.scrollLeft
  //     const columnsHeaders = document.querySelectorAll(
  //       '.MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader:nth-of-type(-n+2))',
  //     )
  //     columnsHeaders.forEach((columnHeader) => {
  //       if (columnHeader instanceof HTMLElement) {
  //         columnHeader.style.transform = `translate3d(-${currentScrollPos}px, 0px, 0px)`
  //       }
  //     })
  //   }
  // }

  // useEffect(() => {
  //   const findVirtualScroller = () => {
  //     const virtualScrollerElement = document.querySelector(
  //       '.MuiDataGrid-virtualScroller',
  //     )
  //     if (!virtualScrollerElement) {
  //       setTimeout(findVirtualScroller, 100)
  //     } else {
  //       virtualScrollerElement.addEventListener(
  //         'scroll',
  //         handleScrollHorizontal,
  //       )
  //       return () => {
  //         virtualScrollerElement.removeEventListener(
  //           'scroll',
  //           handleScrollHorizontal,
  //         )
  //       }
  //     }
  //   }
  //   findVirtualScroller()
  // }, [])

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent className="flex" sx={{ height: '100%' }}>
        {/* <DataGrid
          rows={fakeDate}
          columns={nameColumns}
          hideFooter={true}
          pageSizeOptions={[1]}
          sx={{ width: '210px' }}
        /> */}
        <DataGrid
          rows={fakeData.filter(
            (item) => item.zusatzbescheinigung.status === 'gültig',
          )}
          columns={SupplementaryCertificateTableColumns(showColumns)}
          hideFooter={true}
          pageSizeOptions={[1]}
          columnHeaderHeight={230}
          // sortModel={[{ field: 'name', sort: 'asc' }]}
          onRowClick={(row) => {
            setSetselectedColumnId(Number(row.id))
            setOpenDialog(true)
          }}
          sx={{
            width: '100%',
            '& .MuiDataGrid-row:hover': {
              cursor: 'pointer',
            },
            // '.MuiDataGrid-virtualScroller': {
            //   height: '100% !important',
            //   overflowY: 'auto',
            // },
            // '& .MuiDataGrid-cell:nth-of-type(1)': {
            //   backgroundColor: '#FFFFFF',
            //   position: 'sticky',
            //   left: '0px',
            //   zIndex: 999,
            // },
            // '& .MuiDataGrid-cell:nth-of-type(2)': {
            //   backgroundColor: '#FFFFFF',
            //   position: 'sticky',
            //   left: '100px',
            //   zIndex: 999,
            // },
            // '& .MuiDataGrid-columnHeader:nth-of-type(1)': {
            //   backgroundColor: '#FFFFFF',
            //   position: 'sticky',
            //   left: '0px',
            //   zIndex: 999,
            // },
            // '& .MuiDataGrid-columnHeader:nth-of-type(2)': {
            //   backgroundColor: '#FFFFFF',
            //   position: 'sticky',
            //   left: '100px',
            //   zIndex: 999,
            // },
            // '& .MuiDataGrid-columnHeaders': {
            //   '& .MuiDataGrid-columnHeadersInner': {
            //     transform: 'none !important',
            //     '& div': {
            //       '& .MuiDataGrid-columnHeader:nth-of-type(1)': {
            //         backgroundColor: '#FFFFFF',
            //         zIndex: 2,
            //       },
            //       '& .MuiDataGrid-columnHeader:nth-of-type(2)': {
            //         backgroundColor: '#FFFFFF',
            //         zIndex: 2,
            //       },
            //     },
            //   },
            // },
          }}
          // columnBuffer={fakeDate.length}
        />
      </CardContent>
    </Card>
  )
}
