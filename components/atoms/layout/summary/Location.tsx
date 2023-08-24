import React from 'react'
import { Button, Box } from '@mui/material'
import { getLocationName } from 'lib/utils/locationUtils'
import { useCartStoreState } from 'lib/state/store'
import { useDefaultBlvdLocationState } from 'lib/state/cart'
import { Step } from 'lib/state/booking-flow/types'
import { SummaryItemBase } from 'components/atoms/layout/summary/SummaryItemBase'
import { useMobile } from 'lib/utils/useMobile'
import { useStyles } from 'components/atoms/layout/selectable-list-item/useStyles'

export const Location = () => {
    const { isMobile } = useMobile()
    const classes = useStyles({ isMobile })
    const selectedStore = useCartStoreState()
    const defaultBlvdLocationState = useDefaultBlvdLocationState()
    if (!selectedStore) {
        return <></>
    }
    return (
        <SummaryItemBase
            isEditable={!defaultBlvdLocationState}
            step={Step.ChooseLocation}
        >
            {/* <Typography variant="body2"> */}
            {/* <Button variant="contained" className={`${classes.staticBtn}`}> */}
            <Box sx={{fontWeight:700, color:'#52433D', display:'flex', flexWrap:'wrap'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 15 22" fill="none" style={{marginRight:'8px'}}>
                    <path d="M7.49967 0C3.36431 0 0 3.3648 0 7.50027C0 11.481 6.80458 20.7815 7.09432 21.1753L7.36472 21.5433C7.39634 21.5866 7.4467 21.6118 7.49967 21.6118C7.55347 21.6118 7.6035 21.5866 7.63545 21.5433L7.90568 21.1753C8.19558 20.7815 15 11.481 15 7.50027C15 3.3648 11.6351 0 7.49967 0ZM7.49967 4.81369C8.98139 4.81369 10.1863 6.01861 10.1863 7.50027C10.1863 8.98117 8.98133 10.1869 7.49967 10.1869C6.01883 10.1869 4.81309 8.98117 4.81309 7.50027C4.81309 6.01861 6.01878 4.81369 7.49967 4.81369Z" fill="#52433D"/>
                </svg>
                {getLocationName(selectedStore)}
            </Box>
            {/* </Button> */}
            {/* </Typography> */}
        </SummaryItemBase>
    )
}
