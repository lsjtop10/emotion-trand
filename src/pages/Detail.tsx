import { Box } from "@mui/material";
import DetailCard from "../components/DetailCard";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import urlJoin from "url-join";
import Header from "../components/Header";
import { useUserAccessToken } from "../stores/clientState";

interface Posts {
  timestamp: number,
  level: number,
  content: string
}

export default function DetailPage() {

  const [posts, setPosts] = useState<Posts[] | never[]>([]);
  const { accessToken } = useUserAccessToken()
  const baseUrl = import.meta.env.VITE_API_URL;
  axios.defaults.withCredentials = true;

  // TODO: separate facing logic to other layer
  useEffect(
    () => { 
    axios.get(urlJoin(baseUrl, "/posts"), {
      headers: {
        "accessToken": accessToken,
      },
      withCredentials: true
    }).then((res) => { 
      setPosts(res.data.elements) }
    ).catch(
        (e) => { console.log(e) }
    )}
    , [])



return (
  <div style={{ display: "flex", width: "100%", justifyContent: "center" }} >
    <Box sx={{
      width: { xs: "100%", md: "65%" },
      display: "flex",
      alignItems: "stretch",
      flexDirection: "column",
      gap: "12px"
    }}>
      {posts.map((value, index):JSX.Element => {
        return <DetailCard timestamp={value.timestamp} emotionLevel={value.level} key={index} memoContent={value.content}></DetailCard>
      })}
    </Box>

  </div>

)
}

