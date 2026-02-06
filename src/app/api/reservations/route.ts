import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, guests, date, time } = body;

    const db = getDb();
    
    return new Promise((resolve) => {
      db.run(
        'INSERT INTO reservations (name, email, phone, guests, date, time) VALUES (?, ?, ?, ?, ?, ?)',
        [name, email, phone, guests, date, time],
        function (err) {
          if (err) {
            resolve(NextResponse.json({ error: err.message }, { status: 500 }));
          } else {
            // Placeholder for Email logic
            console.log(`Email notification should be sent for reservation ${this.lastID}`);
            resolve(NextResponse.json({ id: this.lastID, success: true }, { status: 201 }));
          }
        }
      );
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET() {
  const db = getDb();
  return new Promise((resolve) => {
    db.all('SELECT * FROM reservations ORDER BY date DESC, time DESC', (err, rows) => {
      if (err) {
        resolve(NextResponse.json({ error: err.message }, { status: 500 }));
      } else {
        resolve(NextResponse.json(rows));
      }
    });
  });
}
