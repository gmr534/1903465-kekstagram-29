const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const shuffleArray = (elements) => {
  for (let i = elements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = elements[i];
    elements[i] = elements[j];
    elements[j] = temp;
  }
  return elements;
};

const isEscapeKey = (event) => event.key === 'Escape';

const isNotInput = (event) => !event.target.closest('input') || !event.target.closest('textarea');

export {getRandomNumber, getRandomArrayElement, shuffleArray, isEscapeKey, isNotInput};
