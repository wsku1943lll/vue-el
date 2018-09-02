const user = {
    state: {
        isLogin: true,
        token: '',
        userId: '',
        userName: '',
        authorities: []
    },
    mutations: {
        login(state, payload) {
            // console.log('login mutation');
            console.log(payload);
            state.isLogin = true;
            state.token = payload['data']['token'];
            state.userId = payload['data']['user_id'];
            state.userName = payload['data']['username'];
            state.authorities = payload['data']['authorities'];
        }
    }
};

export default user