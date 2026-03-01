import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Alert from '@mui/material/Alert';


function SnackBar({ open, message, onClose,snackbarType }) {
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={onClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );




  return (

     <Snackbar open={open} autoHideDuration={3000} onClose={onClose}  anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert
        sx={{
            fontSize:"1rem",
            borderRadius:"2rem",
            color: "white",
             width: '100%',
              backgroundColor:`${snackbarType==="success"?"rgb(33, 228, 33)":""}`,
          //  backgroundColor:"rgb(33, 228, 33)"
           }}
          onClose={onClose}
          severity={`${snackbarType}`}
          variant="filled"
          
        >
          {message}
        </Alert>
      </Snackbar>
    
  );
}

export default SnackBar;




    //   <Snackbar
    //   open={true}
    //   autoHideDuration={5000}
    //   onClose={onClose}
    //   message={`✅${message}`}
    //   action={action}
    //   anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //   ContentProps={{
    //     sx: {
    //       // backgroundColor: "white",
    //       color: "black",
    //       border: "1px solid #ccc",
    //       borderRadius: "8px",
    //       backgroundColor:"#44d315ff",
    //     },
    //   }}
    // />