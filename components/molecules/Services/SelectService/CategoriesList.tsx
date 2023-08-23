import React, {useState, useContext} from 'react'
import { Box,Button } from '@mui/material'
import { CartAvailableBookableItem, CartAvailableCategory, CartAvailableItem } from '@boulevard/blvd-book-sdk/lib/cart'
import { useCategoriesListStyles } from 'components/molecules/Services/SelectService/useStyles'
import { Category } from 'components/molecules/Services/SelectService/Category'
import { useCartMethods, useCartState } from 'lib/state/cart'
import { LayoutContext } from 'components/atoms/layout/LayoutContext'
import { Step } from 'lib/state/booking-flow/types'
import { useFlowStep } from 'lib/state/booking-flow'
import { useCartStoreState } from 'lib/state/store'
import { FlowType, useAppConfig } from 'lib/state/config'
import { useMobile } from 'lib/utils/useMobile'
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';
import { useStaffTimes } from 'lib/state/staffTime'

interface Props {
    availableCategories: CartAvailableCategory[]
}
export const CategoriesList = ({ availableCategories }: Props) => {
    const classes = useCategoriesListStyles();
    const { isMobile } = useMobile();
    const accordionStyle = useWithLayoutStyles({ isMobile });
    const [clicked, setClicked] = useState<number|undefined>(0);
    const [bookableItem, setBookableItem] = useState<CartAvailableBookableItem | CartAvailableItem | undefined>();
    const { addService, loadSelectedServices } = useCartMethods()
    const cart = useCartState();
    const store = useCartStoreState()
    const cartStore = useCartStoreState()
    const { setStep } = useFlowStep()
    const { getFlowType } = useAppConfig()
    const flowType = getFlowType()
    const { loadDatesAndTimes } = useStaffTimes()

    // const hasOptions = bookableItem?.optionGroups?.length > 0
    const layout = useContext(LayoutContext)
    
    const handleToggle = (index: number | React.SetStateAction<number>) => {
        if (clicked === index) {
         return setClicked(undefined);
        }
        setClicked(index);
    };

    const selectClickLocationBase = async () => {
        if (cart === undefined || cartStore?.location === undefined) {
            return false
        }
        layout.setIsShowLoader(true)
        if(bookableItem !== undefined) {
            const cartServices = await addService(cart, bookableItem)
            await loadSelectedServices(cart, cartServices.services)
        }
        // if (hasOptions) {
        //     await setStep(Step.SelectOptions)
        // } else {
            await loadDatesAndTimes(cart!, store?.location!, new Date())
            await setStep(Step.ChooseDate)
        // }
        return true
    }

    const onSelectClickLocationFirst = async () => {
        await selectClickLocationBase()
    }

    const onSelectClickServiceFirst = async () => {
        await setStep(Step.ChooseLocation)
    }

    const onSelectClick = async () => {
        if (flowType === FlowType.SelectLocationFirst) {
            await onSelectClickLocationFirst()
        } else {
            await onSelectClickServiceFirst()
        }
    }
    return (
        <Box className={classes.root}>
            <Box>                
            {
                availableCategories?.map((availableCategory, index) => (
                    <Category
                        key={availableCategory.id}
                        index={index}
                        clicked={clicked}
                        category={availableCategory}
                        isclicked={() => handleToggle(index)}
                        active={clicked === index}
                        setBookableItem={setBookableItem}
                    />
                ))
            }
            </Box>
            <Box className={accordionStyle.continueBtnWrap}>
                <Button
                    variant="contained"
                    disabled={bookableItem === undefined}
                    className={accordionStyle.continueBtn}
                    onClick={onSelectClick}
                    >
                    Continue
                </Button>
            </Box>
        </Box>
    )
}
