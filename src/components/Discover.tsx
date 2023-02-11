import microphone from '../assets/microphone.svg'
import albums from '../assets/albums.svg'
import more from '../assets/more.svg'
import covers from '../assets/covers.jpg'
import { Box, Container } from '@mui/system'
import { Grid, Paper, Typography } from '@mui/material'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'




type Props = {}

const Discover = (props: Props)=> {
  return (
 
    
      <Grid>

    <Box display={{ xs: 'block', sm: 'flex' }}justifyContent='center' p={6} gap={4}>
      <Box >
          <h1>Discover new music</h1>
          <Box display='flex' gap={7}>
              <Box style= {{backgroundColor: '#202027'}}textAlign='center'>
                  <img src={microphone} alt="" />
                  <p>Charts</p>
              </Box>
              <Box style= {{backgroundColor: '#202027'}} textAlign='center'>
                  <img src={albums} alt="" />
                  <p>Albums</p>
              </Box>
              <Box style= {{backgroundColor: '#202027'}}textAlign='center'>
                  <img src={more} alt="" />
                  <p>more</p>
              </Box>
          </Box>
            <p>
              By join you can benefit by listening to the latest albums released.
            </p>
          </Box>
          <img width={300} src={covers} alt="" />

        
    </Box>
    <Paper sx={{width: '100%', position: 'fixed',
              bottom: 0,
           }} component="footer" square variant="outlined"
              style= {{backgroundColor: '#202027'}}
          >
            
          <Box display='flex' justifyContent='space-around'>
              <Box display='flex' gap={4}>
                    <Typography variant='h6' textAlign='center' style={{color:'white' }}>
                          About us
                    </Typography>
                    <Typography variant='h6' textAlign='center' style={{color:'white' }}>
                          Contact
                    </Typography>
              </Box>
              <Box display='flex' alignItems='center' gap={2} >
                    <img width={20} src={facebook} alt="logo Soundwave " />
                    <Typography variant='h6' textAlign='center' style={{color:'white' }}>
                          facebook
                    </Typography> 
              <Box display='flex' alignItems='center' gap={2}>
                    <img width={20} src={twitter} alt="logo Soundwave " />
                    <Typography variant='h6' textAlign='center' style={{color:'white' }}>
                          twitter
                    </Typography>
              </Box>
              </Box>
          </Box>
          
          </Paper>
      </Grid>

  

  
  
  )
}

export default Discover
