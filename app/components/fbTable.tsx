'use client'

import { DataGrid } from '@mui/x-data-grid'
import { fakeDate } from '../fakeDate/fakeDate'
import { useEffect } from 'react'
import { fbTableColumns } from './fbTableColumns'
import { Card, CardContent, Grid } from '@mui/material'

export const FbTable = () => {
  const handleScrollHorizontal = () => {
    const virtualScrollerElement = document.querySelector(
      '.MuiDataGrid-virtualScroller',
    )
    console.log('virtualScrollerElement: ', virtualScrollerElement)
    if (virtualScrollerElement) {
      const currentScrollPos = virtualScrollerElement.scrollLeft
      console.log('currentScrollPos: ', currentScrollPos)
      const columnsHeaders = document.querySelectorAll(
        '.MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader:first-child)',
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
          columns={fbTableColumns()}
          hideFooter={true}
          // disableColumnMenu
          // disableRowSelectionOnClick
          pageSizeOptions={[1]}
          sx={{
            width: '100%',
            '.MuiDataGrid-virtualScroller': {
              height: '100% !important',
              overflowY: 'auto',
              // minWidth: '600px',
            },
            '& .MuiDataGrid-cell:first-child': {
              backgroundColor: '#FFFFFF',
              position: 'sticky',
              top: '0',
              left: '0',
              paddingLeft: '1.5rem',
              zIndex: 999,
            },
            '& .MuiDataGrid-columnHeader:first-child': {
              backgroundColor: '#FFFFFF',
              position: 'sticky',
              top: '0',
              left: '0',
              paddingLeft: '1.5rem',
              border: 'none',
              zIndex: 999,
            },
            '& .MuiDataGrid-columnHeaders': {
              '& .MuiDataGrid-columnHeadersInner': {
                transform: 'none !important',
                '& div': {
                  '& .MuiDataGrid-columnHeader:first-child': {
                    backgroundColor: '#FFFFFF',
                    zIndex: 2,
                  },
                },
              },
            },
          }}
          columnBuffer={fakeDate.length}
        />
      </CardContent>
    </Card>
  )
}
