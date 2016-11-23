--
title: Usage
--

# Library Usage
Here's how you include and use The Things Network library.

## Include

To use the library:

1.  Follow [setup](#setup) to install the library in Arduino IDE.
2.  Select **Sketch > Include Library > TheThingsNetwork** to include it.

	Or simply copy and paste:
  
	```c
	#include <TheThingsNetwork.h>
	```

## Initialize

A typical sketch has the following structure:

```c
#include <TheThingsNetwork.h>

// OTAA or ABP keys
// ..

#define loraSerial Serial1
#define debugSerial Serial

TheThingsNetwork ttn(loraSerial, debugSerial, /* TTN_FP_EU868 or TTN_FP_US915 */);

void setup() {
  loraSerial.begin(57600);
  debugSerial.begin(9600);

  // OTAA or ABP activation
  // ..
}

void loop() {

  // Send and receive messages
  // ..
}
```

The actual streams you'd pass to the constructor depend on the board you use and the Serial Port you connected a LoRaWAN module to. For The Things Uno and Node use the Serial Ports and baud rates shown here.

The third argument for the constructor is a constant to set the frequency plan your device operators on. Replace `/* TTN_FP_EU868 or TTN_FP_US915 */` with either `TTN_FP_EU868` or `TTN_FP_US915`.

## Activate

In the [`setup()`](https://www.arduino.cc/en/Reference/setup) function, after initializing the library, we have to activate the device.

There are two ways to activate your device. By default your device is registered to use OTAA. You can personalise a device to use ABP.

### Over The Air Activation (OTAA)

For OTAA you will use the `join()` method with the **App EUI** and **App Key** configured for your device.

1.  Right after the include for the library create constants to hold the keys:

    ```c
    const char *appEui = "0000000000000000";
    const char *appKey = "00000000000000000000000000000000";
    ```

    * For `appEui` use the **Application EUI** found on the device's page in the console. Click <i class="ion-clipboard"></i> to copy.
    * For `appKey` use the **App Key** found on the device page.

2.  In your `setup()` function, call `ttn.join()` with the constants you just created:

    ```c
    ttn.join(appEui, appKey);
    ```

Your device will now try to get a confirmed activation via OTAA every 10 seconds until it succeeds.

### Activation By Personalization (ABP)

For ABP you will use the `personalize()` method with the device's **Dev EUI**, **Network Session Key** and **App Session Key**.

1.  Right after the include for the library create constants to hold the keys:

    ```c
    const char *devAddr = "00000000";
    const char *nwkSKey = "00000000000000000000000000000000";
    const char *appSKey = "00000000000000000000000000000000";
    ```

    * For `devAddr ` use the **Device Address** found on the device's page in the console. Click <i class="ion-clipboard"></i> to copy.
    * For `nwkSKey ` use the **Network Session Key**.
    * For `appSKey` use **App Session Key**.

2.  In your `setup()` function, call `ttn.personalize()` with the constants you just created:

    ```c
    ttn.personalize(devAddr, nwkSKey, appSKey);
    ```

Your device will now communicate with the network using these keys.

See the [ABP](https://github.com/TheThingsNetwork/arduino-device-lib/blob/master/examples/ABP/ABP.ino) example.

## Send

To send messages call `ttn.sendBytes()` with an array of bytes and its size. Here's an example of a `loop()` function that sends the current state of [`LED_BUILTIN`](https://www.arduino.cc/en/Reference/Constants) every 10 seconds:

```c
void loop() {
  byte data[1];
  data[0] = (digitalRead(LED_BUILTIN) == HIGH) ? 1 : 0;
    
  ttn.sendBytes(data, sizeof(data));
  
  delay(10000);
}
```

To minimise your use of the limited daily airtime try to use as little bytes as possible. See the Arduino [Array guide](https://www.arduino.cc/en/Reference/Array) and [Bit Math Tutorial](http://playground.arduino.cc/Code/BitMath#binary) to learn how.

See the [Send](https://github.com/TheThingsNetwork/arduino-device-lib/blob/master/examples/Send/Send.ino) example.

## Receive

The most common [Class A](https://www.lora-alliance.org/What-Is-LoRa/Technology) LoRaWAN devices - including The Things Node and Uno - can only receive the last scheduled message in response to a message they send.

> For your convenience, the library has a `ttn.poll()` method which sends a single byte to poll for incoming messages if you don't have anything particular to send.

To receive message you have to define a function and pass it to the library.

1.  Add the following function to your sketch:

    ```c
    void message(const byte* payload, int length, int port) {
      debugSerial.println("-- MESSAGE");
      debugSerial.print("Received " + String(length) + " bytes on port " + String(port) + ":");
    
      for (int i = 0; i < length; i++) {
        debugSerial.print(" " + String(payload[i]));
      }
    
      debugSerial.println();
    }
    ```

2.  Register the function in your `setup()` function:

    ```c
    ttn.onMessage(message);
    ```

See the [Receive](https://github.com/TheThingsNetwork/arduino-device-lib/blob/master/examples/Receive/Receive.ino) example.
