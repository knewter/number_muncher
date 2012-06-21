ValueBox = BaseEntity.extend({
	defaults: {
    },
    initialize: function(){
    	var model = this;
      console.log(model);
    	var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Collision, Text, valuebox, WiredHitBox");

    	entity
            .attr({x: model.get('x'), y: model.get('y'), w: 60, h: 62, z: 200})
            .text(this.getText())
            .textColor('#ffffff')
            .textFont({'size' : '12px', 'family': 'Arial'})
            .collision(new Crafty.polygon(
                [0,  0],
                [0,  60],
                [62, 60],
                [62, 0]
            ));

    	model.set({'entity' : entity });
    },
    getText: function () {
      return 'placeholder'
    }
});
