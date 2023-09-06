import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import { stepScreen } from 'constants/styles'
import Font from 'config/fonts.json'
import { isMobile } from 'react-device-detect'

interface StylesProps {
    isMobile: boolean
}

export const useWithLayoutStyles = makeStyles((theme: Theme) => ({
    root: {
        height: (props: StylesProps) => (!props.isMobile ? '100vh' : '100vh'),
        marginTop: (props: StylesProps) => (!props.isMobile ? '0' : '0'),
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    grid: {
        height: (props: StylesProps) => (!props.isMobile ? '100%' : 'auto'),
        display: (props: StylesProps) => (!props.isMobile ? 'block' : 'block'),
        // flexDirection: 'column',
    },
    left: {
        height: (props: StylesProps) => (!props.isMobile ? '100vh' : '100vh'),
        flex: '0 0 535px',
        display: 'flex',
        flexDirection: 'column',
        position:'relative',
    },
    right: {
        flex: '1 0 400px',
        borderLeft: (props: StylesProps) =>
            !props.isMobile ? '1px solid #D9DDE6' : 'none',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    rightPanelCaption: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '58px',
        minHeight: '58px',
        borderBottom: '2px solid rgb(217, 221, 229)',
        paddingLeft: (props: StylesProps) =>
            !props.isMobile ? theme.spacing(4) : theme.spacing(2),
    },
    rightPanelCaptionIcon: {
        paddingRight: theme.spacing(2),
    },
    rightPanelCaptionText: {
        fontFamily: Font.headings_family,
        fontWeight: 500,
        fontSize: '20px',
        color: '#000000E5',
        lineHeight: '24px',
    },
    rightPanelBottom: {
        zIndex: 1000,
        height: '56px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: (props: StylesProps) =>
            !props.isMobile ? 'relative' : 'fixed',
        bottom: 0,
    },
    dropServicesWrap:{
        padding: '20px 40px 40px',
        position:'relative',
        '& .dropServicesInnerWrap':{
            width:'auto',
            display:'inline-block',
            '&:hover':{
                '& button':{
                    backgroundColor:'#52433D',
                    '& .MuiButton-endIcon': {
                        transform: 'rotate(180deg)'
                    }

                },
                '& ul':{
                    display:'block'
                }
            }
        }
    },
    dropServices:{
        width:'auto',
        backgroundColor:'#52433D',
        fontSize:'14px',
    },
    dropServicesList:{
        display:'none',
        overflowY:'auto',
        height:'auto',
        background: '#FFFFFF',
        position:'absolute',
        zIndex:9,
        left:'40px',
        right:'40px',
        boxShadow: '-1px 4px 15px 0px rgba(0, 0, 0, 0.25)',
        listStyleType:'none',
        padding:0,
        '&.fixed-height':{
            height: '170px'
        },
        '& li':{
            padding: '5px 15px',
            fontSize:'14px',
            color:'#9E9E9E',
            borderBottom:'1px solid #9E9E9E',
        }
    },
    rightPanelBottomBtn: {
        width: '100%',
        height: '56px',
        borderRadius: 0,
        fontSize: '16px',
        fontWeight: 500,
        textTransform: 'none',
    },
    leftPanelBottomBtn: {
        fontSize: '16px',
        fontWeight: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    leftPanelBottom: {
        maxWidth: '100%',
        margin:'auto',
        paddingBottom: '88px',
        // bottom: '88px!important',
        position:'relative',
        width: '100%',
        paddingTop:'16px',
        backgroundColor:'#ffffff',
        '& button':{
            width:'75%',
            margin:'auto',
            display:'block'
        }
    },
    loader: stepScreen(theme).loader,
    blurScreen: stepScreen(theme).blurScreen,
    banner: {
        backgroundColor:theme.palette.custom.colorOne
    },
    bannerContent:{
        fontSize: '16px',
        lineHeight: '20px',
        textAlign:'center',
        color: '#ffffff',
    },
    logo:{
        display:'block',
        margin:'auto',
    },
    slogan: {
        padding: '18px',
        border:'1px solid #ffffff',
        position:'relative',
    },
    bannerImg: {
        display:'block',
        margin:'16px auto',
    },
    bannerHeading:{
        fontSize:'20px',
        lineHeight:'24px',
        fontWeight:700,
        color:'#ffffff',
        textAlign:'center',
        margin:'25px auto 0',
        textTransform:'uppercase',
    },
    noBottomSpace:{marginBottom:0},
    bannerLink: {
        color:'#ffffff',
        textDecorationColor:'#ffffff'
    },
    accordion: {
        boxShadow:'none',
        borderBottom:'1px solid #9E9E9E',
        '& .MuiAccordionSummary-root': {
            '& .MuiAccordionSummary-content': {
                margin: 0,
            },
        },
    },
    dropdownTitle:{
        fontSize:'20px',
        lineHeight:'24px',
        color:'#000000',
    },
    dropdownTitleWrap: {
        padding: '24px 16px',
        justifyContent:'space-between',
    },
    dropdownContent: {
        fontSize: '16px',
        lineHeight: '20px',
        color: '#000000',
        textTransform:'capitalize',
    },
    dropdownLocationContent:{
        alignItems:'center',
    },
    dropdownDetails: {
        padding: isMobile ? '0 16px 16px 16px' : '0 16px 16px 36px',
    },
    hours: {
        fontSize: '14px',
        lineHeight: '20px',
        marginLeft: '8px',
    },
    dropdownListItems:{
        padding: '16px 16px 16px 36px ',
        borderBottom:'1px solid #DEDEDE',
        '&.last-child':{
            borderBottom:'none',
        }
    },
    continueBtnWrap: {
        backgroundColor:'#ffffff',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom:0,
        padding: '16px 24px',
        zIndex:9,
    },
    continueBtn: {
        backgroundColor:theme.palette.custom.colorOne,
        width: '100%',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#ffffff',
        padding: '16px',
        height: 'auto',
        fontWeight:400,
        '&:disabled':{
            backgroundColor:theme.palette.custom.colorTwo,
            color: '#000000',
        },
        '&:hover':{
            backgroundColor:theme.palette.custom.colorFive,
            color:'#ffffff',
        }
    },
    thankYouBtn: {
        backgroundColor:'#ffffff',
        width: '100%',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#000000',
        padding: '16px',
        height: 'auto',
        fontWeight:400,
        '&:disabled':{
            backgroundColor:theme.palette.custom.colorTwo,
            color: '#000000',
        },
        '&:hover':{
            backgroundColor:theme.palette.custom.colorFive,
            color:'#ffffff',
        }
    },
    priceItemCard:{
        display: 'block',
        fontSize: '14px',
        marginTop: '5px',
        lineHeight: '20px',
        color:'#000000'
    },
    formInput: {
        '& .MuiFormControl-root': {
            '& label': {    
                fontSize:'14px',
                color:'#9E9E9E',
                maxWidth:'100%',
                padding: 0,
                '&.MuiInputLabel-sizeSmall':{
                    fontSize:'14px'
                }
            },
            '& .MuiFilledInput-root':{
                '&:before':{
                    borderBottomColor: '#9E9E9E',
                },
                '&:after':{
                    borderBottomColor: 'transparent',
                },
                '& input':{
                    padding: 0,
                }
            }
        }
    },
    calendar_week:{
        fontWeight: 600,
        fontSize: '14px',
        color: '#000000'
    },
    days: {
        textAlign:'center',
        gap:'16px',
        alignItems: 'center',
        display:'flex',
        flexWrap:'wrap',
        fontSize:' 14px',
        fontWeight:500
    },
    calendar_date: {
        textAlign:'center',
        paddingTop: '5px',
        '&.availableDate':{
            '&:not(.disabled)': {
                '& span':{
                    cursor:'pointer',
                    '&:hover':{
                        backgroundColor:'#98877C',
                        color:"#ffffff",
                    }
                }
            },
            '&.selected':{
                '& span':{
                    backgroundColor:'#52433D',
                    color:"#ffffff",
                }
            },
        },
        '&.not_available':{
            '& span': {
                color:'#848383',
                '&:hover':{
                    backgroundColor:'transparent',
                    color:"#848383",
                    cursor:'default'
                }
            },
            '&.selected':{
                '& span': {
                    color:'#848383',
                    '&:hover':{
                        backgroundColor:'transparent',
                        color:"#848383",
                        cursor:'default'
                    }
                },
                '&.today':{
                    '& span': {
                        backgroundColor:'#98877C',
                        color:"#ffffff"
                    }
                },
            },
        },
        '& span':{
            fontSize: '14px',
            borderRadius: '100%',
            width: '26px',
            height: '26px',
            lineHeight: '26px',
            color:"#000000",
            margin:'auto',
            display:'inline-block',
        }
    },
    not_selectable:{
        '& span':{
            color:'#848383',
        }
    },
   
    selected:{},
    disabled_date:{
        '& span':{
            color:'#848383',
            '&:hover':{
                backgroundColor:'transparent',
                color:"#848383",
                cursor:'default'
            }
        }
    },
    today:{
        '& span':{
            backgroundColor:'#98877C',
            color:"#ffffff",
        }
    },
    calendar_week_wrap: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px'
    },
    consentContent:{
        padding: isMobile?0:'40px',
        '& ul': {
            marginBottom:0,
            padding: '0 30px 0 50px',
            '& li': {
                fontSize: '14px',
                lineHeight: '22px',
                marginBottom: '30px'
            }
        }
    },
    calendarDropdownDate:{
        cursor:'pointer',
        fontSize:'10px',
        fontWeight:500,
        color:'#000000',
        paddingTop:'8px',
        justifyContent:'center',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        alignItems: 'center'
    }
}))
