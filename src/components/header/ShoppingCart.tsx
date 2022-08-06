import {
  ShoppingCartCheckoutOutlined,
  ShoppingCartOutlined
} from '@mui/icons-material'
import {
  Badge,
  Button,
  Divider,
  IconButton,
  SwipeableDrawer,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Product, { IProductProps } from './ShoppingCart/Product'

interface IShoppingCartProps {
  products: IProductProps[]
}

export default function ShoppingCart({ products }: IShoppingCartProps) {
  const { t } = useTranslation()
  const [openState, setOpenState] = useState<boolean>(false)

  const countProduct = products.reduce((sum, curr) => sum + curr.quantity, 0)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpenState(open)
    }

  return (
    <>
      <IconButton color='primary' onClick={toggleDrawer(true)}>
        <Badge badgeContent={countProduct} color='error'>
          <ShoppingCartOutlined />
        </Badge>
      </IconButton>

      <Fragment>
        <SwipeableDrawer
          anchor='right'
          open={openState}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            width={{
              xs: '20rem',
              sm: '24rem'
            }}
            display='flex'
            flexDirection='column'
            flex={1}
            sx={{
              overflowY: 'hidden'
            }}
          >
            <Box
              height='3rem'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <Typography variant='h6' fontWeight='bold'>
                {t('shoppingCart')} (
                {t('productNumber', { number: countProduct })})
              </Typography>
            </Box>

            <Divider />

            <Box
              flexGrow={1}
              px={2}
              sx={{
                '& > *': {
                  my: 2
                },
                overflowY: 'auto'
              }}
            >
              {products.map((product) => (
                <Product
                  product={product}
                  toggleDrawer={toggleDrawer}
                  key={product.id}
                />
              ))}
            </Box>

            <Divider />

            <Box m={2}>
              <Button
                endIcon={<ShoppingCartCheckoutOutlined />}
                variant='contained'
                onClick={toggleDrawer(false)}
                fullWidth
                sx={{
                  height: '3rem',
                  fontWeight: 'bold'
                }}
              >
                {t('checkout')}
              </Button>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Fragment>
    </>
  )
}
