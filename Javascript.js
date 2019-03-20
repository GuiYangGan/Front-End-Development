
// JS数组去除重复元素或者对象
const hash = {};
const newData = data.reduce(( acc, val ) => {
  hash[val.gatewayId] ? '' : hash[val.gatewayId] = true && acc.push( val );
  return acc;
}, []);

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
