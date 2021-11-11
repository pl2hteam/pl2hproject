import React from 'react';
import './EasterEgg.scss';

const EasterEgg = () => {
  return (
    <div class="Character">
      <img class="Character_shadow pixelart" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png" alt="Shadow" />
      <img class="Character_spritesheet pixelart face-down" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png" alt="Character" />
    </div>
  );
};

export default EasterEgg;
