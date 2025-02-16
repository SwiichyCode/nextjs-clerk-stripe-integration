import { CardDescription, CardTitle } from '@/core/presentation/components/common/ui/card';
import { CardHeader } from '@/core/presentation/components/common/ui/card';

type AuthenticationHeaderProps = {
  status: 'sign-in' | 'sign-up';
};

export const AuthenticationHeader = ({ status }: AuthenticationHeaderProps) => {
  return (
    <CardHeader>
      <CardTitle>{status === 'sign-in' ? 'Sign in to your account' : 'Sign up to your account'}</CardTitle>
      <CardDescription>
        {status === 'sign-in'
          ? 'Welcome back! Please sign in to continue'
          : 'Welcome to our platform! Please sign up to continue'}
      </CardDescription>
    </CardHeader>
  );
};
