// CART NUMBER ADD OR SUB

var currentProductNum = 1;
var currentPrice = 120;

function subProduct() {
	// let test = document.getElementById('demo')
	if (currentProductNum > 1){
		currentProductNum = currentProductNum - 1;

		currentPrice = currentPrice - 120;

		document.getElementById('demo').innerHTML = currentProductNum;

		event.preventDefault()

		document.getElementById('demo2').innerHTML = currentProductNum;
		
		event.preventDefault()

		document.getElementById('total-price').innerHTML = "Rs." + currentPrice;
	
		event.preventDefault()

		document.getElementById('checkout-total-price').innerHTML = "Rs." + currentPrice;
	
		event.preventDefault()
	}
	else{
		document.getElementById('demo').innerHTML = 1;

		event.preventDefault()

		document.getElementById('demo2').innerHTML = 1;
		
		event.preventDefault()

		document.getElementById('total-price').innerHTML = "Rs.120";
	
		event.preventDefault()

		document.getElementById('checkout-total-price').innerHTML = "Rs.120";
	
		event.preventDefault()
	}
}

function addProduct() {
	currentProductNum = currentProductNum + 1;

	currentPrice = currentPrice + 120;

	document.getElementById('demo').innerHTML = currentProductNum;

	event.preventDefault()

	document.getElementById('demo2').innerHTML = currentProductNum;
	
	event.preventDefault()

	document.getElementById('total-price').innerHTML = "Rs." + currentPrice;
	
	event.preventDefault()

	document.getElementById('checkout-total-price').innerHTML = "Rs." + currentPrice;
	
	event.preventDefault()
}

function delProdInCart() {
	document.getElementById('del-this-product').style.display = 'none';
    event.preventDefault()

    document.getElementById('del-discount-message').style.display = 'none';
    event.preventDefault()

    document.getElementById('del-replacement-message').style.display = 'none';
    event.preventDefault()

    document.getElementById('del-this-button').style.display = 'none';
    event.preventDefault()

    document.getElementById('cart-empty-message').style.display = 'block';
    event.preventDefault()

    document.getElementById('demo').innerHTML = 1;
	event.preventDefault()

	document.getElementById('demo2').innerHTML = 1;
	event.preventDefault()

	document.getElementById('total-price').innerHTML = "Rs.120";
	event.preventDefault()

	document.getElementById('checkout-total-price').innerHTML = "Rs.120";
	event.preventDefault()

}
// MORE INFO

function moreInfo1(){

	if (document.getElementById('moreinfoone').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('moreinfoone').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('more-info-icon').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('moreinfoone').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('more-info-icon').style.rotate = '180deg';
    }
}


function moreInfo2(){

	if (document.getElementById('moreinfotwo').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('moreinfotwo').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('more-info-icon-two').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('moreinfotwo').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('more-info-icon-two').style.rotate = '180deg';
    }
}


function moreInfo3(){

	if (document.getElementById('moreinfothree').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('moreinfothree').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('more-info-icon-three').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('moreinfothree').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('more-info-icon-three').style.rotate = '180deg';
    }
}


function moreInfo4(){

	if (document.getElementById('moreinfofour').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('moreinfofour').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('more-info-icon-four').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('moreinfofour').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('more-info-icon-four').style.rotate = '180deg';
    }
}

function moreInfo5(){

	if (document.getElementById('moreinfofive').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('moreinfofive').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('more-info-icon-five').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('moreinfofive').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('more-info-icon-five').style.rotate = '180deg';
    }
}


function moreInfo6(){

	if (document.getElementById('moreinfosix').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('moreinfosix').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('more-info-icon-six').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('moreinfosix').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('more-info-icon-six').style.rotate = '180deg';
    }
}


function moreInfo7(){

	if (document.getElementById('moreinfoseven').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('moreinfoseven').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('more-info-icon-seven').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('moreinfoseven').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('more-info-icon-seven').style.rotate = '180deg';
    }
}


function moreInfo8(){

	if (document.getElementById('moreinfoeight').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('moreinfoeight').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('more-info-icon-eight').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('moreinfoeight').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('more-info-icon-eight').style.rotate = '180deg';
    }
}

function openNav() {
	document.getElementById("mySidenav").style.width = "388px";
	event.preventDefault()
	document.getElementById("overlay").style.display = "block";
	event.preventDefault()
	document.getElementById("body-container").style.overflow = "hidden";
	event.preventDefault()
}

function closeNav() {
  	document.getElementById("mySidenav").style.width = "0";
  	document.getElementById("overlay").style.display = "none";
  	document.getElementById("body-container").style.overflow = "auto";

  	document.body.style.backgroundColor = "#EDEBE6";
  	event.preventDefault()
}

function openLeftMenuNav() {
	document.getElementById("myLeftnav").style.width = "425px";
	// document.getElementById("overlay").style.display = "block";
	// document.getElementById("body-container").style.overflow = "hidden";
	event.preventDefault();
}

