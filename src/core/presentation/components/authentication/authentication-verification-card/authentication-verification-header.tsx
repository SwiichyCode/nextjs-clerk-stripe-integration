import { CardDescription } from '../../common/ui/card';
import { CardHeader, CardTitle } from '../../common/ui/card';

export const AuthenticationVerificationHeader = () => {
  return (
    <CardHeader>
      <CardTitle>Verify your email</CardTitle>
      <CardDescription>Use the verification link sent to your email address</CardDescription>
    </CardHeader>
  );
};
