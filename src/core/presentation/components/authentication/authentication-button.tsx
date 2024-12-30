import { SignedIn, SignedOut } from '@clerk/nextjs';
import { Fragment } from 'react';

import { LoginLink } from './login-link';
import { LogoutButton } from './logout-button';

export const AuthenticationButton = () => {
  return (
    <Fragment>
      <SignedOut>
        <LoginLink />
      </SignedOut>

      <SignedIn>
        <LogoutButton />
      </SignedIn>
    </Fragment>
  );
};
