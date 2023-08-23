import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useSelectedServices } from 'lib/state/services'
import { useCartMethods } from 'lib/state/cart'
const cancellationPolicyURL = 'https://www.joinblvd.com/legal/cancellations'
const termsOfServiceURL = 'https://www.joinblvd.com/legal/terms'

export default function Terms() {
    const { selectedServicesStateValue } = useSelectedServices()
    const { isCartAvailableBookableItem } = useCartMethods()
    const hasServices = selectedServicesStateValue.filter(x=>isCartAvailableBookableItem(x.item)).length > 0
    const bookingOrPurchasingText = hasServices ? 'By booking this appointment' : 'By purchasing this product'
    return (
        <Grid item xs={12}>
            <Typography sx={{ fontWeight:600, mt:7 }}>
                Terms
            </Typography>
            <Typography sx={{ pt: 4, '& a': {color: '#33343C', fontSize: 14} }}>
                {bookingOrPurchasingText + ', you agree to LOGO’s'} <a target="_blank" rel="noreferrer" href={cancellationPolicyURL}>Cancellation
                Policy</a> as well as Boulevard’s <a target="_blank" rel="noreferrer" href={termsOfServiceURL}>Terms Of Service</a>.
            </Typography>
        </Grid>
    )
}
