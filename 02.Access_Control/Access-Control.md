---
title: Access Control
date: 2018-06-22 05:46:28
tags:
---

# 01.Access Control - 访问控制

## 漏洞等级
**高危** (具体参考实际情况)

## 漏洞成因
`访问控制`漏洞, 也可以说是`访问权限错误`漏洞。`漏洞合约`的`漏洞函数`对`恶意合约`发起调用后，`恶意合约`再次发次对`漏洞合约`的`漏洞函数`的调用，如果`恶意合约`被允许调用`漏洞函数`且调用成功也就发生了`重入`。
通常漏洞由合约发起`<Address>.call.value()()`发送ether到`外部合约`,从而触发`外部合约`的`回退函数` - [fallback()](http://solidity.readthedocs.io/en/v0.4.21/contracts.html#fallback-function)`导致的。
> 合约接收ether的时候会触发fallback()
>
> 合约被调用函数不存在,也会fallback())

## 漏洞危害
由于`漏洞函数`执行过程调用`不可信合约`或者使用`具有外部地址`的`低级函数`,`漏洞合约`的`合约状态`被改变,`漏洞函数`的`运行结果`也将`不可信`。以`The DAO`事件为例,攻击者的恶意的递归调用使`The DAO`损失了`350万ETH`,也导致了以太坊的分叉。

## 漏洞测试方法

### 测试环境
推荐并尽量使用 `Remix - Solidity IDE` 进行复现
(部分漏洞使用`truffle`本地搭建环境进行补充复现)

[Remix - Solidity IDE](http://remix.ethereum.org/#optimize=false&version=soljson-v0.4.24+commit.e67f0147.js)

### 编译合约

将以下两个合约直接复制粘贴到 Remix 的代码框中

#### 被攻击合约:

