import React,{memo} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Modal from './NotifiacationDetailModal';
import axios from 'axios';
import { Component } from 'react';
import * as auth from '../shared/Auth'
const apiUrl ='http://211.253.28.27:8080';
class NotificationInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen : false,
            deviceId:'',
            uuid:'',
            notifications : '',
            logFile :'',
            log : '',
        }
    }

    openModal = (deviceId,uuid) => {
        this.retrieveNotificationDetail(deviceId,uuid,)
        this.setState({ 
            isModalOpen: true,
         });
      }
      
    closeModal = () => {
        this.setState({ isModalOpen: false }); 
      }

        retrieveNotificationDetail = (deviceId,uuid)=> {
            var params={};
            params.command = 'sendLogFile';
            params.deviceId = deviceId;
            params.uuid = uuid;
            axios.post(apiUrl+'/peon/command',params,{
           headers : {
             'Accept' : 'application/json', 
             'Authorization' : auth.authorization,
               }
             }
           )
       .then(response=>{
            this.setState({
                notifications : response.data.body,
                deviceId : response.data.body.deviceId,
                logFile : response.data.body.logFile,
            })
            this.retrieveLogFile(response.data.body.deviceId,response.data.body.logFile)
        })
        
       .catch(err => console.log(err));
    }

    retrieveLogFile = (deviceId,logFile)=> {  axios.get(apiUrl+'/peon/retrieveLogFile?deviceId='+deviceId+'&logFile='+logFile,{
        headers : {
          'Accept' : 'application/json', 
          'Authorization' : auth.authorization,
            }
          }
        )
    .then(response=>{
         this.setState({
            log : response,
        })
    })
}




    render(){
        return(
        <div>
            <TableRow onClick={()=> this.openModal(this.props.deviceId,this.props.uuid)}>
                <TableCell >{this.props.level}</TableCell>
                <TableCell >{this.props.alias}</TableCell>
                <TableCell >{this.props.createdDate}</TableCell>
                <TableCell >{this.props.message}</TableCell>
            </TableRow>
            <Modal notificationDetail={this.state.notifications} isOpen={this.state.isModalOpen} log={this.state.log} close={this.closeModal}>
            </Modal>
        </div>
        )
    }
}
export default NotificationInfo