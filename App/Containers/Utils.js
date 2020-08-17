import dayjs from 'dayjs'
// import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/vi'

// import moment from 'moment'
export default {
  timeFormat (time) {
    // dayjs.locale('vi')
    // dayjs.extend(relativeTime)
    // return dayjs(time).locale('vi').fromNow()
    var unix = dayjs(time).unix()
    var now = dayjs().unix()
    var timepass = (now - unix)
    var minPass = Math.round(timepass / 60)
    if (minPass < 59) {
      return `${minPass} phút trước`
    }
    var hourPass = Math.round(timepass / 3600)
    if (hourPass < 24) {
      return `${hourPass} giờ trước`
    }
    return dayjs(time).format('DD/MM/YYYY')
    //     return moment()
    //   .startOf('hour')
    //   .fromNow() // 23 phút trước
  },

  log (params) {
    if (__DEV__) console.tron.log(arguments)
  },
  clone (obj) {
    try {
      return JSON.parse(JSON.stringify(obj))
    } catch (e) {
      return obj
    }
  },
  validateEmail (email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
}
