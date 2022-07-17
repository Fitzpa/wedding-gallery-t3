export const baseUrl = process.env.NODE_ENV === 'production' ? 'https://wedding-gallery-t3.herokuapp.com' : 'http://localhost:3000';

export const url = `${baseUrl}/api/trpc`;
