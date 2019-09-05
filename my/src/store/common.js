export default{
    state:{
        authorization:''
    },
    mutations:{
        login(state){
            let authorization = localStorage.getItem('authorization')
            state.authorization = authorization
        },
        logout(state){
            state.authorization = ''
            localStorage.removeItem('authorization')
        }
    }
}