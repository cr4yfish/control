// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  endpoint: string,
  body: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const { endpoint } = req.query
    console.log("Getting endpoint:", endpoint);

    const url = "http://homeassistant.local:8123/api/";
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlZDgzN2QxNzRhMTY0Y2RhYWUyMjUyNzcxZGRmN2UyMCIsImlhdCI6MTY2NTkxMzczMCwiZXhwIjoxOTgxMjczNzMwfQ.m4gvgMjYIsE8ISEJjlSS9LAdyl7p6SJDC73cq9Gf6EE";

    // headers
        let options: RequestInit = {};
        const headersInit: HeadersInit = {};
        options.headers = headersInit;
        options.headers["Authorization"] = "Bearer " + token;
        options.headers["Content-Type"] = "application/json";

    const response = await fetch(url + endpoint, options);
    const data = await response.json();
    console.log(data);

    res.status(200).json({
        body: data,
        endpoint: ''
    });
}
