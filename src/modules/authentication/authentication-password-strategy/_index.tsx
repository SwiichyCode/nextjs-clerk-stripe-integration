import { Card, CardContent, CardFooter } from '@/core/presentation/components/common/ui/card';
import * as SignIn from '@clerk/elements/sign-in';

import { AuthenticationChooseStrategy } from './authentication-choose-strategy';
import { AuthenticationPasswordField } from './authentication-password-field';
import { AuthenticationPasswordHeader } from './authentication-password-header';
import { AuthenticationPasswordSubmit } from './authentication-password-submit';

type AuthenticationPasswordStrategyProps = {
  isGlobalLoading: boolean;
};

export const AuthenticationPasswordStrategy = ({ isGlobalLoading }: AuthenticationPasswordStrategyProps) => {
  return (
    <SignIn.Strategy name="password">
      <Card className="w-full sm:w-96">
        <AuthenticationPasswordHeader />
        <CardContent className="grid gap-y-4">
          <AuthenticationPasswordField />
        </CardContent>
        <CardFooter>
          <div className="grid w-full gap-y-4">
            <AuthenticationPasswordSubmit isGlobalLoading={isGlobalLoading} />
            <AuthenticationChooseStrategy />
          </div>
        </CardFooter>
      </Card>
    </SignIn.Strategy>
  );
};
