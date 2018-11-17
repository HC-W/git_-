export default {
    namespaced: true,
    // 状态源
    state: {
        count: 10,
        AllTopic: [],
        loading: false
    },
    // 简化
    actions: {
        // 异步的方法
        // 1、提取零碎的状态
        addCount({ commit, dispatch, state }, arg) {
            // 可以进行异步操作的中转站
            // console.log(store)
            // 你只能在mutation里面去修改
            // store.state.count=100;
            // console.log(arg)
            // console.log("我接到你的通知了！");
            // 通过commit去通知我们的mutation
            commit('addCount', arg)
        },
        // 2.提取数据接口 统一分发管理
        // https://cnodejs.org/api/v1/user/yanlele?accesstoken=
        async User() {

        },
        // 文章 https://cnodejs.org/api/v1/topic/5bb4caa69545eaf107b9c7e6?accesstoken=
        async Topic() {

        },
        // 首页: https://cnodejs.org/api/v1/topics?page=1&limit=20&tab=all&mdrender=true
        async AllTopic({ commit }) {
            commit('isLoading')
            let data = await (await fetch('https://cnodejs.org/api/v1/topics?page=1&limit=20&tab=all&mdrender=true')).json();
            commit('endLoading')
            commit('AllTopic', data)
        }

    },
    mutations: {
        // 同步的方法
        addCount(state, arg) {
            state.count = arg
        },
        AllTopic(state, arg) {
            state.AllTopic = state.AllTopic.concat(arg);
        },
        isLoading(state) {
            state.loading = true
        },
        endLoading(state) {
            state.loading = false
        }
    },
    // 3、数据过滤 （缓存） ==> computed
    getters: {
        CnodeGood(state) {
            // console.log(state)
            console.log(state.AllTopic);
            if(state.AllTopic.length) {
                return state.AllTopic[0].data.filter((item) => {
                    return item.good
                });
            }else {
                return []
            }
            
        }
    }
}