import { Autocomplete, Box, Chip, FormControl, SxProps, TextField } from '@mui/material'
import _ from 'lodash'
import { Control, Controller } from 'react-hook-form'

interface IProps {
  isMultiple?: boolean
  control: Control<any, any>
  name: string
  label: string
  options: any[]
  keyOption: string
  labelOption: string
  size?: 'small' | 'medium'
  disabled?: boolean
  variant?: 'standard' | 'filled' | 'outlined'
  margin?: 'none' | 'dense' | 'normal'
  limitTags?: number
  helperText?: string
  handleChange?: (name: string, value: any) => void
  disableClearable?: boolean
  getOptionDisabled?: (option: any) => boolean
  notRemoveTag?: boolean
  required?: boolean
  sx?: SxProps
}

export const FormAutocomplete = (props: IProps) => {
  const {
    isMultiple = false,
    control,
    name,
    label,
    size = 'small',
    disabled = false,
    variant = 'outlined',
    margin = 'dense',
    options,
    keyOption,
    labelOption,
    handleChange,
    limitTags,
    disableClearable,
    getOptionDisabled,
    notRemoveTag = false,
    required,
    sx,
    helperText = 'Vui lòng chọn trường này!'
  } = props

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (option) => {
          return required ? !_.isEmpty(option) : true
        }
      }}
      render={({ field: { value, onChange }, fieldState: { error, invalid } }) => (
        <FormControl sx={sx} size={size} fullWidth margin={margin} error={invalid} required={required}>
          <Autocomplete
            multiple={isMultiple}
            fullWidth
            size={size}
            options={options}
            onChange={(event, item) => {
              if (_.isEqual(value, item)) return

              onChange(item)
              if (handleChange) {
                handleChange(name, item)
              }
            }}
            noOptionsText='Không có lựa chọn'
            value={value}
            limitTags={limitTags}
            autoHighlight
            renderTags={
              notRemoveTag
                ? (tags) => {
                    return (
                      <Box display='flex' gap={0.5} flexWrap='wrap'>
                        {tags.map((tag) => (
                          <Chip key={tag[keyOption]} size={size} color='primary' label={tag[labelOption]} />
                        ))}
                      </Box>
                    )
                  }
                : undefined
            }
            disabled={disabled}
            disableClearable={disableClearable}
            isOptionEqualToValue={(option, optionValue) => option?.[keyOption] === optionValue?.[keyOption]}
            getOptionDisabled={getOptionDisabled}
            getOptionLabel={(option) => option?.[labelOption] || ''}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  error={invalid}
                  helperText={error ? error.message || helperText : null}
                  label={label}
                  disabled={disabled}
                  variant={variant}
                  required={required}
                  sx={{
                    '& label': {
                      color: 'white'
                    },
                    '& label.Mui-focused': {
                      color: 'white'
                    },
                    '& .MuiAutocomplete-input': {
                      color: 'white'
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'yellow'
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
              )
            }}
            sx={{
              '& .css-i4bv87-MuiSvgIcon-root': {
                color: 'white'
              }
            }}
          />
        </FormControl>
      )}
    />
  )
}

export default FormAutocomplete
