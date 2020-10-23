/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import userimg from '../dist/img/1.jpg';
import sessionUsers1Img from '../dist/img/2.png';
import sessionUsers2Img from '../dist/img/4.jpg';

Vue.use(Vuex);

const INIT_DATA = 'INIT_DATA'
const now = new Date();
const store = new Vuex.Store({
    state: {
        // 当前用户
        user: {
            name: '休扬',
            img: userimg
        },
        // 会话列表
        sessions: [],
        // 当前选中的会话
        currentSessionId: 1,
        // 过滤出只包含这个key的会话
        filterKey: ''
    },
    getters: {
      getCurrentUserInfo: state => state.user,
      getSessions: state => state.sessions,
      getSessionsBySid: (state) => state.sessions.find(session => session.id === 2)
    },
    mutations: {
        [INIT_DATA] (state) {
          axios.get('/contact/list').then(function (response) {
            state.sessions=response.data.sessions
          })
          // console.log(axios)
          // Vue.http.get('/contact/list').then(
          //   response => {
          //     state.sessions = response
          //   }
          // )
        }
        // 发送消息
        // SEND_MESSAGE ({ sessions, currentSessionId }, content) {
        //     let session = sessions.find(item => item.id === currentSessionId);
        //     session.messages.push({
        //         content: content,
        //         date: new Date(),
        //         self: true
        //     });
        // },
        // // 选择会话
        // SELECT_SESSION (state, id) {
        //     state.currentSessionId = id;
        // } ,
        // // 搜索
        // SET_FILTER_KEY (state, value) {
        //     state.filterKey = value;
        // }
    },
    actions: {
      initData (context) {
        context.commit(INIT_DATA)
      }
    },
});

store.watch(
    (state) => state.sessions,
    (val) => {
        console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;
export const actions = {

};
