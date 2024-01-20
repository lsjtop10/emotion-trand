import { useTheme } from "@emotion/react";
import { Box, CardContent, Typography, Card, CardActions, Button } from "@mui/material";
import React from "react";

interface cardItem {
  emotionLevel: number;
  memoContent?: string;
  timestamp: number;
}

export default function DetailCard(props: cardItem) {

  const dateString: string = new Date(props.timestamp * 1000).toLocaleDateString(
    navigator.language
  );

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.emotionLevel}
        </Typography>
        <Typography variant="body2" sx={{marginTop:"2px"}}>
          {props.memoContent}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "right" }}>
          {dateString}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="error">Delete</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box>
      <Card variant="outlined"> {card}</Card>
    </Box>
  )
}

