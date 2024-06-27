// import React from "react";
import "./Show.css";
import * as React from 'react';
import Button from "@mui/material/Button";
// import Dialog, { DialogProps } from "@mui/material/Dialog";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Show = () => {
  const [open, setOpen] = React.useState(false);
  // const [scroll, setScroll] = React.useState < DialogProps["scroll"] > "paper";
  const [scroll, setScroll] = React.useState("paper");

  //   const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
  //     setOpen(true);
  //     setScroll(scrollType);
  //   };
  const handleClickOpen = () => {
    setOpen(true);
    // setScroll("paper");
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const descriptionElementRef = React.useRef < HTMLElement > null;
  // React.useEffect(() => {
  //   if (open) {
  //     const { current: descriptionElement } = descriptionElementRef;
  //     if (descriptionElement !== null) {
  //       // descriptionElement.focus();
  //     }
  //   }
  // }, [open]);

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>scroll=paper</Button>
      {/* <Button onClick={handleClickOpen("paper")}>scroll=paper</Button> */}
      {/* <Button onClick={handleClickOpen("body")}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        // scroll={scroll}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{ backgroundColor: "#eceff1" }}
      >
        {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            // ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Show;
