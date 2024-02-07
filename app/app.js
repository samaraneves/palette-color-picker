import {
  changeTextContentHTMLElement,
  getTextContentHTMLElement,
  selectLastElementChild,
  styleHTMLElement,
  toast,
} from "./utils/element.js";
import { copyStringToClipboard, handleKeyPress } from "./utils/keyboard.js";
import { convertToArray, pipe } from "./utils/operators.js";
import { newColor } from "./utils/palette.js";

const generateNewPalette = (elements) => {
  if (elements) {
    elements.forEach((element) => {
      const backgroundElement = element.firstElementChild;
      const textHexadecimalElement = element.lastElementChild;
      const color = newColor();

      styleHTMLElement(backgroundElement, "backgroundColor", color);
      changeTextContentHTMLElement(textHexadecimalElement, color);
    });
  }
};

const onClickCard = (element) => {
  const textElement = pipe(selectLastElementChild)(element);

  const textElementString = pipe(getTextContentHTMLElement)(textElement);

  toast(
    `A cor ${textElementString} foi copiada para a sua área de transferência!`
  );

  copyStringToClipboard(textElementString);
};

const copyPalette = () => {
  const cardHexadecimalElements =
    document.querySelectorAll(".card__hexadecimal");

  const arrayToContentElements = convertToArray(
    cardHexadecimalElements,
    (item) => getTextContentHTMLElement(item)
  );

  toast(`A paleta foi copiada para a sua área de transferência!`);

  copyStringToClipboard(arrayToContentElements);
};

const onDOMContentLoaded = () => {
  const cards = Array.from(document.querySelectorAll(".card"));

  const generatorPaletteButton = document.querySelector(
    "#generator__palette__button"
  );

  generateNewPalette(cards);

  const keyFunctions = [
    [32, () => generateNewPalette(cards)],
    [99, copyPalette],
  ];

  generatorPaletteButton.addEventListener("click", () =>
    generateNewPalette(cards)
  );

  cards.forEach((card) =>
    card.addEventListener("click", () => onClickCard(card))
  );

  document.addEventListener("keypress", handleKeyPress(keyFunctions));
};

window.addEventListener("DOMContentLoaded", onDOMContentLoaded);
