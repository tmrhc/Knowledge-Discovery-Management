console.log("test");
$("#btn1").click(function() {
    
    initialize();
  
});

function initialize() {
  var myLatlng = new google.maps.LatLng (39.01705,-102.524414);
  //(39.01234, -94.593828);
 
  var mapOptions = {
    zoom: 4,
    center: myLatlng
     
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var bounds = new google.maps.LatLngBounds();

  
    var countrycode = $('#txt1').val();
    var postalcode = $('#txt2').val();
	var markers = [];
   

  $.ajax({
  url : "http://api.geonames.org/findNearbyPostalCodesJSON?postalcode="+postalcode+"&country="+countrycode+"&radius=10&username=tejkiran",
  dataType : "json",
  error: function(request, status, error) { alert(request.responseText) },
  success : function(parsed_json) {
	for(var i=0;i<50;i++) {
		console.log(i);
      //displaying json data in the result
        $('#s'+i).html("<strong>Place: </strong>"+ parsed_json['postalCodes'][i]['placeName'] +", "+"<strong>Postal code: </strong> "+ parsed_json['postalCodes'][i]['postalCode']+", "+"<strong>Distance: </strong> "+ parsed_json['postalCodes'][i]['distance'] + "");
            
 //displaying json data on the maps using markers.
        
   var location = new google.maps.LatLng(parsed_json['postalCodes'][i].lat,parsed_json['postalCodes'][i].lng);
	   var marker = new google.maps.Marker({
			position: location,
			map: map
			
			
		  });
         var latlng = new google.maps.LatLng(parsed_json['postalCodes'].lat,parsed_json['postalCodes'].lng);

        // Add lat/long to bounds
        bounds.extend(latlng);
                
        markers.push(marker);
        
      }

      }
  });
    
    var marker = new google.maps.Marker({
      map: map,
      title: 'Hello World!'
  });
  
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
      map.fitBounds(bounds);
      
      
  }

}