<template>
  <div id="app">
    <div class="sidebar">
      <card></card>
      <list></list>
    </div>

    <div class="main">
        <div style="height:40px;line-height:40px;width:100%;text-align:center;">
              <div style="padding:auto">
                绘茶
              </div>
              <hr style="width:98%;margin:auto;height:1px;border:0px;background-color:#e1e1e1;color:#e1e1e1;"/>

        </div>
        <message></message>
        <enter></enter>
    </div>
  </div>
</template>

<script>
import { actions } from './store';

import Card from './components/card';
import List from './components/list';
import Enter from './components/enter';
import Message from './components/message';
import data from './mock/mock.js';

export default {
  name: 'app',
  vuex: {
    actions: actions
  },
  components: {
    Card,List,Enter,Message
  },
  // created () {
  //   this.initData();
  // }
}
</script>

<style lang="less" scoped>
#app {
    margin: 20px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }
    .sidebar, .main {
        height: 100%;
    }

    .main {
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }
    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .message {
        height: ~'calc(100% - 160px)';
    }
}
</style>
