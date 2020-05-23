import React, {Component} from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ScriptInfo from '../components/ScriptInfo'
import '../style/Table.css'
import * as auth from '../shared/Auth'


const apiUrl ='http://211.253.28.27:8080';
var scripts = [];
var params = {};

class Script extends Component {
    constructor(props) {
        super(props);
        this.state={
            scriptList : '',
        }
    }

componentDidMount() {
    var temp ='';
    let retrieveScriptList= ()=>{ axios.get(apiUrl+'/peon/retrieveScriptList',{
        headers : {
          'Accept' : 'application/json', 
          'Authorization' : auth.authorization,
              }
          }
        )
    .then(response=>{
        scripts = response.data.body.list;
         this.setState({
             scriptList : response.data.body.list,
        }) 
    })
}   

        retrieveScriptList();
    }

    
    render() {
        return (
            <Paper>    
            <div>
            <h1>Script List</h1>
             
                <p>total : {this.state.scriptList.length}<br></br></p>
            </div>
            <div>
                <Table>
                    <TableHead>
                        <div className="theader">
                            <TableCell width='3%'>processName</TableCell>
                            <TableCell width='9%'>version</TableCell>
                        </div>
                    </TableHead>
                    <TableBody className = "tcell">
                        {scripts.map((c,index)=>{
                            return <ScriptInfo processName ={c.processName} version = {c.version}/>
                        })} 
                    </TableBody>
                </Table>
            </div>
            </Paper>
        );
        
        }




    }

    

export default Script;