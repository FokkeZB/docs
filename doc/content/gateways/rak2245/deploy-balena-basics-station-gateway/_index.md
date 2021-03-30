---
title: Deploy Balena Basics™ Station
weight: 500
---

## Deploy a LoRa Basics™ Station using balena.io and RAK2245 Pi Hat

Deploy a TTN or TTI LoRa gateway running the newest Basics Station Semtech Packet Forward protocol. With a Raspberry Pi 3/4, the RAK2245 Pi Hat and balena.io it's easy to deploy DIY fleet of gateways.

The Basics Station protocol enables the LoRa gateways with a reliable and secure communication between the gateways and the cloud and it is becoming the standard Packet Forward protocol used by most of the LoRaWAN operators. It's the standard packet forward protocol on The Things Industries.

## Deploy the TTN gateway

Running this project is as simple as deploying it to a balenaCloud application. You can do it in just one click [here](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/balenalabs/basicstation).

Follow instructions, click **Add a Device** and flash an SD card with that OS image dowloaded from balenaCloud.

### Create the balena Application

Once you click the Deploy with Balena button, you have to create a balena Application.

![Create Deploy](https://www.balena.io/blog/content/images/2020/07/create-deploy.png)

After that, just click **Add Device** while the release is being built inside the balena Application.

![Add Device](https://www.balena.io/blog/content/images/2020/07/add-device.png)

It's time to download the OS image that will have your LoRa gateway. Introduce your WiFi credentials if you are going to use WiFi.

![Add Device](https://www.balena.io/blog/content/images/2020/07/add-device-2.png)

Once you have the balenaOS image that will run your Basics Station LoRa gateway, open [balenaEtcher](https://www.balena.io/etcher/) (if you don't have it, download it) and flash your SD card with Etcher. Once flashed, insert the SD in your Raspberry Pi and power it up.

### Before configuring your TTN LoRa gateway

![](https://www.balena.io/blog/content/images/2020/07/new-app.png)

After some minutes, the containers of the release will be deployed on the Raspberry Pi with the RAK2245. If everything gets successfully installed, on the **TAGS** of your balenaCloud you should see the EUI of your gateway. You will need this EUI to register the gateway on TTN. Double click on the TAG to copy it.

If that does not work, go to the terminal box and click **Select a target**, then **HostOS**. Once you are inside the shell, type:

```cat /sys/class/net/eth0/address | sed -r 's/[:]+//g' | sed -e 's#\(.\{6\}\)\(.*\)#\1FFFE\2#g' ```

Copy the result and you are ready to register your gateway with this EUI.

## Configure the gateway on TTN

Go to the [TTN console](https://console.thethingsnetwork.org/) and **Register a Gateway**. 

![Register Gateway](https://www.balena.io/blog/content/images/2020/07/TTN-register-gateway.png)

> During registration, check "I'm using the legacy packet forwarder", even though you are using Basics Station. This is a "won't fix" issue in TTN. Paste the EUI and register the gateway.

### Set up the LoRa gateway variables on balenaCloud

At that moment, your gateway will be registered at TTN and now it's time to copy the **Gateway ID** and the **Gateway Key** from the TTN console and introduce them as balena Device Variables.

![](https://www.balena.io/blog/content/images/2020/07/add-device-variable.png)

Actually some variables are added during the deployment, but you need to introduce the most important for TTN, the ```GW_ID``` and the ```GW_KEY``` that are the Gateway ID and the Gateway Key.

Having said that, the gateway is created with European frequency, de facto. If you live in another LoRaWAN region, feel free to change the TC_URI with another LNS ```wss://lns.{eu-us-in-au}.thethings.network:443``` depending on your LoRaWAN frequencies.

Now your device will be completely configured and ready to receive uplinks and downlinks.  
