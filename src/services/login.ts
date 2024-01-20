import { TokenResponse } from "@react-oauth/google";
import axios from "axios";
import urlJoin from "url-join";

export const handleLoginByGoogle = async function (res: TokenResponse):Promise<string> {

    const baseUrl:string = import.meta.env.VITE_API_URL ?? "";
    const token = await axios.post(urlJoin(baseUrl, '/login',), {
        serviceProvider: "google",
        authCode: res.access_token,
    })

    return token.data.accessToken;
}
