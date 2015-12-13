
//Scroll to top

	function scrollTo (Location){

		//alert("Legal!")

		$('html, body').animate({
			scrollTop: $("#" + Location).offset().top
		}, 1500);

	}

	var ativo = false;

	function abreMenu (){

		if(ativo == false){
			$(MenuMobile1).addClass("MenuMobileShow");
			ativo = true;
		}else{
			$(MenuMobile1).removeClass("MenuMobileShow");
			ativo = false;
		}
	}