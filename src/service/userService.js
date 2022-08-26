import user from "../constant/http-user"

const get = () => {
    return user.get(`/me`);
};
const update = (data) => {
    return user.put(`/me`, data);
};
const logout = () => {
    return user.post(`/logout`);
};
const avatar = (id) => {
    return user.get(`/${id}/avatar`);
};
const updateAvatar = (data) => {
    return user.post(`/me/avatar`, data);
};
const userService = {
    get,
    update,
    logout,
    avatar,
    updateAvatar
};
export default userService;