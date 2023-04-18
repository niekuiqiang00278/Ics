<template>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules">
    <el-form-item label="用户名" prop="us">
      <el-input v-model="ruleForm.us" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="密码" prop="pw">
      <el-input v-model="ruleForm.pw" type="password" autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      <el-button @click="resetForm(ruleFormRef)">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup name="Login">
import {reactive, ref} from 'vue'
import type {FormInstance, FormRules} from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const validateUs = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else {
    callback()
  }
}

const validatePw = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}
const ruleForm = reactive({
  pw: '',
  us: '',
})

const rules = reactive<FormRules>({
  us: [{validator: validateUs, trigger: 'blur'}],
  pw: [{validator: validatePw, trigger: 'blur'}],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const ws = new WebSocket('ws://192.168.31.208:8082/ffw/test/akacap669')
ws.onmessage = function (msg:string) {
  console.log(msg)
}
// import bcrypt from 'bcryptjs'
// var salt = bcrypt.genSaltSync(12)
// var password = bcrypt.hashSync('absdcc',salt)
// console.log(password)
</script>
