import { CardDescription } from '@/core/presentation/components/common/ui/card';
import { CardHeader, CardTitle } from '@/core/presentation/components/common/ui/card';
import * as SignIn from '@clerk/elements/sign-in';

export const AuthenticationVerificationHeader = () => {
  return (
    <CardHeader>
      <CardTitle>Check your email</CardTitle>
      <CardDescription>Enter the verification code sent to your email</CardDescription>
      <p className="text-sm text-muted-foreground">
        Welcome back <SignIn.SafeIdentifier />
      </p>
    </CardHeader>
  );
};
