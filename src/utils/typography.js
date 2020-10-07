import Typography from "typography";
import funstonTheme from "typography-theme-funston"
funstonTheme.baseFontSize = "18px"
funstonTheme.headerFontFamily = ['Rufina', 'sans-serif']
funstonTheme.bodyFontFamily = ['Sintony', 'sans-serif']
funstonTheme.scaleRatio = 2.2
funstonTheme.bodyGray = 0.0
funstonTheme.headerWeight = 600
funstonTheme.overrideThemeStyles = () => ({
    'a': {
      "text-decoration": "none"
    },
    'a:hover': {
      "text-decoration": "none"
    },
    'p': {
      "color": `#6C6063`,
      "font-size": "14px"
    },
    'body': {
      "background": "#F6F6F4"
    }
})
const typography = new Typography(funstonTheme);

export default typography;