import React, { useEffect } from 'react'
import { Box, CircularProgress, Container, Grid } from '@mui/material'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { Item } from '../Item/Item'

import { useStyles } from './styles'
import { fetchRecipes } from '../../store/reducers/ActionCreators'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch'

interface ISupportFilterFlags {
  [key: string]: boolean
}

interface ISupportFilterCal {
  calories: number[]
}

export const ItemsList = () => {
  const classes = useStyles()

  const offsetY = [0, 300]
  const { scrollY } = useViewportScroll()
  const marginTop = useTransform(scrollY, offsetY, offsetY)

  const dispatch = useAppDispatch()
  const filters = useAppSelector((state) => state.filterReducer)
  const { recipes } = useAppSelector((state) => state.recipeReducer.recipes)
  const { isLoading, error } = useAppSelector((state) => state.recipeReducer)
  const searchRecipe = useAppSelector((state) => state.searchReducer)
  const { Caribbean, Greek, French, Indian, Chinese, calories } = filters

  const supportFilterFlags: ISupportFilterFlags = {
    Caribbean,
    Greek,
    French,
    Indian,
    Chinese,
  }

  const supportFilterCal: ISupportFilterCal = {
    calories,
  }

  const filteredRecipes = recipes.filter((item) => {
    if (
      supportFilterCal.calories[0] <= item.caloricity &&
      item.caloricity <= supportFilterCal.calories[1] &&
      item.title.toLowerCase().includes(searchRecipe.toLowerCase())
    ) {
      return item && supportFilterFlags[item.cuisine.title]
    }
  })

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [])

  return (
    <Container
      className={classes.container}
      style={{ marginTop: marginTop as any }}
      component={motion.div}
    >
      <>
        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress sx={{ color: 'red' }} />
          </Box>
        )}
        <Grid
          className={classes.gridContainer}
          container
          columnGap='20px'
          rowGap='24px'
        >
          {filteredRecipes.map((recipe) => (
            <Item item={recipe} key={recipe.id} />
          ))}
        </Grid>
        {error && alert(error)}
      </>
    </Container>
  )
}
