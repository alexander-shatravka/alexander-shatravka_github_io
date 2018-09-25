document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#394116',
    lineColor: '#394116',
    density: 10000,
    curvedLines: false,
    parallaxMultiplier: 10,
    particleRadius: 5,
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);