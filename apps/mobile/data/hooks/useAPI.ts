import { useCallback } from "react";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export default function useAPI() {
  const httpGet = useCallback(async (path: string) => {
    const response = await fetch(`${baseUrl}${path}`);
    return extractData(response);
  }, []);

  const httpPost = useCallback(async (path: string, body?: any) => {
    const response = await fetch(`${baseUrl}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return extractData(response);
  }, []);

  function extractData(response: Response) {
    try {
      return response.json();
    } catch (error) {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return null;
    }
  }

  return { httpGet, httpPost };
}
