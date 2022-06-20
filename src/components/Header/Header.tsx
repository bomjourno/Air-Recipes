import React, { useState } from 'react'
import {
  TextField,
  Typography,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  Box,
  Modal,
} from '@mui/material'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { FilterList, Search, CancelRounded } from '@mui/icons-material'
import { useStyles } from './styles'
import { useToggle } from '../../hooks/useToggle'
import { Popup } from '../Popup/Modal'

export const Header = () => {
  const [value, setValue] = useState<string>('')
  const [modalIsOpened, setModalIsOpened] = useToggle(false)
  const classes = useStyles()

  const offsetY = [0, 300]
  const imageOffsetY = [-100, 250]
  const topSizes = [0, -160]
  const heightHeaderSizes = [600, 352]
  const heightImageSizes = [735, 450]
  const { scrollY } = useViewportScroll()
  const top = useTransform(scrollY, offsetY, topSizes)
  const height = useTransform(scrollY, offsetY, heightHeaderSizes)
  const heightImage = useTransform(scrollY, imageOffsetY, heightImageSizes)

  return (
    <Container
      className={classes.header}
      style={{ height: height as any }}
      component={motion.header}
    >
      <Typography variant='h1'>Air Recipes</Typography>
      <Typography variant='subtitle1'>Best Recipes for Best People</Typography>
      <Container className={classes.searchbar} disableGutters={true}>
        <TextField
          className={classes.input}
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
          onClick={setModalIsOpened}
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
      <Popup
        modalIsOpened={modalIsOpened}
        setModalIsOpened={setModalIsOpened}
      />
    </Container>
  )
}
