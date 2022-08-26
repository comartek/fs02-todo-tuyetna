import userId from '../constant/http-id'

const login = (data) => {
    return userId.post(`/login`, data);
};
const signup = (data) => {
    return userId.post(`/register`, data);
};

const userToken = {
    login,
    signup

};
export default userToken;