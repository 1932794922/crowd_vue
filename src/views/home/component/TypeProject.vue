<template>
  <el-row>
    <template :key="index" v-for="(item, index) in projectList">
      <template v-if="item.portalProjectVoList.length !== 0">
        <div class="col-md-12 column"
        >
          <div class="box ui-draggable" id="mainBox">
            <div class="mHd" style="">
              <div class="path">
                <a>更多...</a>
              </div>
              <h3>
                {{ item.name }}
                <small style="color:#FFF;">
                  {{ item.remark }}
                </small>
              </h3>
            </div>
          </div>
        </div>
        <el-card
            shadow="hover"
            :body-style="{ padding: '0px', cursor: 'pointer' }"
            class="card"
            v-for="(subItem, i) in item.portalProjectVoList"
            :key="i"
            @click="projectDetail(item.id, subItem.projectId)"
        >
          <div class="img-box">
            <img
                alt=""
                :src="subItem.headerPicturePath"
            />
          </div>
          <div style="padding: 14px">
            <h4>{{ subItem.projectName }}</h4>
            <div style="float:left;"><i class="glyphicon glyphicon-screenshot"
                                        title="目标金额"></i>
              {{ subItem.money }}
            </div>
            <div style="float:right;"><i title="截至日期"
                                         class="glyphicon glyphicon-calendar"></i>
              {{ formatTime(subItem.deployDate) || '-' }}
            </div>
            <br>
            <el-progress class="progress-box" :percentage="subItem.completion || 0" :color="customColors"/>
            <div class="bottom">
              <div><span style="float:right;"><i
                  class="glyphicon glyphicon-star-empty"></i></span> <span><i
                  class="glyphicon glyphicon-user" title="支持人数"></i>
                         {{ subItem.supporter || "0" }}
          </span>
              </div>
            </div>
          </div>
        </el-card>
      </template>
    </template>
  </el-row>

</template>

<script setup>

import {onMounted, ref} from "vue";
import {queryProjectType} from "@/api/member/memberProject";
import {getSession, formatTime} from "@/utils/web-utils";
import {useRouter} from "vue-router";

const props = defineProps({
  projectList: {
    type: Array,
    default: () => [],
  }
});

const router = useRouter();

const customColors = [
  {color: '#f56c6c', percentage: 20},
  {color: '#e6a23c', percentage: 40},
  {color: '#5cb87a', percentage: 60},
  {color: '#1989fa', percentage: 80},
  {color: '#6f7ad3', percentage: 100},
]

const projectList = ref([])

const projectDetail = (pid, id) => {
  router.push({name: "Detail", params: {projectId: id}})
}

onMounted(() => {
  if (getSession("userName")) {
    queryProjectType().then(res => {
      console.log(res.data)
      projectList.value = res.data
    }).catch(err => {

    })
  }
})
</script>

<style lang="scss" scoped>
#mainBox .mHd {
  border-bottom: 2px solid #09c;
  height: 30px;
  line-height: 30px;
}

#mainBox .mHd h3 {
  display: initial;
  *display: inline;
  zoom: 1;
  padding: 0 15px;
  background: #09c;
  color: #fff;
}

#mainBox .mHd h3 span {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

#mainBox .path {
  float: right;
}

.card {
  width: 270px;
  height: 300px;
  overflow: hidden;
  margin: 10px 5px 20px 10px;
}

.el-row {
  display: flex;
  margin: 0 auto;
}

.img-box {
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  width: 270px;
  height: 150px;
  overflow: hidden;
}

.progress-box {
  padding: 10px 0;
}
</style>