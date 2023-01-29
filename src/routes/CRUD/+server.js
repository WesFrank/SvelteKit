import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */

export async function GET({url}) {
 
  const completed = url.searchParams.get('completed')

  const response = {
    status: 200,
    body: {
      completed: "Expense"
    }
  }

  if (completed === 'true') {

    response.body.completed = "true";

  } else if (completed === 'false') {

    response.body.completed = 'false';

  }
 
  return new Response(JSON.stringify(response));

}