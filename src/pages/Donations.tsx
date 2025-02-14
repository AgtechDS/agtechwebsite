import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Donations = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6 animate-fadeIn">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Donazioni – Supporta l’Innovazione</h1>
          <p className="text-xl text-gray-600">
            Aiutaci a sviluppare software open-source per un futuro migliore.
          </p>
        </div>

        <p className="text-gray-700">
          Noi di <strong>AgTechDesigne</strong> crediamo nella tecnologia come strumento per migliorare la vita delle persone. 
          Per questo, investiamo tempo e risorse nello sviluppo di <strong>software pubblici e gratuiti</strong>, accessibili a tutti.
        </p>

        <p className="text-gray-700">
          Uno dei nostri progetti più importanti è <strong>IAm</strong>, un social network innovativo che incentiva le relazioni reali, 
          favorendo gli <strong>incontri dal vivo</strong> rispetto alle interazioni virtuali. Il nostro obiettivo è creare un ambiente digitale 
          che promuova connessioni autentiche, evitando la dipendenza dai social tradizionali.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Come puoi contribuire?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>✔️ <strong>Migliorare e mantenere</strong> i nostri progetti pubblici</li>
            <li>✔️ <strong>Sviluppare nuove funzionalità</strong> e migliorare l’esperienza utente</li>
            <li>✔️ <strong>Garantire l’accessibilità gratuita</strong> per tutti</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Dona Ora</h2>
          <p className="text-gray-700">Puoi effettuare una donazione attraverso:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              💰 <strong>
                <a href="https://revolut.com/referral/?referral-code=andreatqyc!FEB2-25-AR" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-500 hover:underline">
                  Revolut
                </a>
              </strong>
            </li>

            <li className="flex items-center gap-2">
              🔗 <strong>Criptovalute</strong>
              <Button asChild className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm">
                <a href="https://minepi.com/AWGWG" target="_blank" rel="noopener noreferrer">
                  Dona con Pi Network
                </a>
              </Button>
            </li>

            <li>🏦 <strong>Bonifico bancario</strong> (IBAN: LT74 3250 0336 0194 7896)</li>
          </ul>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            <a href="https://paypal.me/AWGWG?country.x=IT&locale.x=it_IT" target="_blank" rel="noopener noreferrer">
              ❤️ Dona con PayPal
            </a>
          </Button>

          <Button 
            onClick={() => navigate("/")} 
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm"
          >
            ⬅️ Torna alla Home
          </Button>
        </div>

        <p className="text-gray-700 text-center">
          Anche un piccolo contributo può fare la differenza! Grazie per il tuo supporto e per credere nell’innovazione al servizio delle persone. ❤️
        </p>
      </div>
    </Layout>
  );
};

export default Donations;
