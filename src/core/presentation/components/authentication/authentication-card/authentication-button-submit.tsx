import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';

import { Icons } from '../../common/icons/_index';
import { Button } from '../../common/ui/button';

export const AuthenticationSubmitButton = ({ isGlobalLoading }: { isGlobalLoading: boolean }) => {
  return (
    <SignIn.Action submit asChild>
      <Button disabled={isGlobalLoading}>
        <Clerk.Loading>
          {isLoading => {
            return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Continue';
          }}
        </Clerk.Loading>
      </Button>
    </SignIn.Action>
  );
};
