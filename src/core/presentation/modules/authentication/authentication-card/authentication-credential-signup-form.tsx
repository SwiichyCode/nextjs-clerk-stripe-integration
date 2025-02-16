import { Input } from '@/core/presentation/components/common/ui/input';
import { Label } from '@/core/presentation/components/common/ui/label';
import * as Clerk from '@clerk/elements/common';
import { Fragment } from 'react';

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
