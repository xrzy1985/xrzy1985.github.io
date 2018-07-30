$(document).ready(function(){
  $("#page-top").ready(function(){
    $("section").hide();
	$("#top").slideDown(5000);
    $("#home").show(2000);
  });
});

$(document).click(function(){
  $("#shade_white_home").click(function(){
    $("section").hide();
    $("#home").show(2000);
	$("#top").fadeIn();
  });
});
/*
$(document).ready(function(){
  $("#navLink0").click(function(){
    $("#top").hide();
    $("section").hide();
    $("#home").show();
  });
});

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