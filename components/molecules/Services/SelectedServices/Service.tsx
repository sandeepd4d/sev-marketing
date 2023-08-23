import { CartBookableItem } from '@boulevard/blvd-book-sdk/lib/cart'
import { theme } from 'styles/theme'
import { Button, IconButton } from '@mui/material'
import { Step } from 'lib/state/booking-flow/types'
import { useFlowStep } from 'lib/state/booking-flow'
import {
    useActiveSelectedService,
    useServiceActions,
    useSetActiveSelectedService,
} from 'lib/state/services'
import { useServiceStyles } from 'components/molecules/Services/SelectedServices/useStyles'
import { WithService } from 'components/molecules/Services/SelectedServices/WithService'
import DeleteIcon from '@mui/icons-material/Delete';

// import { StaffsList } from '../ChooseStaff/StaffsList'

interface Props {
    bookableItem: CartBookableItem
    handleServiceChange?: (bookableItem: CartBookableItem) => void
    active?:boolean
    isClicked?:()=>void
    clicked?:number|undefined
    index?:number,
}

export const Service = ({ bookableItem, handleServiceChange, clicked, active, index, isClicked}: Props) => {
    const activeSelectedService = useActiveSelectedService()
    const setActiveSelectedService = useSetActiveSelectedService()
    const classes = useServiceStyles()
    const { currentFlowStep } = useFlowStep()
    const { onRemoveClick, onEditAddonClick } = useServiceActions(bookableItem)

    const hasAddons =
        bookableItem.item.optionGroups?.flatMap((x) => x.options).length > 0

    const onRemoveInternal = async () => {
        const removeClickResult = await onRemoveClick()
        if (handleServiceChange && removeClickResult && removeClickResult.activeItem) {
            await handleServiceChange(removeClickResult.activeItem)
        }
    }
    const handleChange = async () => {
        if (activeSelectedService?.id === bookableItem.id) {
            return
        }
        setActiveSelectedService(bookableItem)
        if (handleServiceChange) {
            await handleServiceChange(bookableItem)
        }
    }

    const selected = activeSelectedService?.id === bookableItem.id
    // console.log(activeSelectedService, 'activeSelectedService')
    return (
        <>
            <WithService
                bookableItem={bookableItem}
                selected={selected}
                handleChange={handleChange}
                isReadMode={true}
                // addRightArrow={true}
                clicked={clicked}
                active={active}
                index={index}
                isClickedAgain={isClicked}
            >
                {/* {
                    hasAddons && currentFlowStep.step !== Step.SelectOptions && (
                        <Button variant="contained" className={classes.editAddOn} onClick={onEditAddonClick}>Edit add-ons</Button>
                    )
                } */}
                {/* <IconButton aria-label="delete" className={classes.removeBtn} onClick={onRemoveInternal} style={{color:theme.palette.custom.colorTwo}}>
                  <DeleteIcon />
                </IconButton> */}
            </WithService>
        </>
    )
}
