import React, { useState } from 'react'
import {
  Box,
  CircularProgress,
  Container,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  AccessTime,
  FiberManualRecord,
  QuestionMark,
} from '@mui/icons-material'
import { FreeMode, Navigation, Thumbs } from 'swiper'

import easyIcon from '../../images/easy__icon.svg'
import mediumIcon from '../../images/medium__icon.svg'
import hardIcon from '../../images/medium__icon.svg'
import caloryIcon from '../../images/calories__icon.svg'
import cuisineIcon from '../../images/cuisine__icon.svg'

import { getCookTime } from '../../utils/constants'
import { useAppSelector } from '../../hooks/useAppDispatch'

import { useStyles } from './styles'
import './swiperStyles.css'

export const DetailItem = () => {
  const classes = useStyles()
  const { recipe } = useAppSelector((state) => state.detailReducer.recipe)
  const { isLoading, error } = useAppSelector((state) => state.detailReducer)

  const [thumbsSwiper, setThumbsSwiper] = useState<null>(null)

  const checkDifficult = (value: string) => {
    switch (value) {
      case 'easy':
        return easyIcon
      case 'medium':
        return mediumIcon
      case 'hard':
        return hardIcon
      default:
        QuestionMark
    }
  }

  return (
    <Container className={classes.container}>
      <>
        {isLoading ? (
          <Box sx={{ position: 'absolute', left: '50%' }}>
            <CircularProgress sx={{ color: 'red' }} />
          </Box>
        ) : (
          <>
            <Box className={classes.columnContainer}>
              <Box className={classes.titleContainer}>
                <Typography variant='h2'>{recipe?.title}</Typography>
                <Typography className={classes.description} variant='body1'>
                  {recipe?.description}
                </Typography>
                {recipe && (
                  <Box className={classes.infobarIcons}>
                    <Box className={classes.infobarIcon}>
                      <img
                        src={
                          recipe?.difficulty &&
                          checkDifficult(recipe.difficulty)
                        }
                        alt={recipe?.difficulty}
                      />
                    </Box>
                    <Box className={classes.infobarIcon}>
                      <AccessTime sx={{ color: '#c8c8c8' }} />
                      {
                        <Typography className={classes.infobarIconText}>
                          {getCookTime(recipe?.cookTime as number)}
                        </Typography>
                      }
                    </Box>
                    <Box className={classes.infobarIcon}>
                      <img
                        src={caloryIcon}
                        alt={`${recipe?.caloricity} kCal`}
                      />
                      <Typography
                        className={classes.infobarIconText}
                      >{`${recipe?.caloricity} kCal`}</Typography>
                    </Box>
                    <Box className={classes.infobarIcon}>
                      <img src={cuisineIcon} alt={recipe?.cuisine.title} />
                      <Typography className={classes.infobarIconText}>
                        {recipe?.cuisine.title}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
              <Box className={classes.ingredientsContainer}>
                <Typography variant='h5'>{recipe && 'Ingredients'}</Typography>
                <List>
                  {recipe?.ingredients.map((item, index) => (
                    <Box className={classes.ingredientsItem} key={index}>
                      <FiberManualRecord sx={{ width: '5px' }} />
                      <ListItem className={classes.ingredientsListItem}>
                        {item}
                      </ListItem>
                    </Box>
                  ))}
                </List>
              </Box>
              <Box className={classes.instructionsContainer}>
                <Typography variant='h5'>{recipe && 'Instructions'}</Typography>
                <List>
                  {recipe?.instructions.map((item, index) => (
                    <Box className={classes.instructionsItem} key={index}>
                      <ListItem className={classes.instructionsListItem}>
                        <Box className={classes.instructionsItemMark}>
                          {index + 1}
                        </Box>
                        <Typography sx={{ maxWidth: '90%' }}>{item}</Typography>
                      </ListItem>
                    </Box>
                  ))}
                </List>
              </Box>
            </Box>

            <Box sx={{ width: '532px' }}>
              <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper2'
                style={{ height: '355px' }}
              >
                {recipe?.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    {<img src={image} alt={recipe?.title} />}
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={() => setThumbsSwiper(null)}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper'
              >
                {recipe?.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    {<img src={image} alt={recipe?.title} />}
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </>
        )}
        {error && alert(error)}
      </>
    </Container>
  )
}
