import React, { useState } from 'react'
import {
  TextField,
  Typography,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  Box,
} from '@mui/material'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { FilterList, Search, CancelRounded } from '@mui/icons-material'
import { useStyles } from './styles'

export const Header = () => {
  const [value, setValue] = useState<string>('')
  const classes = useStyles()

  const offsetY = [0, 300]
  const topSizes = [0, -160]
  const heightSizes = [600, 352]
  const heightImageSizes = [735, 450]
  const { scrollY } = useViewportScroll()
  const top = useTransform(scrollY, offsetY, topSizes)
  const height = useTransform(scrollY, offsetY, heightSizes)
  const heightImage = useTransform(scrollY, offsetY, heightImageSizes)

  return (
    <Container
      className={classes.header}
      style={{ height: height as any }}
      component={motion.header}
      disableGutters={true}
    >
      <Typography variant='h1'>Air Recipes</Typography>
      <Typography variant='subtitle1'>Best Recipes for Best People</Typography>
      <Container className={classes.searchbar} disableGutters={true}>
        <TextField
          className={classes.input}
          id='outlined-basic'
          variant='outlined'
          placeholder='Search'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search color='secondary' />
              </InputAdornment>
            ),
            endAdornment: value && (
              <IconButton onClick={() => setValue('')}>
                <CancelRounded
                  className={classes.cancelIcon}
                  color='secondary'
                />
              </IconButton>
            ),
          }}
        />

        <IconButton
          className={classes.filterIconWrap}
          size='large'
          color='primary'
          aria-label='filter_list'
        >
          <FilterList className={classes.filterIcon} />
        </IconButton>
      </Container>
      <Box
        className={classes.mainImage}
        style={{ top: top as any, height: heightImage as any }}
        component={motion.div}
      />
    </Container>
  )
}
