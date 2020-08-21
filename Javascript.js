/**
* 弧度 = 角度 * Math.PI / 180
* 角度 = 弧度 * 180 / Math.PI
*/

// javascript判断页面是否在iframe中
if (window.frames.length !== parent.frames.length) {
  alert('在iframe中')
}
if (self !== top) { 
  alert('在iframe中')
}

// JS数组去除重复元素或者对象
const hash = {};
const newData = data.reduce(( acc, val ) => {
  hash[val.gatewayId] ? '' : hash[val.gatewayId] = true && acc.push( val );
  return acc;
}, []);

// 去重
const arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const arr2 = arr1.filter( (element, index, self) => {
    return self.indexOf( element ) === index;
});
console.log( arr2 ); // [1, 2, 3, 5, 4]
console.log( arr1 ); // [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]

// 数组求和
const arry = [1,2,3,4];
const total = arr => arr.reduce((acc, val) => acc + val, 0);

// 两个数组的交集
const similarity = ( arr1, arr2 ) => arr1.filter( arr => arr2.includes( arr ));

// 生成树形结构数据
const treeFormat = data => {
  // 找到根节点
  const parentNode = data.filter( item => item.parentId === -1 );
  // 获取children的函数
  const getChildren = ( data, parentId ) => {
    let node;
    const childrenNode = data.filter( item => item.parentId === parentId );
    if ( childrenNode.length ) {
      node = childrenNode.map( item => {
        return {
          ...item,
          children: getChildren( data, item.id )
        };
      });
    }
    return childrenNode.length === 0 ? false : node;
  };
  return parentNode ? parentNode.map( item => {
    return {
      ...item,
      children: getChildren( data, item.id )
    };
  }) : [];
};

// 正则匹配
/vid=([^]*)/i.exec('https://v.qq.com/txp/iframe/player.html?vid=o3033d1zk5s')
/\/([^/]*)==/i.exec('http://player.youku.com/embed/XNDQ2NTYyMjc2MA==')
