export default {
  powerCounter(state) { //counter平方
    return state.counter**2
  },
  more20stu(state) {  //大于20岁的学生
    return state.students.filter((s) => {
      return s.age >= 20
    })
  },
  more20stuLength(state, getters) { //大于20岁学生的人数
    return getters.more20stu.length
  },
  moreAgeStu(state) {
    return function(age) { //年龄大于某个值
      return state.students.filter((s) => {
        return s.age > age
      })
    }
  },
  name(state) {
    return state.info.name
  }
}
