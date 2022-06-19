import React, { useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import { useStyles } from './styles'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch'
import { fetchRecipes } from '../../store/reducers/ActionCreators'
import { Item } from '../Item/Item'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

export const ItemsList = () => {
  const classes = useStyles()

  const offsetY = [0, 300]
  const { scrollY } = useViewportScroll()
  const marginTop = useTransform(scrollY, offsetY, offsetY)

  const dispatch = useAppDispatch()
  const { recipes } = useAppSelector((state) => state.recipeReducer.recipes)

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [])

  return (
    <Container
      className={classes.container}
      style={{ marginTop: marginTop as any }}
      component={motion.div}
      disableGutters={true}
    >
      <Grid container sx={{ flexDirection: 'column' }}>
        {recipes.map((recipe) => (
          <Item item={recipe} key={recipe.id} />
        ))}
      </Grid>
    </Container>
  )
}
