import React, { useState, useEffect } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody }
from '@material-ui/core';
import Complaint from '../models/Complaint';
import ComplaintsAgent from '../api/agent';
const ComplaintLayout: React.FC = () => {
 const [complaints, setComplaints] = useState<Complaint[]>([])
 useEffect(() => {
 const load = async () => {
 const comp = await ComplaintsAgent.list()
 setComplaints(comp)
 }
 load()
 }, [])
 return (
 <TableContainer component={Paper}>
 <Table aria-label="simple table">
 <TableHead>
 <TableRow>
 <TableCell>Tytuł</TableCell>
 <TableCell>Email</TableCell>
 <TableCell>Kategoria</TableCell>
 <TableCell>Szczegóły</TableCell>
 </TableRow>
 </TableHead>
 <TableBody>
 {complaints.map(complaint => (
 <TableRow key={complaint.id}>
 <TableCell component="th" scope="row">
 {complaint.title}
 </TableCell>
 <TableCell >{complaint.sender}</TableCell>
 <TableCell >{complaint.complaintCategory}</TableCell>
 <TableCell >{complaint.details}</TableCell>
 </TableRow>
 ))}
 </TableBody>
 </Table>
        </TableContainer>
     );
    }
    export default ComplaintLayout;
    