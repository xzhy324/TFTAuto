// 当前赛季
window.CurrentSet = 's6';
// 阵容渠道id
window.TFTChannelId = '6';
/**
 * 资料接口管理
 * 为了因对不同赛季的目录地址不一样,导致目录混乱,因此手动维护一个目录,并提供接口地址
 * 注意
 * 1 为了提高数据的命中率,添加地址数据时,越新的数据,key的位置应该越靠前
 * 2 赛季字段,数据是2019.S2这种格式,应该把只保留S2,并转为小写s.
 */
window.DataUrlManager = {
  hero_data: {
    's6': '//game.gtimg.cn/images/lol/act/img/tft/js/chess.js?v=' + (Date.now() / 600000 >> 0),
    // 's6': '//game.gtimg.cn/images/lol/act/img/tft/js/12.4-2022.S6/chess.js?v=' + (Date.now() / 600000 >> 0),
    // 's6': '//game.gtimg.cn/images/lol/act/img/tft/js/11.22-2021.S6/chess.js?v=' + (Date.now() / 600000 >> 0),
    's5': '//game.gtimg.cn/images/lol/act/img/tft/js/11.15-2021.S5/chess.js?v=' + (Date.now() / 600000 >> 0),
    's4': '//game.gtimg.cn/images/lol/act/img/tft/js/11.8-2021.S4/chess.js',
    's3': '//game.gtimg.cn/images/lol/act/img/tft/js/10.18-2020.S3/chess.js',
    's2': '//game.gtimg.cn/images/lol/act/img/tft/js/10.5-2020.S2/chess.js',
    's1': '//game.gtimg.cn/images/lol/act/img/tft/js/9.21-2019.S1/chess.js'
  },
  race_data: {
    's6': '//game.gtimg.cn/images/lol/act/img/tft/js/race.js?v=' + (Date.now() / 600000 >> 0),
    // 's6': '//game.gtimg.cn/images/lol/act/img/tft/js/12.4-2022.S6/race.js?v=' + (Date.now() / 600000 >> 0),
    // 's6': '//game.gtimg.cn/images/lol/act/img/tft/js/11.22-2021.S6/race.js?v=' + (Date.now() / 600000 >> 0),
    's5': '//game.gtimg.cn/images/lol/act/img/tft/js/11.15-2021.S5/race.js?v=' + (Date.now() / 600000 >> 0),
    's4': '//game.gtimg.cn/images/lol/act/img/tft/js/11.8-2021.S4/race.js',
    's3': '//game.gtimg.cn/images/lol/act/img/tft/js/10.18-2020.S3/race.js',
    's2': '//game.gtimg.cn/images/lol/act/img/tft/js/10.5-2020.S2/race.js',
    's1': '//game.gtimg.cn/images/lol/act/img/tft/js/9.21-2019.S1/race.js'
  },
  job_data: {
    's6': '//game.gtimg.cn/images/lol/act/img/tft/js/job.js?v=' + (Date.now() / 600000 >> 0),
    // 's6': '//game.gtimg.cn/images/lol/act/img/tft/js/12.4-2022.S6/job.js?v=' + (Date.now() / 600000 >> 0),
    // 's6': '//game.gtimg.cn/images/lol/act/img/tft/js/11.22-2021.S6/job.js?v=' + (Date.now() / 600000 >> 0),
    's5': '//game.gtimg.cn/images/lol/act/img/tft/js/11.15-2021.S5/job.js?v=' + (Date.now() / 600000 >> 0),
    's4': '//game.gtimg.cn/images/lol/act/img/tft/js/11.8-2021.S4/job.js',
    's3': '//game.gtimg.cn/images/lol/act/img/tft/js/10.18-2020.S3/job.js',
    's2': '//game.gtimg.cn/images/lol/act/img/tft/js/10.5-2020.S2/job.js',
    's1': '//game.gtimg.cn/images/lol/act/img/tft/js/9.21-2019.S1/job.js'
  },
  equipment_data: {
    's6': '//game.gtimg.cn/images/lol/act/img/tft/js/equip.js?v=' + (Date.now() / 600000 >> 0),
    // 's6': '//game.gtimg.cn/images/lol/act/img/tft/js/12.4-2022.S6/equip.js?v=' + (Date.now() / 600000 >> 0),
    // 's6': '//game.gtimg.cn/images/lol/act/img/tft/js/11.22-2021.S6/equip.js?v=' + (Date.now() / 600000 >> 0),
    's5': '//game.gtimg.cn/images/lol/act/img/tft/js/11.15-2021.S5/equip.js?v=' + (Date.now() / 600000 >> 0),
    's4': '//game.gtimg.cn/images/lol/act/img/tft/js/11.8-2021.S4/equip.js',
    's3': '//game.gtimg.cn/images/lol/act/img/tft/js/10.18-2020.S3/equip.js',
    's2': '//game.gtimg.cn/images/lol/act/img/tft/js/10.5-2020.S2/equip.js',
    's1': '//game.gtimg.cn/images/lol/act/img/tft/js/9.21-2019.S1/equip.js'
  },
  little_hero_data: {
    's6': '//game.gtimg.cn/images/lol/act/img/tft/js/hero.js?v=' + (Date.now() / 600000 >> 0),
    // 's6': '//game.gtimg.cn/images/lol/act/img/tft/js/12.4-2022.S6/hero.js?v=' + (Date.now() / 600000 >> 0),
    // 's6': '//game.gtimg.cn/images/lol/act/img/tft/js/11.22-2021.S6/hero.js?v=' + (Date.now() / 600000 >> 0),
    's5': '//game.gtimg.cn/images/lol/act/img/tft/js/11.15-2021.S5/hero.js?v=' + (Date.now() / 600000 >> 0),
    's4': '//game.gtimg.cn/images/lol/act/img/tft/js/11.8-2021.S4/hero.js',
    's3': '//game.gtimg.cn/images/lol/act/img/tft/js/10.18-2020.S3/hero.js',
  },
  linelist: {
    's6': '//game.gtimg.cn/images/lol/act/tftzlkauto/json/lineupJson/s6/' + window.TFTChannelId + '/lineup_detail_total.json?v=' + (Date.now() / 180000 >> 0),
    's5': '//game.gtimg.cn/images/lol/act/tftzlkauto/json/lineupJson/s5/' + window.TFTChannelId + '/lineup_detail_total.json?v=' + (Date.now() / 180000 >> 0),
    's4': '//game.gtimg.cn/images/lol/act/tftzlkauto/json/lineupJson/s4/6/lineup_detail_total.json',
    's3': '//lol.qq.com/act/AutoCMS/publish/LOLAct/TFTlinelist_new_set3/TFTlinelist_new_set3.js',
    's2': '//lol.qq.com/act/AutoCMS/publish/LOLAct/TFTLineup_V3/TFTLineup_V3.js',
    's1': ''
  },
  double_linelist: {
    's6': '//game.gtimg.cn/images/lol/act/tftzlkauto/json/doubleLineupJson/s6/' + window.TFTChannelId + '/doubleLineup_detail_total.json?v=' + (Date.now() / 180000 >> 0),
  },
  authorList: '//game.gtimg.cn/images/lol/act/tftzlkauto/json/authorJson/author.json?v=' + (Date.now() / 100000 >> 0),
  // equipment_strength: {
  //   's3': '//lol.qq.com/act/AutoCMS/publish/LOLAct/TFTequipment_set3/TFTequipment_set3.js'
  // },
  hex_data: {
    's6': '//game.gtimg.cn/images/lol/act/img/tft/js/hex.js?v=' + (Date.now() / 180000 >> 0),
    // 's6': '//game.gtimg.cn/images/lol/act/img/tft/js/12.4-2022.S6/hex.js?v=' + (Date.now() / 180000 >> 0),
    // 's6': '//game.gtimg.cn/images/lol/act/tftzlkauto/json/hexJson/hex.json?v=' + (Date.now() / 180000 >> 0),
  },
  /**获取某个数据类型,全部的数据地址的key数组 */
  getUrlAllKey: function (data_type) {
    var rs = [];
    var temp_data = this[data_type];
    if (temp_data) {
      for (var key in temp_data) {
        rs.push(key);
      }
    }
    return rs;
  }
};
/**
 * 图片目录管理
 * 为了因对不同赛季的目录地址不一样,导致目录混乱,因此手动维护一个目录,并提供图片拼接地址
 */
