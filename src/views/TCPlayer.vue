<script setup lang="ts">
import Video from 'video-player'
import { ref, nextTick, watch, reactive } from 'vue'

const options = reactive({
    autoplay: true
})

const vd = ref();

const message = reactive({
    isFullScreen: false,
    videoTime: 0,
    VideoResolution: "0 * 0",
    videoCurrentTime: 0.00
})

const play = () => {
    console.log('播放开始事件')
}
nextTick(() => {
    // TODO
})

const pause = () => {
    console.log('播放暂停事件')
}

const ready = () => {
    console.log('播放器创建完成')
}

function getDuration() {
    console.log("获取视频时长", vd.value.tcPlayer.duration());
    message.videoTime = vd.value.tcPlayer.duration();
}

function getCurrentTime() {
    console.log("获取当前进度", vd.value.tcPlayer.currentTime() / 60);
    message.videoCurrentTime = vd.value.tcPlayer.currentTime();
}

function setCurrentTime() {
    let time = Math.random() * 1000;
    console.log("设置当前进度", vd.value.tcPlayer.currentTime(time));
}

function getIsFullscreen() {
    console.log("是否全屏", vd.value.tcPlayer.isFullscreen());
    message.isFullScreen = vd.value.tcPlayer.isFullscreen();
}

function requestFullscreen() {
    console.log("进入全屏", vd.value.tcPlayer.requestFullscreen());
}

function getVideoResolution() {
    console.log("获取分辨率", vd.value.tcPlayer.videoWidth() + ' * ' + vd.value.tcPlayer.videoHeight());
    message.VideoResolution = vd.value.tcPlayer.videoWidth() + ' * ' + vd.value.tcPlayer.videoHeight()
}

const source = ref("https://1500005692.vod2.myqcloud.com/43843706vodtranscq1500005692/11814a36387702299186115471/video_10_2.m3u8")


const video_list = reactive([
    {
        label: "高清",
        value: "https://1500005692.vod2.myqcloud.com/43843706vodtranscq1500005692/11814a36387702299186115471/video_10_2.m3u8"
    },
    {
        label: "标清",
        value: "https://1500005692.vod2.myqcloud.com/43843706vodtranscq1500005692/11814a36387702299186115471/video_10_1.m3u8"
    },
    {
        label: "流畅",
        value: "https://1500005692.vod2.myqcloud.com/43843706vodtranscq1500005692/11814a36387702299186115471/video_10_0.m3u8"
    },
    {
        label: "自定义视频",
        value: ""
    }
])

watch(source, (e: string) => {
    video_list.filter((value, index) => {
        if (value.label == '自定义视频') {
            return video_list[index].value = e
        }
    })
})
</script>

<template>
    <Video ref="vd" :source="source" :options="options" @play="play" @ready="ready" @pause="pause" />
    <div class="control">
        <p>1.播放链接，支持 <el-tag>webrtc</el-tag> | <el-tag>mp4</el-tag> | <el-tag>m3u8</el-tag> 视频格式：</p>
        <el-input placeholder="请输入在线播放链接" v-model="source"></el-input>
    </div>

    <div class="control">
        <p>2.播放操作：</p>
        <el-button @click="getIsFullscreen">获取全屏状态</el-button>
        <el-button @click="requestFullscreen">进入全屏</el-button>
        <el-button @click="getDuration">获取视频时长</el-button>
        <el-button @click="getVideoResolution">获取视频分辨率</el-button>
        <el-button @click="getCurrentTime">获取当前进度</el-button>
        <el-button @click="setCurrentTime()">随机跳转进度</el-button>
    </div>
    <div class="control">
        <p>3.切换视频：</p>
        <el-select v-model="source" placeholder="请选择">
            <el-option :disabled="item.value == '' ? true : false" v-for="(item, key) in video_list" :key="key"
                :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
    <div class="control">
        <p>4.操作结果：</p>
        <el-card>
            <div class="item">
                <el-tag> 全屏状态：{{ message.isFullScreen }}</el-tag>
            </div>
            <div class="item">
                <el-tag> 视频总时长：{{ (message.videoTime).toFixed(2) }}秒</el-tag>
            </div>
            <div class="item">
                <el-tag> 视频分辨率：{{ message.VideoResolution }}</el-tag>
            </div>
            <div class="item">
                <el-tag> 当前视频进度：{{ (message.videoCurrentTime).toFixed(2) }}秒</el-tag>
            </div>
        </el-card>
    </div>
</template>

<style lang="scss" scoped>
.control {
    text-align: left;
    margin: 15px;

    .item {
        margin: 10px 0;
    }
}
</style>