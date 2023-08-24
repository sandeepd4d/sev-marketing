import { useFormikContext } from 'formik'
import { Grid } from '@mui/material'
import TextFieldBase from 'components/atoms/formik/TextFieldBase'
import {firstNameFieldName, lastNameFieldName, emailFieldName, phoneFieldName, passwordFieldName } from '../PersonalInfo/ts/constants'
import MaskedInput from 'react-text-mask'
import { phoneMask } from 'constants/regexps'
import { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const TextMaskCustom = forwardRef((props, ref) => {
    return (
        <MaskedInput {...props} placeholder="(000) 000-0000" mask={phoneMask} />
    )
})

export default function FirstLastName() {
    const { errors, touched } = useFormikContext()

    return (
        <>
            <Grid item xs={12}>
                <TextFieldBase
                    id={emailFieldName}
                    label="Email"
                    type="email"
                    error={errors[emailFieldName] && touched[emailFieldName]}
                    helperText={
                        errors[emailFieldName] &&
                        touched[emailFieldName] &&
                        errors[emailFieldName]
                    }
                />
            </Grid>
            <Grid item xs={12}>
                <TextFieldBase
                    id={firstNameFieldName}
                    label="First Name"
                    fullWidth
                    error={
                        errors[firstNameFieldName] && touched[firstNameFieldName]
                    }
                    helperText={
                        errors[firstNameFieldName] &&
                        touched[firstNameFieldName] &&
                        errors[firstNameFieldName]
                    }
                    />
                <TextFieldBase
                    id={lastNameFieldName}
                    label="Last Name"
                    error={errors[lastNameFieldName] && touched[lastNameFieldName]}
                    helperText={
                        errors[lastNameFieldName] &&
                        touched[lastNameFieldName] &&
                        errors[lastNameFieldName]
                    }
                    />
            </Grid>
            <Grid item xs={12}>
                <TextFieldBase
                    id={phoneFieldName}
                    label="Phone"
                    type="tel"
                    InputProps={{
                        inputComponent: TextMaskCustom,
                    }}
                    error={errors[phoneFieldName] && touched[phoneFieldName]}
                    helperText={
                        errors[phoneFieldName] &&
                        touched[phoneFieldName] &&
                        errors[phoneFieldName]
                    }
                />
            </Grid>
            <Grid item xs={12}>
                <TextFieldBase
                    id={passwordFieldName}
                    label="Password"
                    type="password"
                    error={errors[passwordFieldName] && touched[passwordFieldName]}
                    helperText={
                        errors[passwordFieldName] &&
                        touched[passwordFieldName] &&
                        errors[passwordFieldName]
                    }
                />
            </Grid>
        </>
        
    )
}
