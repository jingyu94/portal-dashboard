import React,{memo} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Modal from './DeviceDetailModal';
import axios from 'axios';
const apiUrl ='http://211.253.28.27:8080';
var retrieveDetailParam = {
    deviceId : ''
};

import { Component } from 'react';


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
         'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmF0bHMxMjNAZ21haWwuY29tIiwiaWF0IjoxNTg5MDc5MTQ5LCJleHAiOjE1ODkxNDM5NDl9.eWWR2MIt4nORnqXa8HBbPUwOAAUs1ZL2B3-ZPDxaLMHO_F98Ww14Oje9lnewJBBZH8IAjF650CxFX7eDXdb5UQ'
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
            <main>
              <Modal botName={this.props.alias} processList={this.state.processList} isOpen={this.state.isModalOpen} close={this.closeModal} />
            </main>
            <div>
            <TableRow onClick={()=> this.openModal(this.props.deviceId)}>
                <TableCell>{this.props.alias}</TableCell>
                <TableCell>{this.props.status}</TableCell>
            </TableRow>
            </div>
            </div>       
        )
    }
}
export default DeviceInfo