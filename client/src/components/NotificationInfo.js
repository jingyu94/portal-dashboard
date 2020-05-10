import React,{memo} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
class NotificationInfo extends React.Component{
    render(){
        return(
            <TableRow >
                <TableCell width="5%" >{this.props.level}</TableCell>
                <TableCell width="5%">{this.props.alias}</TableCell>
                <TableCell width="10%">{this.props.createdDate}</TableCell>
                <TableCell width="20%">{this.props.message}</TableCell>
            </TableRow>
        )
    }
}
export default NotificationInfo