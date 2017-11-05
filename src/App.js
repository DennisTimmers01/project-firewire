import React, { Component } from 'react'
import nearestColor from 'nearest-color'
import { Header,
         Main,
         Footer,
         NearestColorForm } from './components'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      colorPalettes: [
        {
          name: 'first palette',
          colors: {
            DarkMuted: '#543829',
            DarkVibrant: '#581609',
            LightMuted: '#bf8b71',
            LightVibrant: '#f4b484',
            Muted: '#986b59',
            Vibrant: '#b66e55'
          }
        }, {
          name: 'second palette',
          colors: {
            DarkMuted: '#541829',
            DarkVibrant: '#581609',
            LightMuted: '#bf8b73',
            LightVibrant: '#f4c484',
            Muted: '#986b19',
            Vibrant: '#b65e44'
          }
        }, {
          name: 'third palette',
          colors: {
            DarkMuted: '#0C0C0A',
            DarkVibrant: '#1D1D1B',
            LightMuted: '#4A483C',
            LightVibrant: '#89695C',
            Muted: '#3B3330',
            Vibrant: '#4B4744'
          }
        }, {
          name: 'fourth palette',
          colors: {
            DarkMuted: '#ff6f69',
            DarkVibrant: '#1D1D1B',
            LightMuted: '#ffcc5c',
            LightVibrant: '#96ceb4',
            Muted: '#88d8b0',
            Vibrant: '#ffeead'
          }
        }, {
          name: 'supreme palette',
          colors: {
            DarkMuted: '#FE0000',
            DarkVibrant: '#FE0000',
            LightMuted: '#FB4544',
            LightVibrant: '#FE8687',
            Muted: '#FDC7C7',
            Vibrant: '#ECD8CF'
          }
        }
      ],
      vibrantColors: ['#b66e55', '#b65e44', '#4B4744', '#ffeead', '#ECD8CF'],
      nearestColorValue: '',
      nearestColorResult: '',
      finalPalette: {
        name: 'default',
        colors: {
          DarkMuted: '#fff',
          DarkVibrant: '#fff',
          LightMuted: '#fff',
          LightVibrant: '#fff',
          Muted: '#fff',
          Vibrant: '#fff'
        }
      }
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.getNearestColor = this.getNearestColor.bind(this)
  }

  getNearestColor (e) {
    e.preventDefault()
    const { vibrantColors, nearestColorValue } = this.state
    const newNearestColor = nearestColor.from(vibrantColors)(nearestColorValue)
    this.setState({
      nearestColorResult: newNearestColor,
      nearestColorValue: ''
    })
    setTimeout(() => { this.findColorPalette() }, 500)
  }

  findColorPalette () {
    const { nearestColorResult, colorPalettes } = this.state
    const findPalette = palette => palette.colors.Vibrant === nearestColorResult
    const correctPalette = colorPalettes.find(findPalette)
    this.setState({ finalPalette: correctPalette })
  }

  changeHandler ({ target }) {
    this.setState({ [target.name]: target.value })
  }

  render () {
    const { nearestColorValue, finalPalette } = this.state
    return (
      <div className='App'>
        <Header />
        <Main
          palette={finalPalette}
        />
        <NearestColorForm
          value={nearestColorValue}
          onChange={this.changeHandler}
          onSubmit={this.getNearestColor}
        />
        <Footer />
      </div>
    )
  }
}

export default App
