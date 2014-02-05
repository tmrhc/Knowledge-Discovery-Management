$("#btn1").click(function() {
    
    var countrycode = $('#txt1').val();

  $.ajax({
  url : "http://where.yahooapis.com/v1/states/"+countrycode+"?appid=19697933560ef16dde5f6a4e043d4cf2&format=json",
  dataType : "json",
  error: function(request, status, error) { alert(request.responseText) },
  success : function(parsed_json) {

      $('#count').html("<strong>Total Count: </strong> " + parsed_json['places']['total']+"");
      $('#display').html("<strong>Displaying first 5 states</strong>");
     $('#s1').html("<strong>State: </strong>"+ parsed_json['places']['place']['0']['name'] + "");
      $('#s2').html("<strong>State: </strong>"+ parsed_json['places']['place']['1']['name'] + "");
      $('#s3').html("<strong>State: </strong>"+ parsed_json['places']['place']['2']['name'] + "");
      $('#s4').html("<strong>State: </strong>"+ parsed_json['places']['place']['3']['name'] + "");
      $('#s5').html("<strong>State: </strong>"+ parsed_json['places']['place']['4']['name'] + "");
    
      
  }

  });
});