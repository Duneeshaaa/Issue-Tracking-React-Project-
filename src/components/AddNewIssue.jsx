import React, { useState } from 'react';
import issueService from '../services/IssueServices';
import { useNavigate } from 'react-router-dom'; 

const AddNewIssue = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        id: '',
        title: '',
        description: '',
        status: 'Pending',// Set an initial status,
        priority: '',
        assignee: '',
        createdDate: '',
        dueDate:''
    });

    const saveIssue = (e) => {
        e.preventDefault();

        const issue = {
            id: state.id,
            title: state.title,
            description: state.description,
            status: state.status,
            priority: state.priority,
            assignee: state.assignee,
            createdDate: state.createdDate,
            dueDate: state.dueDate
        };

        issueService.createIssue(issue)
            .then((res) => {
                alert('Issue Successfully Addedd!!!');
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };


  return (
    <div>
    <div className="container mb-5">
        <div className="row">
            <div className="card col-md-6 offset-md-3 mt-5">
                <div className="card-body">
                    <h3 className="card-title text-center">Add Issue</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label"> Issue ID </label>
                            <input type="number" className="form-control" name="id" id="id" placeholder="Enter issue Id" value={state.id} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label"> Issue Title </label>
                            <input type="text" className="form-control" name="title" id="title" placeholder="Enter Issue Title" value={state.title} onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label"> Description </label>
                            <textarea className="form-control" name="description" id="description" placeholder="Enter issue description" value={state.description} onChange={handleInputChange}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label"> Status </label>
                            <select className="form-select" name="status" id="status" value={state.status} onChange={handleInputChange} >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label"> Priority </label>
                            <select className="form-select" name="priority" id="priority" value={state.priority} onChange={handleInputChange} >
                                <option value="High">High</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="assignee" className="form-label"> Assignee </label>
                            <input type="text" className="form-control" name="assignee" id="assignee" placeholder="Enter the assignee" value={state.assignee} onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="createdDate" className="form-label"> Created Date </label>
                            <input type="date" className="form-control" name="createdDate" id="createdDate" placeholder="Enter the created date" value={state.createdDate} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dueDate" className="form-label"> Due Date </label>
                            <input type="date" className="form-control" name="dueDate" id="dueDate" placeholder="Enter the due date" value={state.dueDate} onChange={handleInputChange} />
                        </div>

                        <button type="button" className="btn btn-primary" style={{backgroundColor: '#5A9F68',border: 'none'}} onClick={saveIssue}> Submit </button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default AddNewIssue;
