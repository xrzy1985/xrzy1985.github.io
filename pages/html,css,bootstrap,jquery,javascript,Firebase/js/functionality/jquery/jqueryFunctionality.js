
//
$("p[id$='_info']").css("margin-left", "15px");
$("p[id$='_info']").css("margin-top", "-15px");
$("p[id$='_info']").css("margin-bottom", "-15px");


// Soon as the document has been loaded fully
$(document).ready(function(){
  $("#page-top").ready(function(){
    $("section").hide();
    $("#top").show("slow");
    $("#home").show("slow");
  });
});

// When someone clicks on the Portfolio tab
$(document).click(function(){
  $("#port").click(function(){
    $("section").hide();
    $("#top").show("slow");
    $("#home").show("slow");
  });
});

// when the home tab is clicked
$(document).ready(function(){
  $("#navLink0").click(function(){
    $("section").hide();
    $("#top").hide("slow");
    $("#home").show("slow");
  });
});

//
$(document).ready(function(){
  $("#navLink1").click(function(){
    $("section").hide();
    $("#top").hide("slow");
    $("#aboutMe").show("slow");
  });
});

//
$(document).ready(function(){
  $("#navLink2").click(function(){
    $("section").hide();
    $("#top").hide("slow");
    $("#goals").show("slow");
  });
});

//
$(document).ready(function(){
  $("#navLink3").click(function(){
    $("section").hide();
    $("#top").hide("slow");
    $("#projects").show("slow");
  });
});

//
$(document).ready(function(){
  $("#navLink4").click(function(){
    $("section").hide();
    $("#top").hide("slow");
    $("#skills").show("slow");
  });
});

//
$(document).ready(function(){
  $("#navLink5").click(function(){
    $("section").hide();
    $("#top").hide("slow");
    $("#strengths").show("slow");
  });
});

//
$(document).ready(function(){
  $("#navLink6").click(function(){
    $("section").hide();
    $("#top").hide("slow");
    $("#skills").show("slow");
  });
});

//
$(document).ready(function(){
  $("#navLink7").click(function(){
    $("section").hide();
    $("#top").hide("slow");
    $("#work").show("slow");

  });
});
