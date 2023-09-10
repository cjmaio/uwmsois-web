/**
 * Scale the image with id 'theImage' to the specified width, height, and border.
 * If width, height, or border is empty, the value is unset.
 * @param {String} width
 * @param {String} height
 * @param {String} border
 */
const scaleImage = (width, height, border) => {
  const widthPx = width ? width.includes('px') ? width : `${width}px` : '';
  const heightPx = height ? height.includes('px') ? height : `${height}px` : '';
  const borderPx = border ? border.includes('px') ? border : `${border}px` : '';

  document.getElementById('theImage').style.width = widthPx;
  document.getElementById('theImage').style.height = heightPx;
  document.getElementById('theImage').style.borderWidth = borderPx;
};

document.addEventListener('DOMContentLoaded', () => {
  const inputElements = document.getElementsByTagName('input');
  for (const element of inputElements) {
    if (element.type === 'text') {
      element.addEventListener('focus', (event) => {
        element.style.backgroundColor = 'yellow';
      });
      element.addEventListener('blur', (event) => {
        element.style.backgroundColor = 'white';
      });
    }
    if (element.type === 'button') {
      element.addEventListener('click', (event) => {
        const width = document.getElementById('w').value;
        const height = document.getElementById('h').value;
        const border = document.getElementById('b').value;
        scaleImage(width, height, border);
      });
    }
  }
});
