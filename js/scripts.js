// Intialize Lettering JS
$('h1').lettering();

// Intialize Backstretch
$.backstretch('http://wallpapercave.com/wp/jYqqRWg.jpg');

// Intialize Masonry
$('article').masonry({
	itemSelector: 'section',
	columnWidth: 200,
	gutter: 10,
    isFitWidth: true
	
});