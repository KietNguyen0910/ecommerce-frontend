// import { yup } from '@/utils/yup-global';

import yup from "@/utils/yup-global"

// ví dụ 1 cái nhe
export const userValidation = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
})
export const pwSchema = yup.object().shape({
  oldPw: yup.string().password('Invalid password').required(),
  pw: yup.string().password('Invalid password').required(),
  pw1: yup
    .string()
    .password('Invalid password')
    .oneOf([yup.ref('pw')], 'Passwords must match')
    .required('Confirm Password is required'),
})

export const userSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email('Invalid email').required(),
  phone_number: yup.string().required().phoneNumber('Invalid number'),
})

export const loginSchema = yup.object().shape({
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: yup.string().required('Mật khẩu là bắt buộc'),
})

export const registerSchema = yup.object().shape({
  lastname: yup.string().required('Tên là bắt buộc'),
  password: yup.string().password('Mật khẩu không hợp lệ').required('Mật khẩu là bắt buộc'),
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  mobile_phone: yup.string().phoneNumber('Số điện thoại không hợp lệ').required('Số điện thoại là bắt buộc'),
  re_password: yup
    .string()
    .password('Mật khẩu không hợp lệ')
    .oneOf([yup.ref('password')], 'Mật khẩu không khớp')
    .required('Xác nhận mật khẩu là bắt buộc'),
})

export const addressSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  telephone: yup.string().phoneNumber('Invalid Phone').required(),
  city_id: yup.string().required(),
  district_id: yup.string().required(),
  ward_id: yup.string().required(),
  address: yup.string(),
  default_billing: yup.boolean(),
  default_shipping: yup.boolean(),
  setDefault: yup.array(),
})

export const forgotPwSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required(),
})

export const resetPwSchema = yup.object().shape({
  newPassword: yup.string().password('Invalid password').required(),
})

export const reviewFormSchema = yup.object().shape({
  nickname: yup.string().required(),
  summary: yup.string().required(),
})

export const contactFormSchema = yup.object().shape({
  lastname: yup.string().required(),
  mobile_phone: yup.string().phoneNumber('Invalid Phone').required(),
  email: yup.string().email('Invalid email').required(),
  service: yup.string().required(),
  note: yup.string().required(),
})