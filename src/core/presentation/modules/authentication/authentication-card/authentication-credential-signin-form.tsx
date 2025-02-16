import { Input } from '@/core/presentation/components/common/ui/input';
import { Label } from '@/core/presentation/components/common/ui/label';
import * as Clerk from '@clerk/elements/common';

export const AuthenticationCredentialSigninForm = () => {
  return (
    <Clerk.Field name="identifier" className="space-y-2">
      <Clerk.Label asChild>
        <Label>Email address</Label>
      </Clerk.Label>
      <Clerk.Input type="email" required asChild>
        <Input />
      </Clerk.Input>
      <Clerk.FieldError className="block text-sm text-destructive" />
    </Clerk.Field>
  );
};
