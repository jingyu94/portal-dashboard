import React,{memo} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Modal from './DeviceDetailModal';
import axios from 'axios';
import { Component } from 'react';
import * as auth from '../shared/Auth'
const apiUrl ='http://211.253.28.27:8080';
var retrieveDetailParam = {
    deviceId : ''
};



class DeviceInfo extends React.Component{    
    constructor(props) {
        super(props);
        this.state={
            deviceId:0,
            isModalOpen: false,
            processList :[],
        }
    }
    retrieveDeviceDetail = (deviceId) => {
        retrieveDetailParam.deviceId = deviceId
        axios.get(apiUrl+'/peon/retrieveProcessList?deviceId='+deviceId,{
       headers : {
         'Accept' : 'application/json', 
         'Authorization' : auth.authorization,
           }
         }
       )
   .then(response=>{
       this.setState({
           processList : response.data.body.list,

       })
   })
   .catch(err => console.log(err));
}


    openModal = deviceId => {
        this.retrieveDeviceDetail(deviceId);
        this.setState({ 
            isModalOpen: true,
         });
      }
      
    closeModal = () => {
        this.setState({ isModalOpen: false }); 
      }



    render(){
        return(
            <div>
                <Modal botName={this.props.alias} processList={this.state.processList} isOpen={this.state.isModalOpen} close={this.closeModal} />
                <TableRow onClick={()=> this.openModal(this.props.deviceId)}>
                    <TableCell>{this.props.alias}</TableCell>
                    <TableCell>{this.props.status}</TableCell>
                </TableRow>
            </div>       
        )
    }
}
export default DeviceInfo