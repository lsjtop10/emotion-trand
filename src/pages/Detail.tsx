import { Box } from "@mui/material";
import DetailCard from "../components/DetailCard";

export default function DetailPage() {

  return (

    <div style={{ display: "flex", width: "100%", justifyContent: "center" }} >
      <Box sx={{
        width: { xs: "100%", md: "65%" },
        display: "flex",
        alignItems: "stretch",
        flexDirection: "column",
        gap: "12px"
      }}>
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
        <DetailCard timestamp={1703641261} emotionLevel={700} />
      </Box>

    </div>



  )
}

