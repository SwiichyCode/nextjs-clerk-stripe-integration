import { Icons } from '@/core/presentation/components/common/icons/_index';
import { Button } from '@/core/presentation/components/common/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/core/presentation/components/common/ui/card';
import { Input } from '@/core/presentation/components/common/ui/input';
import { Label } from '@/core/presentation/components/common/ui/label';
import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';

type AuthenticationPasswordStrategyProps = {
  isGlobalLoading: boolean;
};

export const AuthenticationPasswordStrategy = ({ isGlobalLoading }: AuthenticationPasswordStrategyProps) => {
  return (
    <SignIn.Strategy name="password">
      <Card className="w-full sm:w-96">
        <CardHeader>
          <CardTitle>Check your email</CardTitle>
          <CardDescription>Enter the verification code sent to your email</CardDescription>
          <p className="text-sm text-muted-foreground">
            Welcome back <SignIn.SafeIdentifier />
          </p>
        </CardHeader>
        <CardContent className="grid gap-y-4">
          <Clerk.Field name="password" className="space-y-2">
            <Clerk.Label asChild>
              <Label>Password</Label>
            </Clerk.Label>
            <Clerk.Input type="password" asChild>
              <Input />
            </Clerk.Input>
            <Clerk.FieldError className="block text-sm text-destructive" />
          </Clerk.Field>
        </CardContent>
        <CardFooter>
          <div className="grid w-full gap-y-4">
            <SignIn.Action submit asChild>
              <Button disabled={isGlobalLoading}>
                <Clerk.Loading>
                  {isLoading => {
                    return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Continue';
                  }}
                </Clerk.Loading>
              </Button>
            </SignIn.Action>
            <SignIn.Action navigate="choose-strategy" asChild>
              <Button type="button" size="sm" variant="link">
                Use another method
              </Button>
            </SignIn.Action>
          </div>
        </CardFooter>
      </Card>
    </SignIn.Strategy>
  );
};
