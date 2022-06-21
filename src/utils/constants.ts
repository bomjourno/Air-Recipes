export const getCookTime = (seconds: number) => {
  const cookTime = seconds / 60
  if (cookTime > 60) {
    return `${cookTime / 60} hours`
  }
  if (cookTime == 60) {
    return `${cookTime / 60} hour`
  }
  return `${cookTime} min`
}

export const MAX_VALUE_SLIDER = 1200
export const MIN_VALUE_SLIDER = 100
