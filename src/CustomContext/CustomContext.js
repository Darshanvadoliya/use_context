
import React, { useState } from 'react'

export function CustomContext() {
    let defaultTheme = 'white'
    const [ theme, setTheme ] = useState(defaultTheme);
  return {
        defaultTheme,theme,setTheme
  }
}
