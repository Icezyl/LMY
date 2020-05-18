import { Message, MessageBox } from 'element-ui'

// 提示框
export const TipsPop = ({ message, type = 'success' }) => {
  Message({
    message: message,
    type: type,
    duration: 1000
  })
}
