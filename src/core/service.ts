/**
 * Comment: global function that send a request and returns the response
 * @param request URL endpoint
 * @returns Endpoint response
 */
export async function http(request: RequestInfo): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}
