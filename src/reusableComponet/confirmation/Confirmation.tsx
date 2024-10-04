// src/components/ConfirmationDialog.js

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const ConfirmationDialog = ({
  open,
  setOpenDialog,
  onClose,
  onConfirm,
  message,
}: any) => {
  const handleClose = () => setOpenDialog(false);
  return (
    <Dialog
      maxWidth="sm" // Set maxWidth to 'md'
      fullWidth
      open={open}
      onClose={onClose}
      PaperProps={{
        style: { minHeight: "200px", padding: "10px 12px" }, // Increase the minimum height of the dialog
      }}
    >
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          //   style={{ backgroundColor: "red" }}
          onClick={handleClose}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          className="danger-bg"
          onClick={onConfirm}
          color="primary"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
