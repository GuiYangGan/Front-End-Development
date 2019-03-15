
/**
 * @export
 * @param {number} year   年
 * @param {number} month  月
 * @param {number} day    日
 * @param {number} type   用于判断日历第一个是星期日还是星期一，默认为0：第一个为星期日
 */
function getCalendarData( props ) {
  const { year, month, day, type = 0 } = props || {};

  // 星期列表，根据type的不同使用
  const WEEKLIST = [{
    cn: [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
    cns: [ '日', '一', '二', '三', '四', '五', '六' ],
    en: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
  }, {
    cn: [ '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日' ],
    cns: [ '一', '二', '三', '四', '五', '六', '日' ],
    en: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
  }];

  // 根据type不同得到真正的索引值
  const getTrueIndex = index => {
    return type === 1 ? index === 0 ? 6 : index - 1 : index;
  };

  let dayArrays = [];
  // 取得年份
  const thisYear = year || moment().year();
  // 取得月份
  const thisMonth = month || Number( moment().format( 'M' ));
  // 取得天
  const thisDay = day || Number( moment().format( 'D' ));
  // 取得当月总天数
  const thisMonthTotalDays = moment( `${thisYear}-${thisMonth}-${thisDay}`, 'YYYY-M-D'  ).daysInMonth();
  // 取得上月总天数
  const prevMonthTotalDays = moment( `${thisYear}-${thisMonth}-${thisDay}`, 'YYYY-M-D' ).subtract( 1, 'M' ).daysInMonth();
  // 取得当月第一天星期几的索引
  let thisFirstDayInWeek = moment( `${thisYear}-${thisMonth}-1`, 'YYYY-M-D' ).day();
  thisFirstDayInWeek = getTrueIndex( thisFirstDayInWeek );
  // 取得当月最后一天星期几的索引
  let thisLastDayInWeek = moment( `${thisYear}-${thisMonth}-${thisMonthTotalDays}`, 'YYYY-M-D' ).day();
  thisLastDayInWeek = getTrueIndex( thisLastDayInWeek );
  
  // 上月在当月日历面板中的排列
  for ( let i = 0; i < thisFirstDayInWeek; i++ ) {
    // 根据当前月份得到上月的实际月份
    const trueMonth = thisMonth - 1 > 0 ? thisMonth - 1 : 12;
    // 根据当前月份得到上月的实际年份
    const trueYear = thisMonth - 1 > 0 ? thisYear : thisYear - 1;
    // 获取上月在当前月份具体的日期数
    const day = prevMonthTotalDays - thisFirstDayInWeek + i + 1;
    // 找出当天在星期中的索引
    let prevIndex = moment(`${trueYear}-${trueMonth}-${day}`, 'YYYY-M-D' ).day();
    prevIndex = getTrueIndex( prevIndex );
    dayArrays.push({
      year: trueYear,
      month: trueMonth,
      day,
      isPrevMonth: true,
      weekDay: {
        cn: WEEKLIST[type].cn[prevIndex],
        cns: WEEKLIST[type].cns[prevIndex],
        en: WEEKLIST[type].en[prevIndex]
      }
    });
  }

  //当月日历面板中的排列
  for ( let i = 1; i <= thisMonthTotalDays; i++ ) {
    // 获取星期索引
    let thisIndex = moment( `${thisYear}-${thisMonth}-${i}`, 'YYYY-M-D' ).day();
    thisIndex = getTrueIndex( thisIndex );
    dayArrays.push({
      year: thisYear,
      month: thisMonth,
      day: i,
      selected: i === thisDay,
      isThisMonth: true,
      weekDay: {
        cn: WEEKLIST[type].cn[thisIndex],
        cns: WEEKLIST[type].cns[thisIndex],
        en: WEEKLIST[type].en[thisIndex]
      }
    });
  }

  //下月在当月日历面板中的排列
  for ( let i = 1; i <= ( type === 0 ? ( 6 - thisLastDayInWeek ) : thisLastDayInWeek + 1 ); i++ ) {
    // 根据当前月份得到上月的实际月份
    const trueMonth = thisMonth + 1 < 13 ? thisMonth + 1 : 1;
    // 根据当前月份得到上月的实际年份
    const trueYear = thisMonth + 1 < 13 ? thisYear : thisYear + 1;
    // 找出当天在星期中的索引
    let nextIndex = moment(`${trueYear}-${trueMonth}-${i}`, 'YYYY-M-D' ).day();
    nextIndex = getTrueIndex( nextIndex );
    dayArrays.push({
      year: trueYear,
      month: trueMonth,
      day: i,
      isNextMonth: true,
      weekDay: {
        cn: WEEKLIST[type].cn[nextIndex],
        cns: WEEKLIST[type].cns[nextIndex],
        en: WEEKLIST[type].en[nextIndex]
      }
    });
  }

  //判断数组长度是否为42（日历中，上月天数+当月天数+下月天数=42）个别月份会出现数组长度为35即结束循环，此处强制使日历天数为42天
  if ( dayArrays.length < 42 ) {
    // 根据当前月份得到上月的实际月份
    const trueMonth = thisMonth + 1 < 13 ? thisMonth + 1 : 1;
    // 根据当前月份得到上月的实际年份
    const trueYear = thisMonth + 1 < 13 ? thisYear : thisYear + 1;
    // 获取下月日期列表
    const data = dayArrays.filter( item => item.isNextMonth );
    // 获取新添加日期的第一天
    const firstDay = data.length === 0 ? 1 : data[data.length - 1].day + 1;
    // 获取数组长度
    const length = dayArrays.length;
    for ( let i = 0; i < 42 - length; i++ ) {
      // 找出当天在星期中的索引
      let nextIndex = moment(`${trueYear}-${trueMonth}-${firstDay + i}`, 'YYYY-M-D' ).day();
      nextIndex = getTrueIndex( nextIndex );
      dayArrays.push({
        year: trueYear,
        month: trueMonth,
        day: firstDay + i,
        isNextMonth: true,
        weekDay: {
          cn: WEEKLIST[type].cn[nextIndex],
          cns: WEEKLIST[type].cns[nextIndex],
          en: WEEKLIST[type].en[nextIndex]
        }
      });
    }
  }

  return dayArrays;
}
