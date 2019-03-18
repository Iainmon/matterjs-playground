import { Engine, Events, Runner, Render, World, Bodies, Body, Mouse, MouseConstraint, Composites, Vertices } from 'matter-js'

const element = document.getElementById('matter');

// create an engine
var engine = Engine.create();
var world = engine.world;

// create a renderer
var render = Render.create({
    element: element,
    engine: engine,
});

Engine.run(engine);

Render.run(render);


// create two boxes and a ground
var runner = Runner.create();
Runner.run(runner, engine);

// Imports cloth body
import cloth from './bodies/Cloth'

World.add(world, [
    cloth,
    Bodies.circle(300, 500, 80, { isStatic: true }),
    Bodies.rectangle(500, 480, 80, 80, { isStatic: true }),
    Bodies.rectangle(400, 609, 800, 50, { isStatic: true })
]);

// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.98,
            render: {
                visible: false
            }
        }
    });

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

