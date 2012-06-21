Muncher = BaseEntity.extend({
	defaults: {
        'steps' : { x: 60, y: 62 }
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", FourwayStepped, Keyboard, muncher, SpriteAnimation, Collision");

      Crafty.audio.add("bloop", "./web/sounds/bloop.wav");
      Crafty.audio.add("walk", "./web/sounds/walk.wav");
      Crafty.audio.add("wrong", "./web/sounds/wrong.wav");

    	entity
            .attr({x: this.get('x'), y: this.get('y'), z: 300})
            .collision(new Crafty.polygon(
                [0,  0],
                [0,  60],
                [62, 60],
                [62, 0]
            ))
            .fourwaystepped(model.get('steps'), {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
            .bind('EnterFrame', function(e){
            })
            .bind('Moved', function(e) {
                Crafty.audio.play('walk');
            })
            .bind('KeyUp', function(e){
              // If the space key was pressed, then we chomped.
              if(e.key == Crafty.keys.SPACE){
                console.log('chomp!');
                var values = entity.hit('valuebox');
                _.each(values, function (value) {
                  if(model.get('checker')(value.obj.model.getValue())){
                    Crafty.audio.play('bloop');
                  }else{
                    Crafty.audio.play('wrong');
                  };
                  value.obj.destroy();
                });
                return false;
              }
            })
            .setName('Muncher');

      entity.origin(entity.w/2, entity.h/2);

    	model.set({'entity' : entity });
    }
});
