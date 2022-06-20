import React, { useCallback, useState } from 'react'

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggle = useCallback(() => setValue((state) => !state), [])

  return [value, toggle]
}
