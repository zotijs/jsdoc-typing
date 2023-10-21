/**
 * @typedef {"black" | "tuxedo" | "grey" | "green" | "red"} CatColor
 */

/**
 * Cat type
 * @typedef {object} Cat
 * @property {string} name the name of the cat
 * @property {CatColor} color the color of the cat
 * @property {string} eyes the color of the cat's eyes
 */

/**
 * Union type for cat's character
 * @typedef {"calm" | "mad"} Character
 */

/**
 * Enhanced Cat
 * @typedef {Cat & { character: Character}} EnhancedCat
 */

/**
 * @param {Cat} cat the cat to be enhanced
 * @returns {EnhancedCat} the cat with the characted calculated
 * @description This function calculates cat's character based on its color
 */
export const enhanceCat = (cat) => ({
  ...cat,
  ...(cat.color !== 'red' ? { character: 'calm' } : { character: 'mad' }),
});
