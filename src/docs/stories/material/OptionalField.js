import React from 'react'
import { TextField, Button } from '@material-ui/core'
import Flexbox from 'flexbox-react'
import { useForm } from '../../../form'


const SimpleFormOptionalFields = () => {
  const [fields, form] = useForm({
    fields: [
      { name: 'fullName', label: 'Full Name' },
      { name: 'nickname', label: 'Nickname', optional: true },
    ],
  })

  return (
    <form.Form>
      <Flexbox flexDirection='column'>
        <TextField {...fields.fullName} />
        <TextField {...fields.nickname} />
      </Flexbox>
      <Button type='sumit' onClick={form.submit}>Submit</Button>
    </form.Form>
  )
}

export { SimpleFormOptionalFields }
