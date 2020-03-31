import React from 'react';

import logo   from './img/logo.png'

import on_off       from './img/on-off.png'
import inventario   from './img/inventario.png'
import dispensacion from './img/dispensacion.png'
import pagos        from './img/pagos.png'
import conectividad from './img/conectividad.png'



export default class VeosNerdletNerdletNerdlet extends React.Component {
  render() {
    return(
      <div class="wrapper">
        <header class="header">

          <div class="logo">
            <img src={logo}/> veOS&nbsp;<span>Vending</span>
          </div>

          <div class="avatar">
            <img src=""/>
          </div>

        </header>

        <section>

          <div class="box">

            <article class="service left">
              <img src={on_off} />
              <span class="tag">ON/OFF</span>
              <span class="line left"></span>
            </article>

            <article class="service top-left">
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

            {/*<article class="service bottom-left">
              <img/>
              <span class="tag bottom">SSH</span>
              <span class="line bottom"></span>
            </article>*/}



            {/*<div className={!this.state.details ? '' : 'hide'}>

              <p class="text">Function<span>{this.state.functionality}%</span></p>

              <canvas class="canvas" id="js-function"></canvas>



              <p class="text">Speed<span>100%</span></p>

              <canvas class="canvas" id="js-speed"></canvas>



              <p class="text">Consistency<span>100%</span></p>

              <canvas class="canvas" id="js-consistency"></canvas>

            </div>



            <div className={this.state.details ? '' : 'hide'}>

              <div class="details">

                <span class="close" onClick={this.close}>X</span>

                <header>

                  <img src={this.state.currentImage} />&nbsp; {this.state.currentName}&nbsp;&nbsp; <span>{this.state.currentTag}</span>

                </header>

                <div class="sections">

                  <div class="sections-headers">

                    <p class="selected">Function {this.state.currentFun}%</p>

                    <p>Speed 100%</p>

                    <p>Consistency 100%</p>

                  </div>

                  <section class="sections-body">

                    {this.state.currentList.map((item, index) => (



                      <div class="element">

                        <span class="circle"></span>

                        {(() => {

                          switch (item.state) {

                            case 0:  return <span class="circle CRITICAL"></span>;

                            case 1:  return <span class="circle WARNING"></span>;

                            case 2:  return <span class="circle"></span>;

                          }

                        })()}

                        <p><b>{item.name}</b>:&nbsp;&nbsp;<small>{item.msg}</small></p>

                      </div>



                    ))}

                  </section>

                </div>

              </div>

            </div>*/}



          </div>

        </section>

      </div>
    )
  }
}
