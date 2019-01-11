export interface APIResponse {
  response: Response;
}

export interface Response {
  status: string;
  statusCode: number;
  timestamp: number;
  total: number;
  results: Result[];
  errorMessage?: string;
}

export interface Result {
  [key: string]: string | number | null | undefined;
}
