import { yup } from 'services/validation'

export const loginSchema = yup.object().shape({
  mobile: yup.number().required().integer().label('موبایل')
})
