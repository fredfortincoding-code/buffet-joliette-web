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
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 gradient-text">Dashboard Admin</h1>
        <div className="card-trendy overflow-x-auto -mx-4 md:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 text-sm">
                  <th className="pb-4 px-4 font-semibold whitespace-nowrap">Client</th>
                  <th className="pb-4 px-4 font-semibold whitespace-nowrap">Contact</th>
                  <th className="pb-4 px-4 font-semibold whitespace-nowrap">Date & Heure</th>
                  <th className="pb-4 px-4 font-semibold whitespace-nowrap text-center">#</th>
                  <th className="pb-4 px-4 font-semibold whitespace-nowrap">Statut</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {reservations.map((res) => (
                  <tr key={res.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-900 whitespace-nowrap">{res.name}</td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span>{res.phone}</span>
                        <small className="opacity-60">{res.email}</small>
                      </div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm">{res.date}<br/><span className="text-indigo-600 font-bold">{res.time}</span></td>
                    <td className="py-4 px-4 text-center">{res.guests}</td>
                    <td className="py-4 px-4 text-xs whitespace-nowrap">
                      <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full font-bold uppercase tracking-tighter shadow-sm">
                        {res.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {!reservations.length && (
          <div className="text-center py-12 text-slate-400">
            Aucune réservation pour le moment.
          </div>
        )}
      </div>
    </div>
  );
}
