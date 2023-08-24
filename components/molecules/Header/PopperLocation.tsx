import { LocationPin } from 'components/icons/LocationPin'
import { useCartStoreState } from 'lib/state/store'
import { getLocationName } from 'lib/utils/locationUtils'
import { Step } from 'lib/state/booking-flow/types'
import { PopperItemBase } from 'components/molecules/Header/PopperItemBase'

interface Props {
    handleClose?: () => void,
    textType?:string
}

export const PopperLocation = ({handleClose, textType}: Props) => {
    const selectedStore = useCartStoreState()

    return (
        <PopperItemBase 
        textType={textType}
        handleClose={handleClose}
                        step={Step.ChooseLocation}
                        text={selectedStore ? getLocationName(selectedStore) : 'Pending'}
                        icon={<LocationPin/>}
                        editable={!!selectedStore}
        />
    )
}
