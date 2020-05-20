import React, { Component } from 'react'
import {connect } from 'react-redux'
 
import Search from '../components/Search'
import SearchResult from '../components/SearchResult'
 
import * as actions from '../store/actions'
import { retrieveDeviceList } from 'actions'
import RetrieveDevices from '../components/retrieve'


class RetrieveContainer extends Component{
    constructor(props){
        super(props);
        this.state ={
            total : ''
        }
    }

    onChangeInput = (e) =>{
        this.setState({
            total : e.target.value
        })
    }
    
    render(){
        return (
            <RetrieveDevices
                retrieve = {this.props.retrieve}
            />



            /* 
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>deviceId</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.data.body.list.map((c,index)=>{
                            return <NotificationInfo deviceId ={c.alias} status ={c.status} index={index} />
                        })} 
                    </TableBody>
                </Table> */               
        )
    }
}

const mapStateToProps = (state) => {
    return {
      data : state.search.data,
      error: state.search.error
    }
  }
  

const mapDispatchToProps = (dispatch) => {
    return {
        retrieve : ()=>{
            dispatch({type: actions.retrieveDeviceList});
        }
    }
  }