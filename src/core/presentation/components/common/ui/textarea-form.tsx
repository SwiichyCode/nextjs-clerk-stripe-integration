import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/core/presentation/components/common/ui/form';
import { Textarea } from '@/core/presentation/components/common/ui/textarea';
import React from 'react';
import type { Control } from 'react-hook-form';

export interface TextAreaFormProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  control?: Control<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  name: string;
  label?: string;
  showError?: boolean;
}

const TextAreaForm = React.forwardRef<HTMLTextAreaElement, TextAreaFormProps>(
  ({ className, control, name, label, showError = true, ...props }, ref) => {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className={className}>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Textarea {...field} ref={ref} className={className} {...props} />
            </FormControl>

            {showError && <FormMessage className="text-red-500" />}
          </FormItem>
        )}
      />
    );
  },
);

TextAreaForm.displayName = 'TextAreaForm';
export { TextAreaForm };
