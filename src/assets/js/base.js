const releaseType = [
  {
    id: 0,
    name: '行为',
    child: [
      {
        id: 0,
        name: '熬夜'
      },
      {
        id: 1,
        name: '拖延'
      },
      {
        id: 2,
        name: '疑病'
      },
      {
        id: 3,
        name: '逃避'
      },
      {
        id: 4,
        name: '空虚'
      },
      {
        id: 5,
        name: '强迫'
      },
      {
        id: 6,
        name: '讨好'
      },
      {
        id: 7,
        name: '控制'
      },
      {
        id: 8,
        name: '攻击'
      },
      {
        id: 9,
        name: '应激'
      },
      {
        id: 10,
        name: '暴力'
      },
      {
        id: 11,
        name: '自虐'
      },
      {
        id: 12,
        name: '洗脑'
      },
      {
        id: 13,
        name: '性欲'
      },
      {
        id: 14,
        name: '暴食节食'
      },
      {
        id: 15,
        name: '杂乱'
      },
      {
        id: 16,
        name: '懒惰'
      },
      {
        id: 17,
        name: '手机依赖'
      },
      {
        id: 18,
        name: '困惑'
      },
      {
        id: 19,
        name: '焦虑'
      }
    ]
  },
  {
    id: 1,
    name: '治疗',
    child: [
      {
        id: 0,
        name: '心理咨询'
      },
      {
        id: 1,
        name: '躯体反应'
      },
      {
        id: 2,
        name: '精神障碍'
      },
      {
        id: 3,
        name: '疾病诊断'
      },
      {
        id: 4,
        name: '心理危机'
      },
      {
        id: 5,
        name: '病态人格'
      },
      {
        id: 6,
        name: '治疗方法'
      },
      {
        id: 7,
        name: '心理测评'
      },
      {
        id: 8,
        name: '流派方案'
      },
      {
        id: 9,
        name: '倾诉倾听'
      },
      {
        id: 10,
        name: '医院机构'
      },
      {
        id: 11,
        name: '行为失常'
      },{
        id: 12,
        name: '创伤治疗'
      },
    ]
  },
  {
    id: 2,
    name: '人际',
    child: [
      {
        id: 0,
        name: '人际边界'
      },
      {
        id: 1,
        name: '社交恐惧'
      },
      {
        id: 2,
        name: '沟通'
      },
      {
        id: 3,
        name: '社交软件'
      },
      {
        id: 4,
        name: '朋友'
      },
      {
        id: 5,
        name: '舍友同学'
      },
      {
        id: 6,
        name: '同事'
      },
      {
        id: 7,
        name: '矛盾冲突'
      },
      {
        id: 8,
        name: '欺骗与信任'
      },
      {
        id: 9,
        name: '同理心'
      },
      {
        id: 10,
        name: '社会适应'
      },
    ]
  },
  {
    id: 3,
    name: '成长',
    child: [
      {
        id: 0,
        name: '自我成长'
      },
      {
        id: 1,
        name: '自我接纳'
      },
      {
        id: 2,
        name: '压力管理'
      },
      {
        id: 3,
        name: '性格完善'
      },
      {
        id: 4,
        name: '发展规律'
      },
      {
        id: 5,
        name: '工作学习'
      },
      {
        id: 6,
        name: '人格体制'
      },
      {
        id: 7,
        name: '人生意义'
      },
      {
        id: 8,
        name: '儿童成长'
      },
      {
        id: 9,
        name: '学生成长'
      },
    ]
  },
  {
    id: 4,
    name: '情绪',
    child: [
      {
        id: 0,
        name: '情绪调节'
      },
      {
        id: 1,
        name: '抑郁情绪'
      },
      {
        id: 2,
        name: '情绪智力'
      },
      {
        id: 3,
        name: '脆弱流泪'
      },
      {
        id: 4,
        name: '恐慌无助'
      },
      {
        id: 5,
        name: '内疚羞耻'
      },
      {
        id: 6,
        name: '焦虑情绪'
      },
      {
        id: 7,
        name: '疗愈方法'
      },
      {
        id: 8,
        name: '表达情绪'
      },
    ]
  },
  {
    id: 5,
    name: '恋爱',
    child: [
      {
        id: 0,
        name: '单身'
      },
      {
        id: 1,
        name: '失恋'
      },
      {
        id: 2,
        name: '好感'
      },
      {
        id: 3,
        name: '吵架'
      },
      {
        id: 4,
        name: '出轨'
      },
      {
        id: 5,
        name: '依赖依恋'
      },
      {
        id: 6,
        name: '恋爱经营'
      },
      {
        id: 7,
        name: '安全感'
      },
      {
        id: 8,
        name: '性行为'
      },
      {
        id: 9,
        name: '性取向'
      },
      {
        id: 10,
        name: '处女情结'
      },
      {
        id: 11,
        name: '挽回前任'
      },
    ]
  },
  {
    id: 6,
    name: '婚姻',
    child: [
      {
        id: 0,
        name: '婚前'
      },
      {
        id: 1,
        name: '相亲'
      },
      {
        id: 2,
        name: '出轨'
      },
      {
        id: 3,
        name: '婚姻概念'
      },
      {
        id: 4,
        name: '生育观念'
      },
      {
        id: 5,
        name: '婆媳岳婿'
      },
      {
        id: 6,
        name: '产前产后'
      },
      {
        id: 7,
        name: '离婚'
      },
      {
        id: 8,
        name: '性生活'
      },
      {
        id: 9,
        name: '婚姻经营'
      },
    ]
  },
  {
    id: 7,
    name: '家庭',
    child: [
      {
        id: 0,
        name: '成长过程'
      },
      {
        id: 1,
        name: '子女沟通'
      },
      {
        id: 2,
        name: '父母沟通'
      },
      {
        id: 3,
        name: '家庭创伤'
      },
      {
        id: 4,
        name: '家庭关系'
      },
      {
        id: 5,
        name: '家人健康'
      },
      {
        id: 6,
        name: '家人控制'
      },
      {
        id: 7,
        name: '品行障碍'
      },
    ]
  },
  {
    id: 8,
    name: '职业',
    child: [
      {
        id: 0,
        name: '工作压力'
      },
      {
        id: 1,
        name: '职业管理'
      },
      {
        id: 2,
        name: '选择技巧'
      },
      {
        id: 3,
        name: '职场人际'
      },
      {
        id: 4,
        name: '中年危机'
      },
      {
        id: 5,
        name: '工作疲劳'
      },
    ]
  },
  {
    id: 9,
    name: '科普',
    child: [
      {
        id: 0,
        name: '心理效应'
      },
      {
        id: 1,
        name: '实验研究'
      },
      {
        id: 2,
        name: '书籍'
      },
      {
        id: 3,
        name: '社会心理'
      },
      {
        id: 4,
        name: '学研会'
      },
      {
        id: 5,
        name: '学科讨论'
      },
      {
        id: 6,
        name: '考证读研'
      },
      {
        id: 7,
        name: '心理类型'
      },
      {
        id: 8,
        name: '网络心理'
      },
      {
        id: 9,
        name: '谣言'
      },
      {
        id: 10,
        name: '犯罪心理'
      },
      {
        id: 11,
        name: '名字解释'
      },
    ]
  },
  {
    id: 10,
    name: '热点',
    child: [
      {
        id: 0,
        name: '热点话题'
      },
      {
        id: 1,
        name: '影视'
      },
      {
        id: 2,
        name: '公共事件'
      },
      {
        id: 3,
        name: '经典问题'
      },
      {
        id: 4,
        name: '解梦'
      },
      {
        id: 5,
        name: '性心理'
      },
      {
        id: 6,
        name: '互动反馈'
      }
    ]
  }
]
export default releaseType


