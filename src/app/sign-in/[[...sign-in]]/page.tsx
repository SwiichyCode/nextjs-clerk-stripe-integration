'use client';

import { AuthenticationCard } from '@/core/presentation/modules/authentication/authentication-card/_index';
import { AuthenticationPasswordStrategy } from '@/core/presentation/modules/authentication/authentication-password-strategy/_index';
import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';

export default function SignInPage() {
  return (
    <div className="grid h-screen w-full grow items-center px-4 sm:justify-center">
      <SignIn.Root>
        <Clerk.Loading>
          {isGlobalLoading => (
            <>
              <SignIn.Step name="start">
                <AuthenticationCard status="sign-in" isGlobalLoading={isGlobalLoading} />
              </SignIn.Step>

              <SignIn.Step name="verifications">
                <AuthenticationPasswordStrategy isGlobalLoading={isGlobalLoading} />
              </SignIn.Step>
            </>
          )}
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  );
}
