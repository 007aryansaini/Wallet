import "./style.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import randomWords from 'random-words';

import { goTo } from 'react-chrome-extension-router';
// import SeedPhasePageComponent from "../seed-phase";
// import RecoveryPage2Component from "../recovery-page2";
import { toast } from "react-hot-toast";
import SecretPhrase from "../SecretPhase/SecretPhrase";
import SetUsername from "../SetUsername/SetUsername";

function ConfirmSecretPhrase() {
    const [publicKey, setPublicKey] = useState([]);

    useEffect(() => {
        generatePublicKey()
    }, [])

    const generatePublicKey = () => {
        setPublicKey(randomWords(12))
    }

    const copyText = () => {
        const text = publicKey.join(' ')
        navigator.clipboard.writeText(text);
        toast.success("Key Copied")
    }

    const backButton = () => {
        goTo(SecretPhrase, { message: "Hi" });
    }

    const nextPage = () => {
        
        goTo(SetUsername, { message: "Hi" });
    }

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
                        <Typography className="font-clash-display" sx={{ flexGrow: 1, margin: '0 !important' }}>
                            <span className="header-title">Confirm Secret Pharse</span>
                        </Typography>
                        <Button style={{ minWidth: "40px" }} color="inherit"> </Button>
                    </Toolbar>
                </AppBar>
                <div className="seed-phrase-section font-poppins">
                    <div>
                         <p>    Select the correct word in accordance with the number to verify that you have backet up the secret phrase. </p>
                    </div>
                </div>
                <div style={{ marginTop: "2rem", padding: "10px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <div className="recovery-public-key-section font-poppins">
                            <><Button className="recoverySectionTopBtn font-clash-display" color="inherit">Recovery Phrase</Button></>
                            <div>
                                {
                                    publicKey.map((ele, index) => {
                                        return (
                                            <>
                                                <span className="confirm-secret-phrase-selectables"><p style={{margin:'5px', fontSize:'16px'}}>{`${index+1}. ${ele}`}</p> </span>
                                                {/* <Button className="confirm-secret-phrase-selectables"><p style={{margin:'5px'}}>{`${index+1}. ${ele}`}</p></Button> */}
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <><Button className="copy-text" onClick={() => copyText()} color="inherit">Copy to Clipboard</Button></>
                        </div>
                    </Box>
                </div>
                {/* <div className="centerBottonDiv">
                    <Box sx={{ flexGrow: 1, marginTop: "5rem" }}>
                        <Grid container spacing={1}>    
                            <Grid item xs={12}>
                                <Button onClick={() => nextPage()} className="continueBtn font-clash-display" color="inherit">Continue</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div> */}
                <div style={{ marginTop: "2rem", marginBottom:'15px' }}>
                    <Button style={{borderRadius:'81px'}} className="next-button-confirm" onClick={() => nextPage()}><p style={{color:'#fff', fontSize:'16px'}}>Next</p></Button>
                 </div>
            </div>
        </>
    )
}
export default ConfirmSecretPhrase;