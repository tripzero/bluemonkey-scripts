function distance(lat1, lon1, lat2, lon2)
{
	var R = 6371; // km
	var d = Math.acos(Math.sin(lat1)*Math.sin(lat2) + 
                  Math.cos(lat1)*Math.cos(lat2) *
                  Math.cos(lon2-lon1)) * R;

	return d;
}

var latitude = bluemonkey.subscribeTo("Latitude");
var longitude = bluemonkey.subscribeTo("Longitude");

latitude.value.connect(latUpdated);

var homeLat = 45.51790;
var homeLon = -122.88940;

var inProximity = false;
var dist = 100;

function latUpdated()
{
	var d = distance(homeLat, homeLon, latitude.value, longitude.value);

	if(d * 1000 <= dist && !inProximity)
	{
		inProximity = true;
		irc.announce("Master has arrived home.");
	}
	else
	{
		inProximity = false;
	}
}


