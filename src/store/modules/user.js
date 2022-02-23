export default{
    state:{
        name:'ranshizhang',
        age:'22',
        sex:'boy'
    },
    getters:{
        getName(state){
            if(state.name == 'ranshizhang'){
                return 'lishiyu'
            }else{
                return 'ranranran'
            }
        }
    },
    mutations:{
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AGE: (state, age) => {
            state.age = age
        },
    },
    actions:{
        async setName({ commit }, name) {
            commit('SET_VIP', name)
        },
        async setAge({ commit }, age) {
            commit('SET_AGE', age)
        },
    }
}
