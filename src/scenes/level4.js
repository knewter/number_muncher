Crafty.scene("level4", function() {
	require(
    [
      'src/scenes/level_base.js'
    ],
    function(LevelBase) {
      return LevelBase.levelFactory(
        {
          levelNumber: '4',
          instructions: 'Eat the even numbers',
          nextScene: 'level1',
          boxTypes: [MultiplicationBox],
          checker: function (val) {
            return (val % 2) === 0;
          }
        }
      );
    });
});
