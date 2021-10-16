import React from 'react'
import {Card,CardContent,Box,TextField,Button} from '@material-ui/core';


export default function LoginPage() {
    return (
        <div>
           <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <Box >
        <TextField style={{width:'100%'}} id="standard-basic" label="Username" variant="standard" />
        <br/>
        <br/>
        <TextField style={{width:'100%'}} id="standard-basic" label="Password" type="password" variant="standard" />
        <br/>
        <br/>
        <Button style={{width:'100%'}} variant="contained">Login</Button>
        <br/>
        <br/>
        <p>Ainda não tens uma conta? <a href="register">Regista-te!</a></p>
        </Box>
        </CardContent>
        </Card>
        </div>
    )
}
