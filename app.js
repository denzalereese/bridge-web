$(document).ready(function() {
  console.log("JS running");

  $('#social-media-form').submit(function(event) {
    event.preventDefault();
    /* Act on the event */
    $(".qr-code").remove();

    var twitterURL = "http://www.twitter.com/" + $('#twitter').val();
    var twitterImgHTML = '<img class="qr-code responsive-img" src="https://api.qrserver.com/v1/create-qr-code/?data=' + twitterURL+ '&amp;size=200x200" >';
    $("#twitter-container").append(twitterImgHTML);

    var linkedInURL = "http://www.linkedin.com/in/" + $('#linkedin').val();
    var linkedInImgHTML = '<img class="qr-code responsive-img" src="https://api.qrserver.com/v1/create-qr-code/?data=' + linkedInURL+ '&amp;size=200x200" >';
    $("#linkedin-container").append(linkedInImgHTML);

    var instagramURL = "http://www.instagram.com/" + $('#instagram').val();
    var instagramHTML = '<img class="qr-code responsive-img" src="https://api.qrserver.com/v1/create-qr-code/?data=' + instagramURL+ '&amp;size=200x200" >';
    $("#instagram-container").append(instagramHTML);

    var snapchatURL = "https://www.snapchat.com/add/" + $('#snapchat').val();
    var snapchatHTML = '<img class="qr-code responsive-img" src="https://api.qrserver.com/v1/create-qr-code/?data=' + snapchatURL+ '&amp;size=200x200" >';
    $("#snapchat-container").append(snapchatHTML);

    var facebookURL = "http://www.facebook.com/" + $('#facebook').val();
    var facebookHTML = '<img class="qr-code responsive-img" src="https://api.qrserver.com/v1/create-qr-code/?data=' + facebookURL+ '&amp;size=200x200" >';
    $("#facebook-container").append(facebookHTML);


    var bridgeInfo = twitterURL + ' ' + linkedInURL + ' ' + instagramURL + ' ' + snapchatURL + ' ' + facebookURL;
    var bridgeHTML = '<img class="qr-code responsive-img" src="https://api.qrserver.com/v1/create-qr-code/?data=' + bridgeInfo+ '&amp;size=200x200" >';
    $("#bridge-container").append(bridgeHTML);


  });

});


