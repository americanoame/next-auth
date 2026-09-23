import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Format Errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any): string {
  if (error.name === 'ZodError') {

    // Extract field-specific error messages
    const fieldErrors = Object.keys(error.errors).map((field) => {

      // Get error message for the field
      const message = error.errors[field].message;

      // Ensure message is a string
      return typeof message === 'string' ? message : JSON.stringify(message);
    });

    return fieldErrors.join('. '); // Join error messages into a single string
  } else if (
    // Check if the error is a Prisma unique constraint error
    error.name === 'PrismaClientKnownRequestError' &&
    error.code === 'P2002'
  ) {
    
    // Handle Prisma error

 // error.meta?.target
 // meta is an optional property in the Prisma error object that contains additional error details.
 // The ?. (optional chaining) ensures that if meta is undefined or null, it won't cause an error.
 
 // error.meta.target checks exists (i.e., is not undefined or null).
 // If it exists, we proceed to extract the field name.
 // error.meta.target[0]

 // target is usually an array containing the name(s) of the conflicting field(s).
 // [0] grabs the first field name from the array.
 // : 'Field' (Fallback value)

 // If error.meta.target is undefined or empty, 'Field' is used as a generic fallback.

    const field = error.meta?.target ? error.meta.target[0] : 'Field';


    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  } else {
    // Handle other errors
    return typeof error.message === 'string'
      ? error.message  // Return the error message if it's a string
      : JSON.stringify(error.message);  // Convert to string if it's not
  }
}
