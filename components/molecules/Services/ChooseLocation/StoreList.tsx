import React,{useContext} from 'react'
import { LayoutContext } from 'components/atoms/layout/LayoutContext'
import { Store } from 'lib/state/store/types'
import { SelectStore } from 'components/molecules/Services/ChooseLocation/SelectStore'
import BounceLoader from 'react-spinners/BounceLoader'
import { useMobile } from 'lib/utils/useMobile'
import { useIsLocationAccessAnsweredByUser } from 'lib/state/currentPosition'
import { useCartMethods, useCartState } from 'lib/state/cart'
import { useFlowStep } from 'lib/state/booking-flow';
import { useStoreListStyles } from 'components/molecules/Services/ChooseLocation/useStyles'
import { Box, Button } from '@mui/material';
import { FlowType, useAppConfig } from 'lib/state/config';
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';
import { useCartStoreState } from 'lib/state/store'
import {useSelectedServices, useLastSelectedBookableItem, useResetLastSelectedBookableItem} from 'lib/state/services';
import { Step } from 'lib/state/booking-flow/types';
// import { getLocationName } from 'lib/utils/locationUtils';

interface Props {
    stores: Store[],
    // store?:Store|undefined
}

export const StoreList = ({ stores }: Props) => {
    const { isMobile } = useMobile();
    const accordionStyle = useWithLayoutStyles({ isMobile });
    const isLocationAccessAnsweredByUser = useIsLocationAccessAnsweredByUser()
    const { createCart, setCartLocation, loadSelectedServices } = useCartMethods()
    const classes = useStoreListStyles({ isMobile, isLocationAccessAnsweredByUser })
    const [clicked, setClicked] = React.useState<number|undefined>(0);
    const [store, setStore] = React.useState<Store>();
    const { setStep } = useFlowStep()
    const { getFlowType } = useAppConfig();
    const flowType = getFlowType();
    const cart = useCartState()
    const cartStore = useCartStoreState();
    const resetLastSelectedBookableItem = useResetLastSelectedBookableItem();
    const layout = useContext(LayoutContext);
    const { selectedServicesStateValue, loadSelectedServicesFromCart } = useSelectedServices()
    const lastSelectedBookableItem = useLastSelectedBookableItem()

    const handleToggle = (index: number | React.SetStateAction<number>) => {
        if (clicked === index) {
         return setClicked(undefined);
        }
        setClicked(index);
    };
      
    const continueSelectLocationFirst = async () => {
        const location = store?.location
        const cart = await createCart(location, store)
        await loadSelectedServicesFromCart(cart, [])
        await setStep(Step.SelectService)
    }

    const continueSelectServiceFirst = async () => {
        if (!cart || !store) {
            return
        }
        const selectedServices = await setCartLocation(
            cart,
            store,
            cartStore,
            lastSelectedBookableItem,
            selectedServicesStateValue
        )
        await loadSelectedServices(cart, selectedServices)
        resetLastSelectedBookableItem()
        await setStep(Step.SelectService)
    }

    const onContinue = async () => {
        layout.setIsShowLoader(true)
        if (store?.location === undefined) {
           return
        }

        try {
            if (flowType === FlowType.SelectLocationFirst) {
                await continueSelectLocationFirst()
            } else {
                await continueSelectServiceFirst()
            }
        } catch {
            layout.setIsShowLoader(false)
        }
    }


    // const selectLocationFirst = () => {
    //     store?.location === undefined ? setLocation('Kindly select the location first.') : setLocation('');
    // }

    return (
        <Box className={classes.selectStoresBlock}>
            <Box>
                {isLocationAccessAnsweredByUser &&
                    stores.map((store, index) => (
                        <SelectStore index={index} clicked={clicked} key={store.location.id} store={store} isclicked={() => handleToggle(index)} active={clicked === index} setStore={setStore} />
                    ))
                }
            </Box>
            {
           isLocationAccessAnsweredByUser &&
                <Box className={accordionStyle.continueBtnWrap}>
                    {/* <Typography>{location}</Typography> */}
                    <Button
                        className={accordionStyle.continueBtn}
                        variant="contained"
                        disabled={store?.location === undefined}
                        onClick={onContinue}
                        >
                        Continue
                    </Button>
                </Box>
            }
            {!isLocationAccessAnsweredByUser && (
                <Box
                    sx={{
                        position: 'absolute',
                        left: 'calc(50% - 30px)',
                        top: 'calc(50% - 30px)',
                    }}
                >
                    <BounceLoader color="#dadada" size={60} />
                </Box>
            )}
        </Box>
    )
}
