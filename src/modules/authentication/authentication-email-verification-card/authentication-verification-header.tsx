import { CardDescription } from '@/core/presentation/components/common/ui/card';
import { CardHeader, CardTitle } from '@/core/presentation/components/common/ui/card';

export const AuthenticationVerificationHeader = () => {
  return (
    <CardHeader>
      <CardTitle>Verify your email</CardTitle>
      <CardDescription>Use the verification link sent to your email address</CardDescription>
    </CardHeader>
  );
};
