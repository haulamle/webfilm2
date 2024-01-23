import ClearIcon from '@mui/icons-material/Clear'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
  FilledInputProps,
  FormControl,
  IconButton,
  InputAdornment,
  InputProps,
  OutlinedInputProps,
  SxProps,
  TextField
} from '@mui/material'
import { isNumber, isString } from 'lodash'
import React, { CSSProperties } from 'react'
import { Control, Controller } from 'react-hook-form'

interface IProps {
  control: Control<any, any>
  name: string
  label?: string
  size?: 'small' | 'medium'
  disabled?: boolean
  variant?: 'standard' | 'filled' | 'outlined'
  margin?: 'none' | 'dense' | 'normal'
  type?: 'text' | 'password' | 'number'
  showClearable?: boolean
  required?: boolean
  sx?: SxProps
  style?: CSSProperties
  notSpacing?: boolean
  helperText?: string
  placeholder?: string
  handleChange?: (name: string, value: any) => void
  InputProps?: Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps>
}

export const FormInput = (props: IProps) => {
  const {
    control,
    sx,
    style,
    name,
    label,
    size = 'small',
    disabled = false,
    variant = 'outlined',
    margin = 'dense',
    type = 'text',
    showClearable = false,
    required = false,
    notSpacing = false,
    placeholder,
    handleChange,
    InputProps,
    helperText
  } = props

  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false)

  const handleClickShowPassword = () => {
    setIsShowPassword((prev) => !prev)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
  }

  return (
    <Controller
      name={name}
      rules={{
        required: {
          value: required,
          message: 'Không được bỏ trống'
        }
      }}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error, invalid } }) => (
        <FormControl required={required} fullWidth size={size} margin={margin} sx={sx} style={style}>
          <TextField
            required={required}
            fullWidth
            size={size}
            type={isShowPassword ? 'text' : type}
            variant={variant}
            placeholder={placeholder}
            disabled={disabled}
            label={label}
            error={invalid}
            helperText={error ? error.message || helperText : null}
            onChange={(e) => {
              const convertValue =
                type === 'number' ? (e.target.value === '' ? null : Number(e.target.value)) : e.target.value

              const value = isString(convertValue) && notSpacing ? convertValue.replace(/ /g, '') : convertValue

              onChange(value)
              if (handleChange) {
                handleChange(name, value)
              }
            }}
            value={isString(value) ? value : '' || isNumber(value) ? value : null}
            InputProps={
              InputProps
                ? InputProps
                : {
                    endAdornment:
                      type === 'password' ? (
                        <InputAdornment position='end'>
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                          >
                            {isShowPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ) : showClearable && Boolean(value) ? (
                        <InputAdornment position='end'>
                          <IconButton
                            onClick={() => {
                              onChange('')
                              if (handleChange) {
                                handleChange(name, '')
                              }
                            }}
                            edge='end'
                          >
                            <ClearIcon />
                          </IconButton>
                        </InputAdornment>
                      ) : null
                  }
            }
            sx={{
              '& label': {
                color: 'white'
              },
              '& label.Mui-focused': {
                color: 'white'
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'yellow'
              },
              '& .MuiInputBase-input': {
                color: 'white'
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white'
                },
                '&:hover fieldset': {
                  borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white'
                }
              }
            }}
          />
        </FormControl>
      )}
    />
  )
}
