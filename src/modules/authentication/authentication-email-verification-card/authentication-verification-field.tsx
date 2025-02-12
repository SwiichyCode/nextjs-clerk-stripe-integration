import { cn } from '@/core/presentation/config/libs/utils';
import * as Clerk from '@clerk/elements/common';

export const AuthenticationVerificationField = () => {
  return (
    <Clerk.Field name="code" className="space-y-2">
      <Clerk.Label className="sr-only">Email address</Clerk.Label>
      <div className="flex justify-center text-center">
        <Clerk.Input
          type="otp"
          className="flex justify-center has-[:disabled]:opacity-50"
          autoSubmit
          render={({ value, status }) => {
            return (
              <div
                data-status={status}
                className={cn(
                  'relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
                  {
                    'z-10 ring-2 ring-ring ring-offset-background': status === 'cursor' || status === 'selected',
                  },
                )}
              >
                {value}
                {status === 'cursor' && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
                  </div>
                )}
              </div>
            );
          }}
        />
      </div>
      <Clerk.FieldError className="block text-center text-sm text-destructive" />
    </Clerk.Field>
  );
};
