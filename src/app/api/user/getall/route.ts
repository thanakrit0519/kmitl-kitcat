import { NextResponse } from 'next/server'
import { KCUser } from '@/lib/method/KCUser';

export async function GET() {
    try {
        const result = await KCUser.getAll()
        return NextResponse.json(result, { status: 200 })
    } catch (error) {
        console.error('Error : ', error)
        return NextResponse.json(error, { status: 500 })
    }
}