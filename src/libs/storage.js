var storage = {
  setStorage: function (key, value, duration) {
    key = this.dealKey(key);
    var data = {
      value: value,
      expiryTime: !duration || isNaN(duration) ? 0 : this.getCurrentTimeStamp() + parseInt(duration)
    };
    localStorage[key] = JSON.stringify(data);
  },
  getStorage: function (key) {
    key = this.dealKey(key);
    var data = localStorage[key];
    if (!data || data === "null") {
      return null;
    }
    var now = this.getCurrentTimeStamp();
    var obj;
    try {
      obj = JSON.parse(data);
    } catch (e) {
      return null;
    }
    if (obj.expiryTime === 0 || obj.expiryTime > now) {
      return obj.value;
    }
    return null;
  },
  removeStorage: function (key) {
    key = this.dealKey(key);
    localStorage.removeItem(key);
  },
  clearAll: function () {
    localStorage.clear()
  },
  getSession: function (key) {
    key = this.dealKey(key);
    var data = sessionStorage[key];
    if (!data || data === "null") {
      return null;
    }
    return JSON.parse(data).value;
  },
  setSession: function (key, value) {
    key = this.dealKey(key);
    var data = {
      value: value
    }
    sessionStorage[key] = JSON.stringify(data);
  },
  getCurrentTimeStamp: function () {
    return Date.parse(new Date());
  },
  dealKey: function (key) {
    return key
  }
};

export default storage;
