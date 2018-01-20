export default {
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
  }