import { makeStyles } from '@mui/styles'
import { colors } from 'constants/colors'

export const useSelectedServicesScreenStyles = makeStyles(() => ({
    servicesRoot: {
        paddingTop: '1px',
        paddingBottom: '1px',
        height: 'calc(100% - 117px)',
    },
}))

export const useAvailableServiceOptionsStyles = makeStyles(() => ({
    customizeYourService: {
        fontWeight: 500,
    },
}))

export const useStaffErrorStyles = makeStyles(() => ({
    staffError: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '5px',
        fontSize:'14px',
        color:'#000000'
    },
    staffErrorIconInline: {
        display: 'inline-block',
        border: '1px solid red',
        color: 'red',
        width: '18px',
        height: '18px',
        lineHeight: '18px',
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '50%',
        marginRight: '8px',
    },
    staffErrorMessage:{
        fontSize: '14px',
        color:'#FF0000',
        lineHeight: '20px',
    }
}))

export const useServiceStaffStyles = makeStyles(() => ({
    staffSelected: {
        color: '#000000',
        display: 'flex',
        alignItems:'center',
        gap:'10px',
        fontSize: '14px',
        lineHeight: '20px'
    },
    staffAvatar: {
        backgroundSize: '100%',
        borderRadius: '50%',
        height: '32px',
        width: '32px',
        display: 'inline-block',
        marginRight: '10px',
    },
    chosenItemStaffBoxAvatarEmpty: {
        border: '1px solid #e3e3e3',
        backgroundSize: '100%',
        borderRadius: '50%',
        display: 'inline-block',
        lineHeight: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
}))

export const useAvailableServiceOptionStyles = makeStyles(() => ({
    optionRoot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: '10px',
    },
    plus: {
        cursor: 'pointer',
        display: 'flex',
        paddingTop: '3px',
    },
    textWrapper: {
        paddingLeft: '8px',
    },
    description: {
        fontSize: '13px',
        color: '#737373',
    },
}))

export const useServiceStyles = makeStyles(() => ({
    serviceNameText: {
        fontWeight: 700,
    },
    serviceExpanded: {
        margin: '15px 0px!important',
    },
    summaryWrapper: {
        display: 'inline-flex',
        flexDirection: 'column',
        padding:'0px 40px 24px',
        '& .MuiFilledInput-root':{
            minHeight:'initial',
            minWidth: '160px',
            padding:'5px 15px',
            width:'auto',
            backgroundColor:'#52433D',
            '& .MuiSelect-select':{
                paddingTop:0,
                paddingBottom: 0,
                backgroundColor:'#52433D',
            },
        },
        '& label':{
            fontSize: '14px',
            color:'#ffffff',
            transform:'translate(24px, 27px) scale(1)',
            '&.Mui-focused':{
                transform:'translate(24px, 27px) scale(1)',
            }
        }
    },
    removeServiceWrapper: {
        borderTop: '1px #e3e3e3 solid',
        paddingTop: '12px',
        marginTop: '12px',
    },
    removeServiceText: {
        cursor: 'pointer',
        width: 'fit-content',
        color: colors.primary.main,
        '&:hover': {
            filter: 'brightness(1.2)',
            transform: 'scale(1) rotate(0.2deg)',
        },
    },
    removeBtn: {
        position: 'absolute',
        top:'5px',
        left:0,
        padding:0,
    },
    editAddOn: {
        width: 'auto',
        height: 38,
        fontSize: '16px',
        fontWeight: 500,
        marginTop: '16px',
        marginRight: '10px',
        textTransform: 'none',
    },
}))

export const useSelectedOptionStyles = makeStyles(() => ({
    root: {
        paddingBottom: '2px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    remove: {
        cursor: 'pointer',
        display: 'flex',
        paddingLeft: '8px',
    },
}))

export const useMobileAddAnotherServiceStyles = makeStyles(() => ({
    leftPanelBottom: {
        height: '62px',
        display: 'flex',
        position: 'fixed',
        bottom: '56px',
        width: '100%',
        backgroundColor: 'white',
        paddingTop: '10px',
    },
    leftPanelBottomBtn: {
        fontSize: '16px',
        fontWeight: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}))
