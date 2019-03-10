import React from 'react'
import { TextField, Button } from '@material-ui/core'
import Flexbox from 'flexbox-react'
import { useForm } from '../../../form'
import { normalizeNumber } from '../helpers/normalizeNumber'

const NumberField = () => {
  const form = useForm({
    fields: [
      { name: 'fullName', label: 'Full Name' },
      { name: 'nickname', label: 'Nickname' },
      { name: 'age', label: 'Age', type: 'number', normalize: normalizeNumber },
    ],
  })

  return (
    <form.Form>
      <Flexbox flexDirection='column'>
        <TextField {...form.fullName} />
        <TextField {...form.nickname} />
        <TextField {...form.age} />
      </Flexbox>
      <Button type='sumit' onClick={form.submit}>Submit</Button>
    </form.Form>
  )
}

export { NumberField }
