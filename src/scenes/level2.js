Crafty.scene("level2", function() {
	require(
    [
      'src/scenes/level_base.js'
    ],
    function(LevelBase) {
      return LevelBase.levelFactory(
        {
          levelNumber: '2',
          instructions: 'Eat the odd numbers',
          nextScene: 'level3',
          boxTypes: [AdditionBox, SubtractionBox],
          checker: function (val) {
            return (val % 2) === 1;
          }
        }
      );
    });
});
