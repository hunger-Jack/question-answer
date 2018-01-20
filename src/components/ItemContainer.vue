<template>
  <div id="itemContainer">
    <header class="top_tips">
      <span class="tips_text" v-if="isBegin === false">测试题</span>
      <span class="tips_text" v-else>{{test[currentId].tip}}</span>
    </header>
    <div class="questions" v-if="isBegin === false"></div>
    <div class="tests" v-else>
      <div class="tests-layout">
        <header class="tests-header">{{test[currentId].qustion}}</header>
        <ul class="tests-content">
          <li v-for="(item,index) in test[currentId].answers" :key="index" @touchstart="recordAnswer(index)">
            <span class="tests-sort">{{item.type}}</span>
            <span>{{item.num1}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="btn btn-home" @touchstart="toItem" v-if="isBegin === false"></div>
    <div class="btn btn-item" @touchstart="nextTest" v-else></div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import router from '../router/index'
  import store from '../store/index'
  import touch from '../assets/touch'
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'ItemContainer',
    computed: {
      ...mapState(['isBegin', 'test', 'currentId', 'selectAnswerArr'])
    },
    methods: {
      toItem() {
        router.push('/item')
        this.$store.commit('change')
      },
      nextTest() {
        console.log(this.selectAnswerArr)
         touch(true)
        if (this.selectAnswerArr[this.currentId] === undefined) {
          alert('必须选择一项答案哦~')
          return
        }
        if (this.test[this.currentId + 1] === undefined) { //如果test下一项没有数据，就直接跳转路由到score页面
          router.push('/score')
          return
        }
        this.$store.commit('nextTest')

      },
      recordAnswer(index) {
        this.selectAnswerArr[this.currentId] = index
      }
    },
    mounted() {
      touch(false)
    }
  }

</script>
<style lang="less" scoped>
  #itemContainer {
    .top_tips {
      position: relative;
      background: url('../common/images/WechatIMG2.png') no-repeat;
      background-size: 2rem;
      background-position: 88% center;
      height: 3.8rem;
      .tips_text {
        position: absolute;
        right: 1.44rem;
        top: 2.9rem;
        font-size: 0.3rem;
      }
    }
    .questions {
      background: url('../common/images/1-2.png') no-repeat center center;
      height: 7.5rem;
      background-size: contain;
      margin-top: -0.5rem;
    }
    .tests {
      background: url('../common/images/2-1.png') no-repeat center center;
      height: 7.5rem;
      background-size: contain;
      margin-top: -0.5rem;
      font-size: 0.4rem;
      color: white;
      position: relative;
      .tests-layout {
        position: absolute;
        top: 1.4rem;
        left: 3.2rem;
        .tests-content,
        .tests-header {
          list-style-type: decimal-leading-zero;
        }
        .tests-content {
          li {
            margin-top: 0.2rem;
            .tests-sort {
              display: inline-block;
              width: 0.45rem;
              height: 0.45rem;
              border-radius: 0.5rem;
              border: 1px solid white;
              text-align: center;
              line-height: 0.45rem;
            }
          }
        }
      }
    }
    .btn {
      height: 1.5rem;
    }
    .btn-home {
      background: url('../common/images/1-4.png') center center no-repeat;
      background-size: contain;
    }
    .btn-item {
      background: url('../common/images/2-2.png') center center no-repeat;
      background-size: contain;
    }
  }

  .selected {
    color: rgb(255, 196, 0);
    border: 1px solid rgb(255, 196, 0) !important;
  }

</style>
