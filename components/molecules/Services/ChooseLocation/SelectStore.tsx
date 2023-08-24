import * as React from 'react';
import { Typography, Box, Button } from '@mui/material'
import { Store } from 'lib/state/store/types'
import { Step } from 'lib/state/booking-flow/types'
import {getAddress, getLocationName, limitedMapBoxFlyToInterpolator} from 'lib/utils/locationUtils'
import {useCartMethods, useCartState } from 'lib/state/cart'
import {useFlowStep } from 'lib/state/booking-flow'
import {useLocationSelectedStoreState, useMapView, useSetMapViewportState, useSetUpdateStoresViewportState} from 'lib/state/location'
import { useMobile } from 'lib/utils/useMobile'
import { LocationDistance } from 'components/molecules/Services/ChooseLocation/LocationDistance'
import { LayoutListItem } from 'components/atoms/layout/LayoutListItem'
import { FlowType, useAppConfig } from 'lib/state/config'
import { useCartStoreState } from 'lib/state/store'
import { useIsShowMap } from 'lib/state/location'
import {useLastSelectedBookableItem, useResetLastSelectedBookableItem, useSelectedServices} from 'lib/state/services'
import { useContext } from 'react'
import { LayoutContext } from 'components/atoms/layout/LayoutContext';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import CheckIcon from '@mui/icons-material/Check';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';
import SvgIcon from '@mui/material/SvgIcon';
import { theme } from 'styles/theme';

interface Props {
    store: Store | undefined
    isclicked: ()=>void
    active:boolean,
    setStore:any,
    index:number,
    clicked:number|undefined
}

export const SelectStore = ({ store, isclicked, active, setStore, index, clicked}: Props) => {
    const { isMobile } = useMobile()
    const accordionStyle = useWithLayoutStyles({ isMobile })
    const [isShowMap] = useIsShowMap()
    const setMapViewportState = useSetMapViewportState()
    const { getMapViewportState } = useMapView()
    const setUpdateStoresState = useSetUpdateStoresViewportState()
    const [locationSelectedStore, setLocationSelectedStore] = useLocationSelectedStoreState()
    const storeSelected = locationSelectedStore?.location?.id === store?.location?.id
    
    const onSelect = async (store:Store|undefined) => {
        // if (!isMobile || isShowMap) {
            const viewport = getMapViewportState()
            let zoom = 8
            if (viewport) {
                zoom =
                    isNaN(viewport?.zoom) || viewport.zoom < zoom
                        ? zoom
                        : viewport.zoom
            }
            const currentViewport = {
                ...viewport,
                longitude: store?.lng!,
                latitude: store?.lat!,
                transitionDuration: 'auto',
                transitionInterpolator: limitedMapBoxFlyToInterpolator,
                zoom: zoom,
            }
            setLocationSelectedStore(store)
            setMapViewportState(currentViewport)
            setUpdateStoresState(currentViewport)

            if (isMobile) {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                })
            }
        // }
        setStore(store);
    }

    const PlusIcon =() => {
        return (
            <SvgIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" fill="white"/>
                    <path d="M12 6V18" stroke="#000000" strokeLinecap="square" strokeLinejoin="inherit" strokeWidth={1.5} />
                    <path d="M6 12H18" stroke="#000000" strokeLinecap="square" strokeLinejoin="inherit" strokeWidth={1.5} />
                </svg>
            </SvgIcon>
        )
    }
    const MinusIcon =() => {
        return (
            <SvgIcon>
                   <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" fill="white"/>
                    <path d="M6 12H18" stroke="#000000" strokeLinecap="square" strokeLinejoin="inherit" strokeWidth={1.5} />
                </svg>
            </SvgIcon>
        )
    }

    return (
        <LayoutListItem
            sx={{padding:'0px !important'}}
            id={store?.location.id}
            selected={!isMobile || isShowMap ? storeSelected : undefined}
            useDefaultCursor={isMobile && !isShowMap}           
        >
            <Accordion className={`${accordionStyle.accordion} accordion ${clicked === index && 'active'} ${active ? "active" : ""}`} sx={{
                '& .MuiAccordionSummary-root': {
                    minHeight:  clicked === index || active ? 'initial!important' : '0px!important',
                },
                '& .MuiCollapse-root': {
                    visibility:  clicked === index || active ? 'visible' : 'hidden',
                    height:  clicked === index || active ? 'auto!important' : '0px!important',
                    overflow:  clicked === index || active ? 'visible!important' : 'hidden!important',
                }
            }}>                    
                <AccordionSummary  expandIcon={clicked === index || active ?<MinusIcon />:<PlusIcon/>} onClick={isclicked} className={accordionStyle.dropdownTitleWrap}>
                    <Typography className={accordionStyle.dropdownTitle}>{getLocationName(store)}</Typography>
                </AccordionSummary>
                <AccordionDetails className={`${accordionStyle.dropdownDetails}`}>
                    <Box onClick={()=>onSelect(store)}>
                        <Grid container className={accordionStyle.dropdownLocationContent}>
                            <Grid item xs={1}>
                                <LocationOnIcon sx={{color:theme.palette.custom.colorTwo}} />
                            </Grid>
                            <Grid item xs={9}>
                                <Typography className={accordionStyle.dropdownContent}>{getLocationName(store)}<LocationDistance store={store} /></Typography>
                                <Typography sx={{color:"#000000"}}>{getAddress(store)}</Typography>
                            </Grid>
                            <Grid item xs={2} sx={{textAlign:'right'}} className="abc">
                            {
                                store?.location?.id === locationSelectedStore?.location?.id ? 
                                <CheckIcon sx={{color:store?.location?.id === locationSelectedStore?.location?.id ?theme.palette.custom.colorTwo:'#ff0000'}} /> 
                                : ''
                            }
                            </Grid>
                        </Grid>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </LayoutListItem>
    )
}
