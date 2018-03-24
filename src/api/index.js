const API_CONFIG = {
  // 最热主题：相当于首页右侧的 10 大每天的内容。
  hotTopic: 'https://www.v2ex.com/api/topics/latest.json',

  // 最新主题：相当于首页的“全部”这个 tab 下的最新内容。
  newTopic: 'https://www.v2ex.com/api/topics/latest.json',

  // 节点信息：获得指定节点的名字，简介，URL 及头像图片的地址。
  nodeInfo: 'https://www.v2ex.com/api/nodes/show.json',

  // 用户信息：获得指定用户的自我介绍，及其登记的社交网站信息。
  userHomePage: 'https://www.v2ex.com/api/members/show.json'
};

export default API_CONFIG;