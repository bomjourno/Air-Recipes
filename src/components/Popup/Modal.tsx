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
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { filterSlice } from '../../store/reducers/FilterSlice'

interface PopupProps {
  modalIsOpened: boolean
  setModalIsOpened: () => void
}

//todo: create kitchen checkboxes dynamically

export const Popup = ({ modalIsOpened, setModalIsOpened }: PopupProps) => {
  const classes = useStyles()

  const dispatch = useAppDispatch()
  const { updateFilters } = filterSlice.actions
  const [isShownClearBtn, setIsShownClearBtn] = useState<boolean>(false)

  const MAX_VALUE_SLIDER = 1200
  const MIN_VALUE_SLIDER = 100

  const [filters, setFilters] = useState({
    Caribbean: true,
    Greek: true,
    French: true,
    Indian: true,
    Chinese: true,
    calories: [MIN_VALUE_SLIDER, MAX_VALUE_SLIDER],
  })

  const { Caribbean, Greek, French, Indian, Chinese } = filters

  const valuetext = (value: number) => {
    return `${value}`
  }

  const handleChangeCheckBoxes = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    })
  }

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    setFilters({ ...filters, calories: newValue as number[] })
  }

  const handleDefaultFilter = () => {
    setFilters({
      Caribbean: true,
      Greek: true,
      French: true,
      Indian: true,
      Chinese: true,
      calories: [MIN_VALUE_SLIDER, MAX_VALUE_SLIDER],
    })
  }

  useEffect(() => {
    const isDefaultCheckboxes = Object.values(filters).some(
      (box) => box == false,
    )

    const isDefaultSlider = [MIN_VALUE_SLIDER, MAX_VALUE_SLIDER].join(' ')

    if (isDefaultCheckboxes || isDefaultSlider !== filters.calories.join(' ')) {
      setIsShownClearBtn(true)
    } else {
      setIsShownClearBtn(false)
    }
  }, [filters])

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
                checked={Caribbean}
                onChange={handleChangeCheckBoxes}
                className={classes.checkBox}
                name='Caribbean'
              />
            }
            label='Caribbean'
          />
          <FormControlLabel
            className={classes.labelItem}
            labelPlacement='start'
            control={
              <Checkbox
                checked={Greek}
                onChange={handleChangeCheckBoxes}
                className={classes.checkBox}
                name='Greek'
              />
            }
            label='Greek'
          />
          <FormControlLabel
            className={classes.labelItem}
            labelPlacement='start'
            control={
              <Checkbox
                checked={French}
                onChange={handleChangeCheckBoxes}
                className={classes.checkBox}
                name='French'
              />
            }
            label='French'
          />
          <FormControlLabel
            className={classes.labelItem}
            labelPlacement='start'
            control={
              <Checkbox
                checked={Indian}
                onChange={handleChangeCheckBoxes}
                className={classes.checkBox}
                name='Indian'
              />
            }
            label='Indian'
          />
          <FormControlLabel
            className={classes.labelItem}
            labelPlacement='start'
            control={
              <Checkbox
                checked={Chinese}
                onChange={handleChangeCheckBoxes}
                className={classes.checkBox}
                name='Chinese'
              />
            }
            label='Chinese'
          />
          <Box sx={{ width: '98%', margin: '72px auto 0' }}>
            <Slider
              className={classes.slider}
              getAriaLabel={() => 'Temperature range'}
              value={filters.calories}
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
            <Button
              className={classes.submitBtn}
              onClick={() => {
                dispatch(updateFilters(filters))
                setModalIsOpened()
              }}
              variant='contained'
            >
              SHOW RECIPES
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </Modal>
  )
}
