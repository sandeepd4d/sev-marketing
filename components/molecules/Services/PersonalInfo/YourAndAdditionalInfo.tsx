import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Box, Typography } from '@mui/material';
import { useCartState } from 'lib/state/cart'
import { useButtons } from 'components/molecules/Services/PersonalInfo/ts/useButtons'
import {
    getBookingQuestionsInitialValues,
    getBookingQuestionsValidationSchema,
} from 'components/molecules/Services/PersonalInfo/ts/formikUtils'
import { usePersonalInformationState } from 'lib/state/personal-info'
import { phoneRegExp } from '../../../../constants/regexps'
import YourInfoForm from 'components/molecules/Services/PersonalInfo/YourInfoForm'
import { useBookingAnswers } from 'lib/state/booking-answers'
import { useMobile } from 'lib/utils/useMobile'
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';

export default function YourAndAdditionalInfo() {
    const { isMobile } = useMobile();
    const bannerStyle = useWithLayoutStyles({ isMobile })
    const cart = useCartState()
    const [personalInformation] = usePersonalInformationState()
    const { onContinue } = useButtons()
    const bookingAnswers = useBookingAnswers()
    const bgImg = '/images/consent-form-bg.jpg'

    return (
        <>
            <Box className={`${bannerStyle.banner} location_banner`}>
                <Typography className={`${bannerStyle.slogan} ${bannerStyle.bannerContent}`}>Stay ready so you dont have to get ready</Typography>
                <Box>
                    <img src={bgImg} alt="This is an image" width={'100%'} height={175} className={''} />
                </Box>
            </Box>
            <Formik
                initialValues={{
                    firstName: personalInformation.firstName,
                    lastName: personalInformation.lastName,
                    email: personalInformation.email,
                    phone: personalInformation.phone,
                    password: personalInformation.password,
                    ...getBookingQuestionsInitialValues(cart, bookingAnswers),
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string().required('Required'),
                    lastName: Yup.string().required('Required'),
                    email: Yup.string().email('Email address is not valid').required('Required'),
                    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
                    password: Yup.string().required('Required'),
                    ...getBookingQuestionsValidationSchema(cart),
                    })}
                    onSubmit={(values) => onContinue(values)}
                    validateOnChange
                    >
                {() => <YourInfoForm />}
            </Formik>
        </>
    )
}