function menuCloseNav() {
  	document.getElementById("myLeftnav").style.width = "0";
  	// document.getElementById("overlay").style.display = "none";
  	// document.getElementById("body-container").style.overflow = "auto";

  	document.body.style.backgroundColor = "#EDEBE6";
  	event.preventDefault()
}

function addToCart() {
	document.getElementById('del-this-product').style.display = 'block';
    event.preventDefault()

    document.getElementById('del-discount-message').style.display = 'block';
    event.preventDefault()

    document.getElementById('cart-empty-message').style.display = 'none';
    event.preventDefault()

    document.getElementById('del-replacement-message').style.display = 'block';
    event.preventDefault()

    document.getElementById('del-this-button').style.display = 'block';
    event.preventDefault()
}

// faq section
function faq1(){

	if (document.getElementById('faq-ans-1').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('faq-ans-1').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('faq-ans-arrow-1').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('faq-ans-1').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('faq-ans-arrow-1').style.rotate = '180deg';
    }
}

function faq2(){

	if (document.getElementById('faq-ans-2').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('faq-ans-2').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('faq-ans-arrow-2').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('faq-ans-2').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('faq-ans-arrow-2').style.rotate = '180deg';
    }
}

function faq3(){

	if (document.getElementById('faq-ans-3').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('faq-ans-3').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('faq-ans-arrow-3').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('faq-ans-3').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('faq-ans-arrow-3').style.rotate = '180deg';
    }
}

function faq4(){

	if (document.getElementById('faq-ans-4').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('faq-ans-4').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('faq-ans-arrow-4').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('faq-ans-4').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('faq-ans-arrow-4').style.rotate = '180deg';
    }
}

function faq5(){

	if (document.getElementById('faq-ans-5').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('faq-ans-5').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('faq-ans-arrow-5').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('faq-ans-5').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('faq-ans-arrow-5').style.rotate = '180deg';
    }
}

function faq6(){

	if (document.getElementById('faq-ans-6').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('faq-ans-6').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('faq-ans-arrow-6').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('faq-ans-6').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('faq-ans-arrow-6').style.rotate = '180deg';
    }
}

function faq7(){

	if (document.getElementById('faq-ans-7').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('faq-ans-7').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('faq-ans-arrow-7').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('faq-ans-7').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('faq-ans-arrow-7').style.rotate = '180deg';
    }
}

function faq8(){

	if (document.getElementById('faq-ans-8').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('faq-ans-8').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('faq-ans-arrow-8').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('faq-ans-8').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('faq-ans-arrow-8').style.rotate = '180deg';
    }
}

function faq9(){

	if (document.getElementById('faq-ans-9').style.display == 'block') {
      // moreInfo is visible. hide it
      	document.getElementById('faq-ans-9').style.display = 'none';
      	event.preventDefault()
      // change icon style to down
      	document.getElementById('faq-ans-arrow-9').style.rotate = '0deg';
    }
    else {
      // moreInfo is hidden. show it
      	document.getElementById('faq-ans-9').style.display = 'block';
      	event.preventDefault()
      // change icon style to up
      	document.getElementById('faq-ans-arrow-9').style.rotate = '180deg';
    }
}

function submitContactForm(){
	var name = document.forms["validate-contact-form"]["name"].value;
	var email = document.forms["validate-contact-form"]["email"].value;
	var number = document.forms["validate-contact-form"]["number"].value;
	var comment = document.forms["validate-contact-form"]["comment"].value;

	if (name =="") {
		document.getElementById('alert-message-name').style.display = 'block';
      	event.preventDefault()
      	document.getElementById('alert-message-name-input').style.background = '#C6C3BA';
      	event.preventDefault()
	}

	if (name !==""){
		document.getElementById('alert-message-name').style.display = 'none';
      	document.getElementById('alert-message-name-input').style.background = 'transparent';      
	}

	if (email =="") {
		document.getElementById('alert-message-address').style.display = 'block';
      	event.preventDefault()
      	document.getElementById('alert-message-address-input').style.background = '#C6C3BA';
      	event.preventDefault()      	
	}

	if (email !=="") {
		document.getElementById('alert-message-address').style.display = 'none';
      	document.getElementById('alert-message-address-input').style.background = 'transparent';  	
	}

	if (number =="") {
		document.getElementById('alert-message-phnum').style.display = 'block';
      	event.preventDefault()
      	document.getElementById('alert-message-phnum-input').style.background = '#C6C3BA';
      	event.preventDefault()      	
	}

	if (number !=="") {
		document.getElementById('alert-message-phnum').style.display = 'none';
      	document.getElementById('alert-message-phnum-input').style.background = 'transparent';   	
	}

	if (comment =="") {
		document.getElementById('alert-message-comment').style.display = 'block';
      	event.preventDefault()
      	document.getElementById('alert-message-comment-input').style.background = '#C6C3BA';
      	event.preventDefault()      	
	}

	if (comment !=="") {
		document.getElementById('alert-message-comment').style.display = 'none';
      	document.getElementById('alert-message-comment-input').style.background = 'transparent';    	
	}
}

