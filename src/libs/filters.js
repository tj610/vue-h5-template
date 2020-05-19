const formatPrice = function (val) {
  if (val == 0.00) return 0
  return val > 0 ? Number(val).toFixed(2) : val
}

const formatDate = function (val) {
  let d = new Date(val)
  let month = (d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)
  let day = d.getDate() >= 10 ? d.getDate() : '0' + (d.getDate())
  return month + '月' + day + '日'
}

export {
  formatPrice,
  formatDate
}