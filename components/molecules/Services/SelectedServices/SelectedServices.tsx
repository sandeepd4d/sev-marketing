import {useState} from 'react';
import { useSelectedServices } from 'lib/state/services';
import { Service } from 'components/molecules/Services/SelectedServices/Service';
import { Box, Typography } from '@mui/material';
import { CartBookableItem } from '@boulevard/blvd-book-sdk/lib/cart';
import { useServicesListStyles } from 'components/molecules/Services/SelectService/useStyles';
import { Step } from 'lib/state/booking-flow/types';
import { useMobile } from 'lib/utils/useMobile'
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';
import { LeftSummary } from 'components/atoms/layout/summary/LeftSummary'

interface Props {
    handleServiceChange?: (bookableItem: CartBookableItem) => void
    isShowLoader?: boolean
    leftPanel?: React.ReactNode
    rightPanel?: React.ReactNode
    showBottom?: boolean
    isBlurScreen?: boolean
    rightPanelCaption?: string
    rightPanelBtnCaption?: string
    onRightPanelBtnClick?: () => void
    showLeftBottom?: boolean
    leftPanelBtnCaption?: string
    onLeftPanelBtnClick?: () => void
    isHideLeftPanel?: boolean
    isHideRightPanel?: boolean
    workshopPanel?: React.ReactNode
    addBackArrow?: boolean
    backArrowStep?: Step
}

export const SelectedServices = ({handleServiceChange}: Props) => {
    const { isMobile } = useMobile();
    const bannerStyle = useWithLayoutStyles({ isMobile })
    const [clicked, setClicked] = useState<number|undefined>(0);
    const classes = useServicesListStyles()
    const { selectedServicesStateValue, reverseSelectedServices } = useSelectedServices()
    const reversedList = reverseSelectedServices(selectedServicesStateValue)
    const importImg = '/images/sevlogo.png'
    
    const handleToggle = (index: number | React.SetStateAction<number>) => {
        if (clicked === index) {
         return setClicked(undefined);
        }
        setClicked(index);
    };

    return (
        <Box className={classes.root} sx={{ height: 'calc(100% - 87px)' }}>
             <Box className={`${bannerStyle.banner} location_banner`}>
                <Typography className={`${bannerStyle.slogan} ${bannerStyle.bannerContent}`}>Stay ready so you dont have to get ready</Typography>
                <Box sx={{padding: '25px'}}>
                    <img src={importImg} alt="This is an image" width={45} height={60} className={bannerStyle.bannerImg} />
                    <Typography variant="h2" className={bannerStyle.bannerHeading}>LOREM IPSUM</Typography>
                </Box>
            </Box>
            <LeftSummary />
            {
                reversedList?.map((cartItem, index) => (
                    <Service
                        key={cartItem.id}
                        bookableItem={cartItem}
                        handleServiceChange={handleServiceChange}
                        index={index}
                        clicked={clicked}
                        active={clicked === index}
                        isClicked={() => handleToggle(index)}
                    />
                ))
            }
        </Box>
    )
}