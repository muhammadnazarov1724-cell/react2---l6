import React from 'react'
import { Drawer, Box, Typography, Avatar, Button, Chip } from '@mui/material'

export default function InfoDialog({ open, setOpen, user }: any) {
  if (!user) return null

  return (
    <Drawer
      anchor="right" // Выезд панели с левой стороны
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box
        sx={{
          width: 320,
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="primary">
          User Information
        </Typography>

        {/* Аватар пользователя */}
        <Avatar
          src={user.avatar || user.img}
          alt={user.name}
          sx={{ width: 120, height: 120, boxShadow: 3 }}
        />

        {/* Имя и возраст */}
        <Box textAlign="center">
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {user.age} years old
          </Typography>
        </Box>

        {/* Статус в виде бейджика */}
        <Chip
          label={user.status ? 'Active' : 'Inactive'}
          color={user.status ? 'success' : 'default'}
          variant="outlined"
        />

        {/* Кнопка закрытия */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 'auto' }}
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </Box>
    </Drawer>
  )
}