
export const isDark = useDark({
    selector: 'html',
    attribute: 'theme-mode',
    valueDark: 'dark',
    valueLight: 'light'
  })
export const toggleDark = useToggle(isDark)
