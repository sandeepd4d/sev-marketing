import { Button } from '@mui/material'
import { Checked } from 'components/icons/Checked'
import { theme } from 'styles/theme'
import formatDateFns from 'lib/utils/formatDateFns'
import { useSelectedStaffTimeState } from 'lib/state/staffTime'
import { Store } from 'lib/state/store/types'

interface Props {
    store: Store | undefined
}

export const SelectedTime = ({ store }: Props) => {
    const selectedStaffTime = useSelectedStaffTimeState()

    return (
        <Button
            variant="text"
            sx={{
                width: 'auto',
                border:`1px solid ${theme.palette.custom.colorFive}`,
                fontSize:'14px',
                backgroundColor:theme.palette.custom.colorFive,
                color:'#ffffff',
                padding: theme.spacing(0, 2),
                '&:hover':{
                    backgroundColor:theme.palette.custom.colorFive
                }
            }}
        >
            {formatDateFns(
                selectedStaffTime?.locationTime,
                store?.location.tz,
                'h:mm aaa'
            )}
        </Button>
    )
}
