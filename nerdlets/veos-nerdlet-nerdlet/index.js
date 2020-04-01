import React from 'react'
import axios from 'axios'

import logo   from './img/logo.png'
import avatar from './img/avatar.png'

import on_off       from './img/on-off.png'
import inventario   from './img/inventario.png'
import dispensacion from './img/dispensacion.png'
import pagos        from './img/pagos.png'
import conectividad from './img/conectividad.png'

const delay = ms => new Promise(res => setTimeout(res, ms))
const T = 10

export default class VeosNerdletNerdletNerdlet extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      page: '',

      ONOFF: {
        load: true,
        on: 0,
        off: 0,
        fun: 0,
        on_p: 0,
        off_p: 0,
      },

      INVENTARIO: {
        load: true,
        coffe: 0,
        milk: 0,
        fun: 0,
      }
    }

    this.page = this.page.bind(this)
  }

  page (page) {
    if(page == 'ONOFF') this.ONOFF()
    if(page == 'INVENTARIO') this.INVENTARIO()
  }

  async ONOFF () {
    console.log('ONOFF .......................')

    // consume data
    let res, machines

    this.setState({ page: 'ONOFF' })

    let ONOFF = { ...this.state.ONOFF }
    ONOFF.load = true;
    this.setState({ ONOFF })

    // res = await axios.get('http://localhost:3000/api/unique-machines')
    // machines = res.data

    // res = await axios.get('http://localhost:3000/api/machines-state?machines=' + JSON.stringify(machines))
    // machines = res.data

    res = await axios.get('http://localhost:3000/api/machines-state')
    machines = res.data
    console.log('machines: ', machines)

    // parse data
    let on = 0, off = 0, fun = 0

    machines.forEach(el => {
      if(el.state == 'ON') on += 1
      else off += 1
    })

    ONOFF = {
      load: false,
      on: on,
      off: off,
      fun: (on / machines.length * 100).toFixed(2),
      on_p: (on / machines.length * 100).toFixed(2),
      off_p: (off / machines.length * 100).toFixed(2),
    }

    this.setState({ ONOFF })

    // timer
    await delay(T * 1000)
    if(this.state.page == 'ONOFF') this.ONOFF()
  }

  async INVENTARIO () {
    console.log('INVENTARIO .....................')

    // consume data
    let res, machines

    this.setState({ page: 'INVENTARIO' })

    let INVENTARIO = { ...this.state.INVENTARIO }
    INVENTARIO.load = true;
    this.setState({ INVENTARIO })

    res = await axios.get('http://localhost:3000/api/machine-inventory')
    machines = res.data
    console.log('machines: ', machines)

    // parse data
    let coffe = 0, milk = 0, fun = 0

    machines.forEach(el => {

      let inventory = JSON.parse(el.inventory.replace(/'/g, '"'))

      coffe += inventory.cafe
      milk += inventory.leche
    })

    coffe = coffe / machines.length
    milk = milk / machines.length
    // console.log('coffe: ', coffe)
    // console.log('milk: ', milk)

    INVENTARIO = {
      load: false,
      coffe: coffe.toFixed(2),
      milk: milk.toFixed(2),
      fun: ((coffe + milk) / 2 * 100).toFixed(2),
    }
    this.setState({ INVENTARIO })

    // timer
    await delay(T * 1000)
    if(this.state.page == 'INVENTARIO') this.INVENTARIO()
  }

  componentDidMount() {
    this.ONOFF()
  }

  render() {
    return(
      <div class="wrapper">
        <header class="header">

          <div class="logo">
            <img src={logo}/> veOS&nbsp;<span>Vending</span>
          </div>

          <div class="avatar">
            <img src={avatar}/>
          </div>

        </header>

        <section>

          <div class="box">

            <article class="service left" onClick={() => this.page('ONOFF')}>
              <img src={on_off} />
              <span class="tag">ON/OFF</span>
              <span class="line left"></span>
            </article>

            <article class="service top-left" onClick={() => this.page('INVENTARIO')}>
              <img src={inventario} />
              <span class="tag">INVENTARIO</span>
              <span class="line top"></span>
            </article>

            <article class="service top-right">
              <img src={dispensacion} />
              <span class="tag">DISPENCACIÓN</span>
              <span class="line top"></span>
            </article>

            <article class="service right">
              <img src={pagos} />
              <span class="tag">PAGOS</span>
              <span class="line right"></span>
            </article>

            <article class="service bottom-right">
              <img src={conectividad} />
              <span class="tag bottom">CONECTIVIDAD</span>
              <span class="line bottom"></span>
            </article>

            {
              (() => {
                switch(this.state.page) {
                  case 'ONOFF':
                    return (
                      <div class="details">
                        <header>
                          <img src={on_off}/>&nbsp; Maquinas On/Off &nbsp;
                          {this.state.ONOFF.load == true ? (<div class="lds-ring"><div></div><div></div><div></div><div></div></div>) : ('')}
                        </header>
                        <div class="sections">
                          <div class="sections-headers">
                            <p class="selected">Function {this.state.ONOFF.fun}%</p>
                            <p>Speed 100%</p>
                            <p>Consistency 100%</p>
                          </div>
                          <section class="sections-body">
                            <div class="element">
                              <span class="circle"></span>
                              <p><b>Maquinas On:</b>&nbsp;&nbsp;&nbsp;&nbsp;<small>{this.state.ONOFF.on}</small>&nbsp;&nbsp;&nbsp;&nbsp;<small>{this.state.ONOFF.on_p}%</small></p>
                            </div>
                            <div class="element">
                              <span class="circle CRITICAL"></span>
                              <p><b>Maquinas Off:</b>&nbsp;&nbsp;&nbsp;&nbsp;<small>{this.state.ONOFF.off}</small>&nbsp;&nbsp;&nbsp;&nbsp;<small>{this.state.ONOFF.off_p}%</small></p>
                            </div>
                          </section>
                        </div>
                      </div>
                    )
                    break;
                  case 'INVENTARIO':
                    return (
                      <div class="details">
                        <header>
                          <img src={inventario}/>&nbsp; Inventario
                          {this.state.INVENTARIO.load == true ? (<div class="lds-ring"><div></div><div></div><div></div><div></div></div>) : ('')}
                        </header>
                        <div class="sections">
                          <div class="sections-headers">
                            <p class="selected">Function {this.state.INVENTARIO.fun}%</p>
                            <p>Speed 100%</p>
                            <p>Consistency 100%</p>
                          </div>
                          <section class="sections-body">
                            <div class="element">
                              <span class="circle"></span>
                              <p><b>Café:</b>&nbsp;&nbsp;&nbsp;&nbsp;<small>{this.state.INVENTARIO.coffe}</small></p>
                            </div>
                            <div class="element">
                              <span class="circle"></span>
                              <p><b>Leche:</b>&nbsp;&nbsp;&nbsp;&nbsp;<small>{this.state.INVENTARIO.milk}</small></p>
                            </div>
                          </section>
                        </div>
                      </div>
                    )
                    break;
                  case 'DISPENCACIÓN':
                    return <h1>dispensacion!</h1>
                  break;
                  default: return null; break;
                }
              }).call(this)
            }

          </div>

        </section>
      </div>
    )
  }
}
