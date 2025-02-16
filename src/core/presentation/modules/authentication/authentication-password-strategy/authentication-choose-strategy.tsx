import { Button } from '@/core/presentation/components/common/ui/button';
import * as SignIn from '@clerk/elements/sign-in';

export const AuthenticationChooseStrategy = () => {
  return (
    <SignIn.Action navigate="choose-strategy" asChild>
      <Button type="button" size="sm" variant="link">
        Use another method
      </Button>
    </SignIn.Action>
  );
};
