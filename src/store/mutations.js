import state from './state'
import touch from '@/assets/touch'
import router from '@/router/index'
export default {
  toItem(state) {
    state.isBegin = true
    router.push('/item')
  },
  nextTest(state) {
    touch(true)
    if (state.selectAnswerArr[state.currentId] === undefined) {
      alert('必须选择一项答案哦~')
      return
    }
    if (state.test[state.currentId + 1] === undefined) { //如果test下一项没有数据，就直接跳转路由到score页面
      router.push('/score')
      return
    }
    state.currentId++
  },
  recordAnswer(state,index) {
    state.selectAnswerArr[state.currentId] = index

  },
  share(state) {
    state.isShared = true
  },
  getCorrectAnswerArr(state) {
    for (let i = 0; i < state.test.length; i++) {
      state.correctAnswerArr.push(state.test[i].correct)
    }
    console.log(state.correctAnswerArr)
  },
  getCommand(state, getters) {
    var dig = getters
    if (dig === 0) {
      state.command = '弱爆了，赶紧回去补习吧！'
    } else if (dig > 0 && dig <= 0.3) {
      state.command = '还可以吧，要继续努力哦！'
    } else if (dig > 0.3 && dig <= 0.6) {
      state.command = '还凑合吧，相当的凑合啊！'
    } else if (dig > 0.6 && dig <= 0.9) {
      state.command = '漂亮！干的不错小伙子！'
    } else {
      state.command = '哇塞，全部正确，您赶紧飞吧！'
    }
  },
  getScore(state) {
    for (let i = 0; i < state.correctAnswerArr.length; i++) {
      if (state.selectAnswerArr[i] === state.correctAnswerArr[i]) {
        state.selectedCorrectNum++
      }
    }
  },
  getAllTestNumber(state) {
    state.testNumber = state.correctAnswerArr.length
  }
}
