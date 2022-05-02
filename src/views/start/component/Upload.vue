<template>
  <el-upload
      action=""
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :auto-upload="false"
      ref="uploadRef"
      :http-request="httpRequest"
      multiple
      :on-success="handleSuccess"
      :limit="props.uploadLimit"
  >
    <el-icon>
      <Plus/>
    </el-icon>
  </el-upload>
  <el-dialog width="80%" center v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image"/>
  </el-dialog>
  <el-button type="primary" @click="uploadSubmit">确定上传</el-button>
  <br>
</template>

<script setup>

const props = defineProps({
  uploadLimit: {
    type: Number,
    default: 1,
  },
  uploadUrl: {
    type: String,
    default: "",
  },
})

import {onMounted, reactive, ref} from "vue";
import {uploadImage} from "@/api/upload/upload";
import {errorsMsg, successMsg} from "@/utils/web-utils";

import {genFileId} from 'element-plus'


const uploadRef = ref();

const dialogVisible = ref(false)

const fileList = ref([])

const parentPos = reactive({
  data: {},
});

const dialogImageUrl = ref('')

const handleExceed = (files) => {
  uploadRef.value?.clearFiles()
  const file = files[0]
  file.uid = genFileId()
  uploadRef.value?.handleStart(file)
}

const handleSuccess = (response) => {
  console.log(response)
  return successMsg("上传成功")
}

const handleRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
const handlePictureCardPreview = (uploadFile) => {
  console.log(fileList)
  dialogImageUrl.value = uploadFile.url
  dialogVisible.value = true
}


const uploadSubmit = () => {
  if (fileList.value.length === 0) {
    return errorsMsg("请先选择上传图片")
  }
  let fd = new FormData()// FormData 对象
  fileList.value.forEach((file) => {
    fd.append('file', file.raw)
  })
  uploadRef.value?.submit()

  uploadImage(props.uploadUrl,fd).then(res => {
    if (res.code !== 200) {
      return errorsMsg(res.message)
    }
    Object.assign(parentPos.data,res.data)
    return successMsg("上传成功")
  })

}

const httpRequest = (param) => {

}



defineExpose({
  uploadRef,
  dialogVisible,
  fileList,
  dialogImageUrl,
  parentPos,
  handleRemove,
  handlePictureCardPreview,
  uploadSubmit,
  httpRequest,
})

</script>

<style lang="scss" scoped>
:deep(.el-upload__input) {
  display: none !important;
}

.el-dialog__body {
  img {
    width: 100%;
    background-size: cover;
    object-fit: cover;
  }
}

button {
  margin-top: 10px;
}
</style>