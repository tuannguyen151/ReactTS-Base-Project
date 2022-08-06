import { Add, Remove } from '@mui/icons-material'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton
} from '@mui/material'
import { useTranslation } from 'react-i18next'

export interface IProductProps {
  id: number
  name: string
  size: string
  color: string
  quantity: number
  price: number
  image: string
}

export default function Product({
  product,
  toggleDrawer
}: {
  product: IProductProps
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void
}) {
  const { t } = useTranslation()

  const currencyFormat = (price: number) =>
    new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)

  return (
    <Card>
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <CardMedia
          component='img'
          image={product.image}
          alt={product.name}
          sx={{
            width: '8rem',
            height: '12rem'
          }}
        />

        <CardContent
          sx={{
            flexGrow: 1,
            px: 2,
            py: 1
          }}
        >
          <Typography gutterBottom variant='subtitle1' fontWeight='bold'>
            {product.name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2'>{t('product.color')}:</Typography>
            <Box
              sx={{
                height: '1rem',
                width: '3.5rem',
                bgcolor: product.color,
                border: '1px solid',
                ml: 2,
                borderRadius: 1
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2'>{t('product.size')}:</Typography>
            <Typography
              variant='body1'
              textTransform='uppercase'
              ml={2}
              fontWeight='bold'
            >
              {product.size}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2'>{t('product.quantity')}:</Typography>
            <Typography
              variant='body1'
              textTransform='uppercase'
              fontWeight='bold'
            >
              <IconButton component='span'>
                <Remove
                  color='error'
                  sx={{
                    width: '0.625rem',
                    height: '0.625rem'
                  }}
                />
              </IconButton>
              {product.quantity}
              <IconButton component='span'>
                <Add
                  color='success'
                  sx={{
                    width: '0.625rem',
                    height: '0.625rem'
                  }}
                />
              </IconButton>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2'>{t('product.price')}:</Typography>
            <Typography
              variant='body1'
              textTransform='uppercase'
              ml={2}
              fontWeight='bold'
            >
              {currencyFormat(product.price * product.quantity)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
