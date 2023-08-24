import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { StaffTime } from 'lib/state/staffTime/types'
import formatDateFns, { TimeFormat } from 'lib/utils/formatDateFns'
import { Store } from 'lib/state/store/types'
import { useSetSelectedStaffTimeState } from 'lib/state/staffTime'
import { LayoutContext } from 'components/atoms/layout/LayoutContext'

const useStyles = makeStyles(() => ({
    selectTimeBtn: {
        width: '18%',
        height: 38,
        fontWeight: 500,
        textTransform: 'lowercase',
        fontSize: '14px',
        color:'#000000',
        borderRadius:'4px',
        border: '1px solid #000000',
        backgroundColor:'transparent',
        '&:hover':{
            backgroundColor:'#98877C'
        }
    },
}))

interface Props {
    time: StaffTime
    store: Store | undefined
}

export const Time = ({ time, store }: Props) => {
    const classes = useStyles()
    const setSelectedStaffTimeState = useSetSelectedStaffTimeState()
    const layout = useContext(LayoutContext)

    const onSelectTime = async () => {
        setSelectedStaffTimeState(time)
        layout.setShowBottom(true)
    }

    return (
        <Button
            key={'time' + time.cartBookableTime?.id}
            variant="contained"
            className={classes.selectTimeBtn}
            // sx={{
            //     mr: 1,
            //     mb: 1,
            // }}
            onClick={onSelectTime}
        >
            {formatDateFns(time.locationTime, store?.location.tz, TimeFormat)}
        </Button>
    )
}
