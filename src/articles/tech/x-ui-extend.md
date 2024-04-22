---
title: X-IU 功能扩展
category: tech
author: iCoCoding
tags: X-IU 功能扩展
keywords: X-IU 功能扩展
description: X-IU 功能扩展
date: 2024年04月22日22:49:35
meta:
  - name: description
    content: X-IU 功能扩展，快捷配置，节点复制，订阅功能
  - name: keywords
    content: X-IU 功能扩展，快捷配置，节点复制，订阅功能
---

# X-IU 功能扩展

## 新增功能

- 快捷配置

    > 快捷配置能够配置一些常用参数，例如：入站端口范围、入站TLS证书，以免每次添加入站节点时需要手动输入。

    ![快速配置图片](/images/x-ui-03.png)

- 节点复制

    > 入站节点操作增加复制功能，可以快速复制节点信息，端口和ID会重新生成，主要复制TLS证书信息。

    ![节点复制图片](/images/x-ui-02.png)

- 订阅功能

    > 添加订阅，订阅包括多个节点，可设置自动更新，防止端口被墙，可生成订阅链接，可设置有效日期

    ![订阅功能图片](/images/x-ui-01.png)

## 安装&升级

```
bash <(curl -Ls https://github.com/icocoding/x-ui/releases/download/tools/install-v1.0.sh)
```

## 项目地址

[https://github.com/icocoding/x-ui](https://github.com/icocoding/x-ui)