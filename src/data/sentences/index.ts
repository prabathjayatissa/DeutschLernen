import { greetingSentences } from './greetings';
import { shoppingSentences } from './shopping';
import { restaurantSentences } from './restaurant';
import { directionSentences } from './directions';
import { dailyLifeSentences } from './dailyLife';
import { travelSentences } from './travel';

export const allSentences = [
  ...greetingSentences,
  ...shoppingSentences,
  ...restaurantSentences,
  ...directionSentences,
  ...dailyLifeSentences,
  ...travelSentences
];