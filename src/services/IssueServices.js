import axios from 'axios';

const ISSUES_BASE_URL = 'http://localhost:8080/api/v1/issues';

class IssueServices {

    getAllIssues(){
        return axios.get(ISSUES_BASE_URL);
    }

    createIssue(issue){
        return axios.post(ISSUES_BASE_URL , issue);
    }

    getIssueById(issueId){
        return axios.get(ISSUES_BASE_URL + '/' + issueId);
    }

    updateIssue(issue,issueId){
        return axios.put(ISSUES_BASE_URL + '/' + issueId , issue);
    }

    deleteIssue(issueId){
        return axios.delete(ISSUES_BASE_URL + '/' + issueId);

    }




}

const issueService = new IssueServices();
export default issueService;