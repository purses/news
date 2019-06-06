<template lang='pug'>
#app
    van-tabs
        van-tab(
            v-for='tab in tabList'
            :key='tab.label'
            :title='tab.label') {{ tab.label }}
</template>

<script>

export default {
    name: 'app',
    data () {
        return {
            tabList: [{
                label: '推荐',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }, {
                label: '娱乐',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }, {
                label: '体育',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }, {
                label: '图片',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }, {
                label: '视频',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }, {
                label: '手机',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }, {
                label: '财经',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }, {
                label: '汽车',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }, {
                label: '房产',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }, {
                label: '时尚',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }, {
                label: '热点',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }, {
                label: '美女',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }, {
                label: '搞笑',
                link: 'https://cpu.baidu.com/1022/af17778d/i?pu=1&promotion_media_channel=28223'
            }],
        }
    },
    components: {

    },
    mounted () {
        /* eslint-disable */
        // this.$http.get('https://cpu.baidu.com/1022/ba102a16/i', {
        //     params: {
        //         pu: 1,
        //         promotion_media_channel: 29579,
        //     },
        // }).then(resp => {
        //     console.log(resp);
        // });
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
