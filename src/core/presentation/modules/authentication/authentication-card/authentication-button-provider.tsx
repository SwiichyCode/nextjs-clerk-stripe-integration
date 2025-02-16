import { Icons } from '@/core/presentation/components/common/icons/_index';
import { Button } from '@/core/presentation/components/common/ui/button';
import * as Clerk from '@clerk/elements/common';

type AuthenticationButtonProviderProps = {
  provider: 'google' | 'github';
  isGlobalLoading: boolean;
};

export const AuthenticationButtonProvider = ({ provider, isGlobalLoading }: AuthenticationButtonProviderProps) => {
  return (
    <Clerk.Connection name={provider} asChild>
      <Button size="sm" variant="outline" type="button" disabled={isGlobalLoading}>
        <Clerk.Loading scope={`provider:${provider}`}>
          {isLoading =>
            isLoading ? (
              <Icons.spinner className="size-4 animate-spin" />
            ) : (
              <>
                {provider === 'google' && <Icons.google className="mr-2 size-4" />}
                {provider === 'github' && <Icons.github className="mr-2 size-4" />}
                {provider.charAt(0).toUpperCase() + provider.slice(1)}
              </>
            )
          }
        </Clerk.Loading>
      </Button>
    </Clerk.Connection>
  );
};
