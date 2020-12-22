import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from  '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// stopped at 14:58 https://www.youtube.com/watch?v=hiiaHyhhwBU&feature=emb_title

const useStyles = makeStyles((theme) => ({
    root: {
      margin: "50px",
      padding:theme.spacing(3,2)
      },
    flex: {
        display:"flex",
    },
    topicsWindow: {
        width:"30%",
        height:"300px",
        borderRight:"1px solid black",
    },
    chatWindow: {
        width:"70%",
        height:"300px",
    } ,
    chatBox: {
        width:"85%",
    },
    button: {
        width:"15%"
    }    
    
  }));

export default function Dashboard(){
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <h3>Chat App</h3>
                <h5>placeholder</h5>

                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                            ['topic'].map(topic => 
                            <ListItem key={topic} button>
                                <ListItemText primary={topic} />
                            </ListItem>
                            )}
                        </List>

                    </div>
          
                    <div className={classes.chatWindow}>
                    
                            {
                            [{from: 'user', msg: "hello"}].map(topic => 
                                <div className={classes.flex}>
                                </div>
                            )}
                    
                    </div>
                </div>
            </Paper>  

             
        </div>
)};
