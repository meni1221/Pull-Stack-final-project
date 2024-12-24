import { useState } from "react";

export default function useFetch<T>(url: string): any {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  //   -----------GET-----------
  const GET = async () => {
    try {
      const response = await fetch(`${url}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error: ${errorData.error.message}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError((error as Error).message || "Unknown error");
    }
  };
  //   -----------GETBYCALL-----------
  const GETBYCALL = async (page: number,limit:number) => {
    try {
      const response = await fetch(`?page=${page}&limit=${limit}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! ${errorData.error.message}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error: unknown) {
      setError((error as Error).message || "An unknown error occurred.");
    }
  };

  //   -----------GETONE-----------
  const GETONE = async (id: string) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! ${errorData.error.message}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error: unknown) {
      setError((error as Error).message || "An unknown error occurred.");
    }
  };

  //   -----------POST-----------
  const POST = async (endpoint: string, body: object) => {
    try {
      const response = await fetch(`${url}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message || "Request failed");
      }
      const result = await response.json();
      setData(result);
      return result;
    } catch (error) {
      setError((error as Error).message || "Unknown error");
      throw error;
    }
  };

  //   -----------PATCH-----------
  const PATCH = async (id: string, body: any | object) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`error is:${errorData.error.message} `);
      }
      const result = await response.json();
      setData(result);
    } catch (error: unknown) {
      setError((error as Error).message || "Unknown error");
      throw error;
    }
  };

  //   --------------DELETE method--------------
  const DELETE = async (id: string) => {
    try {
      const response = await fetch(`${url}/:${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`error is: ${errorData.error.message}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return { data, error, GET, GETBYCALL, GETONE, POST, PATCH, DELETE };
}
