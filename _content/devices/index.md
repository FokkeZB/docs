---
title: Devices
description: Connect Things to the Internet via The Things Network.
sections:
 - APIs
 - SDKs
 - Hardware
image: /devices/icon.png
zindex: 1000
---

# Devices

The Things Network is the first open source, decentralized infrastructure for the Internet of Things. The community edition is free for fair use. Learn how to connect your Thing!

Before your device can communicate via The Things Network, you will need to [register](registration.md) it.

## Hardware

Currently, The Things Network supports [LoRaWAN](https://www.lora-alliance.org/) for long range (~5 to 15km), low power (months to years on battery), but also low bandwidth (51 bytes/message) communication. We plan to support [Bluetooth LE](https://www.bluetooth.com/what-is-bluetooth-technology/how-it-works/low-energy) and other networks as well.

You can of course use [The Things Node](node/) or [Uno](uno/), but The Things Network supports any certified LoRaWAN device. The ones you can find under **Hardware** have been tested and documented by us or our users.

> If you'd like to document and promote another device, [contact us](mailto:johan@thethingsnetwork.org) for our Ambassador & Partner programs.

## SDKs

To connect a device it needs to have a LoRaWAN module, either on board, as a shield or wired. Most modules can be talked to via a serial interface. To hide you from the complexity of the commands and responses, some modules come with an SDK.

[The Things Node](node/) and [Uno](uno/) use the [Arduino](https://www.arduino.cc/) platform and [Microchip RN modules](http://www.microchip.com/design-centers/wireless-connectivity/embedded-wireless/lora-technology). We've build an [Arduino SDK](arduino/) which enables you to send a message in just a couple lines of code. We plan to provide SDKs for more IoT platforms as well.

> If you'd like to build, document or promote another platform or LoRa module, [contact us](mailto:johan@thethingsnetwork.org) for our Ambassador & Partner programs.
