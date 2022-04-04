<template>
  <el-dialog
      v-model="dialogProps.isShow"
      width="70%"
      :before-close="handleClose"
  >
    <slot v-if="dialogProps.action === CONSTANT.UPDATE" name="editForm"></slot>
    <slot v-if="dialogProps.action === CONSTANT.ALLOCATION" name="allocation"></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelBtn">取消</el-button>
        <el-button type="primary" @click="confirmBtn"
        >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import * as CONSTANT from "@/utils/constant";

const props = defineProps({
  dialogProps: Object
})

const emits = defineEmits(["dialogTrigger"])

const cancelBtn = () => {
  emits("dialogTrigger", false,"cancel")
}

const confirmBtn = () => {
  emits("dialogTrigger", false,"confirm")
}

const handleClose = () => {
  emits("dialogTrigger", false,"cancel")
}


</script>

<style scoped>

</style>