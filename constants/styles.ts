import { colors } from './colors'
import { Theme } from '@mui/material'

export const stepScreen = (theme: Theme) => {
    return {
        root: (isMobile: boolean) => {
            return {
                minHeight: '100%',
                // backgroundColor:'red',
                padding: theme.spacing(0, 2),
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
            }
        },
        blurScreen: {
            // '-webkit-filter': 'blur(20px)',
            // '-moz-filter': 'blur(20px)',
            // ' -o-filter': 'blur(20px)',
            // '-ms-filter': 'blur(20px)',
            // filter: 'blur(20px)',
            opacity: '0.6',
            'pointer-events': 'none',
        },
        loader: {
            'z-index': '1',
            top: '50%',
            left: 'calc(50% - 30px)',
            // '-webkit-filter': 'blur(1px)',
            // '-moz-filter': 'blur(1px)',
            // '-o-filter': 'blur(1px)',
            // '-ms-filter': 'blur(1px)',
            // filter: 'blur(1px)',
            opacity: '1',
        },
    }
}
