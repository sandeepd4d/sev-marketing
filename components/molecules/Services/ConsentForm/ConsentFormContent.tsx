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
    const { setStep } = useFlowStep();
    const importImg = '/images/sevlogo.png';
    const cursive = '/images/slogan.png';

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
                <Typography className={`${bannerStyle.slogan} ${bannerStyle.bannerContent}`}>
                    <svg onClick={goBackStep} style={{position:'absolute',left:'16px', zIndex:9, cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
                        <path d="M9 1.0957L1 9.51313L9 17.9306" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Stay ready so you dont have to get ready</Typography>
                <Box sx={{padding: '25px'}}>
                    <svg className={bannerStyle.logo} xmlns="http://www.w3.org/2000/svg" width="45" height="60" viewBox="0 0 45 60" fill="none"><path d="M43.0455 0.776397C43.0122 0.773097 42.9783 0.770997 42.9447 0.770997C42.7154 0.770739 42.4941 0.855183 42.3233 1.00812C42.1525 1.16105 42.0442 1.37169 42.0192 1.5996L36.7425 49.7352L31.4664 1.5996C31.4388 1.36349 31.3218 1.14692 31.1395 0.99436C30.9572 0.841799 30.7235 0.764834 30.4862 0.779272C30.2489 0.79371 30.0262 0.898456 29.8637 1.072C29.7013 1.24553 29.6114 1.47469 29.6127 1.7124C29.6127 1.7424 29.6127 1.7724 29.6169 1.8024L35.8164 58.3599V58.3635L35.8203 58.4013C35.8451 58.629 35.9531 58.8395 36.1235 58.9926C36.294 59.1456 36.5149 59.2303 36.744 59.2305C36.7776 59.2305 36.8112 59.2284 36.8445 59.2248C37.072 59.1999 37.2824 59.092 37.4353 58.9217C37.5883 58.7513 37.673 58.5306 37.6734 58.3017L43.8663 1.8027C43.8699 1.76882 43.8717 1.73477 43.8717 1.7007C43.8716 1.47205 43.7874 1.25144 43.635 1.08099C43.4826 0.910545 43.2727 0.802216 43.0455 0.776697V0.776397Z" fill="white"></path><path d="M26.61 57.3684H17.1432V46.3092H23.2632C23.5098 46.3092 23.7464 46.2112 23.9208 46.0368C24.0952 45.8624 24.1932 45.6258 24.1932 45.3792C24.1932 45.1325 24.0952 44.896 23.9208 44.7216C23.7464 44.5472 23.5098 44.4492 23.2632 44.4492H17.1432V2.70448H26.61C26.8566 2.70448 27.0932 2.6065 27.2676 2.43209C27.442 2.25768 27.54 2.02113 27.54 1.77448C27.54 1.52783 27.442 1.29128 27.2676 1.11687C27.0932 0.942464 26.8566 0.844482 26.61 0.844482H16.3125C16.2924 0.844482 16.2726 0.846282 16.2525 0.847482C16.2393 0.847482 16.2261 0.845382 16.2126 0.845382C15.9659 0.845382 15.7294 0.943364 15.555 1.11777C15.3806 1.29218 15.2826 1.52873 15.2826 1.77538V58.2987C15.2826 58.5453 15.3806 58.7819 15.555 58.9563C15.7294 59.1307 15.9659 59.2287 16.2126 59.2287C16.2294 59.2287 16.2456 59.2269 16.2621 59.226C16.2786 59.2251 16.2951 59.2287 16.3122 59.2287H26.61C26.8566 59.2287 27.0932 59.1307 27.2676 58.9563C27.442 58.7819 27.54 58.5453 27.54 58.2987C27.54 58.052 27.442 57.8155 27.2676 57.6411C27.0932 57.4667 26.8566 57.3687 26.61 57.3687V57.3684Z" fill="white"></path><path d="M7.34193 59.229C6.55143 59.229 5.72823 59.0538 4.89183 58.707C3.45003 58.1091 2.11593 56.8835 1.23183 55.3448C1.11983 55.132 1.09468 54.8839 1.16166 54.6529C1.22864 54.4218 1.38254 54.2257 1.59105 54.1058C1.79955 53.9858 2.04644 53.9513 2.27985 54.0095C2.51327 54.0677 2.71506 54.214 2.84283 54.4179C3.52623 55.6077 4.53213 56.5446 5.60283 56.9879C6.40743 57.3224 7.93803 57.7352 9.12723 56.748C11.1513 55.0658 11.1372 50.8809 11.1297 48.6333C11.1192 45.5696 10.6218 42.2253 9.60873 38.4068C8.90193 35.7453 7.96023 33.0153 7.04913 30.3746C5.01003 24.4611 2.89953 18.3461 2.98653 11.996C3.01473 9.92965 3.18753 8.20795 3.51993 6.73135C3.99993 4.58725 4.82763 2.92135 5.98173 1.77655C6.60663 1.15705 7.39563 0.825249 8.20173 0.844149C9.00783 0.863049 9.76563 1.22455 10.3542 1.86415C11.4765 3.08275 11.9034 4.86085 12.186 6.03805C12.2437 6.2781 12.2036 6.53121 12.0746 6.74171C11.9456 6.95221 11.7383 7.10285 11.4983 7.1605C11.2582 7.21814 11.0051 7.17807 10.7946 7.04909C10.5841 6.92011 10.4335 6.7128 10.3758 6.47275C10.0614 5.16535 9.71853 3.92275 8.98473 3.12565C8.73783 2.85805 8.45283 2.71285 8.15913 2.70565C7.85733 2.69965 7.55583 2.83495 7.29123 3.09925C5.71023 4.66975 4.91013 7.58905 4.84923 12.0221C4.76733 18.047 6.82263 24.0057 8.80923 29.7684C9.73203 32.4402 10.6839 35.2029 11.4078 37.9319C12.4641 41.9046 12.9804 45.4046 12.9915 48.6291C12.9966 50.2014 12.9768 51.8745 12.6768 53.5191C12.2853 55.6623 11.5134 57.1869 10.3173 58.1817C9.54393 58.8237 8.62923 59.1753 7.59783 59.2254C7.51203 59.228 7.42653 59.2294 7.34133 59.2295L7.34193 59.229Z" fill="white"></path></svg>
                     <img src={cursive} alt="This is an image" width={160} height={44} className={`${bannerStyle.bannerImg} ${bannerStyle.noBottomSpace}`} />
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
                    <Grid item xs={6} sx={{pt:'0!important'}}><Button onClick={goBackStep} className={`${bannerStyle.continueBtn}`}>No</Button></Grid>
                </Grid>

           </Box>
        </Box>
    )
}
