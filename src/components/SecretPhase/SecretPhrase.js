import "./style.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import { Button } from "antd";

import { goTo } from "react-chrome-extension-router";
import LandingPage from "../Landingpage/LandingPage";
import RecoveryPage2 from "../recovery-page2";

// import SetPasswordPageComponent from "../set-password";
// import RecoveryPageComponent from "../recovery-page/index";

const bip39 = require("bip39");

window.Buffer = window.Buffer || require("buffer").Buffer;

function SecretPhrase() {
  /// mnemonic --> local store
  /// public address

  const [publicKey, setPublicKey] = useState([]);

  useEffect(() => {
    const mnemonicStr = bip39.generateMnemonic();

    const mnemonic = mnemonicStr.split(" ");

    setPublicKey(mnemonic);

    /// Generating Address and private key
  }, []);

  const backButton = () => {
    goTo(LandingPage, { message: "Hi" });
  };

  const nextPage = () => {
    goTo(RecoveryPage2, { message: "Hi" });
  };

  return (
    <>
      <div>
        <AppBar position="static" className="bg-transparent">
          <Toolbar className="bg-transparent">
            <IconButton
              onClick={() => backButton()}
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, background: "#232949 !important" }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography
              className="font-clash-display"
              sx={{ flexGrow: 1, margin: "0 !important" }}
            >
              <span className="header-title">Secret Phrase</span>
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="seed-phrase-section font-poppins">
          <div>
            Your Secret Phrase consists of these 12 words. Write these words
            down in the correct order on paper and store the piece of paper in a
            secure place. You will have to re-enter this Secret Phrase in the
            next step. <br />
            <div style={{ marginTop: "20px" }}>
              Don’t share your Secret Phrase with anyone. Anyone with your
              Secret Phrase can gain full control of your wallet.
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2rem", padding: "10px" }}>
          <Box sx={{ flexGrow: 1 }}>
            {/* <Grid container spacing={1}>
                            {
                                publicKey.map((ele, index) => {
                                    return (
                                        <>
                                            <Grid item xs={4}>
                                            <Chip label={`${index+1}, ${ele}`} color='primary' className="chip-section-font-poppins" />
                                                <Chip className="chip-section-font-poppins" label={`${index + 1}. ${ele}`} />
                                            </Grid>
                                        </>
                                    )
                                })
                            }
                        </Grid> */}
            {publicKey.map((ele, index) => {
              return (
                <>
                  {/* <Grid item xs={4}>
                                            <Chip label={`${index+1}, ${ele}`} color='primary' className="chip-section-font-poppins" />
                                                <Chip className="chip-section-font-poppins" label={`${index + 1}. ${ele}`} />
                                            </Grid> */}
                  <Button className="phrase-view">
                    <p style={{ margin: "5px" }}>{`${index + 1}. ${ele}`}</p>
                  </Button>
                </>
              );
            })}
          </Box>
        </div>
      </div>
      <div style={{ marginTop: "2rem", marginBottom: "15px" }}>
        <Button className="next-button" onClick={() => nextPage()}>
          <p className="next-button-text">NEXT</p>
        </Button>
      </div>
      {/* <div>
                <Button onClick={() => generatePublicKey()} className="getNewSeedBtn font-clash-display" variant="outlined" startIcon={<RefreshIcon />}>
                    Get New Seed
                </Button>
            </div> */}
    </>
  );
}
export default SecretPhrase;
