import { NextResponse } from "next/server";
import { UserLogin } from "@/app/services/UserService";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const resultado = await UserLogin(body);

    return NextResponse.json(resultado);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Erro ao processar JSON" },
      { status: 400 },
    );
  }
}
