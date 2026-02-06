"use client";
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [reservations, setReservations] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/reservations')
      .then(res => res.json())
      .then(data => setReservations(data));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 gradient-text">Dashboard Admin</h1>
        <div className="card-trendy overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 text-sm">
                <th className="pb-4 font-semibold">Client</th>
                <th className="pb-4 font-semibold">Contact</th>
                <th className="pb-4 font-semibold">Date & Heure</th>
                <th className="pb-4 font-semibold">Invités</th>
                <th className="pb-4 font-semibold">Statut</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {reservations.map((res) => (
                <tr key={res.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 font-medium text-slate-900">{res.name}</td>
                  <td className="py-4">{res.phone}<br/><small className="opacity-60">{res.email}</small></td>
                  <td className="py-4">{res.date} @ {res.time}</td>
                  <td className="py-4">{res.guests}</td>
                  <td className="py-4 text-xs">
                    <span className="bg-amber-100 text-amber-600 px-2 py-1 rounded-full font-bold uppercase tracking-tighter">
                      {res.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
