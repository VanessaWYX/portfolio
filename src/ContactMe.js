import { Card, Stack } from '@mui/material'
import { DescriptionBox } from './DescriptionBox'

export const ContactMe = () => {
  return (
    <Stack bgcolor="white" alignItems="center">
      <Card>
        <DescriptionBox title="PHONE" description="+61 402 778 333" />
        {/*TODO: link to mailto:*/}
        <DescriptionBox title="EMAIL" description="vanessa.wyx@outlook.com" />
        <DescriptionBox
          title="LINKED IN"
          description="https://www.linkedin.com/in/vanessawongyx/"
        />
      </Card>
    </Stack>
  )
}
