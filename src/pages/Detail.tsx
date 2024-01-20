import { Box } from "@mui/material";
import DetailCard from "../components/DetailCard";
import { useEffect, useState } from "react";
import axios from "axios";
import urlJoin from "url-join";
import { useUserAccessToken } from "../stores/clientState";
import { API_BASE_URL } from "../constants";
import { GetPosts} from "../services/posts";
import { Post } from "@src/@types/DTO";


export default function DetailPage() {

  const {accessToken} = useUserAccessToken()
  const [posts, setPosts] = useState<Post[] | never[]>([]);

  useEffect(()=>{
    GetPosts(accessToken)
    .then((res) => setPosts(res))
    .catch((e) => console.log(e))
  },[])

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

