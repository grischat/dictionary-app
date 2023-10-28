import Switch from "@mui/material/Switch";
import { useThemeContext } from "../Context/ThemeContext";
import '../ThemeSwitch/ThemeSwitch.scss'
const ThemeSwitch = () => {
  const { handleThemeChange } = useThemeContext();
  const { defaultThemeImg } = useThemeContext()
  return (
    <>
      <Switch
        sx={{
          position: "relative",
          bottom: "8.4rem",
          left: "13.7rem",

          "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
            backgroundColor: "#A445ED",
            opacity: "1",
          },
        }}
        color="default"
        onClick={handleThemeChange}
      />
      <img className="header__image" src={`${defaultThemeImg}`} alt="Theme image" />
    </>
  );
};

export default ThemeSwitch;
