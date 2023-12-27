import { Box, TextField, Slider, Button } from '@mui/material';
import * as React from 'react';
import Chart from '../components/Chart';

export default function ChartPage(){

    const min: number = -1000;
    const max: number = 1000;
  
    const [value, setValue] = React.useState<number>(30);
  
    const handleChange = (_event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };

    
    return(
        <>
        <Chart></Chart>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            gap: '16px',
            flexBasis: '270px'
          }}>

          <TextField id="emotion-fields" label='emotion level' required variant="standard" ></TextField>
          <Slider aria-label="Volume" value={value} onChange={handleChange} min={min} max={max} />
          <TextField id="memo-fields" label='memo' multiline minRows={7} maxRows={7} sx={{ width: '100%' }} ></TextField>
          <Button variant="contained" sx={{ width: '100%' }}>submit</Button>
        </Box>
        </>
       
    )
}