import { Button } from '@/core/presentation/components/common/ui/button';
import Link from 'next/link';

type AuthenticationButtonLinkProps = {
  status: 'sign-in' | 'sign-up';
};

export const AuthenticationButtonLink = ({ status }: AuthenticationButtonLinkProps) => {
  const text = status === 'sign-in' ? "Don't have an account? Sign up" : 'Already have an account? Sign in';

  return (
    <Button variant="link" size="sm" asChild>
      <Link href={status === 'sign-in' ? '/sign-up' : '/sign-in'}>{text}</Link>
    </Button>
  );
};
