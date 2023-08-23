import { Box, Button } from '@mui/material'
import { useMobile } from 'lib/utils/useMobile'
import { useStyles } from 'components/atoms/layout/selectable-list-item/useStyles'

interface Props {
    btnName: string|undefined
    setBookableItem:any
    onSelectClick?: () => void
    btnTop?: string
    sxWrapper?: any
    sxButton?: any
}

export const SelectServicesBtn = ({btnName, setBookableItem, sxWrapper, sxButton, onSelectClick}: Props) => {
    const { isMobile } = useMobile()
    const classes = useStyles({ isMobile })
    
    return (
        <Box className={classes.selectBtnWrapper} sx={sxWrapper}>
            <Button variant="contained" sx={{...(sxButton ?? {}),}} className={`${classes.selectBtn}`} onClick={setBookableItem}>{btnName}</Button>
            {/* <Button variant="contained" sx={{...(sxButton ?? {}),}} className={`${classes.selectBtn}`} onClick={onSelectClick}>{btnName}</Button> */}
        </Box>
    )
}