import { Box, Typography } from '@mui/material'
import { useStyles } from 'components/atoms/layout/selectable-list-item/useStyles'
import { useMobile } from 'lib/utils/useMobile'
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';

interface Props {
    name: string
    durationText?: string
    useBold?: boolean
}

export const Caption = ({ name, durationText, useBold }: Props) => {
    const { isMobile } = useMobile()
    const classes = useStyles({ isMobile })
    const accordionStyle = useWithLayoutStyles({ isMobile })

    return (
        // <Box className={classes.row}>
        //     <Box className={`${accordionStyle.dropdownContent}`} sx={{fontWeight: useBold ? 'bold' : ''}}>
            <>
                {name}
                {/* {isMobile && <Typography className={accordionStyle.hours}>{` ${durationText}`}</Typography>} */}
            </>
            //  </Box>
            //  {!isMobile && <Box className={`${classes.durationText} ${accordionStyle.hours}`}>{durationText}</Box>} 
        // </Box>
    )
}
