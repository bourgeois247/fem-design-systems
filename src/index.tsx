import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './utils';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Button';

const App = () => 
  <Fragment>
    <div style={{marginBottom: "1em"}}>
      <PrimaryButton>Prolific In The DMV</PrimaryButton>
      <SecondaryButton>Prolific In The DMV</SecondaryButton>
      <TertiaryButton>Prolific In The DMV</TertiaryButton>
    </div>
    <div>
      <PrimaryButton modifiers={['small']}>Prolific In The DMV</PrimaryButton>
      <PrimaryButton modifiers={['large']}>Prolific In The DMV</PrimaryButton>
    </div>
    
    <GlobalStyles />
  </Fragment>
;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
