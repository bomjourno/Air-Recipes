import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Modal,
  Slider,
  Typography,
} from '@mui/material'
import { useStyles } from './styles'
import { Close } from '@mui/icons-material'
import { motion } from 'framer-motion'

interface PopupProps {
  modalIsOpened: boolean
  setModalIsOpened: () => void
}

//todo: create kitchen checkboxes dynamically

export const Popup = ({ modalIsOpened, setModalIsOpened }: PopupProps) => {
  const classes = useStyles()

  const MAX_VALUE_SLIDER = 1200
  const MIN_VALUE_SLIDER = 100

  const [isShownClearBtn, setIsShownClearBtn] = useState<boolean>(false)
  const [checkboxes, setCheckboxes] = useState({
    caribbean: true,
    greek: true,
    french: true,
    indian: true,
    chinese: true,
  })

  const { caribbean, greek, french, indian, chinese } = checkboxes

  const [valueSlider, setValueSlider] = useState<number[]>([
    MIN_VALUE_SLIDER,
    MAX_VALUE_SLIDER,
  ])

  const valuetext = (value: number) => {
    return `${value}`
  }

  const handleChangeCheckBoxes = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckboxes({
      ...checkboxes,
      [event.target.name]: event.target.checked,
    })
  }

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    setValueSlider(newValue as number[])
  }

  const handleDefaultFilter = () => {
    setValueSlider([MIN_VALUE_SLIDER, MAX_VALUE_SLIDER])
    setCheckboxes({
      caribbean: true,
      greek: true,
      french: true,
      indian: true,
      chinese: true,
    })
  }

  useEffect(() => {
    const isDefaultCheckboxes = Object.values(checkboxes).some(
      (box) => box == false,
    )

    const isDefaultSlider = [MIN_VALUE_SLIDER, MAX_VALUE_SLIDER].join(' ')

    if (isDefaultCheckboxes || isDefaultSlider !== valueSlider.join(' ')) {
      setIsShownClearBtn(true)
    } else {
      setIsShownClearBtn(false)
    }
  }, [checkboxes, valueSlider])

  return (
    <Modal
      className={classes.modal}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      open={modalIsOpened}
      onClose={setModalIsOpened}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      BackdropProps={{
        style: { backgroundColor: 'rgba(255, 255, 255, 0)' },
      }}
    >
      <Box className={classes.boxModal}>
        <FormGroup className={classes.formFroup}>
          <Typography
            className={classes.title}
            id='modal-modal-title'
            variant='h5'
            component='h2'
          >
            Filter
          </Typography>
          <IconButton
            className={classes.closeBtn}
            sx={{ position: 'absolute' }}
            onClick={setModalIsOpened}
          >
            <Close />
          </IconButton>

          <FormControlLabel
            className={classes.labelItem}
            labelPlacement='start'
            control={
              <Checkbox
                checked={caribbean}
                onChange={handleChangeCheckBoxes}
                className={classes.checkBox}
                name='caribbean'
              />
            }
            label='Caribbean'
          />
          <FormControlLabel
            className={classes.labelItem}
            labelPlacement='start'
            control={
              <Checkbox
                checked={greek}
                onChange={handleChangeCheckBoxes}
                className={classes.checkBox}
                name='greek'
              />
            }
            label='Greek'
          />
          <FormControlLabel
            className={classes.labelItem}
            labelPlacement='start'
            control={
              <Checkbox
                checked={french}
                onChange={handleChangeCheckBoxes}
                className={classes.checkBox}
                name='french'
              />
            }
            label='French'
          />
          <FormControlLabel
            className={classes.labelItem}
            labelPlacement='start'
            control={
              <Checkbox
                checked={indian}
                onChange={handleChangeCheckBoxes}
                className={classes.checkBox}
                name='indian'
              />
            }
            label='Indian'
          />
          <FormControlLabel
            className={classes.labelItem}
            labelPlacement='start'
            control={
              <Checkbox
                checked={chinese}
                onChange={handleChangeCheckBoxes}
                className={classes.checkBox}
                name='chinese'
              />
            }
            label='Chinese'
          />
          <Box sx={{ width: '98%', margin: '72px auto 0' }}>
            <Slider
              className={classes.slider}
              getAriaLabel={() => 'Temperature range'}
              value={valueSlider}
              onChange={handleChangeSlider}
              valueLabelDisplay='on'
              getAriaValueText={valuetext}
              min={100}
              max={1200}
            />
          </Box>
          <Typography>Calories, kCal</Typography>
          <Box className={classes.boxFooter}>
            {isShownClearBtn && (
              <Button className={classes.clearBtn} variant='outlined'>
                <Box
                  component={motion.div}
                  onClick={handleDefaultFilter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  CLEAR
                </Box>
              </Button>
            )}
            <Button className={classes.submitBtn} variant='contained'>
              SHOW RECIPES
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </Modal>
  )
}
