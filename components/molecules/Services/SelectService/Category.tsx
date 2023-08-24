import * as React from 'react';
import { CartAvailableBookableItem, CartAvailableCategory } from '@boulevard/blvd-book-sdk/lib/cart'
import { LayoutListItem } from 'components/atoms/layout/LayoutListItem'
import { useCategoryStyles } from 'components/molecules/Services/SelectService/useStyles'
import {
    useSelectedCartAvailableCategory,
    useSetSelectedCartAvailableCategory,
} from 'lib/state/services'
import clsx from 'clsx'
import { useMobile } from 'lib/utils/useMobile'
import { useContext } from 'react'
import { LayoutContext } from 'components/atoms/layout/LayoutContext'
import { Typography, Box, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import { ServicesList } from './ServicesList'
import { useSelectedServices } from 'lib/state/services'
import { Service } from './Service'
import SvgIcon from '@mui/material/SvgIcon';
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';

interface Props {
    category: CartAvailableCategory,
    isclicked: ()=>void
    active:boolean,
    setBookableItem:any,
    index:number,
    clicked:number|undefined
}
export const Category = ({ category, isclicked, active, setBookableItem, index, clicked }: Props) => {
    const classes = useCategoryStyles()
    const { isMobile } = useMobile()
    const accordionStyle = useWithLayoutStyles({ isMobile })
    const { selectedServicesStateValue, reverseSelectedServices, selectedCartAvailableItemsStateValue } = useSelectedServices();
    const layout = useContext(LayoutContext)

    const setSelectedCartAvailableCategory = useSetSelectedCartAvailableCategory()
    const selectedCartAvailableCategory = useSelectedCartAvailableCategory()
    const selected = selectedCartAvailableCategory?.id === category.id && !isMobile
    const [length, setLength] = React.useState(selectedCartAvailableCategory?.availableItems?.length);
    const onSelect = () => {
        setSelectedCartAvailableCategory(category)
        // if (isMobile) {
        //     layout.setHideLeftPanel(true)
        //     layout.setHideRightPanel(false)
        // }
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
    const allClicked = () => {
        isclicked();
        onSelect();
    }
    // const reversedList = reverseSelectedServices(selectedServicesStateValue)

    return (
        <LayoutListItem useBottomShadow={true}>
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
                <AccordionSummary expandIcon={clicked === index || active ? <MinusIcon />:<PlusIcon/>} onClick={allClicked} className={accordionStyle.dropdownTitleWrap}>
                    <Typography className={accordionStyle.dropdownTitle}>{category.name}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{p:0}}>
                    <Box>
                        {selectedCartAvailableCategory?.availableItems?.map((cartAvailableCategory, index) => (
                            <Box key={cartAvailableCategory.id}>
                            {
                                // reversedList.length > 0 && reversedList[index] && reversedList[index].item?.name === cartAvailableCategory?.name ? 
                                    <Service length={length} index={index} setBookableItem={setBookableItem} bookableItem={cartAvailableCategory as CartAvailableBookableItem} />
                                    // :
                                    // <Service length={length} index={index} setBookableItem={setBookableItem} bookableItem={cartAvailableCategory as CartAvailableBookableItem} />
                                }
                            </Box>
                            )
                        )}
                    </Box>  
                </AccordionDetails>
            </Accordion>
            {/* <Box className={clsx(classes.cardItemName, (selected || isMobile) && classes.cardItemNameSelected)}>{category.name}</Box> */}
        </LayoutListItem>
    )
}
