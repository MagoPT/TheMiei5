import React, {useState} from 'react'
import {Card,CardContent,TextField,Button,Grid} from '@material-ui/core';








export default function RegistPage() {
    const [startDate, setStartDate] = useState(new Date());


    return (
        <div>
            <br/>
        <br/>   
        <Card sx={{ minWidth: 275 ,marginLeft:'10px',marginRight:'10px'}}>
        <CardContent>
        <Grid container spacing={8} columns={16}>
            <Grid item xs={8}>
                <h3 style={{float:"left"}}>Como Estudante</h3>
                <TextField style={{width:'100%'}} id="standard-basic" label="Username" variant="standard" />
                <br/>
                <br/>
                <TextField style={{width:'100%'}} id="standard-basic" label="Email" variant="standard" />
                <br/>
                <br/>
                <TextField style={{width:'100%'}} id="standard-basic" label="Password" type="password" variant="standard" />
                <br/>
                <br/>
                <TextField style={{width:'100%'}} id="standard-basic" label="" type="date" variant="standard" />
                <br/>
                <br/>
                <Button style={{width:'100%'}} variant="contained">Registar</Button>
                <br/>
                <br/>
            </Grid>
            <Grid item xs={8}>
                <h3 style={{float:"left"}}>Como Tutor</h3>
                <TextField style={{width:'100%'}} id="standard-basic" label="Username" variant="standard" />
                <br/>
                <br/>
                <TextField style={{width:'100%'}} id="standard-basic" label="Email" variant="standard" />
                <br/>
                <br/>
                <TextField style={{width:'100%'}} id="standard-basic" label="Formação" variant="standard" />
                <br/>
                <br/>
                <TextField style={{width:'100%'}} id="standard-basic" label="Password" type="password" variant="standard" />
                <br/>
                <br/>
                <TextField style={{width:'100%'}} id="standard-basic" label="" type="date" variant="standard" />
                <br/>
                <br/>
                <Button style={{width:'100%'}} variant="contained">Registar</Button>
                <br/>
                <br/>
            </Grid>
        </Grid>
        </CardContent>
        </Card> 
        </div>
    )
}
