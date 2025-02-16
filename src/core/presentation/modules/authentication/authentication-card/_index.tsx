'use client';

import { Card, CardContent, CardFooter } from '@/core/presentation/components/common/ui/card';

import { AuthenticationButtonLink } from './authentication-button-link';
import { AuthenticationButtonProvider } from './authentication-button-provider';
import { AuthenticationSubmitButton } from './authentication-button-submit';
import { AuthenticationCredentialSigninForm } from './authentication-credential-signin-form';
import { AuthenticationCredentialSignupForm } from './authentication-credential-signup-form';
import { AuthenticationHeader } from './authentication-header';
import { AuthenticationSeparator } from './authentication-separator';

type AuthenticationCardProps = {
  status: 'sign-in' | 'sign-up';
  isGlobalLoading: boolean;
};

export const AuthenticationCard = ({ status, isGlobalLoading }: AuthenticationCardProps) => {
  return (
    <Card className="w-full sm:w-96">
      <AuthenticationHeader status={status} />

      <CardContent className="grid gap-y-4">
        <div className="grid grid-cols-2 gap-x-4">
          <AuthenticationButtonProvider provider="google" isGlobalLoading={isGlobalLoading} />
          <AuthenticationButtonProvider provider="github" isGlobalLoading={isGlobalLoading} />
        </div>
        <AuthenticationSeparator />

        {status === 'sign-in' && <AuthenticationCredentialSigninForm />}
        {status === 'sign-up' && <AuthenticationCredentialSignupForm />}
        <CardFooter>
          <div className="grid w-full gap-y-4">
            <AuthenticationSubmitButton isGlobalLoading={isGlobalLoading} />
            <AuthenticationButtonLink status={status} />
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
