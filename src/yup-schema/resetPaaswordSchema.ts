import { yup } from 'services/validation'

export const resetPaswordSchema = yup.object().shape({
  confirmPassword: yup
    .string()
    .required()
    .min(6)
    .label('تکرار کلمه عبور')
    .oneOf([yup.ref('password'), null], 'کلمه عبور و تکرار کلمه عبور برابر نیستند.'),
  password: yup.string().required().min(6).label('کلمه عبور'),
  otpCode: yup
    .string()
    .required()
    .min(6)
    .label('کد ارسال شده')
    .test('check-otp', 'کد وارد شده معتبر نمی باشد.', (value, context) => {
      return value === context?.options?.context?.serverOtpCode
    })
})
