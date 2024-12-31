import { Icons } from '@/core/presentation/components/common/icons/_index';
import { Button } from '@/core/presentation/components/common/ui/button';
import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';

interface AuthenticationVerificationButtonSubmitProps {
  isGlobalLoading: boolean;
}

export const AuthenticationVerificationButtonSubmit = ({
  isGlobalLoading,
}: AuthenticationVerificationButtonSubmitProps) => {
  return (
    <SignUp.Action submit asChild>
      <Button disabled={isGlobalLoading}>
        <Clerk.Loading>
          {isLoading => {
            return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Continue';
          }}
        </Clerk.Loading>
      </Button>
    </SignUp.Action>
  );
};
