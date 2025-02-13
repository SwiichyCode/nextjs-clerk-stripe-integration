import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/core/presentation/components/common/ui/form';
import { Input } from '@/core/presentation/components/common/ui/input';
import * as React from 'react';
import type { Control } from 'react-hook-form';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  control?: Control<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  name: string;
  label?: string;
  description?: React.HTMLAttributes<HTMLParagraphElement>['children'];
  showError?: boolean;
}

const InputForm = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, control, name, label, description, showError = true, ...props }, ref) => {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className={className}>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Input {...field} ref={ref} type={type} className={className} {...props} />
            </FormControl>

            {description && <FormDescription>{description}</FormDescription>}

            {showError && <FormMessage className="text-red-500" />}
          </FormItem>
        )}
      />
    );
  },
);

InputForm.displayName = 'Input';

export { InputForm };
