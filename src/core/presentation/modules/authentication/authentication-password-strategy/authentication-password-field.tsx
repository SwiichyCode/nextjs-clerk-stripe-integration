import { Input } from '@/core/presentation/components/common/ui/input';
import { Label } from '@/core/presentation/components/common/ui/label';
import * as Clerk from '@clerk/elements/common';

export const AuthenticationPasswordField = () => {
  return (
    <Clerk.Field name="password" className="space-y-2">
      <Clerk.Label asChild>
        <Label>Password</Label>
      </Clerk.Label>
      <Clerk.Input type="password" asChild>
        <Input />
      </Clerk.Input>
      <Clerk.FieldError className="block text-sm text-destructive" />
    </Clerk.Field>
  );
};
