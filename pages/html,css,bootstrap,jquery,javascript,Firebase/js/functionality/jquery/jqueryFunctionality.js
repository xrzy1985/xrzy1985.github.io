
//


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
    $("#top").hide();
    $("section").hide();
    $("#home").show();
  });
});
/*
$(document).ready(function(){
  $("#navLink1").click(function(){
    $("#top").hide();
    $("section").hide();
    $("#aboutMe").show("slow");
  });
});

$(document).ready(function(){
  $("#navLink2").click(function(){
    $("#top").hide("slow");
    $("section").hide();
    $("#goals").show("slow");
  });
});

$(document).ready(function(){
  $("#navLink3").click(function(){
    $("#top").hide("slow");
    $("section").hide();
    $("#projects").show("slow");
  });
});

$(document).ready(function(){
  $("#navLink4").click(function(){
    $("#top").hide("slow");
    $("section").hide();
    $("#skills").show("slow");
  });
});

$(document).ready(function(){
  $("#navLink5").click(function(){
    $("#top").hide("slow");
    $("section").hide();
    $("#strengths").show("slow");
  });
});

$(document).ready(function(){
  $("#navLink6").click(function(){
    $("#top").hide("slow");
    $("section").hide();
    $("#skills").show("slow");
  });
});

$(document).ready(function(){
  $("#navLink7").click(function(){
    $("#top").hide("slow");
    $("section").hide();
    $("#work").show("slow");

  });
});
*/
