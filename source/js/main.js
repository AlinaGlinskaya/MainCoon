import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {initCatsSlider} from './modules/init-cats-slider';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initCatsSlider();
