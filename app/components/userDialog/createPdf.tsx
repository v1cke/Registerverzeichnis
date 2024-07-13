import { PDFViewer } from '@react-pdf/renderer'
import { SupplementaryCertificate } from './supplementaryCertificate'
import { Dialog } from '@mui/material'
import { fakeData } from '@/app/fakeData/fakeData'

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
        <SupplementaryCertificate userData={fakeData[0]} />
      </PDFViewer>
      {/* <SupplementaryCertificate /> */}
    </Dialog>
  )
}
