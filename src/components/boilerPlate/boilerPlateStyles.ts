import { makeStyles, createStyles } from "@material-ui/styles";
// import interface for component Props and Theme
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./boilerPlate";

const useStyles = makeStyles(() =>
  createStyles({
    BoilerPlate: {
      // we merge Props & Theme interfaces and call this merged object "style".
      //component props and ui theme properties are available on the style object (yay auto-complete!!).
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.textColor,
    },
  })
);

export default useStyles;
