<template>
  <div id="score">
    <div class="score-display">
      <div class="content">
        <div class="content-score">
          共<span>{{testNumber}}</span>题，答对<span>{{selectedCorrectNum}}</span>题
        </div>
        <div class="content-command">
          {{command}}
        </div>
      </div>
    </div>
    <div class="score-share" @click="share"></div>
    <div class="score-attention">
      <div class="text">关注魔尊重楼，获取本期答案</div>
      <img src="../../common/images/4-4.png" alt="">
    </div>
    <div class="score-cover" v-show="isShared === true">
      <img src="../../common/images/5-2.png" alt="">
    </div>
  </div>
</template>
<script>
  import {
    mapState,mapGetters 
  } from 'vuex'
  export default {
    name: 'Score',
    computed: {
      ...mapState(['isShared','command','selectedCorrectNum']),
      ...mapGetters(['testNumber','getScorePercent'])
    },
    created() {
      this.$store.commit('getAllTestNumber')
      this.$store.commit('getCorrectAnswerArr')
      this.$store.commit('getScore')
      this.$store.commit('getCommand',this.getScorePercent)
    },
    methods: {
      share() {
        this.$store.commit('share')
      }
    }
  }

</script>
<style lang="less" scoped>
  #score {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: url('../../common/images/4-1.jpg');
    .score-display {
      position: relative;
      background: url('../../common/images/4-2.png');
      background-size: 100% 100%;
      width: 6rem;
      height: 6rem;
      margin: 0 auto;
      font-size: 0.45rem;
      .content {
        position: absolute;
        top: 50%;
        left: 53%;
        width: 80%;
        transform: translateX(-50%);
        font-size: 0.45rem;
        text-align: center;
        .content-command {
          margin-top: 0.5rem;
        }
      }
    }
    .score-share {
      background: url('../../common/images/4-3.png');
      background-size: 100% 100%;
      width: 3.8rem;
      height: 1.5rem;
      margin: 0 auto;
    }
    .score-attention {
      text-align: center;
      width: 6rem;
      margin: 0 auto;
      .text {
        font-size: 0.4rem;
        margin-bottom: 0.2rem;
      }
      img {
        width: 80%;
      }
    }
    .score-cover {
      position: absolute;
      z-index: 1;
      background: url('../../common/images/5-1.png');
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: right;
      img {
        width: 72%;
        margin: 0.5rem 1rem 0 0;
      }
    }
  }

</style>
