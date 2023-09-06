import React, { useState, useContext, useEffect } from 'react'
import { Theme, Typography, Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { SelectDate } from 'components/molecules/Services/ChooseDate/SelectDate'
import { StaffsInfoList } from 'components/molecules/Services/ChooseDate/OneDay/StaffsInfoList'
import { CartBookableDate } from '@boulevard/blvd-book-sdk/lib/cart'
import { useSetLoadingStaffTimeState, useStaffTimes } from 'lib/state/staffTime'
import { useCartStoreState } from 'lib/state/store'
import { SelectTime } from 'components/molecules/Services/ChooseDate/OneDay/SelectTime'
import { cartTimeToDate } from 'lib/utils/formatDateFns'
import { useStaffDates } from 'lib/state/staffDate'
// import formatDateFns from 'lib/utils/formatDateFns'
import { useCartState } from 'lib/state/cart'
import { LayoutContext } from 'components/atoms/layout/LayoutContext'
import {
    useSelectedStaffTimeState,
    useSetSelectedStaffTimeState,
} from 'lib/state/staffTime'
import { useMobile } from 'lib/utils/useMobile'
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';
// import Link from '@mui/material/Link';
import { LeftSummary } from 'components/atoms/layout/summary/LeftSummary'
import { useSelectedServices } from 'lib/state/services';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useFlowStep } from 'lib/state/booking-flow';
import { Step } from 'lib/state/booking-flow/types'
interface StylesProps {
    isMobile: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        overflowY: 'scroll',
        position: 'sticky',
        height: '100%',
        paddingBottom: '100px',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    rightPanelWrapper: {},
    selectedDay: {
        width: '320px',
        borderBottom: `3px solid ${theme.palette.primary.main}`,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
}))

