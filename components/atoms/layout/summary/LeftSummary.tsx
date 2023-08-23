import { Box, Typography } from '@mui/material'
import { Location } from 'components/atoms/layout/summary/Location'
import { useStyles } from 'components/molecules/Header/useStyles'
import { useFlowStep } from 'lib/state/booking-flow'
import { Step } from 'lib/state/booking-flow/types'
// import { Services } from 'components/atoms/layout/summary/Services'
// import { PersonalInfo } from 'components/atoms/layout/summary/PersonalInfo'

import { LocationPin } from 'components/icons/LocationPin'
import { useCartStoreState } from 'lib/state/store'
import { getLocationName } from 'lib/utils/locationUtils'
import { PopperItemBase } from 'components/molecules/Header/PopperItemBase'
import formatDateFns, { cartTimeToDate } from 'lib/utils/formatDateFns'
import { CalendarDark } from 'components/icons/CalendarDark'
import { useCartState } from 'lib/state/cart'

export const LeftSummary = () => {
    const { currentFlowStep } = useFlowStep()
    const selectedStore = useCartStoreState()
    const cart = useCartState()
    const classes = useStyles()

    if (currentFlowStep.step === Step.ChooseLocation) {
        return <></>
    }

    return (
        <Box>
            <Location />

            {/* <Services />
            <PersonalInfo /> */}
        </Box>
    )
}