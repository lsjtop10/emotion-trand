import axios from "axios";
import { API_BASE_URL } from "../constants";
import { useUserAccessToken } from "../stores/clientState";
import urlJoin from "url-join";
import { Post } from "../@types/DTO";




export const GetPosts = async function (accessToken:string):Promise<Post[]> {

    const res = await axios.get<{ elements: Post[] }>(urlJoin(API_BASE_URL, "/posts"), {
        headers: {
            "accessToken": accessToken,
        },
        withCredentials: true
    })

    return res.data.elements
}


export const PostPost = async function (post:Post){
    const { accessToken } = useUserAccessToken()

    return await axios.post(urlJoin(API_BASE_URL, "/posts"),{
        timestamp: Date.now(),
        level: post.level,
        content: post.content,
      },{
        headers: {
          accessToken: accessToken,
        }
      }
    )
}