import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import issueService from '../services/IssueServices';
import 'font-awesome/css/font-awesome.min.css';

const ListIssues = () => {
const navigate = useNavigate();
const [ issues, setIssues ] = useState([]);

const editIssue = (id) => {
    navigate(`/updateissue/${id}`);
}

const deleteHandler = (id) => {
    issueService.deleteIssue(id)
    .then(()=> {
        alert ('The issue has been deleted successfully!!');
        setIssues(issues.filter(issue =>  issue.issueId !== id));
    })
    .catch((error) => {
        console.error('Error deleting issue' + error);
    });

}

useEffect(() => {
    issueService.getAllIssues()
    .then((res) => {
        setIssues(res.data);
    });

}, []);



  return (
    <div>
        <h2 className='text-center pt-4 pl-5'>Medical Issues</h2>
        <table className="table table-striped table-bordered mt-4 mb-5">
            <thead>
                <tr>
                    <th scope="col" style={{ backgroundColor: '#84A1C4'}}>Issue ID</th>
                    <th scope="col" style={{ backgroundColor: '#84A1C4'}}>Issue Title</th>
                    <th scope="col" style={{ backgroundColor: '#84A1C4'}}>Description</th>
                    <th scope="col" style={{ backgroundColor: '#84A1C4'}}>Status</th>
                    <th scope="col" style={{ backgroundColor: '#84A1C4'}}>Priority</th>
                    <th scope="col" style={{ backgroundColor: '#84A1C4'}}>Assignee</th>
                    <th scope="col" style={{ backgroundColor: '#84A1C4'}}>Created Date </th>
                    <th scope="col" style={{ backgroundColor: '#84A1C4'}}>Due Date</th>
                    <th scope="col" style={{ backgroundColor: '#84A1C4'}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {issues.map((issue) => (
                    <tr key={issue.issueId}>
                        <th scope="row">{issue.id}</th>
                        <td>{issue.title}</td>
                        <td>{issue.description}</td>
                        <td>{issue.status}</td>
                        <td>{issue.priority}</td>
                        <td>{issue.assignee}</td>
                        <td>{issue.createdDate}</td>
                        <td>{issue.dueDate}</td>
                        <td>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-success" style={{marginTop: '5px', backgroundColor: '#5A9F68',border: 'none'}} onClick={() => editIssue(issue.issueId)}>
                                    Update
                                </button>
                                <button className="btn btn-danger" style={{ marginLeft: '8px', marginTop: '5px', backgroundColor: '#FF6B6B',border: 'none'}} onClick={() => deleteHandler(issue.issueId)}>
                                  Delete
                                </button>
                            </div>
                        </td>
                        

                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default ListIssues;