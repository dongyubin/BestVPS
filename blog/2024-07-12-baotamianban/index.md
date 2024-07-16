---
slug: baotamianban
title: 宝塔面板开心版
authors: [dongyubin]
tags: [VPS, 主机, 服务器, 宝塔面板]
---

![宝塔面板开心版](https://b2.wwkejishe.top/WP-CDN-02/2023/202311061451795.webp)

## 宝塔面板开心版 8.2.0

**官方更新记录**

- 【新增】文件管理增加多标签机制
- 【新增】计划任务增加秒级计划任务
- 【新增】软件安装结果精准检测机制
- 【新增】网站-PHP项目-动态PHP项目，支持Swoole等异步项目
- 【调整】移除计划任务中的网站、数据库备份多选机制
- 【调整】调整软件商店中的官网应用、第三方应用、一键部署的显示层级
- 【优化】优化安全-系统防火墙，允许设置入站和出站两个方向的规则
- 【优化】优化Docker模块体验
- 【优化】优化软件商店体验
- 【优化】优化SSL证书模块，提升SSL证书申请和续签成功率
- 【优化】优化数据库备份恢复机制 -- 提供备份恢复进度
- 【优化】优化phpMyAdmin管理模块 -- 通过面板访问phpmyadmin将自动登录
- 【优化】减少面板整体CPU开销，提升面板使用流畅度
- 【优化】面板前端架构使用Vue单页应用模式重构，提升交互体验
- 【优化】大幅提升面板稳定性
- 【优化】提升极端情况下面板可用性能力
- 【优化】减少面板所有功能对磁盘的综合开销
- 【修复】修复所有已知Bug

### Centos安裝命令

（默认安裝是 8.0.1 直接在线升級 8.2.0）



```sh
yum install -y wget && wget -O install.sh http://io.bt.sy/install/install_6.0.sh && sh install.sh
```

### 试验性Centos/Ubuntu/Debian安装命令

独立运行环境（py3.7） 可能存在少量兼容性问题 不断优化中

```
curl -sSO http://io.bt.sy/install/install_panel.sh && bash install_panel.sh
```

### Ubuntu Deepin安装命令

```
wget -O install.sh http://io.bt.sy/install/install-ubuntu_6.0.sh && sudo bash install.sh
```

### Debian安装命令

```
wget -O install.sh http://io.bt.sy/install/install-ubuntu_6.0.sh && bash install.sh
```

### Fedora安装命令

```
wget -O install.sh http://io.bt.sy/install/install_6.0.sh && bash install.sh
```

### Linux面板 8.2.0 升级企业版命令 1

所有官方版 / 开心版 包括低版本 都可以执行这个升级到 8.2.0 开心版

```
curl https://io.bt.sy/install/update_panel.sh|bash
```

升级企业版命令 1 与 升级企业版命令 2 二选一 都可以升级最新版！

### Linux面板 8.2.0 升级企业版命令 2

所有官方版 / 开心版 包括低版本 都可以执行这个升级到 8.2.0 开心版

```
curl http://io.bt.sy/install/update6.sh|bash
```


## 宝塔面板开心版 8.0.4

**官方更新记录**

- 【增加】[网站-PHP项目]新增批量防跨站，流量限制和防盗链功能
- 【增加】[网站-PHP项目]高级设置里新增TLS设置/全局设置
- 【增加】[网站-Java项目]JAVA环境管理里新增选择JDK版本管理
- 【增加】[数据库-MySQL/MongoDB/PgSQL]新增自定义备份数据库功能
- 【增加】[数据库-MongoDB]新增数据库权限/工具功能
- 【增加】[数据库-PgSQL]新增数据库工具功能
- 【增加】[Docker-容器] 新增日志管理功能
- 【增加】[安全-系统防火墙]新增同步端口配置/批量删除/进程详情功能
- 【增加】[安全-SSH管理]新增今日SSH登录详情/重置root密码/SSH防爆破
- 【增加】[文件]新增文件操作记录
- 【增加】[终端]新增bt 21可以恢复历史面板数据库，仅支持近180天数据
- 【增加】[计划任务]列表增加批量启动/批量停止/置顶/搜索功能
- 【增加】[计划任务]支持批量备份网站/数据库备份
- 【增加】[计划任务]支持除MySQL外其它类型数据库备份
- 【增加】[计划任务]备份到云存储时新增文件拆分功能
- 【增加】[软件商店]搜索框新增热门推送，软件商店搜索框优化
- 【增加】[面板设置安全设置]-新增地区登录限制功能
- 【修复】[首页-安全风险]bootloader配置权限检查解决方案有误
- 【修复】[网站-PHP项目]特殊情况下访问网站设置中的SSL页面会跳转回首页
- 【修复】[网站-PHP项目]特殊情况下站点设置里的安全扫描状态异常
- 【修复】[网站-PHP项目]因pay_type.json丢失导致的网站列表不显示
- 【修复】[网站-PHP项目]批量创建网站时，数据库名的下划线显示不一致
- 【修复】[Docker-存储卷]因缓存导致存储卷报错
- 【修复】[安全-SSH管理]SSH登录日志分页失效
- 【修复】[软件商店]修复插件卸载前置检查异常导致
- 【修复】[计划任务]备份中下载云存储文件失败
- 【修复】[计划任务]特殊情况下MySQL备份失败
- 【调整】[网站-PHP项目]修改默认页面、默认站点和HTTPS防窜站等功能合并为高级设置
- 【调整】[网站-PHP项目]设置里的Composer、Tomcat合并为其他设置
- 【调整】[文件]-下架视图模式
- 【调整】[面板设置-告警通知]微信公众号信息格式变更
- 【优化】兼容debian系统下ssh日志日期格式
- 【优化】面板数据库异常时自动修复
- 【其他】修复已知Bug

### Centos安装命令

（默认安装是7.9.10 直接在线升级8.0.4）



```sh
yum install -y wget && wget -O install.sh http://io.bt.sy/install/install_6.0.sh && sh install.sh
```

### 试验性Centos/Ubuntu/Debian安装命令

独立运行环境（py3.7） 可能存在少量兼容性问题不断优化中

```sh
curl -sSO http://io.bt.sy/install/install_panel.sh && bash install_panel.sh
```

### Ubuntu Deepin安装命令

```sh
wget -O install.sh http://io.bt.sy/install/install-ubuntu_6.0.sh && sudo bash install.sh
```

### Debian安装命令

```
wget -O install.sh http://io.bt.sy/install/install-ubuntu_6.0.sh && bash install.sh
```

### Fedora安装命令

```sh
wget -O install.sh http://io.bt.sy/install/install_6.0.sh && bash install.sh
```

### Linux面板8.0.4 升级企业版命令1 

```sh
curl https://io.bt.sy/install/update_panel.sh|bash
```


讲解：升级企业版命令1 与 升级企业版命令2 二选一都可以升级最新版！

### Linux面板8.0.4 升级企业版命令2

```sh
curl http://io.bt.sy/install/update6.sh|bash
```



## 宝塔面板开心版 8.0.3

修复已知Bug

1. 修复文件列表翻页会404
2. 修复PHP保存会有几率出现失败
3. 注意：宝塔APP开启https无法使用（官方原话：您好，如使用的IOS端，当前还是无法正常使用的，IOS端那边无法正常验证SSL证书所以会导致绑定失败的。目前暂时没有好的处理方法，如可以关闭SSL设置）

![宝塔面板开心版8.0.3效果展示](https://b2.wwkejishe.top/WP-CDN-02/2023/202311061456786.png)

### Centos安装命令

（默认安装是7.9.10 直接在线升级8.0.3）



```sh
yum install -y wget && wget -O install.sh http://io.bt.sy/install/install_6.0.sh && sh install.sh
```

### 试验性Centos/Ubuntu/Debian安装命令

独立运行环境（py3.7） ，可能存在少量兼容性问题不断优化中

```sh
curl -sSO http://io.bt.sy/install/install_panel.sh && bash install_panel.sh
```

### Ubuntu Deepin安装命令：

```sh
wget -O install.sh http://io.bt.sy/install/install-ubuntu_6.0.sh && sudo bash install.sh
```

### Debian安装命令：

```sh
wget -O install.sh http://io.bt.sy/install/install-ubuntu_6.0.sh && bash install.sh
```

### Fedora安装命令:

```sh
wget -O install.sh http://io.bt.sy/install/install_6.0.sh && bash install.sh
```

### Linux面板8.0.3 升级企业版命令1 

（所有官方版/ 开心版包括低版本都可以执行这个升级到8.0.3 开心版）

```sh
curl https://io.bt.sy/install/update_panel.sh|bash
```

讲解：升级企业版命令1 与 升级企业版命令2 二选一都可以升级最新版！

### Linux面板8.0.3 升级企业版命令2 

（所有官方版/ 开心版包括低版本都可以执行这个升级到8.0.3 开心版）

```sh
curl http://io.bt.sy/install/update6.sh|bash
```

## 其他版本

### [HostCli](https://www.hostcli.com/)

最高只包含 7.6.0 版本

### [BT5.ME](https://bt5.me/)

包含 8.0.1 - 7.6 全版本

### [BTKaiXin](https://www.btkaixin.net/)

包含 8.0.2 版本



## 宝塔面板回退旧版本

版本号：7.9.3 版本 ~ 8.0.4 版本



### 7.9.3 版本

```
curl http://io.bt.sy/install/update6.sh | bash -s -- 7.9.3
```

### 7.9.4 版本

```
curl http://io.bt.sy/install/update6.sh | bash -s -- 7.9.4
```

### 7.9.5 版本

```
curl http://io.bt.sy/install/update6.sh | bash -s -- 7.9.5
```

### 7.9.6 版本

```
curl http://io.bt.sy/install/update6.sh | bash -s -- 7.9.6
```

### 7.9.7 版本

```sh
curl http://io.bt.sy/install/update6.sh | bash -s -- 7.9.7
```

### 7.9.8 版本

```
curl http://io.bt.sy/install/update6.sh | bash -s -- 7.9.8
```

### 7.9.9 版本

```
curl http://io.bt.sy/install/update6.sh | bash -s -- 7.9.9
```

### 7.9.10 版本

```sh
curl http://io.bt.sy/install/update6.sh | bash -s -- 7.9.10
```

### 8.0.0 版本

```
curl http://io.bt.sy/install/update6.sh | bash -s -- 8.0.0
```

### 8.0.1 版本

```
curl http://io.bt.sy/install/update6.sh | bash -s -- 8.0.1
```

### 8.0.2 版本

```
curl http://io.bt.sy/install/update6.sh | bash -s -- 8.0.2
```

### 8.0.3 版本

```
curl http://io.bt.sy/install/update6.sh | bash -s -- 8.0.3
```

### 8.0.4 版本

```
curl http://io.bt.sy/install/update6.sh | bash -s -- 8.0.4
```

