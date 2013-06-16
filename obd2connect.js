var obd2Connected = bluemonkey.subscribeTo("Obd2Connected")

function checkObd2Connected()
{

	if(obd2Connected.value == false)
	{
		obd2Connected.value = true;
	}

}

var timer = new QTimer();

timer.start(5000);

timer.timeout.connect(checkObd2Connected);
