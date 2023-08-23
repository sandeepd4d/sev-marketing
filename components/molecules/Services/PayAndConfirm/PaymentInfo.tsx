import { Box, Typography, Grid } from '@mui/material'
import CardHoldersName from 'components/molecules/Services/PayAndConfirm/CardHoldersName'
import CreditCardNumber from 'components/molecules/Services/PayAndConfirm/CreditCardNumber'
import ExpirationCVCAndZipcode from 'components/molecules/Services/PayAndConfirm/ExpirationCVCAndZipcode'

interface Props {
    hasServices: boolean
}

export default function PaymentInfo({hasServices}: Props) {
    return (
        <Box>
            <Typography sx={{ fontWeight:600, mt:7 }}>
                Payment info
            </Typography>
            {/* {hasServices && <Typography sx={{ pb: 1 }}>
                Your card will not be charged until your appointment is completed.
            </Typography>} */}
            <Grid item xs={12}>
                <CardHoldersName />
            </Grid>
            <Grid item xs={12}>
                <CreditCardNumber />
            </Grid>
            <ExpirationCVCAndZipcode />
        </Box>
    )
}
