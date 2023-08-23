import WithLayout from 'components/atoms/layout/WithLayout';
import ThankYou from 'components/molecules/Services/BookingSuccess/ThankYou';

export default function BookingSuccess() { 

    return (
        <>
         <WithLayout
            isShowLoader={false}
            leftPanel={<ThankYou />}
            // rightPanel={<PaymentAndTerms />}
            // rightPanelCaption="Confirm and pay"
            // addBackArrow={isMobile}
            // backArrowStep={Step.ChooseDate}
        />
           
        </>
    )
}
