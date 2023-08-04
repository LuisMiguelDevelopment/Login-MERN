import { z } from 'zod';

export const createTaskSchema = z.object({
    title: z.string({
        required_error:'Title is Require',
    }),
    description: z.string({
        required_error:'Description is require'
    }),
    date: z.string().datetime().optional()
});