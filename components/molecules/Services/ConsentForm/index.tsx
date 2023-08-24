import WithLayout from 'components/atoms/layout/WithLayout'
import ConsentFormContent from 'components/molecules/Services/ConsentForm/ConsentFormContent'
import { Step } from 'lib/state/booking-flow/types'
import { useMobile } from 'lib/utils/useMobile'

export default function ConsentForm() {
    const { isMobile } = useMobile()

    return (
        <WithLayout
            isShowLoader={false}
            leftPanel={<ConsentFormContent />}
            addBackArrow={isMobile}
            backArrowStep={Step.ChooseDate}
            rightPanelBtnCaption={`Continue`}
            // showLeftBottom={true}
            // showBottom={false}
            // onLeftPanelBtnClick={onLeftPanelBtnClick}
        />
    )
}
