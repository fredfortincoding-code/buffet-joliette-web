"use client";
import { useState } from 'react';

export default function ReservationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="card-trendy text-center py-12">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="bi bi-check-lg fs-2"></i>
        </div>
        <h3 className="text-2xl font-bold mb-2">Merci!</h3>
        <p className="text-slate-500">Votre réservation a été envoyée. Nous vous contacterons sous peu.</p>
        <button onClick={() => setSuccess(false)} className="mt-6 text-indigo-600 font-semibold">Réserver un autre</button>
      </div>
    );
  }

  return (
    <div className="card-trendy">
      <h3 className="text-2xl font-bold mb-6">Réserver une table</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" type="text" placeholder="Nom complet" className="form-control" required />
          <input name="phone" type="tel" placeholder="Téléphone" className="form-control" required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="date" type="date" className="form-control" required />
          <input name="time" type="time" className="form-control" required />
          <input name="guests" type="number" placeholder="Personnes" className="form-control" required min="1" />
        </div>
        <input name="email" type="email" placeholder="Email (optionnel)" className="form-control" />
        <button type="submit" disabled={loading} className="w-full gradient-bg text-white py-4 rounded-2xl font-bold text-lg shadow-xl disabled:opacity-50">
          {loading ? 'Envoi...' : 'Confirmer la réservation'}
        </button>
      </form>
    </div>
  );
}
