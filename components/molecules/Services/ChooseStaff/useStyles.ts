import { makeStyles } from '@mui/styles'
import { colors } from 'constants/colors'

interface StylesProps {
    isMobile: boolean
}

export const useStaffStyles = makeStyles(() => ({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center'
    },
    staffTextBlock: {
        marginLeft: '16px',
    },
    staffName: {
        color:'#000000',
        fontSize: '16px',
    },
    staffDescription: {
        color: '#000000',
        display: 'block',
        fontSize: '14px',
        // marginTop: '5px',
        lineHeight: '20px'
    },
    root: {
        margin: '5px 10px 5px 0px',
        textAlign: 'center',
        width: '185px',
        border: '1px solid #dcedc8',
        padding: '15px 10px 16px 10px',
    },
    selected: {
        border: '1px solid #40c4ff',
    },
    staffBoxAvatar: {
        // backgroundColor: colors.primary.main + '4C',
        backgroundColor: colors.custom.colorTwo,
        backgroundSize: '100%',
        borderRadius: '50%',
        display: 'inline-block',
        height: '40px',
        width: '40px',
        lineHeight: '40px',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    staffBoxAvatarEmpty: {
        textAlign: 'center',
        fontSize: '20px',
        color: '#FFFFFF',
    },
    staffDescBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'right',
        height: '85px',
        padding: '5px 0px 0px 0',
    },
    staffNameTextBlock: {
        fontWeight: 500,
        fontSize: '15px',
        color: '#000000',
        height: '25px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': '2',
        '-webkit-box-orient': 'vertical',
    },
    staffDescText: {
        marginTop: '0px',
        fontSize: '13px',
        color: '#737373',
        height: '50px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': '2',
        '-webkit-box-orient': 'vertical',
    },
}))

export const useStaffListStyles = makeStyles(() => ({
    root: {
        overflowY: 'scroll',
        position: 'sticky',
        height: 'calc(100% - 57px)',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: '19px',
    },
    selectedItemText: {
        fontSize: '17px',
        paddingLeft: '8px',
    },
    staffBlock: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: '5px',
        paddingBottom: '74px',
    },
    bottomBtn: {
        width: '200px',
        height: '40px',
        fontSize: '16px',
        fontWeight: 500,
        textTransform: 'capitalize',
        marginTop: '10px',
        marginRight: '10px',
    },
    noOptionsAvailableWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '15%',
    },
}))

export const useSelectedButton = makeStyles(() => ({
    selectedWrapper: {
        marginLeft: 'auto',
        // marginRight: (props: StylesProps) => (props.isMobile ? '16px' : '32px'),
        // marginTop: '32px',
        display: 'flex',
        flexDirection: 'row',
    },
    selectedTxt: {
        fontWeight: 700,
        fontSize: '14px',
        marginLeft: '8px',
        color: '#000000',
    },

    svgWrapper: {
        marginTop: '-3px',
    },

    btn: {
        cursor: 'pointer',
    },
}))
