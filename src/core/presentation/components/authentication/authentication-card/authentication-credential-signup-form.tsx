import * as Clerk from '@clerk/elements/common';
import { Fragment } from 'react';

import { Input } from '../../common/ui/input';
import { Label } from '../../common/ui/label';

export const AuthenticationCredentialSignupForm = () => {
  return (
    <Fragment>
      <Clerk.Field name="emailAddress" className="space-y-2">
        <Clerk.Label asChild>
          <Label>Email address</Label>
        </Clerk.Label>
        <Clerk.Input type="email" required asChild>
          <Input />
        </Clerk.Input>
        <Clerk.FieldError className="block text-sm text-destructive" />
      </Clerk.Field>
      <Clerk.Field name="password" className="space-y-2">
        <Clerk.Label asChild>
          <Label>Password</Label>
        </Clerk.Label>
        <Clerk.Input type="password" required asChild>
          <Input />
        </Clerk.Input>
        <Clerk.FieldError className="block text-sm text-destructive" />
      </Clerk.Field>
    </Fragment>
  );
};
