import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Glassmorphism */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold gradient-text">Buffet Joliette 🐾</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#menu" className="hover:text-indigo-600 transition-colors">Menu</a>
            <a href="#heures" className="hover:text-indigo-600 transition-colors">Heures</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
          <a href="tel:1-450-000-0000" className="gradient-bg text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:opacity-90 transition-all">
            Appeler
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Le Goût de <br />
              <span className="gradient-text">l'Excellence</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mx-auto md:mx-0">
              Découvrez la plus grande variété de saveurs orientales à Joliette. 
              Une expérience gourmande, fraîche et abordable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="gradient-bg text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-transform">
                Voir le Menu
              </button>
              <button className="bg-white border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors">
                Localisation
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 gradient-bg opacity-20 blur-3xl rounded-full"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/images/assets/001-high-end-professional-studio-food-photog.png" 
                alt="Buffet Chinois Joliette spread"
                width={800}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features "Beau Bon Pas Cher" */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="card-trendy">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Beau</h3>
            <p className="text-slate-500">Un décor moderne et chaleureux pour vos repas en famille ou entre amis.</p>
          </div>
          <div className="card-trendy">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white mx-auto mb-4">
              <span className="text-2xl">🍱</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Bon</h3>
            <p className="text-slate-500">Des ingrédients frais, des sushis préparés sur place et plus de 100 plats.</p>
          </div>
          <div className="card-trendy">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Pas Cher</h3>
            <p className="text-slate-500">Le meilleur rapport qualité-prix de la région de Lanaudière.</p>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <ReservationForm />
        </div>
      </section>

      {/* Business Info Placeholder */}
      <section id="heures" className="py-20 px-4">
        <div className="max-w-4xl mx-auto card-trendy text-center">
          <h2 className="text-3xl font-bold mb-8">Nous Visiter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h4 className="font-bold text-indigo-600 mb-4 uppercase tracking-widest text-xs">Horaires</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex justify-between font-medium text-slate-900 border-b pb-2"><span>Lundi - Jeudi</span> <span>11h - 21h</span></li>
                <li className="flex justify-between font-medium text-slate-900 border-b pb-2"><span>Vendredi - Samedi</span> <span>11h - 22h</span></li>
                <li className="flex justify-between font-medium text-slate-900"><span>Dimanche</span> <span>11h - 21h</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-indigo-600 mb-4 uppercase tracking-widest text-xs">Adresse</h4>
              <p className="text-xl font-semibold mb-2">123 Rue de la Gare</p>
              <p className="text-slate-500 mb-4">Joliette, QC J6E 3Z1</p>
              <div className="w-full h-32 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-medium">
                [ Carte Interactive ]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 text-center">
        <p className="text-slate-400 text-sm font-medium">
          © 2026 Buffet Chinois Joliette. Créé avec 🐾 par Tony.
        </p>
      </footer>
    </main>
  );
}
