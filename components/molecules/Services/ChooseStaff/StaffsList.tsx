import { Staff } from 'components/molecules/Services/ChooseStaff/Staff'
import { useBookableStaffVariants } from 'lib/state/staff'
import { Box, Typography } from '@mui/material'
import { useStaffListStyles } from 'components/molecules/Services/ChooseStaff/useStyles'
import { useMobile } from 'lib/utils/useMobile';
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';
import { useCartMethods } from 'lib/state/cart'
import { useActiveSelectedService } from 'lib/state/services'

export const StaffsList = () => {
    const classes = useStaffListStyles()
    const { isMobile } = useMobile()
    const accordionStyle = useWithLayoutStyles({ isMobile })
    const activeSelectedService = useActiveSelectedService()
    const {isCartAvailableBookableItem} = useCartMethods()
    let staffs = useBookableStaffVariants()
    // console.log(isCartAvailableBookableItem(activeSelectedService?.item), 'staffs')

    if (staffs && isCartAvailableBookableItem(activeSelectedService?.item)) {
        let staffsWithNoPreference = staffs.concat()
        staffsWithNoPreference.unshift({
            id: null,
            name: 'No Preference',
            description: 'Match with any staff member',
        })
        staffs = staffsWithNoPreference
    }

    const hasStaff = staffs && staffs.length > 0
    const staffCount = staffs && staffs.length;

    return (
        <Box className={`${classes.root}`}>
            {staffs?.map((staff, index) => (
                <Box key={index} className={`${accordionStyle.dropdownListItems} ${index === staffCount-1 ? 'last-child' : ''} `} >
                    <Staff key={staff.id} staff={staff} />
                </Box>
            ))}
            {!hasStaff && <Box className={classes.noOptionsAvailableWrapper}>
                <Typography>
                    No options available
                </Typography>
            </Box>}
        </Box>
    )
}
