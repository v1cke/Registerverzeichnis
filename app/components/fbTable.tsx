'use client'

import { DataGrid } from '@mui/x-data-grid'
import { fakeDate } from '../fakeDate/fakeDate'
import { useEffect } from 'react'
import { fbTableColumns } from './fbTableColumns'
import { Card, CardContent, Grid } from '@mui/material'
import { ShowColumns } from '../page'

export const FbTable = ({ showColumns }: { showColumns: ShowColumns[] }) => {
  const handleScrollHorizontal = () => {
    const virtualScrollerElement = document.querySelector(
      '.MuiDataGrid-virtualScroller',
    )
    if (virtualScrollerElement) {
      const currentScrollPos = virtualScrollerElement.scrollLeft
      const columnsHeaders = document.querySelectorAll(
        '.MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader:nth-child(-n+2))',
      )
      columnsHeaders.forEach((columnHeader) => {
        if (columnHeader instanceof HTMLElement) {
          columnHeader.style.transform = `translate3d(-${currentScrollPos}px, 0px, 0px)`
        }
      })
    }
  }

  useEffect(() => {
    const findVirtualScroller = () => {
      const virtualScrollerElement = document.querySelector(
        '.MuiDataGrid-virtualScroller',
      )
      if (!virtualScrollerElement) {
        setTimeout(findVirtualScroller, 100)
      } else {
        virtualScrollerElement.addEventListener(
          'scroll',
          handleScrollHorizontal,
        )
        return () => {
          virtualScrollerElement.removeEventListener(
            'scroll',
            handleScrollHorizontal,
          )
        }
      }
    }
    findVirtualScroller()
  }, [])

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ height: '100%' }}>
        <DataGrid
          rows={fakeDate}
          columns={fbTableColumns(showColumns)}
          hideFooter={true}
          pageSizeOptions={[1]}
          sx={{
            width: '100%',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            '.MuiDataGrid-virtualScroller': {
              height: '100% !important',
              overflowY: 'auto',
            },
            '& .MuiDataGrid-cell:nth-child(1)': {
              backgroundColor: '#FFFFFF',
              position: 'sticky',
              left: '0px',
              zIndex: 999,
            },
            '& .MuiDataGrid-cell:nth-child(2)': {
              backgroundColor: '#FFFFFF',
              position: 'sticky',
              left: '100px', // Adjusted based on the width of the first column
              zIndex: 999,
            },
            '& .MuiDataGrid-columnHeader:nth-child(1)': {
              backgroundColor: '#FFFFFF',
              position: 'sticky',
              left: '0px',
              zIndex: 999,
            },
            '& .MuiDataGrid-columnHeader:nth-child(2)': {
              backgroundColor: '#FFFFFF',
              position: 'sticky',
              left: '100px', // Adjusted based on the width of the first column
              zIndex: 999,
            },
            '& .MuiDataGrid-columnHeaders': {
              '& .MuiDataGrid-columnHeadersInner': {
                transform: 'none !important',
                '& div': {
                  '& .MuiDataGrid-columnHeader:nth-child(1)': {
                    backgroundColor: '#FFFFFF',
                    zIndex: 2,
                  },
                  '& .MuiDataGrid-columnHeader:nth-child(2)': {
                    backgroundColor: '#FFFFFF',
                    zIndex: 2,
                  },
                },
              },
            },
          }}
          // columnBuffer={fakeDate.length}
        />
      </CardContent>
    </Card>
  )
}
