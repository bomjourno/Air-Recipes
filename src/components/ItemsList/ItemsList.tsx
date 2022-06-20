import React, { useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import { useStyles } from './styles'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch'
import { fetchRecipes } from '../../store/reducers/ActionCreators'
import { Item } from '../Item/Item'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { IFilters } from '../../types/filters'
import { IRecipeItem } from '../../types/recipes'

// interface ISupportFilter {
//   [key: string]: string
// }

interface ISupportFilter {
  [key: string]: boolean | number[]
}

// const filtersMock: ISupportFilterMock = {
//   [CARIBBEAN]: true,
//   Greek: true,
//   French: true,
//   Indian: true,
//   Chinese: false,
// }

export const ItemsList = () => {
  const classes = useStyles()

  const offsetY = [0, 300]
  const { scrollY } = useViewportScroll()
  const marginTop = useTransform(scrollY, offsetY, offsetY)

  const dispatch = useAppDispatch()
  const filters = useAppSelector((state) => state.filterReducer)
  const { recipes } = useAppSelector((state) => state.recipeReducer.recipes)
  const { Caribbean, Greek, French, Indian, Chinese, calories } = filters

  const supportFilter: ISupportFilter = {
    Caribbean,
    Greek,
    French,
    Indian,
    Chinese,
    calories,
  }

  console.log(filters)

  const filterRecipes = recipes.filter(
    (item) => supportFilter[item.cuisine.title],
  )

  console.log(filterRecipes)

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [])

  return (
    <Container
      className={classes.container}
      style={{ marginTop: marginTop as any }}
      component={motion.div}
    >
      <Grid container rowGap='24px' columnGap='20px'>
        {filterRecipes.map((recipe) => (
          <Item item={recipe} key={recipe.id} />
        ))}
      </Grid>
    </Container>
  )
}

// import React, { useEffect } from 'react'
// import { Container, Grid } from '@mui/material'
// import { useStyles } from './styles'
// import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch'
// import { fetchRecipes } from '../../store/reducers/ActionCreators'
// import { Item } from '../Item/Item'
// import { motion, useTransform, useViewportScroll } from 'framer-motion'
// import { IFilters } from '../../types/filters'
// import { IRecipeItem } from '../../types/recipes'

// interface ISupportFilter {
//   [key: string]: string
// }

// interface ISupportFilterMock {
//   [key: string]: boolean
// }

// const CARIBBIAN = 'Caribbean'

// const filtersMock: ISupportFilterMock = {
//   [CARIBBIAN]: true,
//   Greek: true,
//   French: true,
//   Indian: true,
//   Chinese: false,
// }

// export const ItemsList = () => {
//   const classes = useStyles()

//   const offsetY = [0, 300]
//   const { scrollY } = useViewportScroll()
//   const marginTop = useTransform(scrollY, offsetY, offsetY)

//   const dispatch = useAppDispatch()
//   const filters = useAppSelector((state) => state.filterReducer)
//   const { recipes } = useAppSelector((state) => state.recipeReducer.recipes)
//   const { Caribbean, Greek, French, Indian, Chinese, calories } = filters

//   // console.log(filtersMock[supportFilter['Caribbean']])
//   // console.log(recipes)

//   console.log(
//     recipes.filter((item: IRecipeItem) => filtersMock[item.cuisine.title]),
//   )

//   useEffect(() => {
//     dispatch(fetchRecipes())
//   }, [])

//   return (
//     <Container
//       className={classes.container}
//       style={{ marginTop: marginTop as any }}
//       component={motion.div}
//     >
//       <Grid container rowGap='24px' columnGap='20px'>
//         {recipes.map((recipe) => (
//           <Item item={recipe} key={recipe.id} />
//         ))}
//       </Grid>
//     </Container>
//   )
// }
