let canvas;
let world;
let keyboard;
let allIntervals = [];


function startScreen() {
    document.getElementById('startScreen').classList.add('d-none');

}

function init() {

    startScreen();
    canvas = document.getElementById('canvas');
    initLevel1();
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
    lifebar = new Statusbar();
}


document.onkeydown = function (e) {
    switch (e.key) {
        case ' ':
            keyboard.SPACE = true;
            break;
        case 'ArrowLeft':
        case 'a':
            keyboard.LEFT = true;
            // left arrow
            break;
        case 'ArrowRight':
        case 'd':
            keyboard.RIGHT = true;
            break;
        case 'w':
        case 'ArrowUp':
            keyboard.THROW = true;
            break;


        // right arrow
    }
};

document.onkeyup = function (e) {
    switch (e.key) {
        case ' ':
            keyboard.SPACE = false;
            break;
        case 'ArrowLeft':
        case 'a':
            keyboard.LEFT = false;
            // left arrow
            break;
        case 'ArrowRight':
        case 'd':
            keyboard.RIGHT = false;
            break;
        case 'w':
        case 'ArrowUp':
            keyboard.THROW = false;
            break;

        // right arrow
    }
};


function loadPage() {
  /*   if (window.innerWidth <= 700) */ {
    insertCross();
};
}

/**
 * The function enables the responsivness of the map cross element.
 * 
 */
 function insertCross() {
    let crossPosition = document.getElementById('crossPosition');
    let text = generateCross(150);
    crossPosition.insertAdjacentHTML('afterbegin', text)
   ;}

    /**
   * This function generates a cross with an area function fitting the img of the cross element.
   * Depending of the side length the scale of the cross element is determined.
   * @param {number} sideLength The side length of the cross element.
   * @returns {string} Returns the cross properties.
   */
  function generateCross(sideLength) {
    let coord1 = sideLength * 3 / 8;
    let coord2 = sideLength * 5 / 8;
    cross = `
           <img class='cross-map' id="crossMap" src='img/0.Own_Pictures/cross.png' usemap='#image-map' height="${sideLength}px" width="${sideLength}px">
             <map name='image-map'>
                 <area target="" alt="up"    title="up"     id="up" onclick="toggleCross('up')" coords="${coord1},0,${coord2},${coord1}" shape="rect">
                 <area target="" alt="left"  title="left"   id="left" onclick="toggleCross('left')" coords="0,${coord1},${coord1},${coord2}" shape="rect">
                 <area target="" alt="down"  title="down"   id="down" onclick=" toggleCross('down')" coords="${coord2},${coord2},${coord1},${sideLength}" shape="rect">
                 <area target="" alt="right" title="right"  id="right" onclick="toggleCross('right)"  coords="${sideLength},${coord1},${coord2},${coord2}" shape="rect">   
             </map> `;
    return cross;
  }
  /**
   * The function simulates pressing the control pad.
   * @param {string} position The parameter resembles the 
   */
  function toggleCross(position) {
    document.getElementById('crossMap').src = `img/0.Own_Pictures/${position}.png`;
    document.getElementById('crossMap').src = "img/0.Own_Pictures/cross.png";
  }
  

function insertButtons() {

}