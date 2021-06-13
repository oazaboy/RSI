import axios from 'axios';
import Complaint from '../models/Complaint';
const ComplaintsAgent =
{
 create: (complaint: Complaint) =>
 axios.post('https://localhost:5001/api/complaints', complaint),
 list: () =>
axios.get('https://localhost:5001/api/complaints').then(response => response.data)
}
export default ComplaintsAgent;