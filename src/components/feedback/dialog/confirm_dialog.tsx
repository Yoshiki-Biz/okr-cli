import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface ConfirmDialogProps {
  isShow: boolean;
  title: string;
  content: string;
  handleOK: React.MouseEventHandler<HTMLButtonElement>;
  handleCancel: () => void;
}

export const ConfirmDialog = ({
  isShow,
  title,
  content,
  handleOK,
  handleCancel,
}: ConfirmDialogProps) => {
  return (
    <Dialog open={isShow} onClose={handleCancel}>
      <DialogTitle letterSpacing={1}>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText letterSpacing={1}>{content}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleOK}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};