function submitLogInForm(){
	var email = document.forms["validate-log-in-form"]["log-in-email"].value;
	var password = document.forms["validate-log-in-form"]["log-in-password"].value;
	
	if (email =="") {
		document.getElementById('alert-login-address').style.display = 'block';
      	event.preventDefault()
      	document.getElementById('alert-login-email-input').style.background = '#C6C3BA';
      	event.preventDefault()      	
	}

	if (email !=="") {
		document.getElementById('alert-login-address').style.display = 'none';
      	document.getElementById('alert-login-email-input').style.background = 'transparent';   	
	}

	if (password =="") {
		document.getElementById('alert-login-password').style.display = 'block';
      	event.preventDefault()
      	document.getElementById('alert-login-password-input').style.background = '#C6C3BA';
      	event.preventDefault()      	
	}

	if (password !=="") {
		document.getElementById('alert-login-password').style.display = 'none';
      	document.getElementById('alert-login-password-input').style.background = 'transparent';    	
	}
}

function submitAddressDetailsForm(){
	var email = document.forms["validate-address-details-form"]["add-email"].value;
	var number = document.forms["validate-address-details-form"]["add-phnum"].value;
	var fname = document.forms["validate-address-details-form"]["fname"].value;
	var lname = document.forms["validate-address-details-form"]["lname"].value;
	var city = document.forms["validate-address-details-form"]["city"].value;
	var street = document.forms["validate-address-details-form"]["street"].value;

	// var password = document.forms["validate-log-in-form"]["log-in-password"].value;
	
	if (email =="") {
		document.getElementById('alert-add-details-email').style.display = 'block';
      	event.preventDefault()
      	document.getElementById('alert-add-details-email-input').style.background = '#C6C3BA';
      	event.preventDefault()      	
	}

	if (email !=="") {
		document.getElementById('alert-add-details-email').style.display = 'none';
      	document.getElementById('alert-add-details-email-input').style.background = 'transparent';      	
	}

	if (number =="") {
		document.getElementById('alert-add-details-number').style.display = 'block';
      	event.preventDefault()
      	document.getElementById('alert-add-details-phnum-input').style.background = '#C6C3BA';
      	event.preventDefault()      	
	}

	if (number !=="") {
		document.getElementById('alert-add-details-number').style.display = 'none';
      	document.getElementById('alert-add-details-phnum-input').style.background = 'transparent';     	
	}

	if (fname =="") {
		document.getElementById('alert-add-details-name').style.display = 'block';
      	event.preventDefault()
      	document.getElementById('alert-add-details-fname-input').style.background = '#C6C3BA';
      	event.preventDefault()
	}

	if (fname !=="") {
		document.getElementById('alert-add-details-name').style.display = 'block';
      	document.getElementById('alert-add-details-fname-input').style.background = 'transparent';
	}

	if (lname =="") {
		document.getElementById('alert-add-details-name').style.display = 'block';
      	event.preventDefault()
      	document.getElementById('alert-add-details-lname-input').style.background = '#C6C3BA';
      	event.preventDefault()
	}

	if (lname !=="") {
		document.getElementById('alert-add-details-name').style.display = 'block';
      	document.getElementById('alert-add-details-lname-input').style.background = 'transparent';
	}

	if (fname !=="" && lname !=="") {
		document.getElementById('alert-add-details-name').style.display = 'none';
      	document.getElementById('alert-add-details-fname-input').style.background = 'transparent';
      	document.getElementById('alert-add-details-name').style.display = 'none';
      	document.getElementById('alert-add-details-lname-input').style.background = 'transparent';
	}

	if (city =="") {
		document.getElementById('alert-add-details-city').style.display = 'block';
      	event.preventDefault()
      	document.getElementById('alert-add-details-city-input').style.background = '#C6C3BA';
      	event.preventDefault()
	}

	if (city !=="" && (city !== "Kathmandu" || city !== "kathmandu" || city !== "Pokhara" || city !== "pokhara")) {
		document.getElementById('alert-add-details-city-2').style.display = 'block';
      	document.getElementById('alert-add-details-city').style.display = 'none';
      	document.getElementById('alert-add-details-city-input').style.background = '#C6C3BA';
	}

	if (city !=="" && (city == "Kathmandu" || city == "kathmandu" || city == "Pokhara" || city == "pokhara")) {
		document.getElementById('alert-add-details-city-2').style.display = 'none';
		document.getElementById('alert-add-details-city').style.display = 'none';
      	document.getElementById('alert-add-details-city-input').style.background = 'transparent';
	}

	if (street =="") {
		document.getElementById('alert-add-details-street').style.display = 'block';
      	event.preventDefault()
      	document.getElementById('alert-add-details-street-input').style.background = '#C6C3BA';
      	event.preventDefault()
	}

	if (street !=="") {
		document.getElementById('alert-add-details-street').style.display = 'none';
      	document.getElementById('alert-add-details-street-input').style.background = 'transparent';
	}
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    event.preventDefault();
  } else {
    x.className = "topnav";
    event.preventDefault();
  }
}