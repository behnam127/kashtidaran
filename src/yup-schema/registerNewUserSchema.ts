import { yup } from 'services/validation'

export const registerNewUserSchema = yup.object().shape({
  confirmPassword: yup
    .string()
    .required()
    .min(8)
    .label('تکرار کلمه عبور')
    .oneOf([yup.ref('password'), null], 'کلمه عبور و تکرار کلمه عبور برابر نیستند.'),
  password: yup.string().required().min(6).label('کلمه عبور'),
  isRulesAccepted: yup.bool().oneOf([true], 'پذیرفتن قوانین الزامیست.')
})
