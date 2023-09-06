import { Box, Button } from '@mui/material'
import { CartAvailableBookableItem } from '@boulevard/blvd-book-sdk/lib/cart'
import { useServiceStyles } from 'components/molecules/Services/SelectService/useStyles'
import { useCartMethods, useCartState } from 'lib/state/cart'
import { Step } from 'lib/state/booking-flow/types'
import { useFlowStep } from 'lib/state/booking-flow'
import { useCartStoreState } from 'lib/state/store'
import { useSetLastSelectedBookableItem } from 'lib/state/services'
import { useContext, useEffect, useState } from 'react'
import { LayoutContext } from 'components/atoms/layout/LayoutContext'
import { FlowType, useAppConfig } from 'lib/state/config'
import { ServiceAvailableBookableItem } from 'components/atoms/layout/service/ServiceAvailableBookableItem'
import { ServicePrice } from 'components/atoms/layout/service/ServicePrice'
import { SelectableListItem } from 'components/atoms/layout/selectable-list-item/SelectableListItem'
import { useMobile } from 'lib/utils/useMobile'
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';
import { useSelectedServices } from 'lib/state/services';

interface Props {
    bookableItem: CartAvailableBookableItem,
    setBookableItem?:any
    length?:number|undefined
    index?:number
    selectServiceBtn:any
    selected:string
    // selected:string
}

export const Service = ({ bookableItem, setBookableItem, length, index, selectServiceBtn, selected }: Props) => {
    const classes = useServiceStyles()
    const { isMobile } = useMobile()
    const accordionStyle = useWithLayoutStyles({ isMobile })
    const [selectedItem, setSelectedItem] = useState<CartAvailableBookableItem>();
    const cart = useCartState()
    const { addService, loadSelectedServices, loadStoresForCartBookableItems, isCartAvailableBookableItem } = useCartMethods()
    const { setStep } = useFlowStep()
    const cartStore = useCartStoreState()
    const layout = useContext(LayoutContext)
    const { getFlowType } = useAppConfig()
    const flowType = getFlowType()
    const setLastSelectedBookableItem = useSetLastSelectedBookableItem()
    const hasOptions = bookableItem.optionGroups?.length > 0

    
    // const [select, setSelect] = useState('select');
    
    const selectClickLocationBase = async () => {
        if (cart === undefined || cartStore?.location === undefined) {
            return false
        }
        // layout.setIsShowLoader(true)
        // const cartServices = await addService(cart, bookableItem)
        // await loadSelectedServices(cart, cartServices.services)
        // if (hasOptions) {
        //     await setStep(Step.SelectOptions)
        // } else {
        //     await setStep(Step.SelectedServices)
        // }
        return true
    }

    const onSelectClickLocationFirst = async () => {
        await selectClickLocationBase()
    }

    const onSelectClickServiceFirst = async () => {
        const success = await selectClickLocationBase()
        if (success) {
            return
        }
        setLastSelectedBookableItem(bookableItem)
        // await loadStoresForCartBookableItems([], bookableItem)
        // await setStep(Step.ChooseLocation)
    }

    const onSelectClick = async () => {
        if (flowType === FlowType.SelectLocationFirst) {
            await onSelectClickLocationFirst()
        } else {
            await onSelectClickServiceFirst()
        }
    }

    // const btnName = hasOptions ? 'Select options' : isCartAvailableBookableItem(bookableItem) ? 'Select' : 'Select'
    const { selectedServicesStateValue, reverseSelectedServices } = useSelectedServices();    
    const reversedList = reverseSelectedServices(selectedServicesStateValue)
    // console.log(bookableItem, 'bookableItem');
    
    // let selectedOrNot = reversedList.length > 0 && reversedList?.find(item => item?.item?.name == bookableItem?.name ? item?.item?.name:'')
    // console.log(selectedOrNot, 'selected');

    const setBookableItemToCart = () => {
        setBookableItem(bookableItem)
        setSelectedItem(bookableItem)
    }

    return ( 
        <Box className={`${length !== undefined && index === length-1 ? 'last-child' : ''} ${accordionStyle.dropdownListItems}`}>
            <SelectableListItem
                captionComponent={<ServiceAvailableBookableItem bookableItem={bookableItem} />}
                priceComponent={
                    <ServicePrice
                    bookableItem={bookableItem}
                    classesCardItemPrice={classes.cardItemPrice}
                    />
                }
                selected={selected}
                bookableItem={bookableItem}
                selectServiceBtn={selectServiceBtn}
                setBookableItem={setBookableItemToCart}
                // btnName= {bookableItem?.name === selected?'Selected':'Select'}                
                // btnName= {index !== undefined && reversedList.length > 0 && reversedList[index] && reversedList[index].item?.name === bookableItem?.name ? 'Selected':'Select'}
                // btnName= {select == bookableItem?.name ? 'selected':'select'}
                description={bookableItem.description}
            />
        </Box>
    )
}
