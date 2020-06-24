import Typography from "typography";
import funstonTheme from "typography-theme-funston"
funstonTheme.baseFontSize = "18px"
funstonTheme.headerFontFamily = ['PT Serif', 'serif']
funstonTheme.bodyFontFamily = ['Averia Serif Libre', 'serif']
funstonTheme.scaleRatio = 2.2
funstonTheme.bodyGray = 0.0
funstonTheme.headerWeight = 600
funstonTheme.overrideThemeStyles = () => ({
    'a': {
      "text-decoration": "none"
    },
    'a:hover': {
        transition: "0.2s"
    }
})
const typography = new Typography(funstonTheme);

export default typography;