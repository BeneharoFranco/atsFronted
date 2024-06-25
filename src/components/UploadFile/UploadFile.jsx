import React, { Component } from "react";
import Upload from "../../services/uploadService";
import {
  LinearProgress,
  Box,
  Typography,
  Button,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/system";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  [`&.${LinearProgress.colorPrimary}`]: {
    backgroundColor: "#EEEEEE",
  },
  [`& .${LinearProgress.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}));

export default class UploadFile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFile: undefined,
      progress: 0,
      message: "",
      isError: false,
      imageInfos: [],
    };

    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
  }

  selectFile(event) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      this.setState({
        currentFile: file,
        progress: 0,
        message: "",
      });
    } else {
      this.setState({
        currentFile: undefined,
        message: "Please select a PDF file.",
        isError: true,
      });
    }
  }

  upload() {
    this.setState({
      progress: 0,
    });

    const formData = new FormData();
    formData.append("file", this.state.currentFile);

    Upload.upload(formData)
      .then((response) => {
        this.setState({
          message: response.data.message,
          isError: false,
        });
        
      })
      .then((files) => {
        this.setState({
          imageInfos: files.data,
        });
      })
      .catch((err) => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
          isError: true,
        });
      });
  }

  render() {
    const { currentFile, progress, message, imageInfos, isError } = this.state;

    return (
      <div className="mg20">
        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: "none" }}
            type="file"
            accept="application/pdf"
            onChange={this.selectFile}
          />
          <Button className="btn-choose" variant="outlined" component="span">
            Choose PDF
          </Button>
        </label>
        <div className="file-name">{currentFile ? currentFile.name : null}</div>
        <Button
          className="btn-upload"
          color="primary"
          variant="contained"
          component="span"
          disabled={!currentFile}
          onClick={this.upload}
        >
          Upload
        </Button>

        {currentFile && (
          <Box className="my20" display="flex" alignItems="center">
            <Box width="100%" mr={1}>
              <BorderLinearProgress variant="determinate" value={progress} />
            </Box>
            <Box minWidth={35}>
              <Typography
                variant="body2"
                color="textSecondary"
              >{`${progress}%`}</Typography>
            </Box>
          </Box>
        )}

        {message && (
          <Typography
            variant="subtitle2"
            className={`upload-message ${isError ? "error" : ""}`}
          >
            {message}
          </Typography>
        )}

        {/* <Typography variant="h6" className="list-header">
          List of Files
        </Typography>
        <ul className="list-group">
          {imageInfos &&
            imageInfos.map((file, index) => (
              <ListItem divider key={index}>
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
              </ListItem>
            ))}
        </ul> */}
      </div>
    );
  }
}
