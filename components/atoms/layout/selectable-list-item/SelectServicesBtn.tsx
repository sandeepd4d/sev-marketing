import {useState } from 'react'
import { Box, Button } from '@mui/material'
import { useMobile } from 'lib/utils/useMobile'
import { useStyles } from 'components/atoms/layout/selectable-list-item/useStyles'
import { CartAvailableBookableItem } from '@boulevard/blvd-book-sdk/lib/cart'

interface Props {
    setBookableItem:any
    onSelectClick?: () => void
    btnTop?: string
    sxWrapper?: any
    sxButton?: any
    bookableItem: CartAvailableBookableItem
    selectServiceBtn:any
    selected:string
}

export const SelectServicesBtn = ({setBookableItem, sxWrapper, sxButton, onSelectClick, bookableItem, selectServiceBtn, selected}: Props) => {
    const { isMobile } = useMobile()
    const classes = useStyles({ isMobile })


    return (
        <Box className={classes.selectBtnWrapper} sx={sxWrapper}>
            <Button variant="contained" sx={{...(sxButton ?? {}),}} className={`${classes.selectBtn}`} onClick={()=>{selectServiceBtn(bookableItem?.name); setBookableItem()}}>{selected}</Button>
            {/* <Button variant="contained" sx={{...(sxButton ?? {}),}} className={`${classes.selectBtn}`} onClick={onSelectClick}>{btnName}</Button> */}
        </Box>
    )
}