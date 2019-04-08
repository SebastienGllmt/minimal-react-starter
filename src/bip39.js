import React from 'react';
import { validateMnemonic, generateMnemonic, setDefaultWordlist } from 'bip39'

const generatedEnglish = generateMnemonic();
const validateEnglish = validateMnemonic(generatedEnglish);

let generatedSpanish;
let validateSpanish;
try {
  // expect this to fail when non-English is removed from webpack config
  setDefaultWordlist('spanish');

  generatedSpanish = generateMnemonic();
  validateSpanish = validateMnemonic(generatedSpanish);
} catch(err) {
  generatedSpanish = 'Spanish not found in bundle';
  validateSpanish = false;
}

class Bip39 extends React.Component {

  render() {
    return (
      <div>
        <h2>To enable/disable from your bundle, modify your webpack config and restart the server</h2>
        <p>{ generatedEnglish.toString() }</p>
        <p>Valid: { validateEnglish.toString() }</p>
        <p>{ generatedSpanish.toString() }</p>
        <p>Valid: { validateSpanish.toString() }</p>
      </div>
    );
  }
}
export default Bip39;
