<script lang="ts" setup>
import AliyunVodUpload from "aliyun-vod-upload"
import { ref, computed } from "vue";

function progress(e: any) {
    console.log("回调事件：", e)
}

const VodDom = ref();

const uploadStatus = computed(() => {
    return VodDom.value?.data.pauseDisabled
})

const resumeStatus = computed(() => {
    return VodDom.value?.data.resumeDisabled
})

const statusText = computed(() => {
    return VodDom.value?.data.statusText
})
function pauseUpload() {
    console.log("UploadDOM", VodDom.value)
    VodDom.value.pauseUpload();
}
function resumeUpload() {
    console.log("UploadDOM", VodDom.value)
    VodDom.value.resumeUpload();
}

</script>

<template>
    <div class="root">
        <div class="demo">
            <span>{{ statusText }}</span>
            <AliyunVodUpload ref="VodDom" @progress="progress" :uploadURL="'http://localhost:8000/vod'"
                :reflushURL="'http://localhost:8000/vod'"></AliyunVodUpload>
        </div>
        <div class="btn">
            <el-button :disabled="uploadStatus" @click="pauseUpload()">停止</el-button>
            <el-button :disabled="resumeStatus" @click="resumeUpload()">开始上传</el-button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.root {
    margin: 15px;
}

.btn {
    text-align: left;
}
</style>