Crafty.scene("level3", function() {
	require(
    [
      'src/scenes/level_base.js'
    ],
    function(LevelBase) {
      return LevelBase.levelFactory(
        {
          levelNumber: '3',
          instructions: 'Eat the numbers greater than 5',
          nextScene: 'level1',
          checker: function (val) {
            return val > 5;
          }
        }
      );
    });
});
