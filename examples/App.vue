<template>
    <div id="app">
        <Select style="width: 200px;">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            cityList: [
                {
                    value: 'beijing',
                    label: '北京市'
                },
                {
                    value: 'shanghai',
                    label: '上海市'
                },
                {
                    value: 'shenzhen',
                    label: '深圳市'
                },
                {
                    value: 'hangzhou',
                    label: '杭州市'
                },
                {
                    value: 'nanjing',
                    label: '南京市'
                },
                {
                    value: 'chongqing',
                    label: '重庆市'
                }
            ]
        };
    }
};
</script>

<style lang="scss">
    @import "../src/styles/index.scss";

    #app {
        width: 1000px;
        margin: 10px auto;
        border: 1px solid #eee;
        padding: 10px;
    }
</style>
