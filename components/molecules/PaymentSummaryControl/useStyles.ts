import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

export const useStyles = makeStyles((theme: Theme) => ({
    servicesBlock: {
        paddingBottom: theme.spacing(2),
    },
    totalBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // marginLeft: theme.spacing(-3),
        // marginRight: theme.spacing(-3),
        paddingTop: theme.spacing(3),
        borderTop: '1px dashed #9E9E9E',
    },
    boxWrapperCommon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}))
