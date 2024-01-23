import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import FormAutocomplete from 'src/components/hook_form/form_autocomplete'
import { categoryList, nationList } from 'src/constants/asset'
import { useQuery } from 'src/hooks/use_query'
import { crateArrayFrom2000To2024 } from 'src/layouts/customer_layout/box_right_content'

interface ISelect {
  id: string
  name: string
}

interface IFilterState {
  category: ISelect | null
  year: ISelect | null
  nation: ISelect | null
  arrange: ISelect | null
}

const FilterSearchPage = () => {
  const searchParam = useQuery()

  const categoryInParam = searchParam.get('category') as string
  const nationInParam = searchParam.get('nation') as string
  const yearInParam = searchParam.get('year') as string

  const convertData = (list: string[]) => {
    const newData: ISelect[] = []

    for (const item of list) {
      newData.push({ id: item, name: item })
    }

    return newData
  }

  const { control, reset } = useForm<IFilterState>({
    defaultValues: {
      category: null,
      year: null,
      nation: null,
      arrange: null
    }
  })

  const findAndReset = (type: 'category' | 'nation' | 'year', param: string, list: string[]) => {
    if (param) {
      reset({ [type]: convertData(list).find((e) => e.id.toLowerCase() === param.toLowerCase()) })
    }
  }

  useEffect(() => {
    findAndReset('category', categoryInParam, categoryList)

    findAndReset('nation', nationInParam, nationList)

    findAndReset(
      'year',
      yearInParam,
      crateArrayFrom2000To2024().map((item) => item.toString())
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryInParam, nationInParam, yearInParam])

  return (
    <Box className='flex gap-2'>
      <FormAutocomplete
        control={control}
        keyOption='id'
        label='Thể loại'
        labelOption='name'
        name='category'
        options={convertData(categoryList)}
        isMultiple={false}
        size='small'
      />
      <FormAutocomplete
        control={control}
        keyOption='id'
        label='Quốc gia'
        labelOption='name'
        size='small'
        name='nation'
        options={convertData(nationList)}
        isMultiple={false}
      />
      <FormAutocomplete
        control={control}
        keyOption='id'
        label='Năm phát hành'
        labelOption='name'
        name='year'
        options={convertData(crateArrayFrom2000To2024().map((item) => item.toString()))}
        size='small'
        isMultiple={false}
      />
    </Box>
  )
}

export default FilterSearchPage
