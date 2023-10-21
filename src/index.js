import { multiplyByTwo } from './utilities/multiplyByTwo';
import { enhanceCat } from './utilities/enhcanceCat';

// this produces an error
// const multipliedValue = multiplyByTwo('test');

// this works fine
const fourMultipliedByTwo = multiplyByTwo(4);

/**
 * @type {import('./utilities/enhcanceCat').Cat}
 */
const mao = { name: 'Mao', color: 'red', eyes: 'green' };

/**
 * @type {import('./utilities/enhcanceCat').Cat}
 */
const pipis = { name: 'Pipis', color: 'tuxedo', eyes: 'green' };

const enhancedMao = enhanceCat(mao);
const enhancedPipis = enhanceCat(pipis);
