import axios from 'axios';

export default axios.create({
    baseURL: "https://irt4nptscl.execute-api.us-east-2.amazonaws.com/prod"
});