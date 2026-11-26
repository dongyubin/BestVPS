---
sidebar_position: 26
title: Vultr VPS 最新价格与套餐（2026年11月）：$2.5/月起、34 个机房、支付宝可付
description: Vultr 是老牌国际云厂商，34 个数据中心、按小时计费、支持支付宝和银联。本文整理 2026 年 11 月官网在售的普通性能、高性能、高频和优化型套餐价格，新用户 $200 赠金，以及停机仍计费、不退款、IPv6-only 低价机等需要注意的问题。
---

# Vultr VPS 最新价格与套餐（2026年11月）

> 促销随时调整，下单前请以结账页为准。

## Vultr 简介

Vultr 由 The Constant Company 运营，2014 年上线，是国际上最常被拿来和 DigitalOcean、Linode 对比的云厂商之一。它的定位是“按小时计费的全球云服务器”：开通快、机房多、API 完善，适合建站、开发测试、跨境业务和需要多地区部署的场景。

几个关键点：

- **34 个数据中心区域**，覆盖北美、南美、欧洲、亚洲、澳洲、中东和非洲
- 全部按小时计费，普通实例每月按 672 小时封顶
- KVM 虚拟化，全系 SSD/NVMe，独立 IPv4，root 权限
- 一键应用（WordPress、Docker、LAMP 等）、快照、自动备份、防火墙、VPC
- 支持上传 ISO、安装 Windows（需另付授权费）
- 有完整的 API、Terraform Provider 和 CLI

## Vultr 官网

