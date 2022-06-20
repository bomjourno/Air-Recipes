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

interface ItemProps {
  item: IRecipeItem
}

export const Item = ({ item }: ItemProps) => {
  const classes = useStyles()

  const getCookTime = (seconds: number) => {
    const cookTime = seconds / 60
    if (cookTime > 60) {
      return `${cookTime / 60} hours`
    }
    if (cookTime == 60) {
      return `${cookTime / 60} hour`
    }
    return `${cookTime} min`
  }

  return (
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
  )
}
