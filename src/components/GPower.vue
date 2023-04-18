<template>
  <van-grid>
    <van-grid-item v-for="k in f.userlist">
      <template #icon>
        <el-descriptions :title="k.k0.us">
          <el-descriptions-item label="占位码">{{ k.f0.aka }}</el-descriptions-item>
          <el-descriptions-item label="验证码">{{ k.f0.por }}</el-descriptions-item>
        </el-descriptions>
      </template>
      <template #text>
        <el-descriptions title="辅助">
          <el-descriptions-item>
            <template #label>保持</template>
            <template #default>
              <el-radio-group v-model="k.f0.r2" :disabled="k.f0.login">
                <el-radio label="1">ws保持</el-radio>
                <el-radio label="2">http保持</el-radio>
                <el-radio label="3">不保持</el-radio>
              </el-radio-group>
            </template>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              WS
            </template>
            <template #default>
              <el-radio-group v-model="k.f0.r1" :disabled="k.f0.login">
                <el-radio label="1">自动ws</el-radio>
                <el-radio label="2">手动ws</el-radio>
              </el-radio-group>
            </template>
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="操作">
          <el-descriptions-item>
            <template #label>基本</template>
            <template #default>
              <el-button-group size="large">
                <el-button v-show="!k.f0.login" @click="fkka(k.k0,k.f0)">登录</el-button>
                <el-button v-show="k.f0.login" @click=" k.f0 = dcks()">注销</el-button>
              </el-button-group>
            </template>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>双向</template>
            <template #default>
              <el-button-group size="large">
                <el-button :disabled="!k.f0.login" v-show="k.f0.wc" @click="dkkw(k.f0)">上线</el-button>
                <el-button :disabled="!k.f0.login" @click="cswd(k.f0)">下线</el-button>
              </el-button-group>
            </template>
          </el-descriptions-item>
        </el-descriptions>
      </template>
    </van-grid-item>
  </van-grid>
</template>

<script lang="ts" setup name="GPower">
import {Keep, Login, Userlist} from "../base/Api";
import {reactive} from "vue";
import bcrypt from 'bcryptjs'
// import {Kfkw, Lsdc} from "../apm/MyApp";
var f = reactive({
  userlist: {}
})
const f0 = () => {
  return {aka: 'nuxx', por: 'nuxx', login: false, r1: '1', r2: '1', wc: true, ws: null, keep: false}
}

Userlist().then(res => {
  const data = res.data
  var k1 = []
  for (let us in data) {
    const d0 = data[us];
    const pw = d0['pw'];
    var k0 = {
      us: us, pw: pw
    }
    k1.push({k0: k0, f0: f0()})
  }
  f.userlist = k1;
})

const wkkd = (k: any) => {
  const ws = new WebSocket(`ws://192.168.31.208:8082/ffw/test/${k.aka}`);
  ws.onopen = function () {
    k.wc = false;
    k.ws = ws;

    if (k.r2 == '1') {
      if (k.keep) {

      } else {
        k.keep = true;
        setInterval(function () {
          ws.send(JSON.stringify({act: 'cheack', por: bcrypt.hashSync(k.por, 8), data: {}}))
        }, 5000)
      }
    }
  }
  ws.onmessage = function (w: string) {
    const data = w.data;
    console.log(data);
  }
  ws.onclose = function () {
    k.wc = true;
    k.ws = null;
  }

}

const fkka = (k0: any, k: any) => {
  Login({us: k0.us, pw: bcrypt.hashSync(k0.pw, 8)}).then(res => {
    const data = res.data;
    k.login = true
    k.us = data.us;
    k.aka = data.aka;
    k.por = data.por;
    if (k.r1 == '1') {
      wkkd(k);
    } else if (k.r1 == '2') {

    }
    if (k.r2 == '2') {
      if (k.keep) {

      } else {
        k.keep = true;
        setInterval(function () {
          Keep({aka: data.aka, por: bcrypt.hashSync(data.por, 8)}).then(res => {
          })
        }, 5000)
      }

    }

  })
}
const dkkw = (k) => {
  k.wc = false;
}
const cswd = (k) => {
  k.r1 = '2'
  k.wc = true;
}
const dcks = () => {
  return f0()
}
// const kkfc = (k: Lsdc) => {
//   if (k === null) {
//
//   } else {
//     k.ws.close()
//     k.login = false;
//   }
// }
</script>

<style lang="scss">
.van-grid-item__content--center {
  align-items: normal;
}

</style>