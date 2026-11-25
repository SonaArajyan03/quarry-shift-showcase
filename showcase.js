'use strict';
const phases={
  mine:{label:'Front contact',title:'The cutter does the work.',copy:'Tap a rock to drive into cutting contact, or steer manually. Only the front drum damages the seam. The lower face breaks first, making the action easy to follow.',intention:"Connect the player's input to a physical, visible result."},
  carry:{label:'Visible transfer',title:'Follow the ore into the skip.',copy:'Broken units pass through the front intake, ride the side conveyor and land in the rear cargo box. The inventory and the visible pile follow the same real load.',intention:'Make capacity understandable through moving material and a growing pile.'},
  refine:{label:'A change of state',title:'A full load becomes the next task.',copy:'Drive to the refinery, stop and tip the cargo. Ore is processed into finished bars over time, then collected from a separate pickup pad. Raw ore cannot be sold directly.',intention:'Turn a production step into a destination and a visible transformation.'},
  sell:{label:'Earned reward',title:'Deliver bars. Receive cash.',copy:'Sell finished bars at the depot. Payment follows the actual bar transfer, so the reward can be traced all the way back to the rock that produced it.',intention:'Keep the connection between effort, inventory and income easy to read.'},
  upgrade:{label:'Reinvestment',title:'The next haul changes.',copy:'Spend earned cash at the workshop. A paid cutter upgrade changes the machine silhouette and unlocks harder ore; cargo and engine upgrades change travel decisions.',intention:'Let an upgrade change both the visible machine and the way the loop plays.'}
};
for(const button of document.querySelectorAll('[data-phase]'))button.addEventListener('click',()=>{const phase=phases[button.dataset.phase];for(const other of document.querySelectorAll('[data-phase]'))other.setAttribute('aria-pressed',String(other===button));for(const key of ['label','title','copy','intention'])document.getElementById('phase-'+key).textContent=phase[key];});
let activeMode='';
for(const button of document.querySelectorAll('[data-launch]'))button.addEventListener('click',()=>{
  const mode=button.dataset.launch,frame=document.getElementById('game-frame');
  if(mode!==activeMode){frame.src=(mode==='demo'?'play/demo.html':'play/index.html')+'?lang=en';activeMode=mode;}
  document.getElementById('game-placeholder').hidden=true;frame.hidden=false;
  document.getElementById('play-status').textContent=mode==='demo'?'Guided demo loaded. Choose Play inside the game to take control.':'Manual play loaded. Tap a front rock to start cutting.';
  document.getElementById('open-game').href=(mode==='demo'?'play/demo.html':'play/index.html')+'?lang=en';
  for(const other of document.querySelectorAll('.play-options [data-launch]'))other.setAttribute('aria-pressed',String(other.dataset.launch===mode));
});
