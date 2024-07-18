---
slug: vps-check
title: 2024年VPS服务器解锁流媒体一键测试脚本（流媒体测试脚本）
authors: [dongyubin]
tags: [VPS, 主机, 服务器]
---

利用vps服务器解锁流媒体服务的需求不断攀升，那么今天分享几个比较好用的流媒体解锁测试脚本，可以测试VPS服务器IP是否支持解锁常见流媒体服务，包括Netflix、Disney+、YouTube Premium、TVB、NBA TV、Hulu、HBO、TikTok等。

## VPS融合怪服务器测评脚本

[VPS融合怪服务器测评脚本](https://github.com/spiritLHLS/ecs)

- 支持系统：Ubuntu 18+, Debian 8+, Centos 7+, Fedora 33+, Almalinux 8.5+, OracleLinux 8+, RockyLinux 8+, AstraLinux CE, Arch

- 支持系统：FreeBSD(前提已执行`pkg install -y curl bash`)，Armbian

- 支持架构：amd64(x86_64)、arm64、i386、arm

### 融合怪功能

- [x] 基础信息查询
- [x] CPU测试
- [x] 内存测试
- [x] 磁盘dd读写测试
- [x] 硬盘fio读写测试
- [x] 御三家流媒体解锁测试
- [x] 常用流媒体解锁测试
- [x] Tiktok解锁
- [x] 三网回程以及路由延迟
- [x] 回程路由及带宽类型检测(商宽/家宽/数据中心)
- [x] IP质量(含IPV4和IPV6)与邮件端口检测
- [x] speedtest测速

### 交互形式使用方法

```bash
curl -L https://gitlab.com/spiritysdx/za/-/raw/main/ecs.sh -o ecs.sh && chmod +x ecs.sh && bash ecs.sh
```

或

```bash
curl -L https://github.com/spiritLHLS/ecs/raw/main/ecs.sh -o ecs.sh && chmod +x ecs.sh && bash ecs.sh
```

或

```
bash <(wget -qO- bash.spiritlhl.net/ecs)
```

或

```
bash <(wget -qO- ecs.0s.hk)
```

或

```
bash <(wget -qO- ecs.12345.ing)
```

### 无交互形式-参数模式使用方法

```bash
curl -L https://gitlab.com/spiritysdx/za/-/raw/main/ecs.sh -o ecs.sh && chmod +x ecs.sh && bash ecs.sh -m 1
```

或

```bash
curl -L https://github.com/spiritLHLS/ecs/raw/main/ecs.sh -o ecs.sh && chmod +x ecs.sh && bash ecs.sh -m 1
```

或通过

```
curl -L https://gitlab.com/spiritysdx/za/-/raw/main/ecs.sh -o ecs.sh && chmod +x ecs.sh
```

下载文件后使用类似

```bash
bash ecs.sh -m 1
```

### IP质量检测使用方法

- IP质量检测，含多家数据库查询，含DNS黑名单查询
- 含 ```IPV4``` 和 ```IPV6``` 检测，含ASN和地址查询

```bash
bash <(wget -qO- bash.spiritlhl.net/ecs-ipcheck)
```

或

```bash
bash <(wget -qO- --no-check-certificate https://raw.githubusercontent.com/spiritLHLS/ecs/main/ipcheck.sh)
```

或

需要事先安裝```dos2unix```

```bash
wget -qO ipcheck.sh --no-check-certificate https://gitlab.com/spiritysdx/za/-/raw/main/ipcheck.sh
dos2unix ipcheck.sh
bash ipcheck.sh
```

## RegionRestrictionCheck

[RegionRestrictionCheck](https://github.com/lmc999/RegionRestrictionCheck) 检测脚本检测项目比较全面，且支持Docker运行，杜绝污染VPS服务器，检测流媒体除了主流的Netflix、Disney+、YouTube Premium，还可以支持检测Dazn、Viu TV、4GTV和KKTV等比较冷门的流媒体服务。

本脚本基于 [CoiaPrant/MediaUnlock_Test](https://github.com/CoiaPrant/MediaUnlock_Test) 代码进行修改

> 支持OS/Platform：CentOS 6+, Ubuntu 14.04+, Debian 8+, MacOS, Android with Termux

### 使用方法

使用脚本前请确认curl已安装

```sh
bash <(curl -L -s check.unlock.media)
```

只检测IPv4结果:

```sh
bash <(curl -L -s check.unlock.media) -M 4
```

只检测IPv6结果：

```sh
bash <(curl -L -s check.unlock.media) -M 6
```

指定检测的网卡名称：

```sh
bash <(curl -L -s check.unlock.media) -I eth0
```

选择脚本语言为英文：

```sh
bash <(curl -L -s check.unlock.media) -E en
```

或者直接运行以下Docker命令 (兼容ARM架构)

```sh
docker run --rm -ti --net=host lmc999/regioncheck && docker rmi lmc999/regioncheck
```

## MediaUnlockTest

[MediaUnlockTest](https://github.com/nkeonkeo/MediaUnlockTest) 检测与 RegionRestrictionCheck 不一样，MediaUnlockTest 并非bash脚本，而是使用golang，检测项目与 RegionRestrictionCheck 差不多。

### 使用方法

```sh
bash <(curl -Ls unlock.moe)
```

只检测IPv4结果:

```sh
bash <(curl -Ls unlock.moe) -m 4
```

只检测IPv6结果：

```sh
bash <(curl -Ls unlock.moe) -m 6
```

## Streaming Media Unlock Test

[Streaming Media Unlock Test](https://github.com/yeahwu/check)，网友写的一个流媒体解锁测试脚本，支持最近热门的ChatGPT解锁测试，一些自己购买服务器用来搭建上网工具的同学，可以用来快速测试服务器IP是否支持ChatGPT，目前脚本可以用来测试Netflix、YouTube Premium、YouTube CDN、Bilibili、Tiktok、 iQIYI International和ChatGPT 等等。

### 使用方法

```sh
wget -qO- https://github.com/yeahwu/check/raw/main/check.sh | bash
```

## RegionRestrictionCheck

[xykt/RegionRestrictionCheck](https://github.com/xykt/RegionRestrictionCheck)

- 修正Netflix澳洲检测错误问题，增加Wikipedia及Reddit检测

- 修复MyTVSuper

- 增加ChatGPT地区检测，更新英文原生/DNS解锁显示内容

- 修正Docker运行报错的bug，补全全区域检测项目

- 修复LineTV.tw

- 修复Now E

- 增加Alpine系统支持

- Netflix页面改版导致原脚本判定出现错误，现已修正

- 修复Youtube极小概率解锁类别判断错误问题

- 增加TikTok解锁检测

- 增加对动画疯、MyTVSuper、4GTV的DNS解锁检测

- 增加独立的脚本运行计数器

- 进一步增加DNS检测机制，增加代理服务器解锁检测，修正纯ipv6机器无法检测的bug

- 增加双重DNS检测机制，修正原版日本流媒体检测报错，广告前置

- 增加DNS/原生解锁检测机制

![RegionRestrictionCheck测试截图](https://raw.githubusercontent.com/xykt/RegionRestrictionCheck/main/reference/IMG/ScreenShot.png)

**使用脚本前请确认curl已安装**

````bash
bash <(curl -L -s media.ispvps.com)
````

##### 只检测IPv4结果：
````bash
bash <(curl -L -s media.ispvps.com) -M 4
````

##### 只检测IPv6结果：
````bash
bash <(curl -L -s media.ispvps.com) -M 6
````

##### 指定检测的网卡名称：
````bash
bash <(curl -L -s media.ispvps.com) -I eth0
````

##### 选择脚本语言为英文：
````bash
bash <(curl -L -s media.ispvps.com) -E
````

**或者直接运行以下Docker命令** (兼容ARM架构)
````docker
docker run --rm -ti --net=host xykt/regioncheck && docker rmi xykt/regioncheck > /dev/null 2>&1
````