import React from 'react'
import {Grid, Box, Button, Typography } from '@mui/material'
import { useMobile } from 'lib/utils/useMobile'
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';
import { LeftSummary } from 'components/atoms/layout/summary/LeftSummary'
import { Step } from 'lib/state/booking-flow/types';
import { useFlowStep } from 'lib/state/booking-flow';

export default function ConsentFormContent() {
    const { isMobile } = useMobile();
    const bannerStyle = useWithLayoutStyles({ isMobile })
    const importImg = '/images/sevlogo.png';
    const { setStep } = useFlowStep();

    const customSetStep = async() => {
        try {
            await setStep(Step.PayAndConfirm)
        }
        catch(error) {
            
        }
    }

    const goBackStep = async() => {
        try {
            await setStep(Step.ChooseDate)
        }
        catch(error) {
            
        }
    }

    return (
        <Box sx={{
            height:'100%',
            overflowY:'scroll',
            paddingBottom: '100px'
        }}>
             <Box className={`${bannerStyle.banner} location_banner`}>
                {/* <Typography className={`${bannerStyle.slogan} ${bannerStyle.bannerContent}`}>Stay ready so you dont have to get ready</Typography> */}
                <Typography className={`${bannerStyle.slogan} ${bannerStyle.bannerContent}`}>
                    <svg onClick={goBackStep} style={{position:'absolute',left:'16px', zIndex:9, cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
                        <path d="M9 1.0957L1 9.51313L9 17.9306" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Stay ready so you dont have to get ready</Typography>
                <Box sx={{padding: '25px', backgroundColor:'#ffffff'}}>
                    <img src={importImg} alt="This is an image" width={45} height={60} className={bannerStyle.bannerImg} />
                    <Typography variant="h2" className={bannerStyle.bannerHeading}>Consent form</Typography>
                </Box>
            </Box>
           <Box className={bannerStyle.consentContent}>
                <ul>
                    <li>I consent that I am over 18 years of age</li>
                    <li>I have not taken antibiotics, iron supplements or Retin-A in the last 14 days</li>
                    <li>I have not taken Accutane or immunosuppressants in the last 6 months</li>
                    <li>I am not currently pregnant or breastfeeding.</li>
                    <li>The area(s) I would like to be treated have not been changed in any way from their natural pigment, and/or been tanned (naturally or artificially) within the last 4 weeks</li>
                </ul>
                <Grid container spacing={6} className={bannerStyle.continueBtnWrap}>
                    <Grid item xs={6} sx={{pt:'0!important'}}><Button onClick={customSetStep} className={`${bannerStyle.continueBtn}`}>Yes</Button></Grid>
                    <Grid item xs={6} sx={{pt:'0!important'}}><Button className={`${bannerStyle.continueBtn}`}>No</Button></Grid>
                </Grid>

           </Box>
        </Box>
    )
}
