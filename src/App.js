import logo from './logo.png';
import './App.css';

import * as React from 'react';
import { topSteps } from './topSteps';
import { bottomSteps } from './bottomSteps';
import CustomStepper from './components/CustomStepper'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
  const buttons = [
    <Button key="one" 
            onClick={() => {
              document.getElementById("firstLevel").scrollIntoView();
            }}>
      Надземный мир
    </Button>,
    <Button key="two" 
            onClick={() => {
              document.getElementById("secondLevel").scrollIntoView();
            }}>
      Подземный мир
    </Button>,
  ];
  return (
    <div>
      <div className="block1">
        <div className='block-wrapper'>
          <img src={logo} className="App-logo" alt="logo" />
          <p className='gameDescription'>
            От базы в посёлке Уренгой отправляются два отряда арктических героев-изыскателей. 
            А вокруг окружает бескрайняя снежная лесотундра. 
            Им предстоит преодолеть безымянную реку, священную сопку ненцев, 
            подземный мир призрачных древних кочевников сихиртя, гиблое озеро и другие.
          
            И всё это для чего? Чтобы достичь Уренгойского вала, огненного дыхания земли.
          </p>
          <ButtonGroup size="large" aria-label="large button group">
            {buttons}
          </ButtonGroup>
        </div>
      </div>
      <div className='block2' id='firstLevel'>
        <div className='block-wrapper clearfix'>
          <Typography variant="h2" gutterBottom>
            Надземный мир
          </Typography>
          <CustomStepper steps={topSteps} />
        </div>
      </div>
      <div className='block3' id='secondLevel'>
        <div className='block-wrapper'>
          <Typography variant="h2" gutterBottom>
            Подземный мир
          </Typography>
          <CustomStepper steps={bottomSteps} />
        </div>
      </div>
      <div className='blockFooter'>
        <p>© Настольня игра "Герои Арктики", 2024</p>
        <p>Created by <a href="https://vk.com/snezhana_orlova87" target='_blank'>Snezhana Orlova</a></p>
        <p>Designed and produced by <a href="https://vk.com/nick_kovtunov" target='_blank'>Nick Kovtunov</a></p>
      </div>
    </div>
  );
}

export default App;