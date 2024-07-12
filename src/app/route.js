import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/en`);
}