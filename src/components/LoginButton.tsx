import { Box, Button, Theme } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginButton(props:{onClick:any}) {

  const theme: Theme = useTheme();
  return (
    <Button variant="contained" sx={{ backgroundColor: theme.palette.secondary.main }} onClick={props.onClick}>
      <Box sx={{ display: { xs: "none", md: "inline" }, marginRight: "5px" }}>
        Login with
      </Box>
      <GoogleIcon />
    </Button>
  );
}