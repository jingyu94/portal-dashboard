import React, {Component} from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import NotificationInfo from '../components/NotificationInfo'
import '../style/Table.css'


const apiUrl ='http://211.253.28.27:8080';
var notifications = [];
var params = {};

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state={
            num : '',
            notifications : '',
        }
    }

componentDidMount() {
    var temp ='';

     axios.post(apiUrl+'/peon/retrieveNotificationList',params,{
        headers : {
          'Accept' : 'application/json', 
          'Authorization' : ''
              }
          }
        )
    .then(response=>{
        notifications = response.data.body.list;
         this.setState({
            notifications : response.data.body.list,
            num : response.data.body.alarm + response.data.body.alive + response.data.body.normal
        }) 
    })

    }
    
    
    
    
    componentWillUnmount() {
    
    }
     
    callApi = async () => {
    
    }
    
    render() {
        return (
            <Paper>    
            <div>
            <h1>Notification List</h1>
                <p>total : {this.state.num}<br></br></p>
            </div>
            <div>
                <Table>
                    <TableHead>
                        <TableRow className="theader">
                            <TableCell>level</TableCell>
                            <TableCell>botAlias</TableCell>
                            <TableCell>TimeStamp</TableCell>
                            <TableCell>Messages</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className = "tcell">
                        {notifications.map((c,index)=>{
                            return <NotificationInfo level ={c.level} alias ={c.alias} createdDate ={c.createdDate} message ={c.message} index={index} />
                        })} 
                    </TableBody>
                </Table>
            </div>
            </Paper>
        );
        
        }




    }

    

export default Notification;