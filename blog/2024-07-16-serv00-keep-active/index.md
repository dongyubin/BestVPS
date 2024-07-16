---
slug: serv00-keep-active
title: serv00自动免费保活教程
authors: [dongyubin]
tags: [serv00, VPS, 主机, 服务器, WordPress]
---

下面两种方法选择一种即可。

## 青龙面板

1. 依赖管理 - Linux - 创建依赖：`sshpass`

2. 定时任务 - 创建任务 - 名称：Serve00保活，定时规则：`0 1 * * *`，命令/脚本如下：（一定要替换SSH密码、SSH用户名、SSH服务器地址，否则无法运行成功）

   ```sh
   sshpass -p 'SSH密码' ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -tt SSH用户名@SSH服务器地址 "ps -A"
   ```

   

原文链接：[青龙面板搭建自动任务定期登录SSH解决serv00,免费保活](https://linux.do/t/topic/134852)

## Github Action

- [Sliverkiss/Serv00_Auto_Login](https://github.com/Sliverkiss/Serv00_Auto_Login)

  在 GitHub 仓库中，进入右上角`Settings`，在侧边栏找到`Secrets and variables`，点击展开选择`Actions`，点击`New repository secret`，然后创建一个名为`ACCOUNTS_JSON`的`Secret`，将 JSON 格式的账号密码字符串作为它的值。在bark中填入bark软件的推送apiKey，可留空。在host填入ssh的连接地址。如下格式：  
  ```
  [  
    { "username": "qinshihuang", "password": "linux.do", "panelnum": "0", "bark": "apikey", "host": "s3.serv00.com" },  
    { "username": "zhaogao", "password": "daqinzhonggong", "panelnum": "2", "bark": "apikey", "host": "s3.serv00.com" },  
    { "username": "heiheihei", "password": "shaibopengke", "panelnum": "3", "bark": "apikey", "host": "s3.serv00.com" }  
  ]
  ```
  > 其中`panelnum`参数为面板编号，即为你所收到注册邮件的`panel*.serv00.com`中的`*`数值。

- [yixiu001/serv00-login](https://github.com/yixiu001/serv00-login): 同时支持serv00与ct8自动化批量保号，每3天自动登录一次面板，并且发送消息到Telegram