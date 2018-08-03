jQuery(document).ready(function(){
	jQuery("#page-top").ready(function(){	
		jQuery("#top").slideToggle(1000);
		jQuery("#home").show(1050);
  });
});

jQuery(document).ready(function(){
  jQuery("#shade_white_home").click(function(){
    jQuery("section").hide();
    jQuery("#top").show("slow");
    jQuery("#home").show("slow");
  });
});


jQuery(document).ready(function(){
  jQuery("#navLink0").click(function(){
    jQuery("#top").hide("slow");
    jQuery("section").hide();
    jQuery("#home").show("slow");
  });
});

jQuery(document).ready(function(){
  jQuery("#navLink1").click(function(){
    jQuery("#top").hide();
    jQuery("section").hide();
    jQuery("#aboutMe").show("slow");
  });
});

jQuery(document).ready(function(){
  jQuery("#navLink2").click(function(){
    jQuery("#top").hide();
    jQuery("section").hide();
    jQuery("#goals").show("slow");
  });
});

jQuery(document).ready(function(){
  jQuery("#navLink3").click(function(){
    jQuery("#top").hide();
    jQuery("section").hide();
    jQuery("#projects").show("slow");
  });
});

jQuery(document).ready(function(){
  jQuery("#navLink4").click(function(){
    jQuery("#top").hide();
    jQuery("section").hide();
    jQuery("#skills").show("slow");
  });
});

jQuery(document).ready(function(){
  jQuery("#navLink5").click(function(){
    jQuery("#top").hide();
    jQuery("section").hide();
    jQuery("#strengths").show("slow");
  });
});

jQuery(document).ready(function(){
  jQuery("#navLink6").click(function(){
    jQuery("#top").hide();
    jQuery("section").hide();
    jQuery("#skills").show("slow");
  });
});

jQuery(document).ready(function(){
  jQuery("#navLink7").click(function(){
    jQuery("#top").hide();
    jQuery("section").hide();
    jQuery("#work").show("slow");

  });
});
