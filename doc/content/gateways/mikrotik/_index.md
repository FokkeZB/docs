---
title: MikroTik Routerboard
section: Hardware
---

This is a configuration guide to connect the [MikroTik Routerboard wAP wAP LoRa8 kit](https://mikrotik.com/product/wap_lora8_kit) to The Things Network.

## Connections
![Connections](./Connections.jpg)

For adding an external antenna, open the case and use the SMA connector. 
![Antenna](./Antenna_Mikrotik.png)

## Configuration

1. Download the Official MicroTik Winbox [configuration tool for Windows](https://mikrotik.com/download). Mac users can use the [unofficial ported application](https://splynx.com/3596/mikrotik-winbox-for-mac-os/). Alternatively, there is also a mobile app for configration - [link](https://mikrotik.com/mobile_app)
2. Make the connections as shown the the section above.
3. Open network connections on your PC, mobile phone or other device and search for MikroTik wireless network and connect to it.
4. Open the Winbox app and select the _Refresh_ button. If the connections were successful, your device will be detected as shown below.
![Connected](./connected.png)
5. Once connected to the wireless network, open http://192.168.88.1 in your web browser to start
configuration, user name: **Admin** and there is **no password** by default.
6. The dashboard that you now see provides many configuration options. We are concerned only with the LoRa configuration. Select `LoRa` from the menu list on the left.
7. First add a LoRaWAN backend server configuration by selecting the _Servers_ tab. Sample configuration to connect to The Things Network EU server is shown in the images below.
![TTN](./TTN_Server.png)
![TTN_Config](./TTN_Server2.png)
8. Now choose the _Devices_ tab. Your LoRa Gateway interface must be visible. First click to disable it before proceeding.
9.  Double-click the gateway and fill in the configuration. Select the The Things Network server that was configured in the previous step. Make note of the _GatewayID_ field, which is the unique identifier used to configure this gateway to the The Things Network.
![Gateway](./Gateway.png)
10. Once configured, enable the gateway.
11. Now login to [The Things Network Console](https://console.thethingsnetwork.org/gateways) and register your gateway while enabling the `I'm using the legacy packet forwarder`. If the configuration succeeded, your gateway will now be shown as connected on the console and is ready to receive LoRa packets.
