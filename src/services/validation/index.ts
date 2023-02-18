import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'لطفا ${label} را وارد نمایید.',
    notType: function ({ type, label }) {
      let faType = ''
      switch (type) {
        case 'number':
          faType = 'عدد'
          break
      }
      return `${label} باید به صورت ${faType} وارد شود`
    }
  },
  string: {
    min: '${label} باید حداقل ${min} حرف باشد.'
  },
  number: {
    min: '${label} باید حداقل ${min} حرف باشد.'
  }
})

export async function validator(params: Object, schema: yup.AnySchema, context?: object) {
  try {
    const validate = await schema.validate(params, { abortEarly: true, context })
    return {
      isValid: Boolean(validate),
      errorText: ''
    }
  } catch (err: any) {
    return {
      isValid: false,
      errorText: err.errors.join('\n')
    }
  }
}

export { yup }
