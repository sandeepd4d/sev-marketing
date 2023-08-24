import React from 'react'
import { Box, Typography } from '@mui/material'
import FirstLastName from 'components/molecules/Services/PersonalInfo/FirstLastName'

export default function BasicInfo() {
    return (
        <Box>
            <Typography sx={{ fontWeight:600, mt:7 }}>Contact Info</Typography>
            <FirstLastName />
        </Box>
    )
}
