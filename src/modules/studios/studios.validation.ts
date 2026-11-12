import {z} from "zod";

export const createStudioSchema = z.object({

     title  : z.string().trim().min(1),
     category : z.enum([
         "Photography",
        "Film Production",
        "Podcast",
        "Music",
        "Art Workshop"
     ]),

     overview : z.string().trim().min(1),
     hourlyRate : z.number().positive(),
     securityDeposit : z.number().nonnegative(),
     maxCapacity : z.int().positive(),

     location : z.object({
        address : z.string().trim().min(1),
        city : z.string().trim().min(1),
        country : z.string().trim().min(1)
     }),

     coverImage : z.url().trim(),
     images : z.array(z.url()).min(1),
     amenities : z.array(z.string())








})

export const updateStudioSchema = createStudioSchema.partial().refine((data)=> Object.keys(data).length > 0, {message: "At least one field is required for update"});

export type  CreateStudioInput = z.infer<(typeof createStudioSchema)>
export type UpdateStudioInput = z.infer<(typeof updateStudioSchema)>