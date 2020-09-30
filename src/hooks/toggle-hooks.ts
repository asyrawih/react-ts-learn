import { useState } from "react"

export const useToggle = (init: Boolean) => {
  const [value, setValue] = useState(init)
  const toggleValue = () => {
    setValue(value)
  }
  return [value, toggleValue]
}