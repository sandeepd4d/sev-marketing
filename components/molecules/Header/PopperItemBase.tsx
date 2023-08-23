import React from 'react'
import { useStyles } from 'components/molecules/Header/useStyles'
import { useFlowStep } from 'lib/state/booking-flow'
import { Step } from 'lib/state/booking-flow/types'
import { Box, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
interface Props {
    handleClose?: () => void
    step: Step
    icon?: React.ReactNode
    text: string
    editable: boolean
    textType?: string
}

export const PopperItemBase = ({handleClose, step, icon, text, editable, textType}: Props) => {
    const classes = useStyles()
    const { setStep } = useFlowStep()

    const onEdit = async () => {
        // handleClose()
        await setStep(step)
    }
    return (
        <Box sx={{display:'flex', flexWrap:'wrap', alignItems:'center', borderBottom:'1px solid #9E9E9E', marginBottom:'15px'}}>
            <Typography sx={{width:'30%', pr: 2, fontSize:'16px' }} variant="body2" component="span">{textType}</Typography>
            {
                editable && 
                    <Typography component="span" onClick={onEdit} sx={{width:'70%',fontSize:'16px', textAlign:'right', color:'#52433D', textDecoration:'underline'}}>{text}
                        <EditIcon sx={{ fontSize: 24 }} />
                    </Typography>
            }
        </Box>
    )
}
