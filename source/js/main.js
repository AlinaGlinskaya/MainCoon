import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {samsungHoverFix} from './utils/samsung-hover-fix';
import {initCatsSlider} from './modules/init-cats-slider';
import {initTeamSlider} from './modules/init-team-slider';
import {initTabs} from './modules/tabs/init-tabs';
import {initAccordions} from './modules/accordion/init-accordions';
import {initReviewsSlider} from './modules/init-reviews-slider';

// Utils
// ---------------------------------

ieFix();
iosVhFix();
samsungHoverFix();

// Modules
// ---------------------------------

initCatsSlider();
initTabs();
initAccordions();
initTeamSlider();
initReviewsSlider();
