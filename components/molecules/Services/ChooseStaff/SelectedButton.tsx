import { Box, Typography, Button } from '@mui/material'
// import { colors } from 'constants/colors'
import React from 'react'
// import { useSelectedButton } from 'components/molecules/Services/ChooseStaff/useStyles'
// import { Checked } from 'components/icons/Checked'
import { useMobile } from 'lib/utils/useMobile'
import { useStyles } from 'components/atoms/layout/selectable-list-item/useStyles'

export const SelectedButton = () => {
    const { isMobile } = useMobile()
    // const classes = useSelectedButton({ isMobile })
    const buttonStyle = useStyles({ isMobile })

    return (
        <Box className={buttonStyle.selectedWrapper}>
            {/* <Box className={classes.svgWrapper}>
                <Box className={classes.btn}>
                    <Checked color={colors.primary.main} />
                </Box>
            </Box>
            <Typography className={classes.selectedTxt}> Selected </Typography> */}
            <Button variant="contained" className={`${buttonStyle.selectBtn} ${buttonStyle.selectedBtn}`}>Selected</Button>
        </Box>
    )
}
