import React from 'react'
import { Formik } from 'formik'
import { Box, Button, Typography } from '@mui/material'
import { theme } from 'styles/theme'
import * as Yup from 'yup'
import valid from 'card-validator'
import { useButtons } from 'components/molecules/Services/PayAndConfirm/ts/useButtons'
import { usePaymentInformationState } from 'lib/state/payment-info'
import PaymentInfo from 'components/molecules/Services/PayAndConfirm/PaymentInfo'
import PaymentSummary from 'components/molecules/Services/PayAndConfirm/PaymentSummary'
import Terms from 'components/molecules/Services/PayAndConfirm/Terms'
import { BLVDLogo } from 'components/molecules/Services/PayAndConfirm/BLVDLogo'
import {
    cardHoldersNameFieldName,
    cardNumberFieldName,
    expirationDateFieldName,
} from './ts/constants'
import { Services } from 'components/atoms/layout/summary/Services'
import { useSelectedServices } from 'lib/state/services'
import { useCartMethods } from 'lib/state/cart'
import { useMobile } from 'lib/utils/useMobile'
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';
import { LeftSummary } from 'components/atoms/layout/summary/LeftSummary'
import {getBookingQuestionsInitialValues, getBookingQuestionsValidationSchema} from 'components/molecules/Services/PersonalInfo/ts/formikUtils'
import { usePersonalInformationState } from 'lib/state/personal-info'
import { useCartState } from 'lib/state/cart';
import { useBookingAnswers } from 'lib/state/booking-answers';
import { phoneRegExp } from '../../../../constants/regexps';
import YourInfoForm from 'components/molecules/Services/PersonalInfo/YourInfoForm';
import { Step } from 'lib/state/booking-flow/types';
import { useFlowStep } from 'lib/state/booking-flow';
import { PaymentHeader } from 'components/atoms/layout/summary/PaymentHeader'

export default function PaymentAndTerms() {
    const { isMobile } = useMobile();
    const bannerStyle = useWithLayoutStyles({ isMobile })
    const cart = useCartState();
    const [paymentInformation] = usePaymentInformationState()
    const { onContinue, isFormSubmitting } = useButtons()
    const { selectedServicesStateValue } = useSelectedServices()
    const { isCartAvailableBookableItem } = useCartMethods()
    const hasServices = selectedServicesStateValue.filter(x=>isCartAvailableBookableItem(x.item)).length > 0
    const bgImg = '/images/consent-form-bg.jpg';
    const [personalInformation] = usePersonalInformationState()
    const bookingAnswers = useBookingAnswers();
    const { setStep } = useFlowStep();

    const customSetStep = async() => {
        try {
            await setStep(Step.BookingSuccess)
        }
        catch(error) {
            
        }
    }

    const goBackStep = async() => {
        try {
            await setStep(Step.ConsentForm)
        }
        catch(error) {
            
        }
    }

    return (
        <Box sx={{
            height:'100%',
            overflowY:'scroll',
            paddingBottom: '160px'
        }}>
            <Box className={`${bannerStyle.banner} location_banner`}>
                <Typography className={`${bannerStyle.slogan} ${bannerStyle.bannerContent}`}>
                    <svg onClick={goBackStep} style={{position:'absolute',left:'16px', zIndex:9, cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
                        <path d="M9 1.0957L1 9.51313L9 17.9306" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Stay ready so you dont have to get ready
                </Typography>
                {/* <Typography className={`${bannerStyle.slogan} ${bannerStyle.bannerContent}`}>Stay ready so you dont have to get ready</Typography> */}
                <Box>
                    <img src={bgImg} alt="This is an image" width={'100%'} height={175} className={''} />
                </Box>
            </Box>
            <PaymentHeader />      
            <Formik
                initialValues={{
                    firstName: personalInformation.firstName,
                    lastName: personalInformation.lastName,
                    email: personalInformation.email,
                    phone: personalInformation.phone,
                    password: personalInformation.password,
                    ...getBookingQuestionsInitialValues(cart, bookingAnswers),

                    cardHoldersName: paymentInformation.cardHoldersName,
                    cardNumber: paymentInformation.cardNumber,
                    expirationDate: paymentInformation.expirationDate,
                    cvc: '',
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string().required('Required'),
                    lastName: Yup.string().required('Required'),
                    email: Yup.string().email('Email address is not valid').required('Required'),
                    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
                    password: Yup.string().required('Required'),
                    ...getBookingQuestionsValidationSchema(cart),
                    cardHoldersName: Yup.string().test(cardHoldersNameFieldName, 'Card holder’s name is invalid', (value) => valid.cardholderName(value).isValid).required('Required'),
                    cardNumber: Yup.string().test(cardNumberFieldName, 'Credit Card number is invalid', (value) => valid.number(value).isValid).required('Required'),
                    expirationDate: Yup.string().test(expirationDateFieldName, 'Expiration date is invalid', (value) => valid.expirationDate(value).isValid).required('Required'),
                    cvc: Yup.string().required('Required'),
                })}
                onSubmit={(values) => onContinue(values)}
                validateOnChange
                >
                {({handleSubmit}) => (
                    <Box 
                        className={bannerStyle.formInput}
                        sx={{
                            padding: !isMobile ? theme.spacing(0, 2, ) : theme.spacing(0, 2),
                            // marginTop:'-24px',
                            // overflowY: 'scroll',
                            // position: 'sticky',
                            // '&::-webkit-scrollbar': {
                            //     display: 'none',
                            // },
                        }}
                    >
                        <PaymentSummary />
                        <YourInfoForm />
                        {/* {isMobile && <Services/>} */}
                        <PaymentInfo hasServices={hasServices}/>
                        <Terms />
                        <Box className={bannerStyle.continueBtnWrap}>
                            <Button variant="contained" onClick={() => handleSubmit()} disabled={isFormSubmitting} className={bannerStyle.continueBtn}>
                                {hasServices ? 'Book Now' : 'Pay'}
                            </Button>
                            <Button variant="contained" className={bannerStyle.continueBtn} sx={{mt:2}} onClick={customSetStep}>Thank You</Button>
                        </Box>
                        {/* <BLVDLogo /> */}
                    </Box>
                )}
            </Formik>
        </Box>
    )
}
