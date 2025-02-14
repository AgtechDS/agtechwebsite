
import { Server, Code, FileSpreadsheet } from "lucide-react";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fadeIn">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
           Innovazione e Tecnologia
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Sviluppiamo soluzioni digitali avanzate per il tuo successo
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="leading-relaxed">
            AgTechDesigne è un&apos;azienda che sviluppa software AI personalizzati,
            siti web su misura e offre soluzioni digitali avanzate. Aiutiamo
            aziende e privati a sfruttare l&apos;intelligenza artificiale per
            ottimizzare processi e creare strumenti innovativi. Dalla
            progettazione di modelli AI alla creazione di siti web interattivi,
            offriamo soluzioni su misura per ogni esigenza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-200 hover:border-brand-300 transition-colors bg-white shadow-sm hover:shadow-md">
            <Server className="h-8 w-8 text-brand-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI & Computing</h3>
            <p className="text-gray-600">
              Soluzioni di computing distribuite e modelli AI personalizzati
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 hover:border-brand-300 transition-colors bg-white shadow-sm hover:shadow-md">
            <Code className="h-8 w-8 text-brand-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sviluppo Software</h3>
            <p className="text-gray-600">
              Software su misura in Python, JavaScript, C++, Rust e Go
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 hover:border-brand-300 transition-colors bg-white shadow-sm hover:shadow-md">
            <FileSpreadsheet className="h-8 w-8 text-brand-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automazione Dati</h3>
            <p className="text-gray-600">
              Soluzioni Excel personalizzate per l&apos;analisi e gestione dati
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
