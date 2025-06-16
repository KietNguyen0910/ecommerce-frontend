import { REGEX_ONLY_NUMBER, REGEX_PASSWORD, REGEX_PHONE } from '@/constants/regex'
import * as yup from 'yup'

yup.addMethod(yup.string, 'password', function (message) {
  return this.matches(REGEX_PASSWORD, {
    message,
    excludeEmptyString: true,
  })
})

yup.addMethod(yup.string, 'onlyNumber', function (message) {
  return this.matches(REGEX_ONLY_NUMBER, {
    message,
    excludeEmptyString: true,
  })
})
yup.addMethod(yup.string, 'phoneNumber', function (message) {
  return this.matches(REGEX_PHONE, {
    message,
    excludeEmptyString: true,
  })
})
declare module 'yup' {
  interface StringSchema {
    password: (
      this: yup.StringSchema<string | undefined, yup.Maybe<yup.AnyObject>, undefined, ''>,
      message: any
    ) => yup.StringSchema<string | undefined, yup.Maybe<yup.AnyObject>, undefined, ''>
    onlyNumber: (
      this: yup.StringSchema<string | undefined, yup.Maybe<yup.AnyObject>, undefined, ''>,
      message: any
    ) => yup.StringSchema<string | undefined, yup.Maybe<yup.AnyObject>, undefined, ''>
    phoneNumber: (
      this: yup.StringSchema<string | undefined, yup.Maybe<yup.AnyObject>, undefined, ''>,
      message: any
    ) => yup.StringSchema<string | undefined, yup.Maybe<yup.AnyObject>, undefined, ''>
  }
}

export default yup
