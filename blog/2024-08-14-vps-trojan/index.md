---
slug: vps-trojan
title: 一键脚本搭建科学上网Trojan梯子(自建VPN)详细教程（2024年8月14日）
authors: [dongyubin]
tags: [VPS, 主机, 服务器, Trojan, 科学上网]
---

## Trojan简介

简单理解：v2ray+ws+TLS的lite版，伪装成 HTTPS 流量，安全稳定性更高。在某些设备上表现比 v2ray+ws+TLS 好一些。

## 准备工作

- [国外 VPS 服务器](https://bestvps.wwkejishe.top/docs/tutorial-vps/choose-vps)：[代理服务器推荐](https://bestvps.wwkejishe.top/docs/tutorial-vps/choose-vps#%E4%BB%A3%E7%90%86%E7%9C%8Byoutube%E5%9B%BD%E5%A4%96%E7%BD%91%E7%AB%99)
- [SSH 工具](https://www.wangdu.site/software/bianchengkaifa/1263.html)：可以用 XShell 或者 FinalShell。
- [客户端工具](https://help.wwkejishe.top/free-shadowrocket)：v2rayN、SS 客户端、Clash 之类的都可以。
- 辅助工具：可以免费科学扶墙的 VPN工具

## 域名购买、并解析域名

最开始说过 Trojan-go 协议是将你发送的数据通过 TLS 伪装成正常的 HTTPS 流量。所以你需要有一个域名去申请 CA 机构的证书。从而达到伪装的目的。

采用 TLS 的好处在于它是非对称加密。就是数据的加密、解密的是两个不同的东西（就是私钥公钥）。可以有效地防御回放攻击。

新手可以这么理解上面的内容：客户端和服务器端都上了两把锁，而都只有对方才能打开这其中的一个锁，不存在中间人（防火墙）在其中捣乱。（如果你还是不理解那就 PASS 好了，不需要理解）

**小提示**：其实也可以不用域名， 但是我并不推荐。

域名购买直接从 [Namecheap](https://www.namecheap.com/) 或者 [Godaddy](https://www.godaddy.com/) 购买一个就可以（有那种 .xyz 后缀的非常便宜，就几块钱）。这里就不赘述了。（[域名比价服务](https://www.wangdu.site/software/tools/2073.html)）

然后，将域名 A 解析到自己购买的服务器上。添加完解析之后应该会出现类似这样的记录：

![域名解析记录](https://jiasupanda.com/wp-content/uploads/2023/01/image-31-1024x87.png.webp)

解析之后，通过 win+R 输入cmd 命令进入控制器。然后 Ping 一下刚才解析的域名，Ping 出的 IP 地址是服务器的 IP 地址后就可以。

下面就可以进入部署阶段。

## 一键部署服务器端

本次部署采用的是一键式部署命令。期间不需要任何操作，只需要按照提示操作即可。如果你有深入学习的需求，可以看最下方的学习资料。

这次我弄了一个日本大阪的服务器（好像是 [Vultr](https://www.vultr.com/?ref=8888141) 新上的）IP 地址是：*64.176.34.199*。记得刚才的域名要解析到这个服务器上。

通过 FinalShell （或者其他的 SSH 工具）连接该服务器：

![FinalShell连接VPS服务器](https://jiasupanda.com/wp-content/uploads/2023/01/image-32-1024x513.png.webp)

利用下面的命令一键部署 Trojan-Go：

```
bash <(curl -sSL "https://raw.githubusercontent.com/veip007/hj/main/trojan-go.sh")
```

会得到如下界面：

![Trojan-Go安装](https://jiasupanda.com/wp-content/uploads/2023/01/image-33.png.webp)

第一次配置就输入 “1” 执行安装 Trojan-go 命令。然后会有提示，如果你域名已经解析好了，并且通过 Ping 得到服务器 IP 之后，输入 “y” 继续：

![Trojan-Go解析域名](https://jiasupanda.com/wp-content/uploads/2023/01/image-34.png.webp)

这是你需要输入伪装的域名，也就是你购买的域名。例如你购买的是 “abc.xyz”，然后解析的是 “tro.abc.xyz”。那么你需要输入 “tro.abc.xyz” 才可以。

域名如果没有解析到服务器，那么就会出现 “伪装域名未解析到当前服务器 IP”：

![Trojan-Go解析结果](https://jiasupanda.com/wp-content/uploads/2023/01/image-35.png.webp)

***小提示**：域名如果输入错误，使用 ctrl + Backspace 才能删除内容。直接按 Backspace 是不行的。如果在输入错误后，已经回车执行，需要重新执行安装命令。*

这里我就选择已经解析好的域名，输入，并执行下一步操作（这里就不截图了）。

之后你就可以自定义密码：

![Trojan-Go设置自定义密码](https://jiasupanda.com/wp-content/uploads/2023/01/image-36.png.webp)

随后会提示是否需要在设置一组密码。由于没必要，就不需要设置。直接输入 “n”，进入下一步。

随后会设置端口，因为 HTTPS 默认是走 443 端口。所以我们这里也输入 443 就可以：

![Trojan-Go设置端口](https://jiasupanda.com/wp-content/uploads/2023/01/image-37.png.webp)

后面的步骤就简单了，因为需要伪装流量，所以你需要选择一个伪装网站类型，我这里选择的是 “5” 自定义网站，同时输入了百度的域名，禁止了搜索引擎的抓取，同时开启了 BBR 加速：

![Trojan-Go伪装流量](https://jiasupanda.com/wp-content/uploads/2023/01/image-39.png.webp)

之后会自动执行这些步骤：

- 生成私钥和公钥
- 申请 CA 证书
- 安装 CA 证书

这些内容可以在执行的结果中看到，但是所谓新手，直接 Enter 到最后，直至出现如下结果：

![Trojan-Go配置文件](https://jiasupanda.com/wp-content/uploads/2023/01/image-40.png.webp)

记录出现的的信息，关闭 FinalShell。

注意，当前的一键式命令并不会帮我们开启服务器的端口，所以这里我们需要执行下方命令，开启 443 端口：

```
ufw allow 443
```

你可以通过 status 命令查看是否已开启对应端口：

```
ufw status
```

之后，重启下 trojan-go 服务即可：

```
systemctl restart trojan-go.service 
```

到此，服务器端的配置就算结束了。接下来就需要进入客户端的配置。

## 配置客户端

客户端我们依然使用 v2rayN 5.39 版本客户端。当然你也可以用 Clash 客户端，或者其他支持 Trojan 协议的。文末提供对应的下载地址。



打开 V2rayN，点击左上角 [服务器] 选择 “添加 [Trojan] 服务器”。并按照下图进行填写：

![V2rayN添加服务器配置](https://jiasupanda.com/wp-content/uploads/2023/01/image-42.png.webp)

点击确定，结束客户端配置。

此时，你可以 Ctrl + R，或者右击测试真连接延迟：

![V2rayN测试延迟](https://jiasupanda.com/wp-content/uploads/2023/01/image-43.png.webp)

可以看到，真连接测试ok，虽然延迟用点高，但是并不影响使用。

## 最后

对于 Trojan-go 目前来看安全性还是非常的不错。过去用 SS 搭建，服务器周期性的会被封，而使用 Trojan 的一直都很稳定。

理论上讲 SS 的速度会比 Trojan 快一些。但是实际在使用过程中，几毫秒的差异并没有那么明显。油管白天跑个 4k 画质还是没问题的。晚上跑个 1080p 也就够了。

本教程中使用的是 Trojan-go 的一键式部署代码，所以新手十分友好。