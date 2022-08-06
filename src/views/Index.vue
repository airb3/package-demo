<script setup lang="ts">
const tableData = [
    {
        component_name: "阿里云VOD上传组件",
        desc: "可用于阿里云视频点播服务，前端视频上传组件接口封装。",
        version: "v1.0.3",
        demo_link: "/#/vod"
    },
    {
        component_name: "视频点播播放器",
        desc: "可以用于播放mp4、webrtc、m3u8、flv格式在线视频流媒体。",
        version: "v1.0.1",
        demo_link: "/#/video"
    }
]

function openDemo(link: string) {
    window.open(link);
}
</script>

<template>
    <div class="root">
        <p>在线体验组件列表</p>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="序号" width="180" align="center"></el-table-column>
            <el-table-column prop="component_name" label="名称" width="180" align="left">
            </el-table-column>
            <el-table-column prop="desc" label="描述" width="320" align="left">
            </el-table-column>
            <el-table-column prop="version" label="版本" align="center">
            </el-table-column>
            <el-table-column label="在线体验">
                <template #default="scope">
                    <el-button @click="openDemo(scope.row.demo_link)" type="text">在线体验</el-button>
                    <el-button @click="openDemo('https://github.com/ijoery/package-demo')" type="text">GitHub
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>

<style lang="scss" scoped>
.root {
    margin: 15px;
    text-align: left;
}
</style>