window.PicUrlManager = {
  /**使用分析logo作为默认图片,获取图片地址发生错误时使用 */
  defaultPic: '//game.gtimg.cn/images/lol/act/a20190704tft/share.png',
  /**英雄头像*/
  hero_avatar: {
    origin: '//game.gtimg.cn/images/lol/act/img/tft/hero-icon/icon_{{pic_name}}.png',
    s1: '//game.gtimg.cn/images/lol/act/img/tft/champions/s1icon/{{pic_name}}.png',
    s2: '//game.gtimg.cn/images/lol/act/img/tft/champions/s2icon/{{pic_name}}.png',
    s3: '//game.gtimg.cn/images/lol/act/img/tft/champions/{{pic_name}}.png',
    s4: '//game.gtimg.cn/images/lol/act/img/tft/champions/{{pic_name}}.png',
    s5: '//game.gtimg.cn/images/lol/act/img/tft/champions/{{pic_name}}.png',
    s6: '//game.gtimg.cn/images/lol/act/img/tft/champions/{{pic_name}}.png',
  },
  /**英雄大图1125x443*/
  hero_pic_1: {
    s1: '//game.gtimg.cn/images/lol/tft/champions/950x375/{{pic_name}}.png',
    s2: '//game.gtimg.cn/images/lol/tft/champions/950x375/{{pic_name}}.jpg',
    s3: '//game.gtimg.cn/images/lol/tft/champions/950x375/{{pic_name}}.png',
    s4: '//game.gtimg.cn/images/lol/tft/champions/950x375/{{pic_name}}.jpg',
    s5: '//game.gtimg.cn/images/lol/tft/champions/950x375/{{pic_name}}.jpg',
    s6: '//game.gtimg.cn/images/lol/tft/champions/950x375/{{pic_name}}.jpg',
  },
  /**英雄大图624x318 */
  hero_pic_2: {
    s2: '//game.gtimg.cn/images/lol/tft/cham-icons/624x318/{{pic_name}}.jpg',
    s3: '//game.gtimg.cn/images/lol/tft/cham-icons/624x318/{{pic_name}}.png',
    s4: '//game.gtimg.cn/images/lol/tft/cham-icons/624x318/{{pic_name}}.jpg',
    s5: '//game.gtimg.cn/images/lol/tft/cham-icons/624x318/{{pic_name}}.jpg',
    s6: '//game.gtimg.cn/images/lol/tft/cham-icons/624x318/{{pic_name}}.jpg',
  },
  // 控制整个页面切换"皮肤头像"
  // SkinVersion: milo.cookie.get('guide_tft_skin_version') ? milo.cookie.get('guide_tft_skin_version') : CurrentSet,
  // 20200422隐藏皮肤头像切换功能
  SkinVersion: CurrentSet,
  /**获取图片地址
   * @param pic_type 图片类型:race_job_icon,skill......
   * @param season_id 赛季id:1,2.......
   * @param pic_name 图片名称
   */
  getPicUrl: function (pic_type, season_id, pic_name) {
    if (!season_id || !pic_type || pic_name === undefined) return this.defaultPic;
    var basePicString = _.get(this, pic_type + '.' + season_id);
    if (!basePicString) return this.defaultPic;
    return basePicString.replace('{{pic_name}}', pic_name);
  }
};

/**
 * 本类在浏览器自带的Fetch基础上,封装的一个具有出错重复请求的类,
 * 如果接口需要轮询,请直接使用fetch,减少内存开销
 * @param url 请求地址
 * @param catchData 请求附带的设置对象
 */
