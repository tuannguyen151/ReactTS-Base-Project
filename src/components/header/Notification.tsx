import { useState } from 'react'
import { NotificationsNoneOutlined } from '@mui/icons-material'
import {
  IconButton,
  Badge,
  Popper,
  ClickAwayListener,
  Fade,
  Paper,
  Box,
  Typography,
  Divider
} from '@mui/material'

interface NotificationProps {
  notifications: {
    title: string
    message: string
  }[]
  countNewNotification: number
}

export default function Notification({
  notifications,
  countNewNotification
}: NotificationProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(!open)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  return (
    <>
      <IconButton color='primary' onClick={handleClick}>
        <Badge badgeContent={countNewNotification} color='error'>
          <NotificationsNoneOutlined />
        </Badge>
      </IconButton>

      <Popper open={open} anchorEl={anchorEl} placement='bottom-end' transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Fade {...TransitionProps} timeout={150}>
              <Paper>
                <Box maxHeight='20rem' maxWidth='20rem' overflow='auto'>
                  {notifications.map((notification, i) => (
                    <Box key={i}>
                      <Box sx={{ p: 2 }}>
                        <Typography variant='body1' fontWeight='bold'>
                          <span>{notification.title}</span>
                        </Typography>
                        <Typography variant='body2'>
                          <span>{notification.message}</span>
                        </Typography>
                      </Box>
                      <Divider light />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  )
}
