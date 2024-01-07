// Tracks js
document.addEventListener('DOMContentLoaded', function () {
  const bodyText = document.querySelector('.body-text');

  function updateBodyText(track) {
    switch (track) {
      case 'track1':
        bodyText.innerHTML = '<h5>Body text for Track 1</h5>';
        break;
      case 'track2':
        bodyText.innerHTML = '<h5>Body text for Track 2</h5>';
        break;
      case 'track3':
        bodyText.innerHTML = '<h5>Body text for Track 3</h5>';
        break;
      default:
        bodyText.innerHTML = '<h5>Lorem ipsum dolor sit amet</h5>';
    }
  }

  const dropdown1 = document.querySelector('.button1');
  const dropdown2 = document.querySelector('.button2');
  const dropdown3 = document.querySelector('.button3');

  dropdown1.addEventListener('click', function () {
    updateBodyText('track1');
  });

  dropdown2.addEventListener('click', function () {
    updateBodyText('track2');
  });

  dropdown3.addEventListener('click', function () {
    updateBodyText('track3');
  });
});