var FetchRequest = /** @class */ (function () {
  function FetchRequest(url, catch_data) {
    var _this = this;
    //重复尝试次数
    this.try_times = 1;
    //重复尝试间隔时间
    this.interval_time = 1000;
    this.try_timeout = undefined;
    //传递结果的Promise
    this.res_promise = undefined;
    this.res_promise_resolve = undefined;
    this.res_promise_reject = undefined;
    //请求地址
    this.url = undefined;
    //附带发送的数据
    this.catch_data = undefined;
    this.url = url;
    this.catch_data = catch_data;
    //实例化一个传递结果的promise,并代理其resolve和reject
    this.res_promise = new Promise(function (resolve, reject) {
      _this.res_promise_resolve = resolve;
      _this.res_promise_reject = reject;
      _this.try_request();
    });
  }
  FetchRequest.prototype.try_request = function () {
    //还有尝试次数
    if (this.try_times > 0) {
      --this.try_times;
      this.request();
    }
    //没有尝试次数了,退出
    else {
      this.request_fail();
    }
  };
  FetchRequest.prototype.request = function () {
    var _this = this;
    fetch(this.url, this.catch_data).then(function (res) {
      if (res.ok) {
        _this.request_success(res);
      }
      else {
        throw new Error("服务器连通,但未正常响应请求");
      }
    })["catch"](function (error) {
      console.warn("请求", _this.url, "发生错误,继续尝试:", error);
      clearTimeout(_this.try_timeout);
      _this.try_timeout = setTimeout(function () {
        _this.try_request();
      }, _this.interval_time);
    });
  };
  /**接口请求成功 */
  FetchRequest.prototype.request_success = function (res) {
    this.res_promise_resolve(res);
    this.clear_memory();
  };
  /**接口请求失败 */
  FetchRequest.prototype.request_fail = function () {
    console.error("请求失败,重试次数耗尽", this.url);
    this.res_promise_reject("请求失败,重试次数耗尽 " + this.url);
    this.clear_memory();
  };
  /**清理内存*/
  FetchRequest.prototype.clear_memory = function () {
    clearTimeout(this.try_timeout);
    this.res_promise_resolve = undefined;
    this.res_promise_reject = undefined;
  };
  return FetchRequest;
}());
function fetchRequest(url, catchData) {
  return new FetchRequest(url, catchData).res_promise;
};
/**
 * 用于请求js文件,带错误重试
 * 放于全局作用域下加载
 * @param url 请求地址
 * @param datakey 该js加载后,会生成的全局变量名称,用来检查js是否正确加载,如js里有多个,写其中一个
 * */
function FetchDataScript(url, datakey, charset) {
  /**重复发起几次请求,直到次数耗尽或请求成功,默认4次 */
  this.tryTimes = 4;
  this.intervalTime = 200;
  this.url = url;
  this.datakey = datakey;
  /**借位的promise对象,代替原生fetch返回的promise响应 */
  this.promise = new Promise(function (resolve, reject) {
    if (window[datakey]) {
      resolve(window[datakey]);
      return;
    }
    var tryFunction = function () {
      --this.tryTimes;
      var jsonpScript = document.createElement('script');
      charset && jsonpScript.setAttribute('charset', charset);
      jsonpScript.setAttribute('src', this.url);
      jsonpScript.onerror = function (error) {
        document.getElementsByTagName('head')[0].removeChild(jsonpScript);
        if (this.tryTimes > 0) {
          console.warn('请求' + this.url + '失败,继续尝试:', error);
          setTimeout(function () {
            tryFunction();
          }.bind(this), this.intervalTime);
        } else {
          reject('请求' + this.url + '次数耗尽,请检查服务情况');
          console.error('请求' + this.url + '次数耗尽,请检查服务情况', error);
        }
      }.bind(this);
      jsonpScript.onload = function () {
        document.getElementsByTagName('head')[0].removeChild(jsonpScript);
        var data = window[datakey];
        if (!data) {
          jsonpScript.onerror();
          return;
        }
        resolve(data);
      }.bind(this);
      document.getElementsByTagName('head')[0].appendChild(jsonpScript);
    }.bind(this);
    tryFunction();
  }.bind(this));
};
function fetchDataScript(url, datakey, charset) {
  return new FetchDataScript(url, datakey, charset).promise;
};

/**
 * jsonp
 * */
function FetchJsonpScript(url, callbackName) {
  /**重复发起几次请求,直到次数耗尽或请求成功,默认2次 */
  this.tryTimes = 2;
  this.intervalTime = 500;
  this.url = url;
  /**借位的promise对象,代替原生fetch返回的promise响应 */
  this.promise = new Promise(function (resolve, reject) {
    var tryFunction = function () {
      --this.tryTimes;
      // 接收jsonp的函数
      window[callbackName] = function (res) {
        resolve(res);
        delete window[callbackName];
        document.getElementsByTagName('head')[0].removeChild(jsonpScript);
      };
      var jsonpScript = document.createElement('script');
      jsonpScript.setAttribute('src', this.url);
      jsonpScript.onerror = function (error) {
        document.getElementsByTagName('head')[0].removeChild(jsonpScript);
        if (this.tryTimes > 0) {
          console.warn('请求' + this.url + '失败,继续尝试:', error);
          setTimeout(function () {
            tryFunction();
          }.bind(this), this.intervalTime);
        } else {
          reject('请求' + this.url + '次数耗尽,请检查服务情况');
          console.error('请求' + this.url + '次数耗尽,请检查服务情况:', error);
        }
      }.bind(this);
      document.getElementsByTagName('head')[0].appendChild(jsonpScript);
    }.bind(this);
    tryFunction();
  }.bind(this));
};
function fetchJsonpScript(url, callbackName) {
  return new FetchJsonpScript(url, callbackName).promise;
};

/**
 * 用于请求返回结果如"var LWDFramework_Swoole = {}"的接口，返回相同的变量名，不做数据缓存，带错误重试
 * 放于全局作用域下加载
 * @param url 请求地址
 * @param datakey 该js加载后,会生成的全局变量名称,用来检查js是否正确加载,如js里有多个,写其中一个
 * */
function FetchVariableDataScript(url, datakey, charset) {
  /**重复发起几次请求,直到次数耗尽或请求成功,默认4次 */
  this.tryTimes = 4;
  this.intervalTime = 200;
  this.url = url;
  this.datakey = datakey;
  /**借位的promise对象,代替原生fetch返回的promise响应 */
  this.promise = new Promise(function (resolve, reject) {
    var tryFunction = function () {
      --this.tryTimes;
      var jsonpScript = document.createElement('script');
      charset && jsonpScript.setAttribute('charset', charset);
      jsonpScript.setAttribute('src', this.url);
      jsonpScript.onerror = function (error) {
        document.getElementsByTagName('head')[0].removeChild(jsonpScript);
        if (this.tryTimes > 0) {
          console.warn('请求' + this.url + '失败,继续尝试:', error);
          setTimeout(function () {
            tryFunction();
          }.bind(this), this.intervalTime);
        } else {
          reject('请求' + this.url + '次数耗尽,请检查服务情况');
          console.error('请求' + this.url + '次数耗尽,请检查服务情况', error);
        }
      }.bind(this);
      jsonpScript.onload = function () {
        var data = window[datakey];
        delete window[datakey];
        if (!data) {
          jsonpScript.onerror();
          return;
        }
        document.getElementsByTagName('head')[0].removeChild(jsonpScript);
        resolve(data);
      }.bind(this);
      document.getElementsByTagName('head')[0].appendChild(jsonpScript);
    }.bind(this);
    tryFunction();
  }.bind(this));
};
function fetchVariableDataScript(url, datakey, charset) {
  return new FetchVariableDataScript(url, datakey, charset).promise;
};

