/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3ff677608eb543ae',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f429e1a8ef701644adf29985fbd5ddc8',

  PROVINCE: '甘肃',
  CITY: '兰州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝', year: '1999', date: '12-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '相识纪念日', year: '2022', date: '09-26',
        }，
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 认识的日子
        { keyword: 'love_day', date: '2022-09-26' },
        // 在一起纪念日
        { keyword: 'marry_day', date: '2023-01-07' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '2tAIW_aiUFpcYr8M55zonCsadyTA1r8b6CZkngYZY10',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ov3fm6FGVvrZ35ZVScJKsb4CbVHs',
    }
  ],

}

module.exports = USER_CONFIG

