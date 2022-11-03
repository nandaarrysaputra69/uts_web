$(document).ready(function(){
    $.ajax({
      url: "api/stats.json",
      method: "GET",
      success: function (result) {
        var total_infected = result.numbers.infected
        var total_recovered = result.numbers.recovered
        var total_fatal = result.numbers.fatal 
        // input to html
        $("#total_infected").append("<h1>"+total_infected+"</h1> <p>INFECTED</p>");
        $("#total_recovered").append("<h1>"+total_recovered+"</h1> <p>RECOVERED</p>");
        $("#total_fatal").append("<h1>"+total_fatal+"</h1> <p>DEATH</p>");
        console.log(result)
        console.log(result.numbers)
      },
    });
})