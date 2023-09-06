import React from 'react'
import clsx from 'clsx'
import { Box } from '@mui/material'
import { useMobile } from 'lib/utils/useMobile'
import { LayoutListItem } from 'components/atoms/layout/LayoutListItem'
import { useStyles } from 'components/atoms/layout/selectable-list-item/useStyles'
import { SelectableListBtn } from 'components/atoms/layout/selectable-list-item/SelectableListBtn'
import { SelectServicesBtn } from 'components/atoms/layout/selectable-list-item/SelectServicesBtn'
import { CartAvailableBookableItem } from '@boulevard/blvd-book-sdk/lib/cart'

interface Props {
    captionComponent: React.ReactNode
    priceComponent: React.ReactNode
    description?: string
    setBookableItem?:any
    bookableItem: CartAvailableBookableItem
    buttonComponent?: React.ReactNode
    selectServiceBtn:any
    selected:string
}

export const SelectableListItem = ({captionComponent, priceComponent, description,  setBookableItem, buttonComponent, bookableItem, selectServiceBtn, selected}: Props) => {
    const { isMobile } = useMobile()
    const classes = useStyles({ isMobile })
  
    return (
        <LayoutListItem useDefaultCursor={true}>
            <Box className={clsx(classes.row)}>
                <Box sx={{marginRight: '20px'}}>
                    {captionComponent}                    
                    <Box className={classes.cardItemDescBlock}>{description?description:'lorem ispum'}</Box>
                    {priceComponent}
                </Box>

                {buttonComponent}

                {!buttonComponent && (
                    <SelectServicesBtn selected={selected} bookableItem={bookableItem} setBookableItem={setBookableItem} selectServiceBtn={selectServiceBtn} />
                )}

            </Box>
        </LayoutListItem>
    )
}
