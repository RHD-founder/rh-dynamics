import '@hcaptcha/types';

declare module '@hcaptcha/react-hcaptcha' {
  import { FC, RefObject } from 'react';

  export interface HCaptchaProps {
    sitekey: string;
    onVerify: (token: string) => void;
    onExpire?: () => void;
    onError?: (event: string) => void;
    onLoad?: () => void;
    languageOverride?: string;
    reCaptchaCompat?: boolean;
    id?: string;
    tabindex?: number;
    theme?: 'light' | 'dark';
    size?: 'normal' | 'compact' | 'invisible';
    ref?: RefObject<HCaptcha>;
    className?: string;
  }

  declare const HCaptcha: FC<HCaptchaProps>;
  export default HCaptcha;
}
