import Switch from "@mui/material/Switch";

const ThemeSwitch = () => {
  return (
    <Switch
      sx={{
        position: "relative",
        bottom: "8.4rem",
        left: "15.7rem",
        

        "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
          backgroundColor: "#A445ED",
          opacity: '1',
          
        },
      }}
      color="default"
    />
  );
};

export default ThemeSwitch;
