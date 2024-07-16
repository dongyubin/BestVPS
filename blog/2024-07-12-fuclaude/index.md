---
slug: fuclaude
title: Fuclaude最全食用指南（Mac、Nas、Windows、serv00、宝塔面板）
authors: [dongyubin]
tags: [Fuclaude, VPS, 主机, 服务器, 宝塔面板, Claude]
---

[Fuclaude](https://github.com/wozulong/fuclaude) 是 [Linux.do](https://linux.do/t/topic/131611) 版主创建的免富强使用Claude.ai小玩具。支持MacOS、Linux、Freebsd（Serv00）、Windows（因报毒，最新版已不支持）、Docker（镜像：`pengzhile/fuclaude`，[官网Docker加速镜像](https://www.wangdu.site/course/2109.html)）。

## 获取Claude.ai的sessionKey

1. 登录 [Claude](https://claude.ai/new) ，F12打开控制台，应用 - Cookie - sessionKey 复制值

   ![获取Claude.ai的sessionKey](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121031228.webp)

## Fuclaude使用教程

以下教程由 Linux.do 网友提供

1. [Fuclaude Mac用户使用教程](https://linux.do/t/topic/131633)
2. [Fuclaude 群辉NAS使用教程](https://linux.do/t/topic/131669)
3. [Fuclaude Windows 用户使用教程](https://linux.do/t/topic/131968)
4. Fuclaude serv00用户使用教程：[1](https://linux.do/t/topic/132575)、[2](https://linux.do/t/topic/131799)（2篇教程可参考使用）
5. [Cloudflare Worker 共享使用脚本](https://linux.do/t/topic/133020)

## Fuclaude搭建前提

1. [非国内服务器](https://bestvps.wwkejishe.top/docs/intro)

## 宝塔Docker搭建Fuclaude教程

1. 使用[SSH工具](https://www.wangdu.site/software/bianchengkaifa/1263.html)连接Linux系统，输入下面内容，回车（下面[Docker镜像已配置加速](https://www.wangdu.site/course/2109.html)）

```
docker run -d \
 --name Fuclaude \
 --restart=always \
 -p 14300:8181 \
docker.hlyun.org/pengzhile/fuclaude:latest
```

![Fuclaude Docker搭建](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121045676.webp)

2. 登录个人的[宝塔面板](https://www.wangdu.site/software/bianchengkaifa/1855.html)，`Docker - 容器`，容器名：`Fuclaude`，状态：`运行中`，表示Fuclaude已经部署好，下面就可以使用域名代理了。

   ![宝塔面板 Fuclaude Docker状态](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121048900.webp)

3. 宝塔面板 - 网站 - 添加站点，域名：你需要解析的域名，PHP版本：纯静态，确定

   ![宝塔面板添加站点](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121052835.webp)

4. 点击域名后的设置 - 反向代理 - 添加反向代理，代理名称：`Fuclaude`，目标URL：`http://服务器IP:14300`，确定

   ![宝塔面板添加反向代理](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121056231.webp)

5. 登录域名控制台，我这里是 [阿里域名控制台](https://dc.console.aliyun.com/#/domain-list/all)，解析 - 添加记录 - 主机记录：`上面解析域名的前缀`，记录值：`服务器IP`，确认

   ![阿里域名控制台添加解析记录](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121100197.webp)

6. 服务器开放端口：在阿里云服务器控制台 - [安全组](https://ecs.console.aliyun.com/securityGroup/region) - 服务器 - 管理规则 - 手动添加 - 目的：`14300`，源：选择`所有IPv4(0.0.0.0/0)`，保存（入方向、出方向都要添加）

   ![服务器开放端口](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121106628.webp)

7. 此时访问你之前解析的域名就可以看到如下页面表示已经搭建成功了，为了安全起见，下面再给域名加个SSL证书就完美了。

   ![域名解析成功界面](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121108814.webp)

8. 宝塔面板申请SSL证书：宝塔面板 - 网站 - 点击域名后的设置 - SSL - Let's Encrypt - 申请证书，等待一会即可申请成功。（如果不成功，可查看[阿里云申请证书教程](https://help.aliyun.com/zh/ssl-certificate/user-guide/submit-a-certificate-application?spm=a2c4g.11186623.0.i0)来申请免费证书，有效期90天，申请下来后，下载解压证书，将PEM、KEY内容填到对应当前内容里保存即可。）

   ![宝塔面板申请SSL证书](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121115664.webp)

9. 打开强制HTTPS，使用HTTPS来访问解析的域名，即可看到前面变成了小锁🔒（页面此时502，不要慌，继续往下看）

   ![宝塔面板打开HTTPS](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121117418.webp)

10. 宝塔放行端口：宝塔面板 - 安全 - 添加端口规则 - 端口：`14300`，方向：`入站/出站`（2个都要添加） - 确定

    ![宝塔放行端口](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121120899.webp)

11. 此时使用HTTPS域名访问，即可看到下面熟悉的页面了，表示搭建完成了。

    ![HTTPS域名解析成功界面](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121108814.webp)

## 常见问题

### Fuclaude页面提示App unavailable

![Fuclaude页面提示App unavailable](https://b2.wwkejishe.top/WP-CDN-02/2024/202407121137562.webp)

解决办法：可以通过 `proxy_url` 设置成富强的地址，比如 `socks5://127.0.0.1:7980`

## 网友搭建的网站

如果想自己使用使用本地搭建即可，想分享给其他人用就使用上面教程自行搭建

- [博主自己搭建的Fuclaude](https://fuclaude.wangdu.site/login)
- [Linux.do版主搭建的Fuclaude](https://demo.fuclaude.com/)
- [https://claude.freeload.cc/login](https://claude.freeload.cc/login)
- [https://claude.asia/login](https://claude.asia/login)
- [公益分享Claude服务](https://share.claude.asia/)
- [https://share.syferie.tech/](https://share.syferie.tech/)：需要[Linux.do](https://www.wangdu.site/course/2097.html)大于1级账号才能使用