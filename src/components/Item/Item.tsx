import React from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { IRecipeItem } from '../../types/recipes'
import { useStyles } from './styles'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { fetchDetailRecipe } from '../../store/reducers/ActionCreators'
import { getCookTime } from '../../utils/constants'

interface ItemProps {
  item: IRecipeItem
}

export const Item = ({ item }: ItemProps) => {
  const classes = useStyles()

  const dispatch = useAppDispatch()

  return (
    <Link
      to={`/${item.id}`}
      style={{ textDecoration: 'none' }}
      onClick={() => dispatch(fetchDetailRecipe(item.id))}
    >
      <Grid item className={classes.gridItem}>
        <Card className={classes.cardContainer}>
          <CardActionArea className={classes.cardActionArea}>
            <CardMedia
              className={classes.cardImage}
              component='img'
              height='196'
              image={item.thumbnail}
              alt={item.title}
            />
            <Stack className={classes.cardChips} direction='row' spacing={1}>
              <Chip
                className={classes.cardChipItem}
                label={getCookTime(item.cookTime)}
                variant='filled'
              />
              <Chip
                className={classes.cardChipItem}
                label={`${item.caloricity} kCal`}
                variant='filled'
              />
              <Chip
                className={classes.cardChipItem}
                label={item.cuisine.title}
                variant='filled'
              />
            </Stack>
            <CardContent className={classes.cardContent}>
              <Typography
                className={classes.cardTitle}
                gutterBottom
                variant='h5'
                component='div'
              >
                {item.title}
              </Typography>
              <Typography className={classes.cardText} variant='body1'>
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Link>
  )
}
