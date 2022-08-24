function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
  };
  
  function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip if its not a transform
    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
  window.addEventListener('keydown', playSound);
  
  function drumPatternOne(){
    
    const kick = document.querySelector(`audio[data-key="${68}"]`);
    const snare = document.querySelector(`audio[data-key="${65}"]`);
    //kick.currentTime = 0; // rewind to the start
    setTimeout(function(){
      kick.play();
      const key = document.querySelector(`.key[data-key="${68}"]`);
      key.classList.add('playing');
      kick.currentTime = 0;
    }, 000);
    setTimeout(function(){
      snare.play();
      const key = document.querySelector(`.key[data-key="${65}"]`);
      key.classList.add('playing');
      snare.currentTime = 0;
    }, 500);
    setTimeout(function(){
      kick.play();
      const key = document.querySelector(`.key[data-key="${68}"]`);
      key.classList.add('playing');
      kick.currentTime = 0;
    }, 1300); 
    setTimeout(function(){
      snare.play();
      const key = document.querySelector(`.key[data-key="${65}"]`);
      key.classList.add('playing');
      snare.currentTime = 0;
    }, 1600);
  }
  
  function drumPatternTwo(){
    
    const boom = document.querySelector(`audio[data-key="${71}"]`);
    const tink = document.querySelector(`audio[data-key="${76}"]`);
    //kick.currentTime = 0; // rewind to the start
    setTimeout(function(){
      boom.play();
      const key = document.querySelector(`.key[data-key="${71}"]`);
      key.classList.add('playing');
      boom.currentTime = 0;
    }, 000);
    setTimeout(function(){
      tink.play();
      const key = document.querySelector(`.key[data-key="${76}"]`);
      key.classList.add('playing');
      tink.currentTime = 0;
    }, 250);
    setTimeout(function(){
      tink.play();
      const key = document.querySelector(`.key[data-key="${76}"]`);
      key.classList.add('playing');
      tink.currentTime = 0;
    }, 400);
    setTimeout(function(){
      boom.play();
      const key = document.querySelector(`.key[data-key="${71}"]`);
      key.classList.add('playing');
      boom.currentTime = 0;
    }, 800);
    setTimeout(function(){
      tink.play();
      const key = document.querySelector(`.key[data-key="${76}"]`);
      key.classList.add('playing');
      tink.currentTime = 0;
    }, 1400);
    setTimeout(function(){
      tink.play();
      const key = document.querySelector(`.key[data-key="${76}"]`);
      key.classList.add('playing');
      tink.currentTime = 0;
    }, 1950);
  }
  