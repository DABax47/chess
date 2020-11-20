window.onload = () => {
  window.addEventListener('resize', () => {
      console.log('resize');
      moveImgs();
    }
    moveImgs();
  })
}

function moveImgs() {
  if (window.innerWidth > 768) {
    let pos = document.documentElement;
    let queen = document.getElementById('q');
    let frontimg = document.getElementById('f');
    if (window.innerWidth < 1440) {
      queen.style.setProperty('left', 55 + 'em');
      f.style.setProperty('left',
        (28 * -1) + 'em');
    } else if (window.innerWidth > 1440) {
      queen.style.setProperty('left', 60 + 'em');
      f.style.setProperty('left',
        (28 * -1) + 'em');
    }

    pos.addEventListener("mousemove", e => {
      console.log('moving');
      pos.style.setProperty('--x', e.clientX + "px")
      queen.style.setProperty('left', (60 + (e.clientX / 4000)) + 'em');
      f.style.setProperty('left', ((33 * -1) + (e.clientX / 125)) + 'em');
    })
  }