import React, {Component} from 'react';
import classNames from 'classnames';
import * as PIXI from 'pixi.js';
import Matter from 'matter-js';
import './SiteBackground.css';

const Engine = Matter.Engine,
  Common = Matter.Common,
  Events = Matter.Events,
  Render = Matter.Render,
  World = Matter.World,
  Body = Matter.Body,
  Composites = Matter.Composites,
  Bodies = Matter.Bodies;

class SiteBackground extends Component {

  props: {
    className?: string
  };

  liquidContainer;
  renderer;

  // boxA = Bodies.rectangle(400, 200, 80, 80);
  // boxB = Bodies.rectangle(450, 100, 80, 80);
  circles = this.createCircles();
  leftWall = Bodies.rectangle(0 - 20, (window.innerHeight / 2), 40, window.innerHeight, {isStatic: true});
  rightWall = Bodies.rectangle(window.innerWidth + 20, (window.innerHeight / 2), 40, window.innerHeight, {isStatic: true});
  ground = Bodies.rectangle((4000 / 4), (window.innerHeight - 10), 4000, 30, {isStatic: true});
  engineOpts = {
    hasBounds: true,
    height: window.innerHeight,
    width: window.innerWidth,
    background: 'rgba(255,255,255,0)',
    style: {
      background: 'rgba(255,255,255,0)',
    }
  };
  engine;
  waterParticles;
  waterSprites = [];
  waterSpriteContainer;
  app;
  sleeping = false;

  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.handleResize = this.handleResize.bind(this);
    window.addEventListener('resize', this.handleResize);
  }

  createCircles() {
    let circles = [];
    let xOffset = 20;
    let yOffset = 10;
    for (let i = 0; i < 500; i++) {
      circles.push(Bodies.circle(xOffset, yOffset, 5));
      if ((xOffset + 20) < (window.innerWidth - 5)) {
        xOffset += 20;
      } else {
        xOffset = 20;
        yOffset += 20;
      }
    }
    return circles;
  }

  newCreateCircles() {
    const particleWidth = 3;
    console.log('engine?', this.engine);
    const numParticles = Math.floor((window.innerWidth) / (particleWidth + 2));

    const particleOpts = {
      restitution: 0.7,
      friction: 0.2,
      frictionAir: 0,
      density: 0.01,
      render: {
        fillStyle: '#fff',
        lineWidth: 0,
        strokeStyle: '#fff'
      }
    };

    let count = 0;
    this.waterSpriteContainer = new PIXI.Container();
    return Composites.stack(0, window.innerHeight - 500, numParticles, 3, 0, 0, (x, y, column, row) => {
      let sprite = new PIXI.Graphics();
      sprite.beginFill(0xff0000);
      sprite.drawCircle(0, 0, particleWidth); // cx, cy, radius, startAngle, endAngle
      sprite.position = {x: x, y: y};
      this.waterSpriteContainer.addChild(sprite);
      this.waterSprites.push(sprite);
      count++;
      return Bodies.circle(x, y, particleWidth, particleOpts, 100);
    });

  }

  initLiquidStuff(elem) {
    this.liquidContainer = elem;
    this.engine = Engine.create();
    this.engine.enableSleeping = true;

    this.app = new PIXI.Application(
      window.innerWidth,
      window.innerHeight,
      {
        // view: this.pixiContainer,
        antialias: false,
        transparent: true,
        resolution: 1
      });
    this.app.renderer.autoResize = true;
    this.app.renderer.view.style.position = "absolute";
    this.app.renderer.view.style.display = "block";
    this.liquidContainer.appendChild(this.app.renderer.view);

    // this.renderer = Render.create({
    //   element: this.liquidContainer,
    //   engine: this.engine,
    //   options: this.engineOpts
    // });
    // this.renderer = Render.create({
    //   element: this.liquidContainer,
    //   engine: this.engine,
    //   options: this.engineOpts
    // });
    this.waterParticles = this.newCreateCircles();
    this.app.stage.addChild(this.waterSpriteContainer);
    World.add(this.engine.world, [this.leftWall, this.rightWall, this.ground, this.waterParticles]);
    // run the engine
    Engine.run(this.engine);
    // run the renderer
    // Render.run(this.renderer);
    console.log('initiated liquid stuff');

    // Events.on(this.engine, 'beforeUpdate', (event) => {
    //   const bodies = this.waterParticles.bodies;
    //   for (let i = 0; i < bodies.length; i++) {
    //     const body = bodies[i];
    //
    //     if (!body.isStatic) {
    //       Body.translate(body, {
    //         x: Common.random(-1, 1) * 0.25,
    //         y: Common.random(-1, 1) * 0.25
    //       });
    //     }
    //   }
    // });

    setTimeout(() => {
      console.log('whats on this app?', this.app, this.waterParticles);
    }, 4000);

    this.animate();
    // function animate() {
    //   requestAnimationFrame(animate);
    //
    //
    //   // render the container
    //   renderer.render(stage);
    // }


    // const innerWidth = window.innerWidth;
    // const innerHeight = window.innerHeight;
    //
    // const renderer = PIXI.autoDetectRenderer(innerWidth, innerHeight, {
    //   backgroundColor: 0x000000
    // });
    // const stage = new PIXI.Container();
    // document.body.appendChild(renderer.view);

  }

  animate() {
    // render the container
    this.app.renderer.render(this.app.stage);
    const bodies = this.waterParticles.bodies;
    let sleepingCount = 0;
    for (let i = 0; i < bodies.length; i++) {
      const body = bodies[i];
      const sprite = this.waterSprites[i];
      sprite.position.x = body.position.x;
      sprite.position.y = body.position.y;
      if (body.isSleeping) {
        sleepingCount++;
      }
    }
    console.log('animate', sleepingCount, bodies.length);
    if (sleepingCount !== bodies.length) {
      requestAnimationFrame(this.animate);
    }
  }

  handleResize() {
    // this.renderer.canvas.width = window.innerWidth;
    // this.renderer.canvas.height = window.innerHeight;
    this.app.renderer.resize(window.innerWidth, window.innerHeight);
    console.log('wheres my ground at?', this.ground, this.ground.area, this.engine);
    // Body.set(this.ground, {
    //   x: (window.innerWidth / 2),
    //   y: (window.innerHeight - 10),
    //   width: window.innerWidth,
    // });
    // Body.scale(this.ground, 0.95, 1);
    // this.ground.set({
    //   x: (window.innerWidth / 2),
    //   y: (window.innerHeight - 10),
    //   width: window.innerWidth,
    // });
  }

  render() {
    return (
      <div className={
        classNames([
          this.props.className,
          'SiteBackground'
        ])
      }>
        <svg width='787' height='1037' viewBox='0 0 787 1037' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <radialGradient cy='9.68%' fx='50%' fy='9.68%' r='76.314%'
                            gradientTransform='matrix(0 .75865 -1 0 .597 -.283)' id='a'>
              <stop stopColor='#D2EAFD' offset='0%'/>
              <stop stopColor='#ADD6F8' offset='100%'/>
            </radialGradient>
          </defs>
          <path
            d='M202.145.154l412.07 111.71L0 709.774 202.145.153zM138.37 800.08L786.527 169 574.69 1036.9 138.37 800.08z'
            fill='url(#a)' fillRule='evenodd'/>
        </svg>
        <div className='SiteBackground__liquidContainer' ref={(elem) => {
          if (this.liquidContainer) return;
          this.initLiquidStuff(elem);
        }}></div>
      </div>
    );
  }
}

export default SiteBackground;