'use client'
import type { TextFieldProps } from '@mui/material/TextField'

import { transformValue, transformValueOnBlur, transformValueOnChange } from 'minimal-shared/utils'

import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'
import { useBoolean } from '@/hooks'
import { IconButton, InputAdornment } from '@mui/material'
import { Eye, EyeClosed } from 'lucide-react'

// ----------------------------------------------------------------------

export type RHFTextFieldProps = TextFieldProps & { name: string; classContainer?: string }

export function RHFTextField({
  name,
  helperText,
  slotProps,
  classContainer,
  type = 'text',
  label,
  required,
  ...other
}: RHFTextFieldProps) {
  const { control } = useFormContext()
  const showPassword = useBoolean()
  const isNumberType = type === 'number'

  return (
    <div className={`relative w-full ${classContainer ?? ''}`}>
      {label && (
        <label className="mb-2 block text-[.875rem]">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            value={isNumberType ? transformValue(field.value) : field.value}
            onChange={(event) => {
              const transformedValue = isNumberType
                ? transformValueOnChange(event.target.value)
                : event.target.value

              field.onChange(transformedValue)
            }}
            onBlur={(event) => {
              const transformedValue = isNumberType
                ? transformValueOnBlur(event.target.value)
                : event.target.value

              field.onChange(transformedValue)
            }}
            type={showPassword?.value ? 'text' : isNumberType ? 'text' : type}
            error={!!error}
            helperText={error?.message ?? helperText}
            size="medium"
            slotProps={{
              ...slotProps,
                //@ts-expect-error/igno
              htmlInput: {
                autoComplete: 'off',
                ...slotProps?.htmlInput,
                ...(isNumberType && { inputMode: 'decimal', pattern: '[0-9]*\\.?[0-9]*' }),
                style: { focus: { border: 'none' } },
              },
              inputLabel: {
                ...(isNumberType && { shrink: true }),
                ...slotProps?.inputLabel,
                style: { fontSize: '0.875rem', top: '2px' },
              },
              formHelperText: {
                ...(error && { error: true }),
                ...slotProps?.formHelperText,
                style: { margin: 0 },
              },
              // add case type password
              ...(type === 'password' && {
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={showPassword.onToggle} edge="end" color="primary">
                        {showPassword.value ? (
                          <Eye className="text-primary" size={20} />
                        ) : (
                          <EyeClosed className="text-primary" size={20} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }),
            }}
            sx={{
              '& .MuiInputBase-input': {
                height: 'var(--h-input)',
                borderRadius: '8px !important',
                '& fieldset': { borderColor: 'none !important' },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--c-input-border) !important',
                },
                '&.Mui-focused fieldset': { borderColor: 'var(--c-pri)' },
              },
              '& .MuiInputBase-root': {
                borderColor: 'var(--c-input-border) !important',
                height: 'var(--h-input)',
                boxSizing: 'border-box !important',
                borderRadius: '8px !important',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'var(--c-input-border) !important',
                borderWidth: '1px !important',
              },

              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'var(--c-input-border-focus) !important',
              },
            }}
            {...other}
          />
        )}
      />
    </div>
  )
}
