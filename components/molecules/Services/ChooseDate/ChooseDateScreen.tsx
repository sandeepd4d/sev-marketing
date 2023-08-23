// import { SelectedServices } from 'components/molecules/Services/SelectedServices/SelectedServices'
// import { Box } from '@mui/material'
import React from 'react'
import WithLayout from 'components/atoms/layout/WithLayout'
import { DateTimeType, useAppConfig } from 'lib/state/config'
import { ShowTimeForOneDayComponent } from 'components/molecules/Services/ChooseDate/OneDay/ShowTimeForOneDayComponent'
import { ShowTimeForManyDaysComponent } from 'components/molecules/Services/ChooseDate/ManyDays/ShowTimeForManyDaysComponent'
import { useFlowStep } from 'lib/state/booking-flow'
import { Step } from 'lib/state/booking-flow/types'
import { useMobile } from 'lib/utils/useMobile'
import formatDateFns from 'lib/utils/formatDateFns'
import { useCartStoreState } from 'lib/state/store'
import { useSelectedStaffTimeState } from 'lib/state/staffTime'
import { WorkshopPanel } from 'components/molecules/Services/ChooseDate/WorkshopPanel'

export default function ChooseDateScreen() {
    const { isMobile } = useMobile()
    const { setStep } = useFlowStep()
    const { getDateTimeType } = useAppConfig()
    const dateTimeType = getDateTimeType()
    const selectedStaffTime = useSelectedStaffTimeState()
    const selectedStore = useCartStoreState()

    const onLeftPanelBtnClick = async () => {
        await setStep(Step.SelectService)
    }

    return (
        <WithLayout
            isShowLoader={false}
            leftPanel={
                <>
                    {dateTimeType === DateTimeType.ShowTimeForOneDay && (
                        <ShowTimeForOneDayComponent />
                    )}
                    {dateTimeType === DateTimeType.ShowTimeForManyDays && (
                        <ShowTimeForManyDaysComponent />
                    )}
                </>
            }
            // rightPanel={
            //     <>
            //         {dateTimeType === DateTimeType.ShowTimeForOneDay && (
            //             <ShowTimeForOneDayComponent />
            //         )}
            //         {dateTimeType === DateTimeType.ShowTimeForManyDays && (
            //             <ShowTimeForManyDaysComponent />
            //         )}
            //     </>
            // }
            // rightPanelCaption="Select an availability"
            rightPanelBtnCaption={`Continue with ${formatDateFns(
                selectedStaffTime?.locationTime,
                selectedStore?.location.tz,
                'h:mmaaa'
            )}`}
            showLeftBottom={true}
            showBottom={false}
            addBackArrow={isMobile}
            leftPanelBtnCaption={'Add another'}
            onLeftPanelBtnClick={onLeftPanelBtnClick}
            backArrowStep={Step.SelectService}
            workshopPanel={<WorkshopPanel />}
        />
    )
}
