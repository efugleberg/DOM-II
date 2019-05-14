// Your code goes here

const mouse = document.querySelector('footer')
mouse.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'pink';
    setTimeout(function() {
        event.target.style.backgroundColor = "";
    }, 1000)
}, false)

const select = document.querySelector('.first-name')

select.addEventListener('select', event => {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
});

const button = document.querySelector('.btn');
button.addEventListener('dblclick', event => {
    event.target.style.color = 'red';
})

const resizeOutput = document.querySelector('container-home');

// resizeOutput.addEventListener('resize', event => {
//     event return alert(`Hey! You are resizing the window!`);
// });

const cantChange = document.querySelector('.typed')
cantChange.addEventListener('keydown', event => {
    event.preventDefault();
})

const zoomImage = document.querySelector('h2') 
function zoom(event) {
    let scale = 1;
    event.preventDefault();
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 2;
    }
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
    // Apply scale transform
    zoomImage.style.transform = `scale(${scale})`;
  }
  zoomImage.addEventListener('wheel', zoom);

  const heightOutput = document.querySelector('#height');
  const widthOutput = document.querySelector('#width');

  function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
  }
  window.addEventListener('resize', reportWindowSize);

  var dragged;
  /* events fired on the draggable target */
  document.addEventListener("drag", function(event) {
  
  }, false);
  document.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
  }, false);
  document.addEventListener("dragend", function(event) {
    // reset the transparency
    event.target.style.opacity = "";
  }, false);
  /* events fired on the drop targets */
  document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
      event.target.style.background = "purple";
    }
  
  }, false);
  document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  
  }, false);
  document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
  }, false);

  let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});