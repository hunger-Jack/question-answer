import state from './state'
export default {
    testNumber: (state)=> {//所有测试题数量
      return state.correctAnswerArr.length
    },
    getScorePercent:(state,getters) => {
      return (state.selectedCorrectNum / getters.testNumber).toFixed(1)
    }
  }