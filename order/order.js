const app = getApp()

Page({
  data: {
    iconGood: app.globalData.IconGood,
    avatarBoy: app.globalData.AvatarBoy,
    avatarGirl: app.globalData.AvatarGirl,
    iconBoy: app.globalData.IconBoy,
    iconGirl: app.globalData.IconGirl,
    banner: app.globalData.Banner,
    baseData: app.globalData.BaseData,
    copyRight: app.globalData.CopyRight,
    dmData: [],
    symbolLeft: '{{',
    symbolRight: '}}',
  },
  // 处理弹幕位置
  setDM: function () {
    // 处理弹幕参数
    const dmArr = [];
    const _b = this.data.baseData;
    for (let i = 0; i < _b.length; i++) {
      const _p = {
        id: _b[i].id,
        sex: _b[i].sex,
        content: _b[i].content,
        zanNumber: _b[i].zanNumber
      };
      dmArr.push(_p);
    }
    this.setData({
      dmData: dmArr
    });
  },

  onLoad: function () {
    this.setDM();
  },
})
