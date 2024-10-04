import React from "react";
import { Alert, Snackbar } from "@mui/material";

export const AlertMessage = (props: any) => {
  const { alertMsg, setAlertMsg } = props;

  const handleClose = () => {
    setAlertMsg({ msg: "", severity: "" });
  };

  return (
    <>
      {" "}
      <Snackbar
        open={alertMsg.msg}
        autoHideDuration={3000} // 3 seconds
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }} // Position of the popup
      >
        <Alert
          variant="filled"
          onClose={handleClose}
          severity={alertMsg?.severity}
          //   sx={{ width: "50%" }}
        >
          {alertMsg?.msg}
        </Alert>
      </Snackbar>
    </>
  );
};
