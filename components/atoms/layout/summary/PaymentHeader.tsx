import { Box, Typography } from '@mui/material'
import { useStyles } from 'components/molecules/Header/useStyles'
import { useFlowStep } from 'lib/state/booking-flow'
import { Step } from 'lib/state/booking-flow/types'
import { useCartStoreState } from 'lib/state/store'
import { getLocationName } from 'lib/utils/locationUtils'
import formatDateFns, { cartTimeToDate } from 'lib/utils/formatDateFns'
import EditIcon from '@mui/icons-material/Edit';
import { CalendarDark } from 'components/icons/CalendarDark'
import { useCartState } from 'lib/state/cart'
import { PopperLocation } from 'components/molecules/Header/PopperLocation'
import { PopperDateTime } from 'components/molecules/Header/PopperDateTime'
import { PopperTime } from 'components/molecules/Header/PopperTime'

export const PaymentHeader = () => {
    const { currentFlowStep } = useFlowStep()
    const selectedStore = useCartStoreState()
    const cart = useCartState()
    const classes = useStyles()

    if (currentFlowStep.step === Step.ChooseLocation) {
        return <></>
    }

    return (
            <Box className={classes.boxWrapperCommon} sx={{pb: 1}}>
                <PopperLocation textType="Location" />
                <PopperDateTime textType="Date" />
                <PopperTime textType="Time" />
            </Box>

    )
}