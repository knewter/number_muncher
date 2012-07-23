define(
	[
        "src/entities/muncher.js",
        "src/entities/valuebox.js",
        "src/entities/additionbox.js",
        "src/entities/subtractionbox.js",
        "src/entities/multiplicationbox.js",
        "src/interfaces/levelmeter.js",
        "src/interfaces/instruction_meter.js",
        "src/interfaces/score.js",
        "src/interfaces/livesmeter.js"
	],
  function () {
    return {
      levelFactory: function (options) {
        // clear scene and interface
        sc = []; infc = [];   

        Crafty.background('#333333');

        // Start grid at 20, 50
        var gridOriginX = 20;
        var gridOriginY = 50;

        sc.complete = false;

        sc.checker = options.checker;
        sc.lives = 3;

        sc.valueboxes = { good: [], bad: [] };
        sc.muncher = new Muncher({
          x: 20,
          y: 50
        });
        sc.nextScene = options.nextScene;
        infc.level = new LevelMeter({ text: 'Level: ' + options.levelNumber });
        infc.instructions = new InstructionMeter({ text: options.instructions });
        infc.score = new Score();
        infc.lives = new LivesMeter({ value: 3 });

        // Add each of the value boxes in a grid
        // grid is 60x62 like everything else
        var cellWidth = 60;
        var cellHeight = 62;
        var gridX = gridOriginX;
        var gridY = 50;
        // Add a grid of AdditionBoxes
        var numCols = 6;
        var numRows = 5;
        _.times(numCols, function () {
          gridX = gridOriginX;
          _.times(numRows, function () {
            // Generate two random numbers between 0 and 10
            var a = Math.floor(Math.random()*11);
            var b = Math.floor(Math.random()*11);
            // Get a random valid boxtype
            var boxType = _.shuffle(options.boxTypes)[0];
            var valuebox = new boxType({ x: gridX, y: gridY, a: a, b: b });
            if(sc.checker(valuebox.getValue())){
              sc.valueboxes.good.push(valuebox);
            } else {
              sc.valueboxes.bad.push(valuebox);
            }
            gridX = gridX + cellWidth;
          });
          gridY = gridY + cellHeight;
        });

        // Each frame, check to see if any valueboxes are left that are correct.
        Crafty.e().bind("EnterFrame", function(e) {
          if(sc.complete){ return true; } // Don't check anymore if the level's been won
          if(sc.valueboxes.good.length === 0){
            sc.complete = true;
            alert('you win guy');
            Crafty.e().unbind("EnterFrame");
            Crafty.scene(sc.nextScene);
          }
          if(infc.lives.get('value') === 0){
            sc.complete = true;
            alert('you lost...');
          }
        });
      }
    }
});
