---
slug: subconverter-subweb
title: 2026年自行搭建Clash订阅转换平台，自建Sub-Web前端和SubConverter后端
authors: [dongyubin]
tags: [VPS, 主机, 服务器, SubConverter, Sub-Web, Clash]
---

## 前置条件

- 一台可部署的服务器：[2024年国外高性价比便宜 VPS 推荐(稳定、好用、免费体验)](https://bestvps.wwkejishe.top/docs/tutorial-vps/choose-vps)

## Docker部署SubConverter

1. 使用[SSH工具](https://www.wangdu.site/software/bianchengkaifa/1263.html)连接Linux系统，输入下面内容，回车（下面[Docker镜像已配置加速](https://www.wangdu.site/course/2109.html)）

    ```shell
    docker run -d --restart=always --name SubConverter -p 25500:25500 dockerpull.com/tindy2013/subconverter:latest
    ```

2. 登录个人的[宝塔面板](https://www.wangdu.site/software/bianchengkaifa/1855.html)，`Docker - 容器`，容器名：`SubConverter`，状态：`运行中`，表示Fuclaude已经部署好，下面就可以使用域名代理了。

3. 宝塔面板 - 网站 - 添加站点，域名：你需要解析的域名，PHP版本：纯静态，确定

4. 点击域名后的设置 - 反向代理 - 添加反向代理，代理名称：`SubConverter`，目标URL：`http://服务器IP:25500`，确定

5. 登录域名控制台，我这里是 [阿里域名控制台](https://dc.console.aliyun.com/#/domain-list/all)，解析 - 添加记录 - 主机记录：`上面解析域名的前缀`，记录值：`服务器IP`，确认

6. 服务器开放端口：在阿里云服务器控制台 - [安全组](https://ecs.console.aliyun.com/securityGroup/region) - 服务器 - 管理规则 - 手动添加 - 目的：`25500`，源：选择`所有IPv4(0.0.0.0/0)`，保存（入方向、出方向都要添加）

7. 宝塔面板申请SSL证书：宝塔面板 - 网站 - 点击域名后的设置 - SSL - Let's Encrypt - 申请证书，等待一会即可申请成功。（如果不成功，可查看[阿里云申请证书教程](https://help.aliyun.com/zh/ssl-certificate/user-guide/submit-a-certificate-application?spm=a2c4g.11186623.0.i0)来申请免费证书，有效期90天，申请下来后，下载解压证书，将PEM、KEY内容填到对应当前内容里保存即可。）

8. 打开强制HTTPS，使用HTTPS来访问解析的域名，即可看到前面变成了小锁🔒

9. 宝塔放行端口：宝塔面板 - 安全 - 添加端口规则 - 端口：`25500`，方向：`入站/出站`（2个都要添加） - 确定

## Docker部署Subweb

```shell
# Clone项目到本地 
git clone https://github.com/CareyWang/sub-web.git
cd sub-web 
# 编辑.env配置文件
vi .env 
# 修改后端地址
# API 后端 
VUE_APP_SUBCONVERTER_DEFAULT_BACKEND = "https://sub.wangdu.site"

# 编辑Subconverter.vue
cd src/views
vi Subconverter.vue  
# 31行
placeholder="https://subconverter.wangdu.site/sub?" 
# 235行 
backendOptions: [{ value: "https://subconverter.wangdu.site/sub?" }],
```

在 236 行 `remoteConfig: [` 后添加如下内容，添加后，点击 ESC，输入：wq（保存并退出）

```vue
        {
            label: "ACL4SSR",
            options: [
              {
                label: "ACL4SSR_Online 默认版 分组比较全 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"
              },
              {
                label: "ACL4SSR_Online_AdblockPlus 更多去广告 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"
              },
              {
                label: "ACL4SSR_Online_NoAuto 无自动测速 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"
              },
              {
                label: "ACL4SSR_Online_NoReject 无广告拦截规则 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"
              },
              {
                label: "ACL4SSR_Online_Mini 精简版 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"
              },
              {
                label: "ACL4SSR_Online_Mini_AdblockPlus.ini 精简版 更多去广告 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"
              },
              {
                label: "ACL4SSR_Online_Mini_NoAuto.ini 精简版 不带自动测速 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"
              },
              {
                label: "ACL4SSR_Online_Mini_Fallback.ini 精简版 带故障转移 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"
              },
              {
                label: "ACL4SSR_Online_Mini_MultiMode.ini 精简版 自动测速、故障转移、负载均衡 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"
              },
              {
                label: "ACL4SSR_Online_Full 全分组 重度用户使用 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"
              },
              {
                label: "ACL4SSR_Online_Full_NoAuto.ini 全分组 无自动测速 重度用户使用 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"
              },
              {
                label: "ACL4SSR_Online_Full_AdblockPlus 全分组 重度用户使用 更多去广告 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"
              },
              {
                label: "ACL4SSR_Online_Full_Netflix 全分组 重度用户使用 奈飞全量 (与Github同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"
              },
              {
                label: "ACL4SSR 本地 默认版 分组比较全",
                value: "config/ACL4SSR.ini"
              },
              {
                label: "ACL4SSR_Mini 本地 精简版",
                value: "config/ACL4SSR_Mini.ini"
              },
              {
                label: "ACL4SSR_Mini_NoAuto.ini 本地 精简版+无自动测速",
                value: "config/ACL4SSR_Mini_NoAuto.ini"
              },
              {
                label: "ACL4SSR_Mini_Fallback.ini 本地 精简版+fallback",
                value: "config/ACL4SSR_Mini_Fallback.ini"
              },
              {
                label: "ACL4SSR_BackCN 本地 回国",
                value: "config/ACL4SSR_BackCN.ini"
              },
              {
                label: "ACL4SSR_NoApple 本地 无苹果分流",
                value: "config/ACL4SSR_NoApple.ini"
              },
              {
                label: "ACL4SSR_NoAuto 本地 无自动测速 ",
                value: "config/ACL4SSR_NoAuto.ini"
              },
              {
                label: "ACL4SSR_NoAuto_NoApple 本地 无自动测速&无苹果分流",
                value: "config/ACL4SSR_NoAuto_NoApple.ini"
              },
              {
                label: "ACL4SSR_NoMicrosoft 本地 无微软分流",
                value: "config/ACL4SSR_NoMicrosoft.ini"
              },
              {
                label: "ACL4SSR_WithGFW 本地 GFW列表",
                value: "config/ACL4SSR_WithGFW.ini"
              }
            ]
          },
```

修改 `subweb\Dockerfile` 为如下内容，点击 ESC，输入：wq（保存并退出）

```dockerfile
# ---- Dependencies ----
FROM dockerpull.com/node:16-alpine AS build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM dockerpull.com/nginx:1.24-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
```

输入如下命令重新构建 Subweb Docker 本地镜像

```shell
docker build -t subweb-local:latest .
```

构建后使用如下命令进行启动

```shell
docker run -d -p 58080:80 --restart always --name subweb subweb-local:latest
```

启动后步骤参考 [Docker部署SubConverter](#Docker部署SubConverter) 里的 2 - 9，记得端口改为 `58080`

此时访问代理Subweb的域名：[https://sub.wangdu.site/](https://sub.wangdu.site/)，出现下面页面代表成功部署

![访问代理Subweb的域名](https://b2.wwkejishe.top/WP-CDN-02/2024/20241010113320286.png)

## 参考链接

- [Sub-Web搭建教程！自行搭建Clash订阅转换平台，自建Sub-Web前端和SubConverter后端！妈妈再也不担心我的机场订阅节点信息泄露了！ – V2RaySSR综合网](https://v2rayssr.com/sub-web.html#)
- [自建Clash订阅转换 - Subconverter+Subweb+MyUrls搭建教程 (Docker版本) | Steve](https://surgeee.me/87/)
