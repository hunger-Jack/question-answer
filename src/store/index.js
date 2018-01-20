import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isBegin: false,//是否开始答题
    currentId: 0, //当前测试题的索引
    selectAnswerArr: [],//用户选择的答案
    isShared: false, //是否点击分享
    correctAnswerArr: [],//所有正确答案
    selectedCorrectNum: 0,
    command: '',
    test: [
      {
        tip: '题目一',
        qustion: '一加一等于几',
        id: 0,
        correct: 0,
        answers: [{
            num1: '田',
            type: 'A'
          },
          {
            num1: '1',
            type: 'B'
          },
          {
            num1: '2',
            type: 'C'
          },
          {
            num1: '3',
            type: 'D'
          },
        ]
      },
      {
        tip: '题目二',
        qustion: '人之初下一句是？',
        id: 1,
        correct: 1,
        answers: [{
            num1: '你去哪',
            type: 'A'
          },
          {
            num1: '性本善',
            type: 'B'
          },
          {
            num1: '性相近',
            type: 'C'
          },
          {
            num1: '去一边',
            type: 'D'
          },
        ]
      },
      {
        tip: '题目三',
        qustion: '沁园春-雪的作者',
        id: 2,
        correct: 2,
        answers: [{
            num1: '习近平',
            type: 'A'
          },
          {
            num1: '陶渊明',
            type: 'B'
          },
          {
            num1: '毛泽东',
            type: 'C'
          },
          {
            num1: '李清照',
            type: 'D'
          },
        ]
      },
      {
        tip: '题目四',
        qustion: '沁园春-雪的作者',
        id: 3,
        correct: 3,
        answers: [{
            num1: '习近平',
            type: 'A'
          },
          {
            num1: '陶渊明',
            type: 'B'
          },
          {
            num1: '毛泽东',
            type: 'C'
          },
          {
            num1: '李清照',
            type: 'D'
          },
        ]
      },
      {
        tip: '题目五',
        qustion: '沁园春-雪的作者',
        id: 4,
        correct: 2,
        answers: [{
            num1: '习近平',
            type: 'A'
          },
          {
            num1: '陶渊明',
            type: 'B'
          },
          {
            num1: '毛泽东',
            type: 'C'
          },
          {
            num1: '李清照',
            type: 'D'
          },
        ]
      },
      {
        tip: '题目六',
        qustion: '沁园春-雪的作者',
        id: 5,
        correct: 2,
        answers: [{
            num1: '习近平',
            type: 'A'
          },
          {
            num1: '陶渊明',
            type: 'B'
          },
          {
            num1: '毛泽东',
            type: 'C'
          },
          {
            num1: '李清照',
            type: 'D'
          },
        ]
      }
    ]
  },
  getters: {
    testNumber: (state)=> {//所有测试题数量
      return state.correctAnswerArr.length
    },
    getScorePercent:(state,getters) => {
      return (state.selectedCorrectNum / getters.testNumber).toFixed(1)
    }
  },
  mutations: {
    change(state) {
      state.isBegin = true
    },
    nextTest(state) {
      state.currentId++
    },
    share(state) {
      state.isShared = true
    },
    getCorrectAnswerArr(state) {
      
      for(let i=0;i<state.test.length;i++) {
        state.correctAnswerArr.push(state.test[i].correct)
      }
      console.log(state.correctAnswerArr)
    },
    getCommand(state,getters) {
      var dig = getters
      if(dig === 0) {
        state.command = '弱爆了，赶紧回去补习吧！'
      } else if(dig > 0 && dig <= 0.3) {
        state.command = '还可以吧，要继续努力哦！'
      } else if(dig > 0.3 && dig <= 0.6) {
        state.command = '还凑合吧，相当的凑合啊！'
      } else if(dig > 0.6 && dig <= 0.9) {
        state.command = '漂亮！干的不错小伙子！'
      } else {
        state.command = '哇塞，全部正确，您赶紧飞吧！'
      }
    },
    getScore(state) {
      for(let i=0;i<state.correctAnswerArr.length;i++) {
        if(state.selectAnswerArr[i] === state.correctAnswerArr[i]) {
          state.selectedCorrectNum++
        }
      }
    },
    getAllTestNumber(state) {
      state.testNumber = state.correctAnswerArr.length
    }
  }
})
