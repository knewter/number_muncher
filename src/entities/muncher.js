Muncher = BaseEntity.extend({
	defaults: {
        'steps' : { x: 60, y: 62 }
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", FourwayStepped, Keyboard, muncher, SpriteAnimation, Collision, WiredHitBox");

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
            .bind('KeyUp', function(e){
              // If the space key was pressed, then we chomped.
              if(e.key == Crafty.keys.SPACE){
                console.log('chomp!');
                var values = entity.hit('valuebox');
                _.each(values, function (value) {
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
