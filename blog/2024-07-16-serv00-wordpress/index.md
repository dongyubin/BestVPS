---
slug: serv00-wordpress
title: serv00虚拟主机零成本搭建WordPress个人博客
authors: [dongyubin]
tags: [serv00, VPS, 主机, 服务器, WordPress]
---

## 什么是虚拟主机

> 虚拟主机（英语：virtual hosting）或称共享主机（shared web hosting），又称虚拟服务器，是一种在单一主机或主机群上，实现多网域服务的方法，可以运行多个网站或服务的技术。虚拟主机之间完全独立，并可由用户自行管理，虚拟并非指不存在，而是指空间是由实体的服务器延伸而来，其硬件系统可以是基于服务器群，或者单个服务器。
>
> ——百度百科

简单来说就是只能用来搭建网站（web 服务 + 数据库）的一种特定化的服务器，没有公网 ip（只能通过域名来访问），不能或者只能开放几个端口。

## 前言

市面上有不少[虚拟主机服务商](https://bestvps.wwkejishe.top/docs/intro)，但是基本上都是要收费，免费的也有不少限制，但是限制都颇多，一番用下来感觉 serv00 这家比较合适，3g 的存储空间，带数据库，分配了 512mb 内存（普通网页是足够了），还能用 ssh，也支持开放少量端口，不限流量，带个子域名，重点是免费还没广告，唯一的要求就是需要每三个月登录一次后台或者 ssh，不然就删号了，这个可以通过自动脚本来实现，或者干脆自己每三个月上一次后台就可以保活了。

![Serv00官网介绍](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161424684.jpg)

本系列教程只是推荐用 serv00，如果不想用这家选择[其他的虚拟主机](https://bestvps.wwkejishe.top/docs/intro)一样可以，只是步骤可能会有所差异。



## 一、注册账号并登录

前往 serv00 官网（[Serv00.com](https://www.serv00.com/)）自行注册一个账号，serv00 有注册人数限制，如果达到上限可能不再开放注册。

![serv00官网](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161424065.jpg)

注册完成后会收到一封邮件，里面包含了账户名称以及密码，还包含了服务器地址（SSH/SFTP server address）、登录控制台地址（DevilWEB webpanel）以及一个子域名。

![serv00邮件信息](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161424821.jpg)

打开控制台地址，输入用户名 + 密码登录就可以了。进入控制台后就可以看到目前空间 / 性能占用情况。

![serv00控制台](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161424896.jpg)



## 二、绑定自己的域名（可选）

serv00 赠送的那个子域名不太好记住，如果有自己的域名推荐绑定上自己的域名。

先添加网站，进入控制台后选择 WWW Websites - Add new website，domain 填入自己的域名，其他的不用管，如果是需要用到其他的环境例如 python，可以在高级里面选择，本期 wordpress 是需要 php 就默认的就行，不用改动，然后点击 add 添加。

![serv00 WWW Websites](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161424690.jpg)

添加完成后，进入 DNS zones，编辑刚刚添加的域名，查看这个域名 a 记录（也就是域名解析的服务器地址），记下这个 ip，这个 ip 每个人不一定相同，所以不要抄我图中的。这个 ip 也就是等下你建立好的网站实际的 ip 地址。

![serv00 DNS zones](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161424515.jpg)

![DNS zones](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161424406.jpg)

然后登录自己域名的解析商，添加一个这个域名的 ipv4 解析，填入刚刚获取的 ip 地址就可以完成添加域名了。

![serv00 域名解析](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161425622.jpg)



## 三、添加数据库

本期教程搭建的 wordpress（以下简称 wp），wp 所需要的是 mysql 数据库，这里就需要添加一个 mysql 数据库，如果后续需要其他的服务，添加对应的数据库就可以了，数据库可以添加多个，一个服务对应一个数据库。

进入 MySQL - Add database，输入数据库名称、数据库用户名以及密码，其他的默认就行，这里为了安全数据库名称和用户名不建议一致，密码也建议高强度密码，如果对数据库字符有要求就在高级设置里面更改，本期 wp 用默认的就行。

![serv00 MySQL](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161425432.jpg)

添加好后返回 MySQL，就可以看到刚刚添加的数据库连接地址，这个也需要记住，每个人地址可能均不一样，也不要抄我图中的地址。

![MySQL Server](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161425766.jpg)



## 四、搭建 wordpress 网站

一个虚拟服务器可以添加多个网站，和数据库一样，只要虚拟主机还有剩余空间就行，但是鉴于这个虚拟服务器的性能，不建议部署太多的网站。



### 1. 上传 wp 文件

先到 wp 的官网下载（[https://cn.wordpress.org/download/](https://cn.wordpress.org/download/)）最新的文件，然后进入虚拟主机控制台 - File manager，进入虚拟主机文件管理界面。

![serv00 File manager](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161425885.jpg)

进入文件管理界面后进入 domains（这个文件夹就是网站存放目录），并选择对应网站的文件夹（也就是域名名称开头的文件夹），在步骤二中我添加了自己的域名，如果是选择用 serv00 提供的子域名，则进入子域名那个名称的文件夹。再进入 public_html 这个子文件夹，然后点击 Send - From computer，从本地电脑上传刚刚下载的 wp 压缩包（下载的压缩包不用解压）。

有童鞋会好奇为什么不选择第二个，从互联网上直接下载到虚拟主机，那可以猜猜我为什么不用。

![serv00 My Files](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161426343.jpg)

当上传好对应的压缩包后，刷新以下网页，不刷新看不到刚刚上传的文件，然后先选择 public_html 文件夹中 index.html 并删除。一定要先删除，否则等下解压压缩包会报错。

![serv00 File](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161426780.jpg)

删除后选择刚刚上传的 wp 压缩包，展开压缩包，右击 wordpress 这个文件夹，选择 extract，解压到 public_html 文件夹中。

![serv00 wordpress](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161426373.jpg)

![Serv00 文件管理](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161426918.jpg)



### 2. 初始化 wp

解压完压缩包后，在浏览器打开对应的域名，就可以进入到 wp 初始化的界面。如果打开后浏览器提示 503 错误，则是虚拟主机那边还在部署中，等待几分钟再打开即可。

![serv00 wordpress初始化](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161426490.jpg)

选择中文（如果想挑战下自己的 English 也行），然后一路点击继续。

![wordpress部署](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161426214.jpg)

![wordpress设置](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161427423.jpg)

然后配置数据库信息，数据库名称、用户名、密码填写刚刚建立的数据库信息，数据库主机需要填写刚刚获取的地址，不是图中的 localhost，表前缀默认就行，然后提交。

![wordpress数据库设置](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161427556.jpg)

如果数据库信息无误，就可以进入到最后一步，配置 wp 管理员信息，这里邮箱可以填自己真实邮箱，如果不想被收录也可以勾选 “建议搜索引擎不索引本站点”。

![wordpress](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161427985.jpg)

![wordpress欢迎](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161427760.jpg)

当一切都配置完成后就可以登录 wp 后台（xxx.xxx/wp-admin）来管理和设置 wp。此时就可以在浏览器输入域名再次访问网站，就可以看到 wp 默认的界面了。

![wordpress首页](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161427948.jpg)



### 3. 美化 & wp 详细教程

登录 wp 后台（xxx.xxx/wp-admin），就可以对 wp 进行主题、文章等管理，但是碍于篇幅，wordpress 相关详细教程将会再开一个单独的系列，本篇就暂不介绍相关内容。

![wordpress管理后台](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161427988.jpg)

各位童鞋可以访问我自己的看看效果（jinitaimeiba.eu.org），注意不要在微信浏览器中直接打开，这还是毛坯房。



## 五、开启 ssl（可选）

关于 ssl 我个人不建议在 serv00 启用，因为会有些问题，如果确实需要 ssl，可以自己先去域名服务商申请一个 ssl 证书并且加进去。申请 ssl 教程往期文章也有，这里就不展开讲了。

## 六、使用 cloudflare cdn 提速（可选）

由于 serv00 服务器是在欧洲地区，国内访问很慢，这时候就可以利用 cloudflare（简称 cf）免费的 cdn 来加速。

注意，使用 cf cdn 来进行提速只支持自己的域名；如果使用的是 serv00 给的子域名是无法使用 cf cdn 的，当然也无法使用其他的 cdn 加速。

进入 cf 后台，只需要开启代理就可以启用 cdn，然后等待几分钟，刷新 dns 后再次访问就可以看到速度明显变快。同时 cf 还可以解决 ssl 的问题，开启 cdn 后就是 https 访问网站了，也不用手动配置 ssl 证书。

![cloudflare cdn 提速](https://b2.wwkejishe.top/WP-CDN-02/2024/202407161427933.jpg)

## 七、其他

1. serv00 本身是不限制流量，但请不要滥用，滥用会被封号。

2. 强烈建议套上 cdn，如果不套 cf cdn 速度会很慢，当然套了 cf 也不会多块，但请记住这是免费的，花钱就没有这么多问题。
3. 自己重要数据请及时备份，如果哪一天因为被滥用或者长时间不登陆导致账户被删除，数据是无法找回的。

4. serv00 要求每三个月就登录一次 ssh 或者控制台，网上有脚本，但本人没有测试所以就不放出来了，本人只建议每过一个月手动登陆下后台或者 ssh。
