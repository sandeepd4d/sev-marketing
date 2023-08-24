import { useCartStoreState } from 'lib/state/store'
import { Step } from 'lib/state/booking-flow/types'
import formatDateFns, { cartTimeToDate } from 'lib/utils/formatDateFns'
import { CalendarDark } from 'components/icons/CalendarDark'
import { useCartState } from 'lib/state/cart'
import { PopperItemBase } from 'components/molecules/Header/PopperItemBase'

interface Props {
    handleClose?: () => void
    textType?:string
}

export const PopperDateTime = ({handleClose, textType}: Props) => {
    const selectedStore = useCartStoreState()
    const cart = useCartState()

    return (
        <PopperItemBase 
            handleClose={handleClose}
            textType={textType}
            step={Step.ChooseDate}
            text={cart?.startTime ? formatDateFns(
                                    cartTimeToDate(cart?.startTime),
                                    selectedStore?.location.tz,
                                    "EEEE, MMM d yyyy"
                                ) : 'Pending'}
            icon={<CalendarDark/>}
            editable={!!cart?.startTime}
        />
    )
}
