"use strict";

(function () {

  document.querySelector('.sgd-cta-controls .close').addEventListener('click', function() {
    document.querySelector('.sgd-cta-container').style.display = 'none';
  });

  const themeButtons = document.querySelectorAll('.theme button');

  for (let index = 0; index < themeButtons.length; index++) {
    const color = themeButtons[index];

    color.addEventListener('click', function (e) {
      removeClass(themeButtons, 'active')
      e.target.classList.add(e.target.innerText.toLowerCase(), 'active');
      document.body.style.backgroundColor = e.target.innerText;
    });
  }

  function removeClass(target, name) {
    for (let index = 0; index < target.length; index++) {
      const color = target[index];
      color.classList.remove(name);
    } 
  }


  // 
  window.addEventListener("resize", getSizes, false);

  let out = document.querySelector(".output");
  let currentClientWidth = document.body.clientWidth;
  let currentClientHeight = document.body.clientHeight;
  out.textContent = currentClientWidth + "px" + currentClientHeight + "px";


  function getSizes() {
    let body = document.body;
    let zoom = body.clientWidth + "px x " +
      body.clientHeight + "px";
    out.textContent = zoom;
  }



  const zoomInitButton = document.getElementById("zoomInit");
  document.getElementById("zoomInit").addEventListener("click", zoomInit);
  document.getElementById("zoomIn").addEventListener("click", zoomIn);
  document.getElementById("zoomOut").addEventListener("click", zoomOut);

  class Zoom {
    constructor(level, value) {
      this.level = level;
      this.value = value;
    }
    // Getter
    get out() {
      return this.output();
    }
    output() {
      if (this.level <= -8) {
        alert(`You can no longer shrink.\nReset to the initial screen.`);
        zoomInit();
      } else if (this.level >= 10) {
        alert(`You can't zoom in any further.\nReset to the initial screen.`);
        zoomInit();
      } else {
        document.body.style.zoom = this.value + '%';
        document.querySelector(".zoom .value").innerText =  this.value + '%';
        if (this.value !== 100) {
          zoomInitButton.removeAttribute('disabled');
        } else {
          zoomInitButton.setAttribute('disabled', 'disabled');
        }
      }
    }
  }

  const zoom8_ = new Zoom(-8, 25, out);
  const zoom7_ = new Zoom(-7, 25, out);
  const zoom6_ = new Zoom(-6, 33, out);
  const zoom5_ = new Zoom(-5, 50, out);
  const zoom4_ = new Zoom(-4, 67, out);
  const zoom3_ = new Zoom(-3, 75, out);
  const zoom2_ = new Zoom(-2, 80, out);
  const zoom1_ = new Zoom(-1, 90, out);
  const zoom0 = new Zoom(0, 100, out);
  const zoom1 = new Zoom(1, 110, out);
  const zoom2 = new Zoom(2, 125, out);
  const zoom3 = new Zoom(3, 150, out);
  const zoom4 = new Zoom(4, 175, out);
  const zoom5 = new Zoom(5, 200, out);
  const zoom6 = new Zoom(6, 250, out);
  const zoom7 = new Zoom(7, 300, out);
  const zoom8 = new Zoom(8, 400, out);
  const zoom9 = new Zoom(9, 500, out);
  const zoom10 = new Zoom(10, 500, out);

  const zoom = [
    zoom8_,zoom7_,zoom6_,zoom5_,zoom4_,zoom3_,zoom2_,zoom1_,zoom0,zoom1,zoom2,zoom3,zoom4,zoom5,zoom6,zoom7,zoom8,zoom9,zoom10,
  ]

  let initZoomIdx = 8;

  function zoomInit() {
    initZoomIdx = 8;
    zoom[initZoomIdx].out;
    zoomInitButton.setAttribute('disabled', 'disabled');
    console.log('init');
  }
  function zoomIn() {
    initZoomIdx++
    zoom[initZoomIdx].out;
    console.log('+');
  }
  function zoomOut() {
    initZoomIdx--
    zoom[initZoomIdx].out;
    console.log('-');
  }
})();