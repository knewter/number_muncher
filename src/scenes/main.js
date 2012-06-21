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

    // Start grid at 20, 50
    var gridOriginX = 20;
    var gridOriginY = 50;

		sc['muncher'] = new Muncher({
      x: 20,
      y: 50,
      checker: function (val) {
        // Even numbers
        return (val %2) == 0;
      }
    });
		infc['level'] = new Level();
		infc['score'] = new Score();

    // Add each of the value boxes in a grid
    // grid is 60x62 like everything else
    var cellWidth = 60;
    var cellHeight = 62;
    var gridX = gridOriginX;
    var gridY = 50;
    // Add a grid of AdditionBoxes
    var numCols = 6
    var numRows = 5
    _.times(numCols, function () {
      gridX = gridOriginX;
      _.times(numRows, function () {
        // Generate two random numbers between 0 and 10
        var a = Math.floor(Math.random()*11);
        var b = Math.floor(Math.random()*11);
        new AdditionBox({ x: gridX, y: gridY, a: a, b: b });
        gridX = gridX + cellWidth;
      });
      gridY = gridY + cellHeight;
    });
	});

});
