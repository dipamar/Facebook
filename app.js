//at first load show only home page
$( document ).ready(function() {
	$("#gobackbtn").hide();
	$("#feedinfo").hide();
    $("#profileinfo").hide();
    $("#profileimages").hide();
    $("#home").show();
});// end of ready

//if profile btn clicked then show profile image and profile info
$( document ).ready(function() {
	$("#profilebtn").on("click",function(){
	$("#feedinfo").hide();
	$("#home").hide();
    $("#profileinfo").show();
    $("#profileimages").show();
    $("#gobackbtn").show();

        var myFacebookToken = $("#apiid").val(); //call to graph api token through ajax
        $.ajax('https://graph.facebook.com/me?fields=picture.width(100).height(100),id,name,birthday,about,hometown,gender,quotes,website,email,cover.width(815).height(320)&access_token='+myFacebookToken,{
        	//if call success then disply image and profile info
          success : function(response){
              console.log(response);
              console.log(typeof(response));
              // Cover photo
              $(".imgcover").attr("src", "" + response.cover.source + "");  
              
              // Profile photo
              $(".imgprofile").attr("src", "" + response.picture.data.url + "");
              
              //About me Section
              $("#fullname").text(response.name);
              $("#profileid").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
              $("#gender").text(response.gender);
              $("#birthday").text(response.birthday);
              $("#hometown").text(response.hometown.name); 
              $("#quotes").text(response.quotes);
          },
          //if error occurs then 
          error: function(jqXHR) {
          	alert(jqXHR.responseJSON.error.message + " Please refresh the page and Enter valid API token");
          },
      });//end of ajax call
	});//end of profilebtn
});//end of ready

