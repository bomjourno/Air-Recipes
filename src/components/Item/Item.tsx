import React from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import { IRecipeItem } from '../../types/recipes'
import { useStyles } from './styles'

interface ItemProps {
  item: IRecipeItem
}

export const Item = ({ item }: ItemProps) => {
  const classes = useStyles()

  return (
    <Grid item className={classes.gridItem}>
      <Card className={classes.cardContainer}>
        <CardActionArea className={classes.cardActionArea}>
          <CardMedia
            component='img'
            height='196'
            image={item.thumbnail}
            alt={item.title}
          />
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
