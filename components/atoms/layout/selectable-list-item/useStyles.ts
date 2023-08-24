import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

interface StylesProps {
    isMobile: boolean
}

export const useStyles = makeStyles((theme: Theme) => ({
    cardItemPrice: {
        display: 'inline-block',
        textTransform: 'lowercase',
        fontSize: '14px',
        fontWeight: 'bold',
        '&:first-letter': {
            textTransform: 'uppercase',
        },
    },

    selectBtnWrapper: {
        marginLeft: (props: StylesProps) => (props.isMobile ? 'auto' : 'auto'),
        // marginRight: (props: StylesProps) => (props.isMobile ? '0px' : '32px'),
    },

    selectBtn: {
        fontSize: '16px',   
        lineHeight:'21px',
        padding: '5px 18px',
        display:'inline-block',
        color:'#ffffff',
        backgroundColor:'#98877C',
        textTransform: 'none',
        '&:hover':{
            backgroundColor:theme.palette.custom.colorFive
        }
    },
    staticBtn: {
        width: 'auto',
        fontSize: '16px',   
        lineHeight:'21px',
        padding: '5px 18px',
        display:'inline-block',
        color:'#ffffff',
        backgroundColor:'#98877C',
        textTransform: 'none',
        '&:hover':{
            cursor:'default',
            backgroundColor:'#98877C',
        }
    },

    selectedBtn: {
        backgroundColor:theme.palette.custom.colorFive
    },


    selectedWrapper: {
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'row',
    },
    cardItemDescBlock: {
        // paddingTop: '14px',
        // marginBottom: '20px',
        fontSize: '14px',
        lineHeight: '20px',
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
    },

    column: {
        display: 'flex',
        flexDirection: 'column',
    },

    cardItemName: {
        marginRight: '5px',
    },

    durationText: {
        color:'#000000'
        // fontSize: '13px',
        // marginLeft: '5px',
    },
}))
