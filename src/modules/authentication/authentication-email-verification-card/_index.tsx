import { Card, CardContent, CardFooter } from '@/core/presentation/components/common/ui/card';

import { AuthenticationVerificationButtonSubmit } from './authentication-verification-button-submit';
import { AuthenticationVerificationField } from './authentication-verification-field';
import { AuthenticationVerificationHeader } from './authentication-verification-header';
import { AuthenticationVerificationResend } from './authentication-verification-resend';

type AuthenticationCardEmailVerificationProps = {
  isGlobalLoading: boolean;
};

export const AuthenticationCardEmailVerification = ({ isGlobalLoading }: AuthenticationCardEmailVerificationProps) => {
  return (
    <Card className="w-full sm:w-96">
      <AuthenticationVerificationHeader />
      <CardContent className="grid gap-y-4">
        <div className="grid items-center justify-center gap-y-2">
          <AuthenticationVerificationField />
          <AuthenticationVerificationResend />
        </div>
      </CardContent>
      <CardFooter>
        <div className="grid w-full gap-y-4">
          <AuthenticationVerificationButtonSubmit isGlobalLoading={isGlobalLoading} />
        </div>
      </CardFooter>
    </Card>
  );
};
