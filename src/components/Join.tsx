import React from 'react'
import { Grid, Paper, TextField, Button} from '@mui/material'
import { Box} from '@mui/system'
import Typography from '@mui/material/Typography'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'

type JoinType = {
  username:string,
  password: string,
}


const Join: React.FC<{}> = ()=>{
  const [joinData, setJoinData] = React.useState<JoinType>({
    username:'',
    password:'',
  })

const dataJoin = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setJoinData({...joinData, [e.target.name]:e.target.value });
};

const handleSubmit = (e:React.ChangeEvent<HTMLInputElement>)=>{
  e.preventDefault();
  console.log(joinData)
};


  return (
      
      <Grid container
      
      alignItems='center' 
      justifyContent='center'
    
      
      marginBottom={20}
      spacing={6}
      columns={{xs:1, md:2}}
   
      >
      
      <Grid item md={1} >
        <Box  textAlign='center' justifyItems='center'>
              <Box >
                <Typography variant='h2' fontFamily='Poppins' >
                      Join the
                </Typography > 
        
            <Box mr={15}>
                <Typography  style={{color:'fuchsia' }}  variant='h2' fontFamily='Poppins'>
                      fun.
                </Typography> 
            </Box>
              </Box>
        </Box>    
      </Grid>
        
        <Grid item md={1}>
          

          <Paper sx={{padding: '1em', borderRadius: '0.8em', width:'80%'}}
                      style= {{backgroundColor: '#202027'}}
                      elevation={1} >
                <Box component='form' onSubmit={handleSubmit}>
                      {/* <Stack spacing={2}> esto es para separar las columna*/}
                <Typography sx={{mt:1,ml:1}} variant='h6' style={{color:'white' }}
                >
                      Name:
                </Typography>
                <TextField 
                  // name='username' 
                     margin='normal' 
                    type='text'
                    fullWidth 
                //  label='Email' 
                    sx={{mt:2, mb:1.5}} 
                    required
                //  onChange={dataJoin}
                 />
                <Typography sx={{mt:1,ml:1}} variant='h6'style={{color:'white' }}>
                    Email:
                </Typography>
                      <TextField 
                          name='username' 
                          margin='normal' 
                          type='text'
                          fullWidth 
                      //  label='Email' 
                          sx={{mt:2, mb:1.5}} 
                          required
                          onChange={dataJoin}
                />
                <Typography sx={{mt:1,ml:1}} variant='h6' style={{color:'white' }}>
                    Password:
                </Typography>
                      <TextField style={{borderInlineColor:'white', color:'white' }}
                        name='password' 
                        margin='normal' 
                        type='password' 
                        fullWidth 
                        // label='Password' 
                        sx={{mt:1.5, mb:1.5}} 
                        required
                        onChange={dataJoin}
                />
                        {/* </Stack> */}
                        <Box textAlign='center'>

                            <Button fullWidth type='submit' variant='contained' sx={{mt:1.5, width:'100%'}} >
                                  join now
                            </Button>
                        </Box>
              </Box>
          </Paper>
        </Grid>
        
          <Paper sx={{width: '110%', position: 'fixed',
              bottom: 0,
           }} component="footer" square variant="outlined"
              style= {{backgroundColor: '#202027'}}
          >
          <Box display='flex' justifyContent='space-around' >
              <Box display='flex' gap={2}>
              <p style={{color:'white'}}>About us</p>
                    <p style={{color:'white'}}>Contact</p>
              </Box>
              <Box display='flex' alignItems='center' gap={2} >
                    <img width={20} src={facebook} alt="logo Soundwave " />
                    <p style={{color:'white'}}> twitter</p>
              <Box display='flex' alignItems='center' gap={2}>
                    <img width={20} src={twitter} alt="logo Soundwave " />
                    <p style={{color:'white'}}> twitter</p>
                    
              </Box>
              </Box>
          </Box>
          
          </Paper>
          <span className='cir4'></span>
          <span className='cir5'></span>
     
      </Grid>
      
      
     
    
  )

}



export default Join