/**
 * 对Date的扩展，将 Date 转化为指定格式的String。
 *
 *  月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *  年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)。
 *
 *  【示例】：
 *  common.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
 *  common.formatDate(new Date(), 'yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
 *  common.formatDate(new Date(), 'hh:mm:ss.S')            ==> 08:09:04.423
 * 
 */

export function _formatDate(date, fmt) {
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};

/**
 * 仿照微信中的消息时间显示逻辑，将时间戳（单位：毫秒）转换为友好的显示格式.
 *
 * 1）7天之内的日期显示逻辑是：今天、昨天(-1d)、前天(-2d)、星期？（只显示总计7天之内的星期数，即<=-4d）；
 * 2）7天之外（即>7天）的逻辑：直接显示完整日期时间。
 *
 * @param  {[long]} timestamp 时间戳（单位：毫秒），形如：1550789954260
 * @param {boolean} mustIncludeTime true表示输出的格式里一定会包含“时间:分钟”
 * ，否则不包含（参考微信，不包含时分的情况，用于首页“消息”中显示时）
 *
 * @return {string} 输出格式形如：“刚刚”、“10:30”、“昨天 12:04”、“前天 20:51”、“星期二”、“2019/2/21 12:09”等形式
 * @author 即时通讯网([url=http://www.52im.net]http://www.52im.net[/url])
 * @since 1.1
 */
