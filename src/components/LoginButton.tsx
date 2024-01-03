import { Button, Theme } from "@mui/material";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router";
import { useTheme } from '@mui/material/styles';
import urlJoin from "url-join";
import { useUserAccessToken } from "../stores/clientState";
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginButton() {

    const baseUrl = import.meta.env.VITE_API_URL ?? "";
  
    const theme: Theme = useTheme();
    const { accessToken, setToken } = useUserAccessToken();
    const navigation = useNavigate();
  
    const handleGoogle = async function (res: TokenResponse) {
      try{
        const token = await axios.post(urlJoin(baseUrl, '/login',), {
          serviceProvider: "google",
          authCode: res.access_token,
        })
        setToken(token.data.accessToken);
        navigation("/chart");
      }
      catch(e:any){
        if (e instanceof Error) {
          console.error(e.message)
        } else {
          console.error(String(e))
        }
      }
     
    }
  
    const googleLogin = useGoogleLogin({
      onSuccess: handleGoogle
    })
  
    return (
      <Button variant="contained" sx={{ backgroundColor: theme.palette.secondary.main }} onClick={() => googleLogin()}>
        <div style={{ marginRight: "5px" }}>
          Login with
        </div>
        <GoogleIcon/>
      </Button>
  
    )
  }