export const ShowTimeForOneDayComponent = () => {
    const { isMobile } = useMobile()
    const bannerStyle = useWithLayoutStyles({ isMobile })
    const classes = useStyles({ isMobile })
    
    const cart = useCartState()
    const { getStaffDateState } = useStaffDates()
    const staffDatesStore = getStaffDateState()
    const [filteredDate, setFilteredDate] = useState<Date | undefined>(
        cartTimeToDate(
            cart?.startTime,
            staffDatesStore &&
                staffDatesStore.length > 0 &&
                staffDatesStore[0].dates.length > 0
                ? staffDatesStore[0].dates[0].date
                : new Date()
        )
    )
    const setLoadingStaffTimeState = useSetLoadingStaffTimeState()
    const selectedStore = useCartStoreState()
    const { loadStaffTimes } = useStaffTimes()
    const layout = useContext(LayoutContext)
    const selectedStaffTime = useSelectedStaffTimeState()
    const setSelectedStaffTime = useSetSelectedStaffTimeState()
    const { selectedServicesStateValue, reverseSelectedServices } = useSelectedServices()
    const reversedList = reverseSelectedServices(selectedServicesStateValue)
    const { setStep } = useFlowStep();
    const importImg = '/images/sevlogo.png';
    const cursive = '/images/slogan.png'

    useEffect(() => {
        if (selectedStaffTime === undefined) {
            layout.setShowBottom(false)
        }
        // eslint-disable-next-line
    }, [selectedStaffTime])

    const onDayClick = async (
        day: Date,
        cartBookableDate: CartBookableDate
    ) => {
        setSelectedStaffTime(undefined)
        setFilteredDate(day)
        setLoadingStaffTimeState(true)
        const staffDate = {
            date: day,
            cartBookableDate: cartBookableDate,
        }
        loadStaffTimes(cart, staffDate, selectedStore?.location.tz).finally(
            () => {
                setLoadingStaffTimeState(false)
            }
        )
    }
  
    const customSetStep = async() => {
        try {
            await setStep(Step.SelectService)
        }
        catch(error) {
            
        }
    }

    return (
        <Box className={classes.root}>
            <Box className={`${bannerStyle.banner} location_banner`}>
                <Typography className={`${bannerStyle.slogan} ${bannerStyle.bannerContent}`}>
                    <svg onClick={customSetStep} style={{position:'absolute',left:'16px', zIndex:9, cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
                        <path d="M9 1.0957L1 9.51313L9 17.9306" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Stay ready so you dont have to get ready
                </Typography>
                <Box sx={{padding: '40px'}}>
                    <svg className={bannerStyle.logo} xmlns="http://www.w3.org/2000/svg" width="45" height="60" viewBox="0 0 45 60" fill="none"><path d="M43.0455 0.776397C43.0122 0.773097 42.9783 0.770997 42.9447 0.770997C42.7154 0.770739 42.4941 0.855183 42.3233 1.00812C42.1525 1.16105 42.0442 1.37169 42.0192 1.5996L36.7425 49.7352L31.4664 1.5996C31.4388 1.36349 31.3218 1.14692 31.1395 0.99436C30.9572 0.841799 30.7235 0.764834 30.4862 0.779272C30.2489 0.79371 30.0262 0.898456 29.8637 1.072C29.7013 1.24553 29.6114 1.47469 29.6127 1.7124C29.6127 1.7424 29.6127 1.7724 29.6169 1.8024L35.8164 58.3599V58.3635L35.8203 58.4013C35.8451 58.629 35.9531 58.8395 36.1235 58.9926C36.294 59.1456 36.5149 59.2303 36.744 59.2305C36.7776 59.2305 36.8112 59.2284 36.8445 59.2248C37.072 59.1999 37.2824 59.092 37.4353 58.9217C37.5883 58.7513 37.673 58.5306 37.6734 58.3017L43.8663 1.8027C43.8699 1.76882 43.8717 1.73477 43.8717 1.7007C43.8716 1.47205 43.7874 1.25144 43.635 1.08099C43.4826 0.910545 43.2727 0.802216 43.0455 0.776697V0.776397Z" fill="white"></path><path d="M26.61 57.3684H17.1432V46.3092H23.2632C23.5098 46.3092 23.7464 46.2112 23.9208 46.0368C24.0952 45.8624 24.1932 45.6258 24.1932 45.3792C24.1932 45.1325 24.0952 44.896 23.9208 44.7216C23.7464 44.5472 23.5098 44.4492 23.2632 44.4492H17.1432V2.70448H26.61C26.8566 2.70448 27.0932 2.6065 27.2676 2.43209C27.442 2.25768 27.54 2.02113 27.54 1.77448C27.54 1.52783 27.442 1.29128 27.2676 1.11687C27.0932 0.942464 26.8566 0.844482 26.61 0.844482H16.3125C16.2924 0.844482 16.2726 0.846282 16.2525 0.847482C16.2393 0.847482 16.2261 0.845382 16.2126 0.845382C15.9659 0.845382 15.7294 0.943364 15.555 1.11777C15.3806 1.29218 15.2826 1.52873 15.2826 1.77538V58.2987C15.2826 58.5453 15.3806 58.7819 15.555 58.9563C15.7294 59.1307 15.9659 59.2287 16.2126 59.2287C16.2294 59.2287 16.2456 59.2269 16.2621 59.226C16.2786 59.2251 16.2951 59.2287 16.3122 59.2287H26.61C26.8566 59.2287 27.0932 59.1307 27.2676 58.9563C27.442 58.7819 27.54 58.5453 27.54 58.2987C27.54 58.052 27.442 57.8155 27.2676 57.6411C27.0932 57.4667 26.8566 57.3687 26.61 57.3687V57.3684Z" fill="white"></path><path d="M7.34193 59.229C6.55143 59.229 5.72823 59.0538 4.89183 58.707C3.45003 58.1091 2.11593 56.8835 1.23183 55.3448C1.11983 55.132 1.09468 54.8839 1.16166 54.6529C1.22864 54.4218 1.38254 54.2257 1.59105 54.1058C1.79955 53.9858 2.04644 53.9513 2.27985 54.0095C2.51327 54.0677 2.71506 54.214 2.84283 54.4179C3.52623 55.6077 4.53213 56.5446 5.60283 56.9879C6.40743 57.3224 7.93803 57.7352 9.12723 56.748C11.1513 55.0658 11.1372 50.8809 11.1297 48.6333C11.1192 45.5696 10.6218 42.2253 9.60873 38.4068C8.90193 35.7453 7.96023 33.0153 7.04913 30.3746C5.01003 24.4611 2.89953 18.3461 2.98653 11.996C3.01473 9.92965 3.18753 8.20795 3.51993 6.73135C3.99993 4.58725 4.82763 2.92135 5.98173 1.77655C6.60663 1.15705 7.39563 0.825249 8.20173 0.844149C9.00783 0.863049 9.76563 1.22455 10.3542 1.86415C11.4765 3.08275 11.9034 4.86085 12.186 6.03805C12.2437 6.2781 12.2036 6.53121 12.0746 6.74171C11.9456 6.95221 11.7383 7.10285 11.4983 7.1605C11.2582 7.21814 11.0051 7.17807 10.7946 7.04909C10.5841 6.92011 10.4335 6.7128 10.3758 6.47275C10.0614 5.16535 9.71853 3.92275 8.98473 3.12565C8.73783 2.85805 8.45283 2.71285 8.15913 2.70565C7.85733 2.69965 7.55583 2.83495 7.29123 3.09925C5.71023 4.66975 4.91013 7.58905 4.84923 12.0221C4.76733 18.047 6.82263 24.0057 8.80923 29.7684C9.73203 32.4402 10.6839 35.2029 11.4078 37.9319C12.4641 41.9046 12.9804 45.4046 12.9915 48.6291C12.9966 50.2014 12.9768 51.8745 12.6768 53.5191C12.2853 55.6623 11.5134 57.1869 10.3173 58.1817C9.54393 58.8237 8.62923 59.1753 7.59783 59.2254C7.51203 59.228 7.42653 59.2294 7.34133 59.2295L7.34193 59.229Z" fill="white"></path></svg>
                    {/* const cursive = '/images/slogan.png' */}
                    <img src={cursive} alt="This is an image" width={160} height={44} className={`${bannerStyle.bannerImg} ${bannerStyle.noBottomSpace}`} />
                </Box>
            </Box>
            <LeftSummary />
            {/* <Grid className={classes.rightPanelWrapper}>
                <Grid item xs={12}>
                    <Box> */}
                        {/* {isMobile && <StaffsInfoList />} */}
                        {/* <Box className={classes.selectedDay}>
                                <Typography variant="h3" component="span">
                                    {formatDateFns(
                                        filteredDate,
                                        selectedStore?.location.tz,
                                        'EEEE, MMMM d'
                                    )}
                                </Typography>
                            </Box> */}
                        {/* {!isMobile && <StaffsInfoList />} */}
                        <Box className={bannerStyle.dropServicesWrap}>
                            <Box className='dropServicesInnerWrap'>
                                <Button variant="contained" className={bannerStyle.dropServices} endIcon={<ExpandMoreIcon />}>Selected Services</Button>
                                {
                                    <ul className={`${bannerStyle.dropServicesList} ${reversedList.length >= 4 && 'fixed-height'}`}>
                                        {     
                                            reversedList?.map((cartItem, index) => {
                                                return (
                                                    <li key={index}>
                                                        <svg style={{marginRight: '10px'}} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                            <path d="M5.99992 25.0901C5.98992 25.0901 5.97992 25.0901 5.96992 25.0901C5.77992 25.0701 5.63992 24.9001 5.64992 24.7101C6.01992 20.6101 7.27992 15.5701 8.03992 12.5601C8.19992 11.9201 8.33992 11.3601 8.44992 10.9101C9.04992 8.39005 7.76992 3.14005 7.75992 3.09005C7.70992 2.90005 7.82992 2.71005 8.01992 2.66005C8.19992 2.61005 8.38992 2.73005 8.43992 2.92005C8.48992 3.14005 9.76992 8.39005 9.12992 11.0701C9.01992 11.5301 8.87992 12.0901 8.71992 12.7301C7.96992 15.7201 6.70992 20.7301 6.34992 24.7701C6.32992 24.9501 6.17992 25.0901 5.99992 25.0901Z" fill="#52433D"/>
                                                            <path d="M20.03 25.28C20.01 25.28 19.99 25.28 19.96 25.27C19.77 25.23 19.65 25.05 19.68 24.86C19.77 24.36 19.91 23.61 20.05 22.71C20.3 21.12 20.62 19.13 20.64 18.09C20.69 15.56 19.72 14.24 18.26 12.25C17.84 11.67 17.38 11.05 16.91 10.34C15.72 8.56004 17.25 3.47004 17.43 2.90004C17.49 2.72004 17.68 2.61004 17.87 2.67004C18.05 2.73004 18.16 2.92004 18.1 3.11004C17.64 4.58004 16.64 8.68004 17.49 9.95004C17.96 10.65 18.41 11.27 18.83 11.84C20.32 13.88 21.4 15.35 21.34 18.11C21.32 19.2 21 21.21 20.74 22.83C20.59 23.74 20.46 24.49 20.36 25C20.35 25.16 20.2 25.28 20.03 25.28Z" fill="#52433D"/>
                                                            <path d="M11.55 15.6501C10.58 15.6501 9.39005 15.4301 7.82005 14.3701C7.66005 14.2601 7.62005 14.0501 7.72005 13.8801C7.83005 13.7201 8.04005 13.6801 8.21005 13.7801C9.88005 14.9001 11.01 14.9901 11.99 14.9301C12.71 14.8801 13.23 14.6801 14.36 14.2401C14.99 14.0001 15.79 13.6801 16.91 13.2901C17.86 12.9601 18.64 12.7001 19.13 12.5401C19.31 12.4801 19.51 12.5801 19.57 12.7701C19.63 12.9501 19.53 13.1501 19.34 13.2101C18.85 13.3701 18.08 13.6201 17.14 13.9501C16.03 14.3401 15.24 14.6501 14.61 14.8901C13.44 15.3401 12.86 15.5701 12.03 15.6301C11.88 15.6401 11.72 15.6501 11.55 15.6501Z" fill="#52433D"/>
                                                            <path d="M13.78 20.4601L13.5 20.4201C11.25 20.1201 7.60002 15.7501 7.45002 15.5701C7.33002 15.4201 7.35002 15.2001 7.50002 15.0801C7.65002 14.9601 7.87002 14.9801 7.99002 15.1301C8.94002 16.2801 11.66 19.2001 13.34 19.6801C13.76 18.7601 15.4 15.8701 19.94 14.0101C20.12 13.9301 20.32 14.0201 20.4 14.2001C20.48 14.3801 20.39 14.5801 20.21 14.6601C15.17 16.7201 13.9 20.1601 13.88 20.2001L13.78 20.4601Z" fill="#52433D"/>
                                                            <path d="M13.5401 25.43C13.3501 25.43 13.2001 25.29 13.1901 25.1C13.1801 24.97 13.0301 21.86 13.1901 20.04C13.2101 19.85 13.3701 19.71 13.5701 19.72C13.7601 19.74 13.9001 19.91 13.8901 20.1C13.7301 21.87 13.8901 25.03 13.8901 25.06C13.9001 25.25 13.7501 25.42 13.5601 25.43C13.5501 25.43 13.5501 25.43 13.5401 25.43Z" fill="#52433D"/>
                                                            <path d="M11.92 25.4299C11.82 25.4299 11.71 25.3799 11.64 25.2999C11.52 25.1499 11.55 24.9399 11.69 24.8199C11.72 24.7899 12.21 24.3099 13.12 22.0699C13.19 21.8899 13.4 21.8099 13.58 21.8799C13.76 21.9499 13.84 22.1599 13.77 22.3399C12.78 24.7799 12.23 25.2899 12.13 25.3699C12.07 25.4099 12 25.4299 11.92 25.4299Z" fill="#52433D"/>
                                                            <path d="M11.92 11.19C12.01 11.19 12.09 10.99 12.09 10.73C12.09 10.48 12.01 10.27 11.92 10.27C11.83 10.27 11.75 10.47 11.75 10.73C11.75 10.99 11.82 11.19 11.92 11.19Z" fill="#52433D"/>
                                                        </svg>
                                                        {cartItem?.item?.name}
                                                    </li>                                                        
                                                )
                                            })
                                        }
                                    </ul>
                                }
                            </Box>
                        </Box>
                        <SelectDate onDayClick={onDayClick} filteredDate={filteredDate} />
                    {/* </Box>
                </Grid>
                <Grid item xs={12}> */}
                {/* {console.log(filteredDate, 'this is the filteredDate')} */}
                    <SelectTime filteredDate={filteredDate} store={selectedStore} />
                {/* </Grid>
            </Grid> */}
        </Box>
    )
}
