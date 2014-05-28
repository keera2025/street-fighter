/* 
Project Name: Street Fighter;
Client: One Month
Author: Keerthana Suri
*/
$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
	}).mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
	}).mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '800px'}, 
			700, function () {
				$(this).hide();
				$(this).css('left', '-212px');
			}
		);
	}).mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
	});
	$(document).keydown(function(event) {
 		if(event.which == 88) {  /*Key code for x is 88 */
 			$('.ryu-cool').show();
 			$('.ryu-still').hide();
 			$('.ryu-throwing').hide();
 			$('.ryu-ready').hide();
 			$('.hadouken').hide();
		}
	}).keyup(function(event){
		if(event.which == 88) {
 			$('.ryu-cool').hide();
 			$('.ryu-throwing').hide();
 			$('.ryu-ready').hide();
 			$('.ryu-still').show();
 			$('.hadouken').hide();
		}
	});
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}