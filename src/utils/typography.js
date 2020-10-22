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
      "text-decoration": "none",
      "font-size": "12px"
    },
    'a:hover': {
      "text-decoration": "none",
      "color": "#BA0D2F"
    },
    'p': {
      "color": `#6C6063`,
      "font-size": "14px"
    },
    'body': {
      "background": "#FFFFFF"
    },
    'html': {
      "position": "relative",
      "height": "100%",
      "background": '#F6F6F4'
    }
})
const typography = new Typography(funstonTheme);

export default typography;