官方网站：[https://www.vultr.com](https://www.vultr.com/?ref=8888141)

## 新用户赠金

官网当前的活动页是 **最高 $200 免费赠金**：新用户通过活动链接注册并绑定支付方式后可领取。

- 活动入口：[https://www.vultr.com/promo/try200](https://www.vultr.com/promo/try200?ref=8888141)
- 赠金一般有使用期限，且只抵扣消费、不能提现，具体条款以活动页为准
- 另外有 Free Tier 计划，可申请一台 1 vCPU / 512MB 的免费实例，需要审核，新号通过率低

## 普通性能 Cloud Compute（Regular Performance）

上一代 Intel CPU + 普通 SSD，价格最低，适合低流量站点、博客、测试环境：

| CPU | 内存 | 硬盘 | 月流量 | 月付 | 小时价 | 购买 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 核 | 512MB | 10GB | 0.5TB | $2.50（仅 IPv6） | $0.004 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 1 核 | 512MB | 10GB | 0.5TB | $3.50 | $0.005 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 1 核 | 1GB | 25GB | 1TB | $5.00 | $0.007 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 1 核 | 2GB | 55GB | 2TB | $10.00 | $0.015 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 2 核 | 2GB | 65GB | 3TB | $15.00 | $0.022 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 2 核 | 4GB | 80GB | 3TB | $20.00 | $0.030 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 4 核 | 8GB | 160GB | 4TB | $40.00 | $0.060 | [点击购买](https://www.vultr.com/?ref=8888141) |

**注意**：$2.50 那档是 IPv6-only，没有公网 IPv4。要 IPv4 最低是 $3.50 起。

## 高性能 Cloud Compute（High Performance）

新一代 AMD EPYC 或 Intel Xeon + NVMe SSD，单核性能明显好于普通型，价格只贵 1 美元起，是现在更推荐的默认选择。AMD 和 Intel 两个平台同价：

| CPU | 内存 | 硬盘 | 月流量 | 月付 | 小时价 | 购买 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 核 | 1GB | 25GB NVMe | 2TB | $6.00 | $0.009 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 1 核 | 2GB | 50GB NVMe | 3TB | $12.00 | $0.018 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 2 核 | 2GB | 60GB NVMe | 4TB | $18.00 | $0.027 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 2 核 | 4GB | 100GB NVMe | 5TB | $24.00 | $0.036 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 4 核 | 8GB | 180GB NVMe | 6TB | $48.00 | $0.071 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 4 核 | 12GB | 260GB NVMe | 7TB | $72.00 | $0.107 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 8 核 | 16GB | 350GB NVMe | 8TB | $96.00 | $0.143 | [点击购买](https://www.vultr.com/?ref=8888141) |

## 高频 Cloud Compute（High Frequency）

3GHz+ Intel Xeon + NVMe，单核主频高，适合 PHP 建站、小型数据库这类吃单核的应用：

| CPU | 内存 | 硬盘 | 月流量 | 月付 | 小时价 | 购买 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 核 | 1GB | 32GB NVMe | 1TB | $6.00 | $0.009 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 1 核 | 2GB | 64GB NVMe | 2TB | $12.00 | $0.018 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 2 核 | 2GB | 80GB NVMe | 3TB | $18.00 | $0.027 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 2 核 | 4GB | 128GB NVMe | 3TB | $24.00 | $0.036 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 3 核 | 8GB | 256GB NVMe | 4TB | $48.00 | $0.071 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 4 核 | 16GB | 384GB NVMe | 5TB | $96.00 | $0.143 | [点击购买](https://www.vultr.com/?ref=8888141) |

## 独享 CPU 优化型（Optimized Cloud Compute）

全独享 AMD EPYC vCPU，没有邻居争抢，适合生产环境和稳定型业务。入门是通用型 General Purpose：

| CPU | 内存 | 硬盘 | 月流量 | 月付 | 购买 |
| --- | --- | --- | --- | --- | --- |
| 1 核独享 | 4GB | 30GB NVMe | 4TB | $30.00 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 2 核独享 | 8GB | 50GB NVMe | 5TB | $60.00 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 4 核独享 | 16GB | 80GB NVMe | 6TB | $120.00 | [点击购买](https://www.vultr.com/?ref=8888141) |
| 8 核独享 | 32GB | 160GB NVMe | 7TB | $240.00 | [点击购买](https://www.vultr.com/?ref=8888141) |

另有 CPU 优化型（$28/月起）、内存优化型（$40/月起）、存储优化型（$75/月起），按需在官网选择。

## 机房怎么选（针对国内用户）

Vultr 是国际线路，**不是 CN2 GIA 这类中国优化线路**，晚高峰延迟和丢包会比专门做国内的商家差。按运营商粗选：

| 运营商 | 推荐区域 | 说明 |
| --- | --- | --- |
| 电信 | 美国洛杉矶、硅谷、西雅图 | 直连较好，延迟约 150–180ms |
| 联通 | 日本东京、大阪，韩国首尔 | 延迟低，日韩机房对联通友好 |
| 移动 | 新加坡、日本 | 移动国际出口到新加坡较稳 |
| 建站面向欧美 | 法兰克福、伦敦、阿姆斯特丹 | 欧洲本地访问快 |

需要稳定低延迟、跑国内访问的业务，建议优先看 [DMIT](./dmit.md)、[搬瓦工](./banwagon.md) 这类带中国优化线路的商家，Vultr 更适合外贸站、海外业务和开发测试。

## 付款方式

官网 FAQ 明确列出支持：

- 信用卡：Visa、Mastercard、American Express、Discover、JCB
- **支付宝 Alipay**、**银联 UnionPay**
- PayPal（部分地区还支持 Giropay、银行转账）
- 加密货币：通过 BitPay 支持 BTC、BCH、ETH、DOGE、LTC、USDC 等

对国内用户来说，支付宝和银联可以直接付款，不需要双币信用卡。

## 需要注意的问题

1. **停机不等于停止计费**。官方 FAQ 写明：实例处于 stopped 状态仍占用 RAM、SSD、IP 和 vCPU，会继续计费，只有 `Destroy` 销毁才停止。想省钱必须销毁实例。
2. **不退款**。官方明确“不提供退款”，按小时计费、随时销毁就是它的退款机制。充值时不要一次充太多。
3. **$2.50 套餐没有 IPv4**。它是 IPv6-only，需要 IPv4 请选 $3.50 起。
4. **自动备份加价 20%**。开启后实例的月费/小时费上浮 20%。
5. **快照单独收费**，$0.05/GB/月。
6. **Windows 要另付授权费**，价格随配置变化，下单页会显示。
7. **普通型是上一代硬件**。同样 $6，高性能型的 CPU 和 NVMe 明显更好，除非预算卡在 $5 以下，否则不建议选普通型。
8. **赠金有期限**。$200 赠金是促销额度，过期作废，不能提现，也不适用于所有产品。

## 常见问题

**Vultr 支持支付宝吗？**
支持。官网付款方式里包含 Alipay 和 UnionPay，同时支持信用卡、PayPal 和 BitPay 加密货币。

**Vultr 能退款吗？**
不退款。官方 FAQ 明确说明不提供退款，按小时计费，用完销毁即可停止扣费。

**Vultr 适合国内建站吗？**
看业务。面向国内用户且要求低延迟，它不是最优解，因为走的是国际线路；面向海外用户、外贸站、开发测试则很合适。

**Vultr 和 DigitalOcean、Linode 比怎么样？**
三者定位接近。Vultr 的优势是机房更多（34 个区域）、有 $2.5 入门档、支持支付宝和银联，价格档位更细。

**新用户赠金怎么领？**
通过活动页注册新账号并绑定支付方式，赠金自动到账。具体额度和有效期以活动页条款为准，老账号通常不符合条件。

**可以随时升级配置吗？**
可以。控制台支持在线升级 CPU、内存、硬盘，按差价计费；降级需要重建实例。