// on click of feed btn show feed page and hide home and profile page
$( document ).ready(function() {
	$("#feedbtn").on("click",function(){
		$("#profileinfo").hide();
    	$("#profileimages").show();
    	$("#home").hide();
    	$("#feedinfo").show();
    	$("#gobackbtn").show();

    	var myFacebookToken = $("#apiid").val();//call graph api token via ajax 
    	$.ajax('https://graph.facebook.com/me?fields=posts{created_time,type,full_picture,story,message,source},picture.width(100).height(100),cover,likes&access_token='+myFacebookToken,{
    		//if success then display image and feeds
    		success : function(response){
    			console.log(response);
    			console.log(typeof(response));
    			// Cover photo
    			$(".imgcover").attr("src", "" + response.cover.source + "");
    			// Profile photo
    			$(".imgprofile").attr("src", "" + response.picture.data.url + "");

    			var postData = response.posts.data;

    			var feeds = $.map(postData, function(value, index) {
    			if (index <= 10) { //for 10 posts
    				return value;
    			}
    		});

    		//first Post
    		var feed1 = $.map(feeds, function(value, index) {
    			if (index == 0) {
    				return value;
    			}
    		});

    		// status
    		if (feed1[0].type == "status") {
    			$("#post1").html(response.name + " says : </br>" + feed1[0].message).css({
    				"background-color": "white",
    				"font-size": "200%"
    			});
    		}//status end

    		// photo
    		else if (feed1[0].type == "photo") {
    			$("#post1").text("" + feed1[0].story + "");
    			$(".photopost1").html("<img src=" + feed1[0].full_picture + " " + "class=" + " img-responsive" + ">");
    		}//photo end

    		// video
    		else if (feed1[0].type == "video") {
    			$("#post1").text("" + feed1[0].story + "");
    			$(".photopost1").html("<video controls> <source  src=" + "" + feed1[0].source + " " + "type= " + "video/mp4" + "></video>");
    		}//video end
    		//end of first post

    		    		//second Post
    		var feed2 = $.map(feeds, function(value, index) {
    			if (index == 1) {
    				return value;
    			}
    		});

    		// status
    		if (feed2[0].type == "status") {
    			$("#post2").html(response.name + " says : </br>" + feed2[0].message).css({
    				"background-color": "white",
    				"font-size": "200%"
    			});
    		}//status end

    		// photo
    		else if (feed2[0].type == "photo") {
    			$("#post2").text("" + feed2[0].story + "");
    			$(".photopost2").html("<img src=" + feed2[0].full_picture + " " + "class=" + " img-responsive" + ">");
    		}//photo end

    		// video
    		else if (feed2[0].type == "video") {
    			$("#post2").text("" + feed2[0].story + "");
    			$(".photopost2").html("<video controls> <source  src=" + "" + feed2[0].source + " " + "type= " + "video/mp4" + "></video>");
    		}//video end
    		//end of second post

    		    		//third Post
    		var feed3 = $.map(feeds, function(value, index) {
    			if (index == 2) {
    				return value;
    			}
    		});

    		// status
    		if (feed3[0].type == "status") {
    			$("#post3").html(response.name + " says : </br>" + feed3[0].message).css({
    				"background-color": "white",
    				"font-size": "200%"
    			});
    		}//status end

    		// photo
    		else if (feed3[0].type == "photo") {
    			$("#post3").text("" + feed3[0].story + "");
    			$(".photopost3").html("<img src=" + feed3[0].full_picture + " " + "class=" + " img-responsive" + ">");
    		}//photo end

    		// video
    		else if (feed3[0].type == "video") {
    			$("#post3").text("" + feed3[0].story + "");
    			$(".photopost3").html("<video controls> <source  src=" + "" + feed3[0].source + " " + "type= " + "video/mp4" + "></video>");
    		}//video end
    		//end of third post

    		    		//forth Post
    		var feed4 = $.map(feeds, function(value, index) {
    			if (index == 3) {
    				return value;
    			}
    		});

    		// status
    		if (feed4[0].type == "status") {
    			$("#post4").html(response.name + " says : </br>" + feed4[0].message).css({
    				"background-color": "white",
    				"font-size": "200%"
    			});
    		}//status end

    		// photo
    		else if (feed4[0].type == "photo") {
    			$("#post4").text("" + feed4[0].story + "");
    			$(".photopost4").html("<img src=" + feed4[0].full_picture + " " + "class=" + " img-responsive" + ">");
    		}//photo end

    		// video
    		else if (feed4[0].type == "video") {
    			$("#post4").text("" + feed4[0].story + "");
    			$(".photopost4").html("<video controls> <source  src=" + "" + feed4[0].source + " " + "type= " + "video/mp4" + "></video>");
    		}//video end
    		//end of forth post

    		    		//fifth Post
    		var feed5 = $.map(feeds, function(value, index) {
    			if (index == 4) {
    				return value;
    			}
    		});

    		// status
    		if (feed5[0].type == "status") {
    			$("#post5").html(response.name + " says : </br>" + feed5[0].message).css({
    				"background-color": "white",
    				"font-size": "200%"
    			});
    		}//status end

    		// photo
    		else if (feed5[0].type == "photo") {
    			$("#post5").text("" + feed5[0].story + "");
    			$(".photopost5").html("<img src=" + feed5[0].full_picture + " " + "class=" + " img-responsive" + ">");
    		}//photo end

    		// video
    		else if (feed5[0].type == "video") {
    			$("#post5").text("" + feed5[0].story + "");
    			$(".photopost5").html("<video controls> <source  src=" + "" + feed5[0].source + " " + "type= " + "video/mp4" + "></video>");
    		}//video end
    		//end of fifth post

    		    		//sixth Post
    		var feed6 = $.map(feeds, function(value, index) {
    			if (index == 5) {
    				return value;
    			}
    		});

    		// status
    		if (feed6[0].type == "status") {
    			$("#post6").html(response.name + " says : </br>" + feed6[0].message).css({
    				"background-color": "white",
    				"font-size": "200%"
    			});
    		}//status end

    		// photo
    		else if (feed6[0].type == "photo") {
    			$("#post6").text("" + feed1[0].story + "");
    			$(".photopost6").html("<img src=" + feed6[0].full_picture + " " + "class=" + " img-responsive" + ">");
    		}//photo end

    		// video
    		else if (feed6[0].type == "video") {
    			$("#post6").text("" + feed1[0].story + "");
    			$(".photopost6").html("<video controls> <source  src=" + "" + feed6[0].source + " " + "type= " + "video/mp4" + "></video>");
    		}//video end
    		//end of sixth post
    	},
    	//if error occurs then 
    	error: function(jqXHR) {
    		alert(jqXHR.responseJSON.error.message + "Please refresh the page and Enter valid API token");
    	},
    });//end of ajax
  });//end of feedbtn click
});// end of ready 
//if gobackbtn clicked then go to home page
$( document ).ready(function() {
	$("#gobackbtn").on("click",function(){
	$("#feedinfo").hide();
    $("#profileinfo").hide();
    $("#profileimages").hide();
    $("#gobackbtn").hide();
    $("#home").show();
	});// end of gobackbtn click
});//end of ready