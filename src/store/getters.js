const getters = {
    token: state => state.user.token,
    hasUserInfo: state => state.user.hasUserInfo,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    baseInfo: state => state.user.baseInfo
};
export default getters;