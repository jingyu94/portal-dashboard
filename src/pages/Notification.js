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
import * as auth from '../shared/Auth'


const apiUrl ='http://211.253.28.27:8080';
var notifications = [];
var params = {};

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state={
            total : '',
            alive : '',
            notifications : '',
        }
    }

componentDidMount() {
    var temp ='';
    let retrieveNotificationList= ()=>{ axios.post(apiUrl+'/peon/retrieveNotificationList',params,{
        headers : {
          'Accept' : 'application/json', 
          'Authorization' : auth.authorization,
              }
          }
        )
    .then(response=>{
        notifications = response.data.body.list;
         this.setState({
            notifications : response.data.body.list,
            total : response.data.body.total,
            alive : response.data.body.alive,
        }) 
    })
}
    retrieveNotificationList();
    this.timer=setInterval(() => {
        retrieveNotificationList();
    }, 10000);
    
    }

    
    render() {
        return (
            <Paper>    
            <div>
            <h1>Notification List</h1>
                <p>total : {this.state.total} / alive : {this.state.alive}<br></br></p>
            </div>
            <div>
                <Table>
                    <TableHead>
                        <div className="theader">
                            <TableCell width='3%'>level</TableCell>
                            <TableCell width='9%'>botAlias</TableCell>
                            <TableCell width='18%'>TimeStamp</TableCell>
                            <TableCell width='15%'>Messages</TableCell>
                        </div>
                    </TableHead>
                    <TableBody className = "tcell">
                        {notifications.map((c,index)=>{
                            return <NotificationInfo deviceId={c.deviceId} uuid={c.uuid} level ={c.level} alias ={c.alias} createdDate ={c.createdDate} message ={c.message} index={index} />
                        })} 
                    </TableBody>
                </Table>
            </div>
            </Paper>
        );
        
        }




    }

    

export default Notification;