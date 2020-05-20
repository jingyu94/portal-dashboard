import React,{memo} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
class ProcessInfo extends React.Component{
    render(){
        return(
            <TableRow >
                <TableCell width="5%">{this.props.processName}</TableCell>
                <TableCell width="10%">{this.props.version}</TableCell>
                <TableCell width="20%">{this.props.updatedDate}</TableCell>
            </TableRow>
        )
    }
}
export default ProcessInfo