import React from 'react';
import '../style/Modal.scss';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import ProcessInfo from './ProcessInfo';
var processes=[];

const Modal = ({botName, processList, isOpen, close }) => {
    processes = processList;
  return (
    <div>
    {
      isOpen ?
      <div>
      <div className="Modal-overlay" onClick={close} />
        <div className="Modal">
        <p className="title">{botName}</p>
          <div className="content">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Process</TableCell>
                            <TableCell>Version</TableCell>
                            <TableCell>Run</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {processes.map((c,index)=>{
                            return <ProcessInfo  processName={c.processName} version ={c.version} updatedDate ={c.updatedDate} index={index} />
                        })} 
                    </TableBody>
                </Table>
          </div>
          <div className="button-wrap">
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>
      :
      null
    }
    </div>
  )
}
export default Modal;