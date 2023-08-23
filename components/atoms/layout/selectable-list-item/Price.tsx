import { Box } from '@mui/material'
import { useMobile } from 'lib/utils/useMobile'
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';

interface Props {
    priceStr: string
    classesCardItemPrice?: any
}

export const Price = ({ priceStr, classesCardItemPrice }: Props) => {
    const { isMobile } = useMobile()
    const accordionStyle = useWithLayoutStyles({ isMobile })
    return (
        <Box component="span" className={accordionStyle.priceItemCard}>
            {priceStr}
        </Box>
    )
}
