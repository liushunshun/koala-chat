<script>
import {
    mapGetters,
    mapState
} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            messages: 'getMessages'
        })
    },
    mounted: function() {
        var div = document.getElementById('message');
        div.scrollTop = div.scrollHeight;
    }
};
</script>

<template>
<div class="message">
    <ul>
        <li v-for="item in messages">
            <p class="time">
                <span>{{ item.time }}</span>
            </p>
            <div class="main">
                <img class="avatar" width="30" height="30" src="//g.alicdn.com/xspace/xspace-ui/2.5.3/favicon-96x96.png" />
                <div class="text">{{ item.text }}</div>
            </div>

        </li>

    </ul>
</div>
</template>

<style lang="less" scoped>
.message {
    height: 100px;
    padding: 10px 15px;
    overflow-y: scroll;

    ul {
        padding-left: 0;
    }

    li {
        margin-bottom: 15px;
        list-style: none;
        /*去掉小圆点*/
    }
    .time {
        margin: 7px 0;
        text-align: center;

        > span {
            display: inline-block;
            padding: 0 18px;
            font-size: 12px;
            color: #fff;
            border-radius: 2px;
            background-color: #dcdcdc;
        }
    }
    .avatar {
        float: left;
        margin: 0 10px 0 0;
        border-radius: 3px;
    }
    .text {
        display: inline-block;
        position: relative;
        padding: 0 10px;
        max-width: ~'calc(100% - 40px)';
        min-height: 30px;
        line-height: 2.5;
        font-size: 12px;
        text-align: left;
        word-break: break-all;
        background-color: #fafafa;
        border-radius: 4px;

        &:before {
            content: " ";
            position: absolute;
            top: 9px;
            right: 100%;
            border: 6px solid transparent;
            border-right-color: #fafafa;
        }
    }

    .self {
        text-align: right;

        .avatar {
            float: right;
            margin: 0 0 0 10px;
        }
        .text {
            background-color: #b2e281;

            &:before {
                right: inherit;
                left: 100%;
                border-right-color: transparent;
                border-left-color: #b2e281;
            }
        }
    }
}
</style>
