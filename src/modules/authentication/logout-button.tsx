import { Button } from '@/core/presentation/components/common/ui/button';
import { SignOutButton } from '@clerk/nextjs';

export const LogoutButton = () => {
  return (
    <SignOutButton>
      <Button>Sign out</Button>
    </SignOutButton>
  );
};
