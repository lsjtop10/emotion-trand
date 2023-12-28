import { Box, TextField, Slider, Button, SxProps, Theme, Grid, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import * as React from 'react';
import CandlestickChart from '../components/charts/Candlestick';
import LineChart from '../components/charts/Line';
import styled from 'styled-components';
import { AspectRatio } from '@mui/icons-material';

const candlestickEl: [string, number, number, number, number][] = [
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15]
]
const lineEl: [string, number][] = [
  ["2004", 1000],
  ["2005", 1170],
  ["2006", 660],
  ["2007", 1030],
  ["2004", 1000],
  ["2005", 1170],
  ["2006", 660],
  ["2007", 1030],
  ["2004", 1000],
  ["2005", 1170],
  ["2006", 660],
  ["2007", 1030]
]

const ChartContainer = styled.div`
  aspect-ratio: 16/10;
`

export default function ChartPage() {
  const [value, setValue] = React.useState<number>(30);
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const min: number = -1000;
  const max: number = 1000;

  let chart = LineChart;
  return (
    <>

      <Stack direction='column' sx={{width:{xs:"100%", md:"70%"}, height:"100%"}}>

        <ChartContainer>
          {chart({ elements: lineEl, width: "100%", height: "100%" })}
        </ChartContainer>

        <Stack direction='row' spacing={2} sx={{ marginTop: '12px' }}>
          <Box sx={{ minWidth: 120, flexBasis: { md: "12rem" }, mr: 1 }}>
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

          <Box sx={{ minWidth: 120, flexBasis: { md: "12rem" } }}>
            <FormControl fullWidth>
              <InputLabel id="type-select-label">Time Slice</InputLabel>
              <Select
                labelId="type-select-label"
                id="type-select"
                label="Time Slice"
                defaultValue='1d'
              >
                <MenuItem value='1d'>Day</MenuItem>
                <MenuItem value='1w'>Week</MenuItem>
                <MenuItem value='1m'>Month</MenuItem>
                <MenuItem value='1y'>Year</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Stack>

      <Box
        sx={{
          flexGrow: 1,
          flexShrink: 0,
          flexBasis:"300px",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          gap: '16px'
        }}>

        <TextField id="emotion-fields" label='emotion level' required variant="standard"></TextField>
        <Slider aria-label="emotion level slider" value={value} onChange={handleChange} min={min} max={max} />
        <TextField id="memo-fields" label='memo' multiline minRows={7} maxRows={7} sx={{ width: '100%' }}></TextField>
        <Button variant="contained" sx={{ width: '100%' }}>submit</Button>
      </Box>
    </>
  )
}
