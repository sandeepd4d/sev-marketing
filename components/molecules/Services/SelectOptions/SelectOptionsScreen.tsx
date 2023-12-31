import React from 'react'
import WithLayout from 'components/atoms/layout/WithLayout'
import { LeftPanel } from 'components/molecules/Services/SelectOptions/LeftPanel'
import { RightPanel } from 'components/molecules/Services/SelectOptions/RightPanel'
import { useFlowStep } from 'lib/state/booking-flow'
import { Step } from 'lib/state/booking-flow/types'
import { WorkshopPanel } from 'components/molecules/Services/SelectOptions/WorkshopPanel'
import { useMobile } from 'lib/utils/useMobile'
import { useActiveSelectedService } from 'lib/state/services'

export const SelectOptionsScreen = () => {
    const { setStep } = useFlowStep()
    const { isMobile } = useMobile()
    const onRightPanelBtnClick = async () => {
        await setStep(Step.ChooseDate)
    }
    const activeSelectedService = useActiveSelectedService()
    const hasSelectedOptions = activeSelectedService?.selectedOptions && activeSelectedService?.selectedOptions?.length > 0
    return (
        <WithLayout
            isShowLoader={false}
            leftPanel={<LeftPanel />}
            rightPanel={<RightPanel />}
            showBottom={true}
            rightPanelCaption={isMobile ? '' : 'Select options'}
            rightPanelBtnCaption={hasSelectedOptions ? 'Continue' : 'Continue without options'}
            onRightPanelBtnClick={onRightPanelBtnClick}
            workshopPanel={<WorkshopPanel />}
        />
    )
}
