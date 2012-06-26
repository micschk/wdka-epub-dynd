$(function() {
 // Handler for .ready() called.

 //$('.fullquote').css('display','none');

$('.slidescontainer').each(function(){
    $('.slideinfo',this).text('1/'+$("img.slides",this).attr('rel'));
    $('.prev',this).addClass('inactive');
});

$(".slidecontr").click(function(event){
    event.stopPropagation();
    if( $(this).hasClass('next') ){i = 1;} 
    else if( $(this).hasClass('prev') ) {i = -1;}
    else {return false;}
    curURL = $("img.slides",$(this).parent().parent()).attr('src');
    curimg = curURL.substr(curURL.length - 6, 2);
    //alert('curURL.substr(curURL.length - 6, 2): '+curURL.substr(curURL.length - 6, 2));
    nextimg = parseInt(curimg, 10) + i;
    //alert('nextimg = parseInt(curimg, 10)+i: '+(parseInt(curimg, 10)+i));
    slideSum = $("img.slides",$(this).parent().parent()).attr('rel');
    $('.prev,.next',$(this).parent().parent()).removeClass('inactive');
    if( nextimg>=slideSum ){$('.next',$(this).parent().parent()).addClass('inactive');}
    if( nextimg<=1 ){$('.prev',$(this).parent().parent()).addClass('inactive');}
    if( nextimg<=0 ){return false;}
    if( nextimg>slideSum ){return false;}
    $('.slideinfo',$(this).parent().parent()).text(nextimg+'/'+slideSum);
    if( nextimg<10 ) {nextimg = '0'+nextimg;}
    nextURL = curURL.replace(curimg+'.jpg', nextimg+'.jpg');
    //alert('nextURL = curURL.replace(curimg, nextimg): '+nextURL = curURL.replace(curimg, nextimg));
    $("img.slides",$(this).parent().parent()).attr('src', nextURL);
});



$('video').each(function(a){

	var vid = $(this)[0];
	vid.addEventListener('loadedmetadata', function() {
		vid.currentTime = $(this).parent().attr('rel');
	}, false);

	vid.addEventListener("timeupdate", function() {
		if (vid.currentTime >= $(this).parent().attr('alt')) {
			vid.currentTime = $(this).parent().attr('rel');
			$('.play').css('background-image','url(images/play.svg)'); 
			vid.pause();
		}
	}, false); 
      
	video1Play=false;

});

$('.reload').click(function() {
	vidcont = $(this).parent().parent();
	vid = $('video', vidcont)[0];
	vid.currentTime = $('video', vidcont).parent().attr('rel');
	return false;
});

$('.play').click(function() {
	vidcont = $(this).parent().parent();
	vid = $('video', vidcont)[0];
	if(video1Play == false){
		vid.play();
		video1Play=true;  
		$(this).css('background-image','url(images/pause.svg)');        
	}
	else{
		vid.pause();
		video1Play=false;
		$(this).css('background-image','url(images/play.svg)');  
	}
})

$(".innerlink").click(function(event){

    event.preventDefault();
    window.location('http://google.nl');
    // Ajax here

    return false; //for good measure
});

});