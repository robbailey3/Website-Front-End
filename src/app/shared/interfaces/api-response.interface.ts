export interface APIResponse {
  response: Response;
}

interface Response {
  status: string;
  statusCode: number;
  timestamp: number;
  total: number;
  results: Result[] | Result;
  errorMessage?: string;
}

interface Result extends Object {
  [key: string]: any;
}
