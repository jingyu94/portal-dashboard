import React, { Component } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import DeviceInfo from '../components/DeviceInfo'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import '../style/Table.css'


const apiUrl ='http://211.253.28.27:8080';
var runningDevices = [];
var temp = [];
var retrieveDetailParam = {
    date : '',
    deviceId : ''
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            accessToken :'',
            total : '',
            connected : '0',
            running : '',
            idle : '',
            devices : '',
        }
    }





componentDidMount() {
    var tempNum=0;
    var botNames ={
        deviceIds : [
     ]};
    var params ={
        deviceIds : [
     ]};
this.timer = setInterval(this.progress, 20);

    
    
     //디바이스 리스트 조회하기
     axios.get(apiUrl+'/device/retrieveDeviceList?pageSize=100&sort=alias',{
        headers : {
          'Accept' : 'application/json', 
          'Authorization' : ''
              }
          }
        )
    .then(response=>{
        runningDevices = response.data.body.list;
         this.setState({
            devices : response.data.body.list,
            total:response.data.body.itemNum,
            numOfOffline : tempNum
        }) 
    

        retrieveLatestData();
        runningDevices.forEach(function(element){
            params.deviceIds.push(element.deviceId);
            botNames.deviceIds.push(element.alias);
            if(element.status=='1'){
                tempNum++;
                element.status = 'Disconnected';
            }
        })
    })
    .catch(err => console.log(err));
    
    /* axios.get(apiUrl + 'peon/retrieveProcessList', {
        params: params,
        headers: {
            'Accept': 'application/json',
            'Authorization' : ''
        }
    }) */
    
     let retrieveLatestData = ()=> {
         axios.post(apiUrl+'/peon/retrieveLatestData',params,{
        headers : {
          'Accept' : 'application/json', 
          'Authorization' : ''
            }
          }
        )
    .then(response=>{
        var tempIdle = 0;
        var tempRunning = 0;
        temp = response.data.body.list;    
        temp.forEach(function(element){
             if(element.status=='Running'){
                 tempRunning++;
            }else
            tempIdle++;
        })
        for(var i in temp){
            for(var j in runningDevices){
                if(runningDevices[j].deviceId == temp[i].deviceId)
                runningDevices[j].status =  temp[i].status;        
            }
        }
        this.setState({
            connected:response.data.body.total,
            numOfOffline : tempNum,
            running : tempRunning,
            idle : tempIdle
        })
    })
    .catch(err => console.log(err));
     }
    }
    
    
    
    componentWillUnmount() {
    
    clearInterval(this.timer);
    
    }
     
    callApi = async () => {
    
    }
    
    render() {

        
        return (
            <Paper>    
            <div>         
            <h1>Bot List</h1>
                <p>total : {this.state.total}<br></br>
                    disconnected : {this.state.total-this.state.connected}<br></br>
                    running : {this.state.running}<br></br>
                    Idle : {this.state.idle}</p>
            </div>
            <div>
                <Table>
                    <TableHead className ="theader">
                        <TableRow>
                            <TableCell>deviceId</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className ="tcell" >
                        {runningDevices.map((c,index)=>{
                            return <DeviceInfo deviceId={c.deviceId} alias ={c.alias} status ={c.status} index={index} />
                        })} 
                    </TableBody>
                </Table>
            </div>
            </Paper>
        );
        
        }




    }

    

export default Dashboard;