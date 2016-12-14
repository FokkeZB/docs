---
title: The Things Node
section: Hardware
label: draft
redirect_from:
 - /draft/node/
 - /node/
image: /devices/node/image.png
---

# The Things Node

The Things Node is the perfect LoRa node to start prototyping your ideas without having to deal with bread boards, wires and sensors.

![Box, Casing and PCBA](image.png)

[The Things Node](https://shop.thethingsnetwork.com/index.php/product/the-things-node/) is based off the [SparkFun Pro Micro - 3.3V/8Mhz](https://www.sparkfun.com/products/12587) with added Microchip [LoRaWAN module](http://www.microchip.com/design-centers/wireless-connectivity/embedded-wireless/lora-technology) and [temperature sensor](http://www.microchip.com/wwwproducts/en/en530196), NXP's [digital accelerometer](http://www.nxp.com/products/sensors/accelerometers/3-axis-accelerometers/2g-4g-8g-low-g-12-bit-digital-accelerometer:MMA8452Q), a light sensor, button and RGB LED. All this is packaged in a matchbox-sized waterproof (IP54) casing with 3 AAA batteries to power it for over a year of usage.

Our [Arduino](../arduino/index.md) library comes with a class specifically for The Things Node. Configure and read sensors without having to worry about the underlying sensor registries.

Once you have validated your idea, the next step could be to use [The Things Uno](../uno/index.md) and different sensors to find out what to print on a custom board to take into production.

## Prerequisites

* The Things Node.
* The [`preview/node` branch](https://github.com/TheThingsNetwork/arduino-device-lib/tree/preview/node/) of the The Things Network Arduino Library.
