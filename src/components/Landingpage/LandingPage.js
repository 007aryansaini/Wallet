import "./styles.css";
import Fab from '@mui/material/Fab';
import EastIcon from '@mui/icons-material/East';

import { goTo } from 'react-chrome-extension-router';

// import PrivacyPolicyPageComponent from "../../pages/privacy-policy";
// import SeedPhasePageComponent from "../seed-phase";
import SetPassword from "../SetPassword";

function LandingPage() {

    const routeChange = () => {
        goTo(SetPassword, { message: "Hi" })
    }

    return (
        <>
            <div>
                <h2 className="font-clash-display" style={{ fontWeight: 500, marginTop:"100px" }}>
                    Welcome to the safest <br /> Crypto Wallet
                </h2>
                {/* <div className="centerDiv">
                    <img className="animate__animated animate__jackInTheBox" src="../../assets/Image.png" />
                </div> */}
                <div className="centerBottonDiv">
                    <Fab onClick={() => routeChange()} aria-label="next" style={{ background: "#FFF", color: "#231616" }}>
                        <EastIcon />
                    </Fab>
                </div>
            </div>
        </>
    )
}
export default LandingPage;