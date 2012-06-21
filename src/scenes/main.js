Crafty.scene("main", function() {

	var elements = [
        "src/entities/muncher.js",
        "src/entities/valuebox.js",
        "src/entities/additionbox.js",
        "src/interfaces/level.js",
        "src/interfaces/score.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
    Crafty.background('#333333');
		sc['muncher'] = new Muncher({ x: 20, y: 50});
		infc['level'] = new Level();
		infc['score'] = new Score();

    // Add each of the value boxes in a grid
    // grid is 60x62 like everything else
    new AdditionBox({ x: 20, y: 50, a: 4, b: 2 });
    new AdditionBox({ x: 80, y: 50, a: 7, b: 9 });
	});

});
