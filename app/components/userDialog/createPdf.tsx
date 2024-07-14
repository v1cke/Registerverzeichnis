import { Dispatch, forwardRef, SetStateAction } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { SupplementaryCertificate } from './supplementaryCertificate'
import { Dialog, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { Person } from '@/app/types/types'

const TransitionUp = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface CreatePdfProps {
  openPdf: boolean
  setOpenPdf: Dispatch<SetStateAction<boolean>>
  userData: Person
}

export const CreatePdf = ({
  openPdf,
  setOpenPdf,
  userData,
}: CreatePdfProps) => {
  const handleClose = () => {
    setOpenPdf(false)
  }

  return (
    <Dialog
      open={openPdf}
      TransitionComponent={TransitionUp}
      keepMounted
      fullWidth
      maxWidth="lg"
      onClose={handleClose}
      aria-describedby="CreatePdf-dialog"
      className="z-20"
    >
      <PDFViewer
        width={'calc(100% - 40px)'}
        height={'1000px'}
        style={{ margin: '20px' }}
      >
        <SupplementaryCertificate userData={userData} />
      </PDFViewer>
    </Dialog>
  )
}
