var obd2Connected = bluemonkey.subscribeTo("Obd2Connected")

function checkObd2Connected()
{

	if(obd2Connected.value == false)
	{
		obd2Connected.value = true;
	}

}

var obd2ConnectTimer = new QTimer();

obd2ConnectTimer.start(5000);

obd2ConnectTimer.timeout.connect(checkObd2Connected);
