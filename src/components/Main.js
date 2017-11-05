import React from 'react'

const Main = ({palette}) => (
  <main id='main-content'>
    <article>
      <p>Vul hieronder de desgewenste kleur in van je kledingstuk, en wij regelen de rest!</p>
    </article>
    <p>Hieronder zie je de herfstkleuren van 2017!</p>
    <ul className='color-palette'>
      <li style={{background: palette.colors.DarkMuted}}>{}</li>
      <li style={{background: palette.colors.DarkVibrant}}>{}</li>
      <li style={{background: palette.colors.LightMuted}}>{}</li>
      <li style={{background: palette.colors.LightVibrant}}>{}</li>
      <li style={{background: palette.colors.Muted}}>{}</li>
      <li style={{background: palette.colors.Vibrant}}>{}</li>
    </ul>

    <h4>Zie hier je zoekresultaten van de vorige keren dat je deze leipe software gebruikt hebt.</h4>
    <div id="history_table">
        <ul id="scans">
          <p>Ingescande kleuren</p>
          <li id="blue">Blauw</li>
          <li id="orange">Oranje</li>
          <li id="green">Groen</li>
        </ul>
        <ul id="match">
            <p>De passende matches.</p>
            <li id="maple">Autumn Maple</li>
            <li id="grenadine">Grenadine</li>
            <li id="spruce">Shaded Spruce</li>
        </ul>  
    </div>
  </main>
)

export default Main
