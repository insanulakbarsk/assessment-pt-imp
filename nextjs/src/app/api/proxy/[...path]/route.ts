import { NextRequest, NextResponse } from "next/server";

async function proxyRequest(
  req: NextRequest,
  params: { path: string[] },
  method: string
) {
  try {
    const token = req.headers.get("authorization") || "";
    const apiPath = params.path.join("/");
    const queryString = req.nextUrl.searchParams.toString();
    const apiUrl = `http://localhost:8000/api/${apiPath}${ queryString ? `?${queryString}` : "" }`;


    let body: string | FormData | undefined;
    const headers: Record<string, string> = { Authorization: token };

    if (method !== "GET") {
      const contentType = req.headers.get("content-type") || "";
      if (contentType.includes("multipart/form-data")) {
        body = await req.formData();
      } else {
        try {
          const json = await req.json();
          body = JSON.stringify(json);
          headers["Content-Type"] = "application/json";
        } catch {
          body = undefined;
        }
      }
    }

    const response = await fetch(apiUrl, { method, headers, body });

    if (!response.ok) {
      const errorText = await response.text();
      let errorData;
      try {
        errorData = errorText ? JSON.parse(errorText) : {};
      } catch {
        errorData = {};
      }
      return NextResponse.json(
        { error: `API error: ${response.status}`, details: errorData },
        { status: response.status }
      );
    }

    const text = await response.text();
    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = {};
    }

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const params = await context.params;
  return proxyRequest(req, params, "GET");
}

export async function POST(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const params = await context.params;
  return proxyRequest(req, params, "POST");
}

export async function PUT(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const params = await context.params;
  return proxyRequest(req, params, "PUT");
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const params = await context.params;
  return proxyRequest(req, params, "DELETE");
}
