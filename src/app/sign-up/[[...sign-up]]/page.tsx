'use client';

import { AuthenticationCard } from '@/core/presentation/modules/authentication/authentication-card/_index';
import { AuthenticationCardEmailVerification } from '@/core/presentation/modules/authentication/authentication-email-verification-card/_index';
import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';

export default function SignUpPage() {
  return (
    <div className="grid h-screen w-full grow items-center px-4 sm:justify-center">
      <SignUp.Root>
        <Clerk.Loading>
          {isGlobalLoading => (
            <>
              <SignUp.Step name="start">
                <AuthenticationCard status="sign-up" isGlobalLoading={isGlobalLoading} />
              </SignUp.Step>
              <SignUp.Step name="verifications">
                <SignUp.Strategy name="email_code">
                  <AuthenticationCardEmailVerification isGlobalLoading={isGlobalLoading} />
                </SignUp.Strategy>
              </SignUp.Step>
            </>
          )}
        </Clerk.Loading>
      </SignUp.Root>
    </div>
  );
}
