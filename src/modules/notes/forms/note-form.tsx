'use client';

import { Button } from '@/core/presentation/components/common/ui/button';
import { Form } from '@/core/presentation/components/common/ui/form';
import { InputForm } from '@/core/presentation/components/common/ui/input-form';
import { TextAreaForm } from '@/core/presentation/components/common/ui/textarea-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { createNoteAction } from '../actions/create-note.action';
import { CreateNoteSchema } from './note-form.schema';

export const NoteForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof CreateNoteSchema>>({
    resolver: zodResolver(CreateNoteSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  function onSubmit(data: z.infer<typeof CreateNoteSchema>) {
    startTransition(async () => {
      const payload = await createNoteAction(data);

      form.reset();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputForm control={form.control} name="title" label="Title" />
        <TextAreaForm control={form.control} name="content" label="Content" />

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? 'Creating...' : 'Create'}
        </Button>
      </form>
    </Form>
  );
};
