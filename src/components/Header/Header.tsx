import React, { useState } from 'react'
import {
  TextField,
  Typography,
  Container,
  IconButton,
  InputAdornment,
  Paper,
} from '@mui/material'
import { FilterList, Search, CancelRounded } from '@mui/icons-material'
import Image from '../../images/header__image.png'

export const Header = () => {
  const [value, setValue] = useState<string>('')

  return (
    <Container sx={{ mt: '128px' }}>
      <Typography variant='h1'>Air Recipes</Typography>
      <Typography variant='subtitle1'>Best Recipes for Best People</Typography>

      <Container
        className='header__input'
        disableGutters={true}
        sx={{ mt: '32px' }}
      >
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search color='secondary' />
              </InputAdornment>
            ),
            endAdornment: value && (
              <IconButton onClick={() => setValue('')}>
                <CancelRounded
                  color='secondary'
                  sx={{ width: 15, height: 15 }}
                />
              </IconButton>
            ),
          }}
          id='outlined-basic'
          variant='outlined'
          placeholder='Search'
          type='text'
          sx={{
            '& .MuiOutlinedInput-root.Mui-focused': {
              '& > fieldset': {
                borderWidth: '1px',
              },
            },
            '& .MuiOutlinedInput-root:hover': {
              '& > fieldset': {
                borderColor: '#a9a9a9',
              },
            },
            '& .MuiOutlinedInput-root': {
              fieldset: {
                borderRadius: '28px',
              },
            },
            '.MuiOutlinedInput-root': {
              pl: '19px',
              pr: '12.5px',
            },
            width: '276px',
          }}
        />

        <IconButton
          className='header__button'
          size='large'
          aria-label='filter_list'
          color='primary'
          sx={{
            width: '56px',
            height: '56px',
            ml: '16px',
            borderWidth: '1px',
            borderStyle: 'solid',
          }}
        >
          <FilterList sx={{ color: 'black' }} />
        </IconButton>
      </Container>
      <Paper
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '814px',
          height: '735px',
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
        }}
      />
    </Container>
  )
}
