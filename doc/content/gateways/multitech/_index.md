---
title: MultiTech Conduit
section: Hardware
aliases:
 - /current/multitech/
 - /multitech/
ambassador:
  name: Jac Kersing
  username: kersing
image: /gateways/multitech/image.jpg
weight: 900
---

The [MultiConnect® Conduit™](http://www.multitech.net/developer/products/multiconnect-conduit-platform/) is a configurable, scalable cellular communications gateway for industrial IoT applications. Conduit allows users to plug in two MultiConnect mCard™ accessory cards supporting wired or wireless interfaces.

![MultiTech Conduit](image.jpg)

This guide will help you set up the gateway to communicate over The Things Network.

## Prerequisites

* MultiTech Conduit [AEP](http://www.multitech.net/developer/software/aep/) or [mLinux](http://www.multitech.net/developer/software/mlinux/) model.

  > Update the Conduit to [5.30 firmware or later](http://www.multitech.net/developer/downloads/) to use LoRa Basics Station, which supports channel plan configuration from the Network Server.

* MultiTech [MTAC-LoRa LoRa accessory card](http://www.multitech.net/developer/products/accessory-cards/mtac-lora/), installed as [instructed](http://www.multitech.net/developer/products/accessory-cards/installing-an-accessory-card/).

  > Do not forget to mount the antenna to the mCard after fitting it in the conduit.
  
* Computer with USB port and terminal software. Mac OS and Linux come with terminal software. For Windows you can use something like [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).
* For the mLinux version you'll need a USB stick.