/**
 * 用于请求几天前的数据，如果前一天没有数据，则请求再往前一天的数据，最多请求到5天前
 * @param interface 请求接口
 * @param callbackName jsonp调用方法名称
 * @param masterId 大神puuid
 * @param area 大区id
 */
async function requestDataBeforeDays(interface, callbackName, area, masterId) {
  var date = window.TFTFuncLib.pushDay(new Date(), -1).split(' ')[0];
    backDate = date.replace(new RegExp("/", "g"), '');
  // console.warn(backDate)
  var resData = await window.fetchJsonpScript(masterId ? interface(backDate, callbackName, masterId, area) : interface(backDate, callbackName, area), callbackName);//'LWDFramework_Swoole'
  // console.log(resData)
  if(_.get(resData, 'code') === 0) {
    var tryRequestData = async function (resData, pushDays) {
      var rData = _.get(resData, 'data.result');
      if(!rData || !rData.length) {
        date = window.TFTFuncLib.pushDay(new Date(), pushDays).split(' ')[0];
        backDate = date.replace(new RegExp("/", "g"), '');
        // console.warn(backDate)
        var data = await window.fetchJsonpScript(masterId ? interface(backDate, callbackName, masterId, area) : interface(backDate, callbackName, area), callbackName);
        // console.log(data)
        return data;
      }
      return resData;
    }.bind(this);
    resData = await tryRequestData(resData, -2);
    resData = await tryRequestData(resData, -3);
    resData = await tryRequestData(resData, -4);
    resData = await tryRequestData(resData, -5);
  }
  if(resData && _.get(resData, 'data.result')) {
    resData.updateDate = date;
    masterId && (resData.masterId = masterId);
    area && (resData.area = area);
    return resData;
  } else {
    return Promise.reject('数据为空');
  }
};
/**
 * 接口请求成功则缓存，输出一个返回请求结果副本的函数
 * 请求失败则清空缓存可发起一个新的请求
 * @param interfaceType 请求接口类型
 * @param callbackName jsonp调用方法名称
 * @param masterId 大神puuid
 * @param area 大区id
 */
function requestDataByDays(interfaceType, callbackName, masterId, area) {
  if(!interfaceType) return Promise.reject('请求接口类型为空');
  if(!masterId || !area) return Promise.reject('参数为空');
  window.requestDataByDays[interfaceType] || (window.requestDataByDays[interfaceType] = {});

  var key = masterId + '_' + area;
  if(window.requestDataByDays[interfaceType][key]) return window.requestDataByDays[interfaceType][key];
  return window.requestDataByDays[interfaceType][key] = window.requestDataBeforeDays(window.ApiManager[interfaceType], callbackName, area, masterId).then(function(res) {
    if(!res) return Promise.reject('接口请求失败');
    if(_.get(res, 'code') !== 0) return Promise.reject(_.get(res, 'msg') + ' code:' + _.get(res, 'code'));
    var rData = _.get(res, 'data.result');
    if(!rData || !rData.length) return Promise.reject('暂无数据');
    return function() {
      return _.cloneDeep(res);
    };
  }).catch(function(err) {
    window.requestDataByDays[interfaceType][key] = null;
    console.error(err);
    return Promise.reject(err);
  });
};

/**
 * 接口请求成功则缓存
 * 请求失败则清空缓存可发起一个新的请求
 * @param interfaceType 请求接口类型
 * @param area 大区id
 */
function requestDataByDaysForRanking(interfaceType, callbackName, area) {
  if(!interfaceType) return Promise.reject('请求接口类型为空');
  if(!area) return Promise.reject('参数为空');
  window.requestDataByDaysForRanking[interfaceType] || (window.requestDataByDaysForRanking[interfaceType] = {});

  if(window.requestDataByDaysForRanking[interfaceType][area]) return window.requestDataByDaysForRanking[interfaceType][area];
  return window.requestDataByDaysForRanking[interfaceType][area] = window.requestDataBeforeDays(window.ApiManager[interfaceType], callbackName, area).then(function (res) {
    if(!res) return Promise.reject('接口请求失败');
    if(_.get(res, 'code') !== 0) return Promise.reject(_.get(res, 'msg') + ' code:' + _.get(res, 'code'));
    var rData = _.get(res, 'data.result');
    if(!rData || !rData.length) return Promise.reject('暂无数据');
    return res;
  }).catch(function (err) {
    window.requestDataByDaysForRanking[interfaceType][area] = null;
    console.error(err);
    return Promise.reject(err);
  });
};

// 登录
var TFTLogin = {
  areaCookieKey: '',
  init: function () {
    milo.ready(function () {
      need("biz.login", function (LoginManager) {
        LoginManager.checkLogin(function () {
          // LoginManager.getUserFace(function (data) {
          //   window.vuex.commit('setPlayerUserFace', data.userFace);
          // });
          var areaCookieKey = 'area' + LoginManager.getUserUin();
          var cookieValue = milo.cookie.get(areaCookieKey);
          //登录且绑定大区
          if (cookieValue) {
            var areaInfo = cookieValue.split('-');
            window.vuex.commit('setPlayerNickname', areaInfo[1]);
            window.vuex.commit('setPlayerArea', areaInfo[0]);
            this.getPlayerInfo(Number(areaInfo[2]));
          } else if (LoginManager.getUserUin() && !cookieValue) {
            //登录未绑定大区
            // this.changeArea();
          }

        }.bind(this), function () {
          //未登录
        }.bind(this));

      }.bind(this));

    }.bind(this));
  },
  login: function () {
    need("biz.login", function (LoginManager) {
      LoginManager.init({
        needReloadPage: true
      });
      LoginManager.login();
    });
    return false;
  },
  logout: function () {
    need("biz.login", function (LoginManager) {
      LoginManager.logout(function () {
        window.vuex.commit('setPlayerNickname', null);
        window.vuex.commit('setPlayerArea', null);
        window.vuex.commit('setWhiteAuthorData', null);
        window.vuex.commit('setPlayerUserFace', null);
        milo.cookie.set(this.areaCookieKey, '');
      }.bind(this));
    }.bind(this));

    return false;
  },
  changeArea: function () {
    need(["biz.roleselector"], function (RoleSelector) {
      RoleSelector.init({
        'gameId': 'lol',
        'submitEvent': function (roleObject) {
          var iArea = roleObject.submitData['areaid'];
          var sRoleName = roleObject.submitData['rolename'];
          areaCookieKey = "area" + roleObject.submitData['roleid'];
          // console.log(roleObject);
          milo.cookie.set(areaCookieKey, LOLServerSelect.zoneToName(iArea) + '-' + sRoleName + '-' + iArea, false);
          alert('大区绑定成功！当前绑定大区【' + LOLServerSelect.zoneToName(iArea) + '】');
          window.vuex.commit('setPlayerNickname', sRoleName);
          window.vuex.commit('setPlayerArea', LOLServerSelect.zoneToName(iArea));

          this.getPlayerInfo(Number(iArea)); //获取玩家信息
        }.bind(this)
        // 'cancelEvent': function () {
        //   window.location.href = '//lol.qq.com/guides/index.shtml';
        // }
      });
      RoleSelector.show();
    }.bind(this));
  },
  // 请求玩家信息接口次数
  getPlayerInfoTimes: 0,
  // 获取玩家信息
  getPlayerInfo: function (area) {
    ApiManager.requestPlayerInfo(area).then(function (resp) {
      if (resp.MobilePlayerInfo.status === 0) {
        var profile = _.head(resp.MobilePlayerInfo.msg.res.uuid_prifle_list);
        var logoUrl = profile.logo_url.replace('http://', '//');
        logoUrl = this.parseLogoUrl(logoUrl);
        profile && window.vuex.commit('setPlayerUserFace', logoUrl);
        this.getPlayerInfoTimes = 0;
      } else {
        this.getPlayerInfoTimes++;
        if (this.getPlayerInfoTimes < 5) this.getPlayerInfo(area);
        else this.logout();
      }
    }.bind(this));
    // 判断是否是白名单
    ApiManager.requestWhiteAuthorData().then(function (authorResp) {
      if (_.get(authorResp, 'status') === 0) {
        if (_.get(authorResp, 'data.allow') === 1) {
          window.vuex.commit('setWhiteAuthorData', true);
        }
      }
    }.bind(this));
  },
  //判断掌盟头像是否需要加尺寸参数
  parseLogoUrl: function (o) {
    var logoSizeParam = '/0';
    if (typeof (o) === 'string') {
      if (!this.judgeEndStr(o, logoSizeParam)) {
        if (o.indexOf('qtl_user') !== -1 || o.indexOf('//p.qpic.cn/qtlinfo') !== -1) {
          o += logoSizeParam;
        }
      }
      return o;
    }
    if (typeof (o) === 'object') {
      for (var i = 0, j = o.length; i < j; ++i) {
        var obj = o[i];
        var logoUrl = obj.logo_url;
        if (!this.judgeEndStr(logoUrl, logoSizeParam)) {
          if (logoUrl.indexOf('qtl_user') !== -1 || logoUrl.indexOf('//p.qpic.cn/qtlinfo') !== -1) {
            logoUrl += logoSizeParam;
          }
          obj.logo_url = logoUrl;
        }
      }
      return o;
    }
  },
  //判断a字符串结尾是否有b字符串
  judgeEndStr: function (a, b) {
    var d = a.length - b.length;
    return (d >= 0 && a.lastIndexOf(b) === d);
  }
};
/**
 * API管理, 所有API都封装在此 
 */
