import "./style.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import {Button} from 'antd'
import Grid from '@mui/material/Grid';
import randomWords from 'random-words';

import {
    Link,
    goTo
} from 'react-chrome-extension-router';
import SetUsername from "../SetUsername/SetUsername";
// import RecoveryPage1Component from "../recovery-page1";
// import RecoveryPage3Component from "../recovery-page3";

function RecoveryPage2() {
    const [publicKey, setPublicKey] = useState([]);
    const [enterPublicKey, setEnterPublicKey] = useState("");

    useEffect(() => {
        generatePublicKey()
    }, [])

    const generatePublicKey = () => {
        setPublicKey(randomWords(12))
    }

    const backButton = () => {
        // goTo(RecoveryPage1Component, { message: "Hi" });
    }

    const nextPage = () => {
        goTo(SetUsername, { message: "Hi" });
    }

    const pressKey = (id, value) => {
        const array = enterPublicKey.split(" ");
        array.push(value)
        setEnterPublicKey(array.join(" "))
        document.getElementById(id).disabled = true;
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
                            <span className="header-title">Recovery</span>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="seed-phrase-section">
                    <div>
                        Your 12 Words Seed and Private Key give direct access to your account and funds. do not give this information to anyone. We repeat, never give your word seed and private key to anyone.
                    </div>
                </div>
                <div style={{ padding: "10px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <div className="recovery-public-key-section-2 font-poppins">
                            <><Button className="recoverySectionTopBtn-2">Recovery Phrase</Button></>
                            <div id="rp2-public-key" style={{ minHeight: "70px" }}>
                             {enterPublicKey}
                            </div>
                        </div>
                    </Box>
                </div>
                <div style={{ marginTop: "2rem", padding: "10px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            {
                                publicKey.map((ele, index) => {
                                    return (
                                        <>
                                            <Grid item xs={4}>
                                                <Button id={`letterKey${index+1}`} onClick={() => pressKey(`letterKey${index+1}`, ele)} className="verifyBtn-2" color="inherit">{ele}</Button>
                                            </Grid>
                                        </>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </div>
                <div>
                    <Box sx={{ flexGrow: 1, marginTop: "2rem" }}>
                        <Grid container spacing={1}>    
                            <Grid item xs={6}>
                                <Button className="cancelBtn" color="inherit"><p style={{color:'#fff', marginTop:'-22px'}}>Cancel</p></Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button className="verifyBtn" onClick={() => nextPage()}><p style={{color:'#fff', marginTop:'-22px'}}>Verify</p></Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    )
}
export default RecoveryPage2;