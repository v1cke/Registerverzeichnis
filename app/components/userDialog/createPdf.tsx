import { PDFViewer } from '@react-pdf/renderer'
import { PDFDocument } from 'pdf-lib'
import { SupplementaryCertificate } from './supplementaryCertificate'
import { Dialog } from '@mui/material'

export const CreatePdf = () => {
  return (
    <Dialog
      open={true}
      // TransitionComponent={TransitionDown}
      // TODO: was macht das?
      keepMounted
      fullWidth
      maxWidth="lg"
      // onClose={handleClose}
      aria-describedby="CreatePdf-dialog"
      className=""
    >
      <PDFViewer
        width={'90%'}
        height={'1000px'}
        style={{ marginTop: '20px', marginBottom: '20px' }}
      >
        <SupplementaryCertificate />
      </PDFViewer>
      {/* <SupplementaryCertificate /> */}
    </Dialog>
  )
}