export function updateTimeShow(timestamp, mustIncludeTime){

  // 当前时间
  var currentDate = new Date();
  // 目标判断时间
  var srcDate = new Date(parseInt(timestamp));

  var currentYear = currentDate.getFullYear();
  var currentMonth = (currentDate.getMonth()+1);
  var currentDateD = currentDate.getDate();

  var srcYear = srcDate.getFullYear();
  var srcMonth = (srcDate.getMonth()+1);
  var srcDateD = srcDate.getDate();

  var ret = "";

  // 要额外显示的时间分钟
  var timeExtraStr = (mustIncludeTime?" "+_formatDate(srcDate, "hh:mm"):"");

  // 当年
  if(currentYear == srcYear) {
    var currentTimestamp = currentDate.getTime();
    var srcTimestamp = timestamp;
    // 相差时间（单位：毫秒）
    var deltaTime = (currentTimestamp-srcTimestamp);

    // 当天（月份和日期一致才是）
    if(currentMonth == srcMonth && currentDateD == srcDateD) {
      // 时间相差60秒以内
      if(deltaTime < 60 * 1000)
        ret = "刚刚";
      // 否则当天其它时间段的，直接显示“时:分”的形式
      else
        ret = _formatDate(srcDate, "hh:mm");
    }
    // 当年 && 当天之外的时间（即昨天及以前的时间）
    else {
      // 昨天（以“现在”的时候为基准-1天）
      var yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate()-1);

      // 前天（以“现在”的时候为基准-2天）
      var beforeYesterdayDate = new Date();
      beforeYesterdayDate.setDate(beforeYesterdayDate.getDate()-2);

      // 用目标日期的“月”和“天”跟上方计算出来的“昨天”进行比较，是最为准确的（如果用时间戳差值
      // 的形式，是不准确的，比如：现在时刻是2019年02月22日1:00、而srcDate是2019年02月21日23:00，
      // 这两者间只相差2小时，直接用“deltaTime/(3600 * 1000)” > 24小时来判断是否昨天，就完全是扯蛋的逻辑了）
      if(srcMonth == (yesterdayDate.getMonth()+1) && srcDateD == yesterdayDate.getDate())
        ret = "昨天"+timeExtraStr;// -1d
      // “前天”判断逻辑同上
      else if(srcMonth == (beforeYesterdayDate.getMonth()+1) && srcDateD == beforeYesterdayDate.getDate())
        ret = "前天"+timeExtraStr;// -2d
      else{
        // 跟当前时间相差的小时数
        var deltaHour = (deltaTime/(3600 * 1000));

        // 如果小于或等 7*24小时就显示星期几
        if (deltaHour <= 7*24){
          var weekday=new Array(7);
          weekday[0]="星期日";
          weekday[1]="星期一";
          weekday[2]="星期二";
          weekday[3]="星期三";
          weekday[4]="星期四";
          weekday[5]="星期五";
          weekday[6]="星期六";

          // 取出当前是星期几
          var weedayDesc = weekday[srcDate.getDay()];
          ret = weedayDesc+timeExtraStr;
        }
        // 否则直接显示完整日期时间
        else
          ret = _formatDate(srcDate, "yyyy-M-d")+timeExtraStr;
      }
    }
  }
  // 往年
  else{
    ret = _formatDate(srcDate, "yyyy-M-d")+timeExtraStr;
  }

  return ret;
};
