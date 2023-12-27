import { Box, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { ReactElement } from "react";

const chartStyle:React.CSSProperties = {
    display: 'block',
    backgroundColor: 'tomato',
    flexBasis: '800px',
    height:'600px',
  }
  
export default function Chart():ReactElement{
    return(
        <Box sx={{ padding: { xs: '0', md: '0 16px 16px 16px' }, flexGrow: { xs: '0', md: '1' } }}>
        <div style={chartStyle}>chart</div>
        <Stack direction='row' spacing={2} sx={{marginTop:'12px'}}>
        <Box sx={{ minWidth: 120, mr:1 }}>
            <FormControl fullWidth>
              <InputLabel id="type-select-label">Chart Type</InputLabel>
              <Select
                labelId="type-select-label"
                id="type-select"
                label="Chart Type"
                defaultValue="candle"
              >
                <MenuItem value='candle'>Candle Stick</MenuItem>
                <MenuItem value='line'>Line</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="type-select-label">Time Slice</InputLabel>
              <Select
                labelId="type-select-label"
                id="type-select"
                label="Time Slice"
                defaultValue='1d'
              >
                <MenuItem value='1d'>Day</MenuItem>
                <MenuItem value='1m'>Month</MenuItem>
                <MenuItem value='1y'>Year</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Box>
    )
}