//Codigo do menu deslize
$(function () {
	var menu_width = 300;
	var menu = $(".menu");
	var menu_open = $(".menu-open");
	var menu_close = $(".menu-close");
	var overlay = $(".overlay");
	var contentbat = $('.section');
	var batne = $('#batne');
	var top = $('.top');
	var news = $('.news');
    var body = $('.body');
	var main = $(".main");
	var divDisplay = $(".display");
	var footer = $(".footer")


//Quando encostar em alguma dessas variaveis ele volta o tamanho normal do "NEWS".


	body.hover(function(e){
		news.css({"transition" :  "0.5s",
			"padding-left" : "60px",
			"color": "black"});
	})
	main.hover(function(e){
		news.css({"transition" :  "0.5s",
			"padding-left" : "60px",
			"color": "black"});
	})
	
//Animação do "NEWS" do site.
batne.hover(function(e){
	news.css({"transition" :  "2.5s",
	  "padding-left" : "200px",
	  "color": "rgb(0, 126, 243)"})
}
)
top.hover(function(e){
	news.css({"transition" :  "2.5s",
	  "padding-left" : "200px",
	  "color": "rgb(0, 126, 243)"})
}
)
	contentbat.hover(function(e){
          news.css({"transition" :  "2.5s",
			"padding-left" : "200px",
			"color": "rgb(0, 126, 243)"})
	}
	)

   //O que acontece quando clicar no botão menu open.
	menu_open.hover(function (e) {
	       menu.css({"left": "0px"});
	      overlay.css({"opacity": "1", "width": "100%","background-size": "cover", "background-image": "url(Batgif.gif)"});
		 divDisplay.css({"display" : "none"});
		footer.css({"display": "none"});
		 


   //O que acontece quando clica no menu fechar.
	menu_close.click(function (e) {
	  menu.css({"left": "-" + menu_width + "px"});
	   overlay.css({"opacity": "0", "width": "0","background-size": "cover", "background-image": "url(Batgif.gif)"});
		 divDisplay.css({"display" : "block"});
		  footer.css({"display": "block"});
	});	
});
});

class animateVejamais2{
	constructor(){
	this.ppage = $(".content-vejamais2");
		var windowTop = window.pageYOffset;

		  this.Condition = () =>{
		   if (windowTop >= 6693) {
			this.ppage.css({"opacity" : "100%", "right" : "0px","transition" : "1.6s"});
		     }else if(windowTop <= 6693){
			  this.ppage.css({"opacity" : "1%", "right" : "-299px","transition" : "0s"});    
		}	
	}
}
}
class animateVejamais3{
	constructor(){
	this.p2page = $(".content-vejamais3");
		var windowTop = window.pageYOffset;

		  this.Condition = () =>{
		   if (windowTop >= 6693) {
			this.p2page.css({"opacity" : "100%", "left" : "0px","transition" : "1.6s"});
		     }else if(windowTop <= 6693){
			  this.p2page.css({"opacity" : "1%", "left" : "-299px","transition" : "0s"});    
		}	
		console.log(windowTop);
	}
}
}

window.addEventListener("scroll", function Top() {
	const animateScroll = [
	animateScrollVejamais2 = new animateVejamais2(),
	animateScrollVejamais3 = new animateVejamais3(),
];
	const animate = animateScroll.forEach(function(nome, indice, array){
		return nome.Condition()
	})
})


