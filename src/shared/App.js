import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Dashboard, Notification, Script } from 'pages';
import { Route,Switch } from 'react-router-dom';
import Header from '../components/Header';




const styles = theme => ({

root: {

width: "100%",

marginTop: theme.spacing.unit * 3,

overflowX: "auto"

},

table: {

minWidth: 1080

},

progress: {

margin: theme.spacing.unit * 2

}

});
class App extends React.Component {

render() {

const { classes } = this.props;

return (
    <div>
        <Header></Header>  
        <Route exact path="/" component={Dashboard}/>
            <Switch>
                <Route path="/notification" component={Notification}/>    
                <Route path="/script" component={Script}/>    
            </Switch>
    </div>        
);

}

}



export default withStyles(styles)(App);