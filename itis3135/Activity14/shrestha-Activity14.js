$(document).ready(function() {
    $("#nav_list a").click(function() {
        //url: json_files,
       // datatype: text,

       
        fileName = "json_files/" + $(this).attr("title") + ".json";
      
        
        
        document.getElementById("main").innerHTML = "";
        $.getJSON(fileName, function(data) {
            $.each(data, function() {
                $.each(this, function(key, attribute) {
                    $("#main").append(
                        "<h1>" + attribute.title + "</h1>" +
                        "<img src='" + attribute.image + "'>" +
                        "<p>" + attribute.text + "</p>" +
                        "<h2>" + attribute.month + "</h2>"
                        
                    );
                });       
            }); 
    });    
    }); 
    })