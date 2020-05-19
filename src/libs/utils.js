export default {
  /**
   * @param {Number} num 数值
   * @returns {String} 处理后的字符串
   * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
   */
  getHandledValue(num){
    return num < 10 ? '0' + num : num
  }
}