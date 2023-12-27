import { useTheme } from '@emotion/react';
import { Box, Theme } from '@mui/material';
import React from 'react';




const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    
    <>
    <Box sx={{backgroundColor:'#dadada', padding:'5px'}}>
      <a href="https://www.flaticon.com/kr/free-icon/bar-chart_453897?term=%EC%B0%A8%ED%8A%B8&page=1&position=5&origin=search&related_id=453897" title="차트 아이콘">차트 아이콘  제작자: DinosoftLabs - Flaticon</a>
    </Box>
    </>
  );
};

export default Footer;
