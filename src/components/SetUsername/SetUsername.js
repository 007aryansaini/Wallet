import "./style.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import { Input } from "antd";
import Box from '@mui/material/Box';
import {Button} from 'antd'
import randomWords from 'random-words';


import { goTo } from 'react-chrome-extension-router';
import LandingPage from "../Landingpage/LandingPage";
import ConfirmSecretPhrase from "../ConfirmSecretPhase/ConfirmSecretPhase";
import Dashboard from "../Dashboard/Dashboard";
// import SetPasswordPageComponent from "../set-password";
// import RecoveryPageComponent from "../recovery-page/index";

function SetUsername() {
    const [publicKey, setPublicKey] = useState([]);
    const [userInput, setUserInput] = useState()


    useEffect(() => {
        generatePublicKey()
    }, [])

    const generatePublicKey = () => {
        setPublicKey(randomWords(12))
    }

    const backButton = () => {
        goTo(ConfirmSecretPhrase, { message: "Hi" });
    }

    const nextPage = () => {
        goTo(Dashboard, { message: "Hi" });
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
                        {/* <Typography className="font-clash-display" sx={{ flexGrow: 1, margin: '0 !important' }}>
                            <span className="header-title">Secret Phrase</span>
                        </Typography> */}
                       
                    </Toolbar>
                </AppBar>
                <hr />
                
                <div style={{ marginTop: "2rem", padding: "10px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                   
                        <Input className="set-username-input" onChange={(e)=>{setUserInput(e.target.value)}} />

                    </Box>
                    {<p style={{color:'#fff', fontFamily:'sans-serif'}}>{userInput}</p>}
                </div>
            </div>
            <div style={{ marginTop: "2rem", marginBottom:'15px' }}>
                <Button className="next-button" onClick={() => nextPage()}><p className="next-button-text">NEXT</p></Button>
            </div>
            {/* <div>
                <Button onClick={() => generatePublicKey()} className="getNewSeedBtn font-clash-display" variant="outlined" startIcon={<RefreshIcon />}>
                    Get New Seed
                </Button>
            </div> */}
        </>
    )
}
export default SetUsername;