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
    mutation:{

    },
    action:{
        async setVip({ commit }, isVIP) {
            commit('SET_VIP', isVIP)
        },
        async setBusters({ commit }, val) {
            commit('SET_BUSTERS', val)
        },
    }
}