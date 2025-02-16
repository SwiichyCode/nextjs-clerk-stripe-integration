import { Button } from '@/core/presentation/components/common/ui/button';
import * as SignUp from '@clerk/elements/sign-up';

export const AuthenticationVerificationResend = () => {
  return (
    <SignUp.Action
      asChild
      resend
      className="text-muted-foreground"
      fallback={({ resendableAfter }: { resendableAfter: number }) => (
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
