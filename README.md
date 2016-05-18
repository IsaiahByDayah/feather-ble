# feather-ble

##### A Node.js module that helps find, wrap, and add easy basic functionality to a [Noble](https://github.com/sandeepmistry/noble) peripheral that is an Adafruit Bluefruit LE Arduino Micro Controller

## Features
* Event system for the following:
  * On connect & ready with adafruit device
  * On message from adafruit device
  * On RSSI signal update
  * On device disconnect
* Can send strings of any length to adafruit device

## Works With
* [Adafruit Feather 32u4 Bluefruit LE](https://learn.adafruit.com/adafruit-feather-32u4-bluefruit-le/overview) - TESTED

## Quick Start

### Install
```shell
npm install --save feather-ble
```

### Require
```js
var Feather = require("feather-ble");
```

### Setup & Start
```js
var possible_feather = some_noble_peripheral_instance;

// Check is peripheral is an adafruit feather
if (new Feather().isFeather(possible_feather)) {
  // possible_feather is an adafruit feather device
  
  // Create settings
  var instanceSettings = {
    peripheral: possible_feather,     // REQUIRED: A Noble Peripheral Instance to use
    verbose: Bool,                    // OPTIONAL: If instance should print out logs to console (default FALSE)
    rssi: Bool,                       // OPTIONAL: If instance should request/trigger RSSI updates (default FALSE)
    rssi_update_rate: Int             // OPTIONAL: Rate (in ms) at which RSSI updates should be requested/triggered (default 5000)
  };
  
  // Create instance
  var feather = new Feather(instanceSettings);
  
  // Add event listeners
  feather.on("ready", function(err){
    if (!err) {
      // feather is connected and ready
      
      // Can send strings over to adafruit device
      feather.sendMessage("Hello World!");
      feather.sendMessage("This is a really long string that works just as well :)");
    }
  });
  
  feather.on("message", function(msg){
    // Message recieved from adafruit device
  });
  
  feather.on("rssi", function(err, rssi){
    if (!err) {
      // RSSI was updated
    }
  });
  
  feather.on("disconnect", function(){
    // feather was disconnected
  });
  
  // Start feather process
  feather.setup();

}
```

## Dependencies:
- Underscore ([Source](http://underscorejs.org))

## Future Plans
- Rename and add ability to accept wider range of adafruit devices
- Improve verbose comments
- Expand instance settings for more custom tweaking
- Create Arduino Library that works hand-in-hand with module
