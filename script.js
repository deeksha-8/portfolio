const burst = new mojs.Burst({
    radius: { 0: 360 },
      count: 20,
    children: {
      shape: 'cross',
      stroke: 'white',
      strokeWidth: { 6 : 0},
          angle: { 360 : 0},
      radius: { 30 : 5 },
      duration: 3000
    }
  });
  
  const timeline = new mojs.Timeline({
      repeat: 999
  })
      .add(burst)
      .play();

      class Star extends mojs.CustomShape {
        getShape() { return '<path d="M44.6 0L34.43 20.433 12 23.74l16.25 15.824L24.46 62 44.5 51.383 64.538 62l-3.79-22.436L77 23.74l-22.43-3.307L44.6 0z"/>'; }
        getLength() { return 65 }
      }
      mojs.addShape('star', Star);
      
      var attrs = {
        shape:  'star',
        radius: 'rand(12,10)',
        fill: '#ffffff',
        opacity: {'rand(0.2,0.4)' : 'rand(0.5,0.8)'},
        top: 'rand(1%, 99%)',
        left: 'rand(1%, 99%)',
        isShowStart:  true,
        delay: 'rand(500, 3000)',
        duration: 'rand(500, 3000)',
        repeat: 999,
        isYoyo: true
      };
      
      // Slow
      for(let i=0; i<75; i++) {
        new mojs.Shape(attrs).play();
      }
      
      // Fast
      attrs.opacity  = {'rand(0.2,0.4)' : 'rand(0.6,0.8)'};
      attrs.duration = 'rand(1000, 2000)';
      
      for(let i=0; i<25; i++) {
        new mojs.Shape(attrs).play();
      }