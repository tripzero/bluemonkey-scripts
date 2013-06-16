var batteryVoltage = bluemonkey.subscribeTo("BatteryVoltage");

var timer = new QTimer();

timer.setInterval(60000);

timer.timeout.connect(function() {
  if (batteryVoltage.value <= 13.0)
  {
    obd2Connected.value = false;
  }
}

batteryVoltage.changed.connect(function(value) {
  if(value <= 13.0)
  {
    timer.start();    
  }
  else timer.stop();
}