window.ApiManager = {
  /**
  * 基于FetchRequest封装的Promise
  * @param url 请求地址
  * @param catchData 请求附带的设置对象
  * @param type 不填: 默认请求, 'script': 获取js脚本
  */
  baseRequestPromise: function (url, catchData, type) {
    return new Promise(function (resolve, reject) {
      fetchRequest(url, catchData).then(function (res) {
        resolve(type !== 'script' ? res.json() : res.text())
      }).catch(function (error) {
        console.log(error);
        reject(error);
      })
    })
  },
  baseScriptRequestPromise: function (url, datakey, charset) {
    return fetchDataScript(url, datakey, charset)
  },
  // 请求英雄, 特质, 职业, 装备, 海克斯5大基础数据
  requestBaseData: function () {
    return Promise.all([
      this.baseRequestPromise(DataUrlManager['hero_data'][CurrentSet]),
      this.baseRequestPromise(DataUrlManager['race_data'][CurrentSet]),
      this.baseRequestPromise(DataUrlManager['job_data'][CurrentSet]),
      this.baseRequestPromise(DataUrlManager['equipment_data'][CurrentSet]),
      this.baseRequestPromise(DataUrlManager['hex_data'][CurrentSet])
    ])
  },
  // 请求阵容数据和作者信息（20220307阵容优化不使用此接口了）
  requestLineupData: function () {
    var urlParamTest = window.vueRouter.currentRoute.query.test;
    if (urlParamTest === '1') {
      return this.baseRequestPromise('//game.gtimg.cn/images/lol/act/tftzlkauto/json/t20210517/lineup_detail_total.json');
    }
    return this.baseRequestPromise(DataUrlManager['linelist'][CurrentSet]);
  },
  // 请求双人模式阵容数据
  requestDoubleLineupData: function () {
    return this.baseRequestPromise(DataUrlManager['double_linelist'][CurrentSet]);
  },
  // 请求所有阵容列表（包含已审核、已上架和已推荐三种状态，20220307阵容优化新增）
  requestListedLineupData: function () {
    return this.baseRequestPromise('//game.gtimg.cn/images/lol/act/tftzlkauto/json/totalLineupJson/lineup_total.json?v=' + (Date.now() / 600000 >> 0));
  },
  // 获取作者信息
  requestAuthorList: function () {
    return this.baseRequestPromise(DataUrlManager['authorList']);
  },
  // 获取作者详情页阵容列表
  requestAuthorDetailLineup: function (authorId) {
    return this.baseRequestPromise('//game.gtimg.cn/images/lol/act/tftzlkauto/json/lineupJson/' + window.CurrentSet + '/author/' + authorId + '.json');
  },
  // 获取渠道列表
  requestPlatformList: function () {
    return this.baseRequestPromise('//game.gtimg.cn/images/lol/act/tftzlkauto/json/platJson/plat.json');
  },
  // 获取小小英雄
  requestLittleHero: function () {
    return this.baseRequestPromise(DataUrlManager['little_hero_data'][CurrentSet])
  },
  // 按需加载html2canvas组件
  requestHtml2canvasJs: function () {
    return this.baseScriptRequestPromise('js/lib/html2canvas.min.js', 'html2canvas');
  },
  // 按需加载腾讯视频组件
  requestTxplayerJs: function () {
    return this.baseScriptRequestPromise('//vm.gtimg.cn/tencentvideo/txp/js/txplayer.js', 'Txplayer');
  },
  // 版本-kv(运营推荐位接口)
  requestOperateJson: function () {
    return this.baseRequestPromise('//game.gtimg.cn/images/lol/act/tftzlkauto/json/operateJson/operate.json');
  },
  // 最新攻略-类别列表
  requestTFTGuideAlbum: function () {
    return this.baseScriptRequestPromise('//lol.qq.com/act/AutoCMS/publish/LOLAct/tftGuideAlbum/tftGuideAlbum.js', 'tftGuideAlbum');
  },
  // 最新攻略-类别-'最新'
  requestLatestNews: function () {
    // return this.baseRequestPromise('//apps.game.qq.com/cmc/cross?serviceId=3&tagids=1934&limit=6&source=glzx&typeids=1,2');
    return this.baseRequestPromise('https://apps.game.qq.com/cmc/cross?serviceId=245&limit=6&source=zm&tagids=78387&typeids=1,2');
  },
  // 获取最新攻略-类别-'最新'之外的类别
  requestCollectionContentList: function (collectionId) {
    return this.baseRequestPromise('//apps.game.qq.com/cmc/zmMcnCollectionContentList?collectionid=' + collectionId + '&page=1&num=10&source=glzx');
  },
  // 获取游戏当前版本号
  requestTFTVersion: function () {
    return this.baseScriptRequestPromise('//lol.qq.com/act/AutoCMS/publish/LOLWeb/OfficialWebsite/website_cfg.js', 'OfficialWebsiteCfg');
  },
  // 获取游戏当前版本号链接
  requestTFTVersionLink: function () {
    return this.baseRequestPromise('https://apps.game.qq.com/cmc/cross?serviceId=3&tagids=1983&limit=1&source=glzx&typeids=1');
  },
  // 获取单个阵容详情
  requestTFTLineupByLineId: function (lineId, channelId) {
    !channelId && (channel_id = window.TFTChannelId);
    return this.baseRequestPromise('//game.gtimg.cn/images/lol/act/tftzlkauto/json/lineupJson/' + window.CurrentSet + '/' + channelId + '/' + lineId + '.json');
  },
  // 获取单个双人阵容详情
  requestTFTDoubleLineupByLineId: function (lineId, channelId) {
    !channelId && (channel_id = window.TFTChannelId);
    return this.baseRequestPromise('//game.gtimg.cn/images/lol/act/tftzlkauto/json/doubleLineupJson/' + window.CurrentSet + '/' + channelId + '/' + lineId + '.json');
  },
  // 获取单个阵容详情（不需要渠道参数）
  requestLineupByLineId: function (lineId) {
    return this.baseRequestPromise('//game.gtimg.cn/images/lol/act/tftzlkauto/json/lineupJson/total/' + lineId + '.json');
  },
  // 获取玩家账号信息
  requestPlayerInfo: function (area) {
    return this.baseRequestPromise('//lol.ams.game.qq.com/lol/autocms/v1/transit/LOL/LOLWeb/Official/MobilePlayerInfo,PlayerBattleSummary?use=zm,uid,acc&area=' + area, { credentials: 'include', mode: 'cors' });
  },
  // 判断是否是白名单
  requestWhiteAuthorData: function () {
    var urlParamTest = window.vueRouter.currentRoute.query.test;
    var goUrl = '//lol.sw.game.qq.com/lol/lwdcommact/a20201106tft/a20201106tftLineup/verify';
    urlParamTest === '1' && (goUrl += '?test=1');
    return this.baseRequestPromise(goUrl, {
      credentials: 'include'
    });
  },
  // 上传阵容
  postUploadLineUp: function (data) {
    var urlParamTest = window.vueRouter.currentRoute.query.test;
    var goUrl = '//lol.sw.game.qq.com/lol/lwdcommact/a20201106tft/a20201106tftLineup/save';
    urlParamTest === '1' && (goUrl += '?test=1');
    // body数据
    var formData = new FormData();
    formData.append('lineupInfo', JSON.stringify(data.lineupInfo));
    return this.baseRequestPromise(goUrl, {
      credentials: 'include',
      method: 'POST',
      // headers:{
      //   'Content-Type':'multipart/form-data; charset=utf-8'
      //   // 'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'
      // },
      body: formData
    });
  },
  /** 主羁绊排行列表 
   * @param period 时间周期 1, 7, 30
   * @param tier 段位 0: 大师以上 1: 黄金至钻石 255: 全部
   * @param raceId 特质id 255: 全部
   * @param jobId 职业id 255: 全部
   */
  getMainEffectRank: function (period, tier, raceId, jobId) {
    var time_type = period || '1';
    var tier_part = tier ? '&tier_part=' + tier : '&tier_part=255';
    var raceId = raceId ? '&raceid=' + raceId : '&raceid=255';
    var jobId = jobId ? '&jobid=' + jobId : '&jobid=255';
    return fetchJsonpScript('//lol.sw.game.qq.com/lol/lwdcommact/a20200629api/A20200629api/mbrank?time_type=' + time_type + tier_part + raceId + jobId + '&callback=TFTBigDataMainEffectRank', 'TFTBigDataMainEffectRank')
  },
  /** 英雄排行列表
   * @param period 时间周期 1, 7, 30
   * @param tier 段位 0: 大师以上 1: 黄金至钻石 255: 全部
   * @param raceId 特质id 255: 全部
   * @param jobId 职业id 255: 全部
   */
  getHeroesRank: function (period, tier, raceId, jobId) {
    var time_type = period || '1';
    var tier_part = tier ? '&tier_part=' + tier : '&tier_part=255';
    var raceId = raceId ? '&raceid=' + raceId : '&raceid=255';
    var jobId = jobId ? '&jobid=' + jobId : '&jobid=255';
    return fetchJsonpScript('//lol.sw.game.qq.com/lol/lwdcommact/a20200629api/A20200629api/herorank?time_type=' + time_type + tier_part + raceId + jobId + '&callback=TFTBigDataHeroesRank', 'TFTBigDataHeroesRank')
  },
  /** 子羁绊组合详情列表
   * @param period 时间周期 1, 7, 30
   * @param effects 羁绊信息 结构: id,等级;id,等级...
   */
  getEffectDetailRank: function (period, effects) {
    var time_type = period || '1';
    return fetchJsonpScript('//lol.sw.game.qq.com/lol/lwdcommact/a20200629api/A20200629api/sbc?time_type=' + time_type + '&main_traits_id=' + effects + '&tier_part=255&callback=TFTBigDataEffectDetailRank', 'TFTBigDataEffectDetailRank')
  },
  /** 主羁绊克制列表
   * @param period 时间周期 1, 7, 30
   * @param effects 羁绊信息 结构: id,等级;id,等级...
   */
  getMainEffectCounterRank: function (period, effects) {
    var time_type = period || '1';
    return fetchJsonpScript('//lol.sw.game.qq.com/lol/lwdcommact/a20200629api/A20200629api/mbrl?time_type=' + time_type + '&main_traits_id=' + effects + '&tier_part=255&callback=TFTBigDataMainEffectCounterRank', 'TFTBigDataMainEffectCounterRank')
  },
  /** 子羁绊克制列表
   * @param period 时间周期 1, 7, 30
   * @param main_effects 羁绊信息 结构: id,等级;id,等级...
   * @param sub_effects 羁绊信息 结构: id,等级|id,等级...
   * @param hero_ids 英雄id列表 结构: id,id...
   */
  getSubEffectCounterRank: function (period, main_effects, sub_effects, hero_ids) {
    var time_type = period || '1';
    return fetchJsonpScript('//lol.sw.game.qq.com/lol/lwdcommact/a20200629api/A20200629api/sbrl?time_type=' + time_type + '&main_traits_id=' + main_effects + '&minor_traits_id=' + sub_effects + '&minor_champion_content_id=' + hero_ids + '&tier_part=255&callback=TFTBigDataSubEffectCounterRank', 'TFTBigDataSubEffectCounterRank')
  },
  // 装备排行
  getEquipRank: function (period, tier) {
    var time_type = period || '1';
    var tier_part = tier ? '&tier_part=' + tier : '&tier_part=255';
    return Promise.all([
      // this.baseRequestPromise('//lol.qq.com/act/a20200224tft/staticJS-vue3/TFTEquipMap.json'),
      this.baseRequestPromise('//lol.qq.com/act/a20200224tft/staticJS-vue3/TFTEquipMap.json?v=' + (Date.now() / 600000 >> 0)),
      fetchJsonpScript('//lol.sw.game.qq.com/lol/lwdcommact/a20210420api/a20210420api/equiprank?callback=TFTBigDataEquipRank&time_type=' + time_type + tier_part, 'TFTBigDataEquipRank')
    ])
  },
  // 获取大区列表
  getLOLArea: function () {
    return this.baseScriptRequestPromise('//lol.qq.com/comm-htdocs/js/game_area/lol_server_select.js', 'LOLServerSelect', 'gbk');
  },
  // 获取大区段位排行
  getAreaTierRank: function (area_id, offset) {
    // 获取sign参数
    var params = "area_id=" + area_id + "&offset=" + offset;
    var key = "qtld^xibt#a*";
    var sign = hex_md5(params + key);
    // body数据
    var withdata = {
      next_offset: "",
      player_list: []
    };
    return this.baseRequestPromise('//qt.qq.com/lua/mlol_battle_info/get_total_tier_rank_list?area_id=' + area_id + '&offset=' + offset + '&sign=' + sign, { 
      credentials: 'include', 
      method: 'POST',
      body: JSON.stringify(withdata)
    });
  },
  // 获取阵容标签列表
  getLineupTagList: function () {
    return this.baseRequestPromise('//game.gtimg.cn/images/lol/act/tftzlkauto/json/tagJson/tag.json?v=' + (Date.now() / 600000 >> 0));
  },
  // 获取阵容特性列表
  getLineupFeatureList: function () {
    return this.baseRequestPromise('//game.gtimg.cn/images/lol/act/tftzlkauto/json/specialityJson/speciality.json?v=' + (Date.now() / 600000 >> 0));
  },
  // 获取阵容模式列表
  getLineupTypeList: function () {
    return this.baseRequestPromise('//game.gtimg.cn/images/lol/act/tftzlkauto/json/lineupTypeJson/lineupType.json?v=' + (Date.now() / 600000 >> 0));
  },
  // 获取羁绊数据
  getBuffData: function() {
    if(window.ApiManager.getBuffData.cache) return window.ApiManager.getBuffData.cache;
    return window.ApiManager.getBuffData.cache = fetchRequest('//game.gtimg.cn/images/lol/act/20190722tftxcx/data/buffData.json?v=' + (Date.now() / 600000 >> 0)).then(function(res) {
      return res.json();
    }).catch(function(err) {
      window.ApiManager.getBuffData.cache = null;
      console.error(err);
      return Promise.reject(err);
    });
  },
  // 获取棋子数据
  getChampionData: function() {
    if(window.ApiManager.getChampionData.cache) return window.ApiManager.getChampionData.cache;
    return window.ApiManager.getChampionData.cache = fetchRequest('//game.gtimg.cn/images/lol/act/20190722tftxcx/data/heroid_chaid_pieceid.json?v=' + (Date.now() / 600000 >> 0)).then(function(res) {
      return res.json();
    }).catch(function(err) {
      window.ApiManager.getChampionData.cache = null;
      console.error(err);
      return Promise.reject(err);
    });
  },
  // 获取装备映射
  getEquipMap: function() {
    if(window.ApiManager.getEquipMap.cache) return window.ApiManager.getEquipMap.cache;
    return window.ApiManager.getEquipMap.cache = fetchRequest('//lol.qq.com/act/a20200224tft/staticJS-vue3/TFTEquipMap.json?v=' + (Date.now() / 600000 >> 0)).then(function(res) {
      return res.json();
    }).catch(function(err) {
      window.ApiManager.getEquipMap.cache = null;
      console.error(err);
      return Promise.reject(err);
    });
  },
  // 获取小小英雄信息
  getLittleHeroInfo: function () {
    if(window.ApiManager.getLittleHeroInfo.cache) return window.ApiManager.getLittleHeroInfo.cache;
    return window.ApiManager.getLittleHeroInfo.cache = fetchRequest('https://mlol.qt.qq.com/go/exploit/get_tiny_hero_list?v=' + (Date.now() / 600000 >> 0)).then(function (res) {
      return res.json();
    }).catch(function (err) {
      window.ApiManager.getLittleHeroInfo.cache = null;
      console.error(err);
      return Promise.reject(err);
    });
  },
  // 获取大神羁绊棋子数据
  getMasterCom: function(date, callbackName, masterId, area) {
    return '//lol.sw.game.qq.com/lol/lwdcommact/a20210906api/a20210906api/mastercom?callback=' + callbackName + '&date=' + date + '&puuid=' + masterId + '&area=' + area + '&v=' + (Date.now() / 600000 >> 0);
  },
  // 获取大神羁绊使用数据
  getMasterRaceJob: function(date, callbackName, masterId, area) {
    return '//lol.sw.game.qq.com/lol/lwdcommact/a20210906api/a20210906api/racejob?callback=' + callbackName + '&date=' + date + '&puuid=' + masterId + '&area=' + area + '&v=' + (Date.now() / 600000 >> 0);
  },
  // 获取大神棋子使用数据
  getMasterHero: function(date, callbackName, masterId, area) {
    return '//lol.sw.game.qq.com/lol/lwdcommact/a20210906api/a20210906api/hero?callback=' + callbackName + '&date=' + date + '&puuid=' + masterId + '&area=' + area + '&v=' + (Date.now() / 600000 >> 0);
  },
  // 获取大神装备使用数据
  getMasterEquip: function(date, callbackName, masterId, area) {
    return '//lol.sw.game.qq.com/lol/lwdcommact/a20210906api/a20210906api/equip?callback=' + callbackName + '&date=' + date + '&puuid=' + masterId + '&area=' + area + '&v=' + (Date.now() / 600000 >> 0);
  },
  // 获取大神生涯数据
  getMasterCareer: function(date, callbackName, masterId, area) {
    return '//lol.sw.game.qq.com/lol/lwdcommact/a20210906api/a20210906api/master?callback=' + callbackName + '&date=' + date + '&puuid=' + masterId + '&area=' + area + '&v=' + (Date.now() / 600000 >> 0);
  },
  // TFT段位排行榜
  getTFTTierRanking: function(date, callbackName, worldid) {
    return '//lol.sw.game.qq.com/lol/lwdcommact/a20211021tftSet6/a20211021api/ranking?callback=' + callbackName + '&dtstatdate=' + date + '&worldid=' + worldid + '&v=' + (Date.now() / 600000 >> 0);
  },
  // TFT大神信息
  getMasterInfo: function(date, callbackName, puuid, worldid) {
    return '//lol.sw.game.qq.com/lol/lwdcommact/a20211021tftSet6/a20211021api/info?callback=' + callbackName + '&dtstatdate=' + date + '&worldid=' + worldid + '&puuid=' + puuid + '&v=' + (Date.now() / 600000 >> 0);
  },
  // TFT大神战绩列表
  getMasterFightList: function(puuid, areaid, filter, start, limit) {
    if(!puuid || !areaid) return Promise.reject('参数为空');
    filter = filter || 'all';
    start = start || 0;
    limit = limit || 10;

    var link = '//lol.sw.game.qq.com/lol/lwdcommact/a20211021tftSet6/a20211021api/fightlist?puuid=' + puuid + '&areaid=' + areaid + '&filter=' + filter + '&start=' + start + '&limit=' + limit + '&v=' + (Date.now() / 600000 >> 0);
    return fetchVariableDataScript(link, 'LWDFramework_Swoole').then(function (res) {
      if(_.get(res, 'code') !== 0) return Promise.reject(_.get(res, 'msg') + ' code:' + _.get(res, 'code'));
      var rData = _.get(res, 'data.result');
      if(!rData) return Promise.reject('暂无数据');
      rData.masterId = puuid;
      rData.area = areaid;
      return rData;
    }).catch(function (err) {
      console.error(err);
      return Promise.reject(err);
    });
  },
  // TFT大神战绩详情
  getMasterFightDetail: function(gameid, areaid) {
    if(!gameid || !areaid) return Promise.reject('参数为空');
    var link = '//lol.sw.game.qq.com/lol/lwdcommact/a20211021tftSet6/a20211021api/fightdetail?areaid=' + areaid + '&gameid=' + gameid + '&v=' + (Date.now() / 600000 >> 0);
    return fetchVariableDataScript(link, 'LWDFramework_Swoole').then(function (res) {
      if(_.get(res, 'code') !== 0) return Promise.reject(_.get(res, 'msg') + ' code:' + _.get(res, 'code'));
      var rData = _.get(res, 'data.result');
      if(!rData) return Promise.reject('暂无数据');
      rData.gameid = gameid;
      rData.area = areaid;
      return rData;
    }).catch(function (err) {
      console.error(err);
      return Promise.reject(err);
    });
  },
  /**
   * 游戏说（gicp）交叉搜索
   * @param source 请求来源
   * @param tagids 标签id eg:121986,120921
   * @param typeids 类型id，1:图文; 2:视频; 1,2:图文+视频
   * @param start 起始位置
   * @param limit 搜索条目数
   * @param logic 多个标签拉取关系 or:并集(包含其中之一); and:交集(同时包含)
   * @returns {Promise<never>|Promise<unknown>}
   */
  requestCMCCross: function (source, tagids, typeids, start, limit, logic) {
    if (!source) return Promise.reject('需要参数source');
    if (!tagids) return Promise.reject('需要参数tagids');
    !typeids && (typeids = '1,2');
    !logic && (logic = 'and');
    return this.baseRequestPromise('//apps.game.qq.com/cmc/cross?serviceId=245&source=' + source + '&tagids=' + tagids + '&typeids=' + typeids + '&logic=' + logic + '&start=' + start + '&limit=' + limit);
  },
  // getAreaTierRank: function (area_id, offset) {
  //   return this.baseRequestPromise('https://faas-4880.odp.qq.com/faas/4880/995/tft_rank_list', {
  //     mode: 'cors',
  //     credentials: 'include',
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     // body: JSON.stringify(withdata)
  //     body: 'areaid=' + area_id + '&page=' + offset
  //   });
  // }
}/* #t6Hl8#CD9D8BAB292D36880E21BAC9910C9AC9 */