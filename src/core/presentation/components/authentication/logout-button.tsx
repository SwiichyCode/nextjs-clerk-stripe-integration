import { SignOutButton } from '@clerk/nextjs';

import { Button } from '../common/ui/button';

export const LogoutButton = () => {
  return (
    <SignOutButton>
      <Button>Sign out</Button>
    </SignOutButton>
  );
};
