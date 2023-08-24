import { ReactNode } from 'react'
import { LayoutListItem } from 'components/atoms/layout/LayoutListItem'
import { ServiceStaff } from 'components/molecules/Services/SelectedServices/ServiceStaff'
import { SelectedOptions } from 'components/molecules/Services/SelectedServices/SelectedOptions'
import { CartBookableItem } from '@boulevard/blvd-book-sdk/lib/cart'
import { useServiceStyles } from 'components/molecules/Services/SelectedServices/useStyles'
import { ServicePrice } from 'components/atoms/layout/service/ServicePrice'
import { ServiceCartBookableItemCaption } from 'components/atoms/layout/service/ServiceCartBookableItemCaption'
import {Accordion, AccordionDetails, AccordionSummary, Box} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { StaffsList } from '../ChooseStaff/StaffsList'
import { useMobile } from 'lib/utils/useMobile'
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';
import SvgIcon from '@mui/material/SvgIcon';

interface Props {
    bookableItem: CartBookableItem
    handleChange?: () => void
    selected?: boolean
    children?: ReactNode
    isReadMode?: boolean
    hideBorderBottom?: boolean
    addRightArrow?: boolean
    active?:boolean,
    isClickedAgain?:()=>void
    clicked?:number|undefined
    index?:number,
}

export const WithService = ({
    bookableItem,
    handleChange,
    selected,
    children,
    isReadMode,
    hideBorderBottom,
    addRightArrow,
    active,
    isClickedAgain,
    clicked,
    index
}: Props) => {
    const classes = useServiceStyles()
    const { isMobile } = useMobile()
    const accordionStyle = useWithLayoutStyles({ isMobile })

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
        // isClickedAgain();
        // onSelect();
    }

    return (
        <LayoutListItem
            onClick={handleChange}
            selected={selected}
            useDefaultCursor={isReadMode}
            hideBorderBottom={hideBorderBottom}
            addRightArrow={addRightArrow}
            useBottomShadow={true}
        >
            <Box sx={{width:'100%'}}>          
                <Accordion className={`${accordionStyle.accordion} accordion ${clicked === index && 'active'} ${active ? "active" : ""}`} sx={{
                    '& .MuiAccordionSummary-root': {
                        minHeight:  clicked === index || active ? 'initial!important' : '0px!important',
                        '& .MuiAccordionSummary-content':{position:'relative', paddingLeft:'40px'},
                    }, 
                    '& .MuiCollapse-root': {
                        visibility:  clicked === index || active ? 'visible' : 'hidden',
                        height:  clicked === index || active ? 'auto!important' : '0px!important',
                        overflow:  clicked === index || active ? 'visible!important' : 'hidden!important',
                    }
                }}>                      
                    <AccordionSummary expandIcon={clicked === index || active ?<MinusIcon />:<PlusIcon/>} onClick={allClicked} className={accordionStyle.dropdownTitleWrap}>
                        <Box>
                            <Box className={classes.summaryWrapper}>
                                <ServiceCartBookableItemCaption bookableItem={bookableItem} />
                                <ServicePrice bookableItem={bookableItem.item} />
                            </Box>
                            <Box>
                                <SelectedOptions bookableItem={bookableItem} isReadMode={isReadMode} />
                                <ServiceStaff bookableItem={bookableItem} />
                            </Box>
                            {children}
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{p:0}}>
                        <StaffsList />
                    </AccordionDetails>
                </Accordion>
            </Box>
                {/* <Box>
                    <Box className={classes.summaryWrapper}>
                        <ServiceCartBookableItemCaption bookableItem={bookableItem} useBold={selected === true} />
                        <ServicePrice bookableItem={bookableItem.item} />
                    </Box>
                    <SelectedOptions
                        bookableItem={bookableItem}
                        isReadMode={isReadMode}
                    />
                    <ServiceStaff bookableItem={bookableItem} />
                    {children}
                </Box> */}
        </LayoutListItem>
    )
}
