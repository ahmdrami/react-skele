import { RouteProps, RouterProps } from 'react-router'
import Home from './pages/home/home'
import NotFound from './pages/404'

// import Home from 'pages/home/home';
// import Partners from 'pages/Partners';
// import Careers from 'pages/Careers/careers.container';
// import Landing2 from 'pages/Landing2';
// import TermsConditions from './pages/terms-conditions';
// import PrivacyPolicy from './pages/privacy-policy';
// import CookiePolicy from './pages/cookie-policy';
// import RecruitmentPolicy from './pages/recruitment-policy';
// import GlossaryTerms from './pages/glossary-terms';
// import PressKit from './pages/press-kit';
// import SecurityUpdateTLS from './pages/security-update-TLS';
// import PasswordResetEmail from './pages/password-reset-email';
// import PasswordResetSms from './pages/password-reset-sms';
// import NotFound from './pages/404';

export const APP_ROUTES = [
  { path: '/', component: Home },
  // { path: '/partners', component: Partners },
  // { path: '/careers', component: Careers },
  // { path: '/landing2', component: Landing2 },
  // { path: '/terms-and-conditions', component: TermsConditions },
  // { path: '/privacy-policy', component: PrivacyPolicy },
  // { path: '/cookie-policy', component: CookiePolicy },
  // { path: '/recruitment-policy', component: RecruitmentPolicy },
  // { path: '/glossary-terms', component: GlossaryTerms },
  // { path: '/press-kit', component: PressKit },
  // { path: '/security-update-tls', component: SecurityUpdateTLS },
  // { path: '/confirm-password-reset-email/:email/:token', component: PasswordResetEmail },
  // { path: '/confirm-password-reset-sms/:token/:code', component: PasswordResetSms },
  { path: '**', component: NotFound },
]
