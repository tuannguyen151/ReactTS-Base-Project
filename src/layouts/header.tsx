import { Box, Container } from '@mui/material'
import Notification from '../components/header/Notification'
import ShoppingCart from '../components/header/ShoppingCart'

const Header = () => {
  return (
    <Box height={{ xs: '3.5rem', sm: '4rem' }} bgcolor='#395B64'>
      <Container sx={{ display: 'flex', height: 1 }}>
        <Box flexGrow={1}>1</Box>
        <Box display='flex' alignItems='center'>
          <Notification
            notifications={[
              {
                title: 'Title ❣️',
                message: 'Message message message message message.'
              }
            ]}
            countNewNotification={1}
          />

          <ShoppingCart
            products={[
              {
                id: 1,
                name: 'Product 1',
                quantity: 1,
                size: 'xs',
                color: '#000',
                price: 100000,
                image: 'https://picsum.photos/300/300'
              },
              {
                id: 2,
                name: 'Product 2',
                quantity: 2,
                size: 's',
                color: '#fff',
                price: 200000,
                image: 'https://picsum.photos/500/500'
              },
              {
                id: 3,
                name: 'Product 3',
                quantity: 3,
                size: 'm',
                color: '#ff0055',
                price: 300000,
                image: 'https://picsum.photos/600/900'
              }
            ]}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Header
