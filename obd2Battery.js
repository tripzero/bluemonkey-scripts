var batteryVoltage = bluemonkey.subscribeTo("BatteryVoltage");

var batteryTimer = new QTimer();

batteryTimer.interval = 60000;
batteryTimer.singleShot = true;

function batteryCheck(value)
{
	bluemonkey.log("batteryCheck()");
	if(value <= 13.0)
	{
		bluemonkey.log("battery is low " + value);
		if(!batteryTimer.active)
			batteryTimer.start();
	}
	else batteryTimer.stop();

	bluemonkey.log("leaving batteryCheck()");
}

function batteryCheckFinal()
{
	bluemonkey.log("batteryCheckFinal")
	if (batteryVoltage.value <= 13.0)
	{
		obd2Connected.value = false;
		obd2ConnectTimer.stop();
	}
}

batteryTimer.timeout.connect(batteryCheckFinal);
batteryVoltage.changed.connect(batteryCheck);

batteryCheck(batteryVoltage.value);
