import * as SignUp from '@clerk/elements/sign-up';

import { Button } from '../../common/ui/button';

export const AuthenticationVerificationResend = () => {
  return (
    <SignUp.Action
      asChild
      resend
      className="text-muted-foreground"
      fallback={({ resendableAfter }) => (
        <Button variant="link" size="sm" disabled>
          Didn&apos;t receive a code? Resend (<span className="tabular-nums">{resendableAfter}</span>)
        </Button>
      )}
    >
      <Button type="button" variant="link" size="sm">
        Didn&apos;t receive a code? Resend
      </Button>
    </SignUp.Action>
  );
};
