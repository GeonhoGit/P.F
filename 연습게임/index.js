  // FPS
  const FPS = 60;
  const cycleDelay = Math.floor(1000 / FPS);
  var oldCycleTime = 0;
  var cycleCount = 0;
  var fps_rate = '...';
  
  // screen
  const WIDTH = 300, HALF_WIDTH = 150;
  const HEIGHT = 200, HALF_HEIGHT = 100;

  // game loop
  function gameLoop() {
    // init canvas
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
  
    // calculate FPS
    cycleCount++;
    if (cycleCount >= 60) cycleCount = 0;
    var startTime = Date.now();
    var cycleTime = startTime - oldCycleTime;
    oldCycleTime = startTime;
    if (cycleCount % 60 == 0) fps_rate = Math.floor(1000 / cycleTime);
    
    // resize canvas
    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight ;
    
    // update screen
    context.fillStyle = 'Black';
    context.fillRect(0, 0, canvas.width, canvas.height);    
    
    // infinite loop
    setTimeout(gameLoop, cycleDelay);
    
    // render FPS to screen
    context.fillStyle = 'White';
    context.font = '10px Monospace';
    context.fillText('FPS: ' + fps_rate, 0, 20);
    
  } window.onload = function() { gameLoop(); }
  