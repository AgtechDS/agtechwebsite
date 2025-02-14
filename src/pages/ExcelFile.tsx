
import { FileSpreadsheet } from "lucide-react";
import Layout from "../components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExcelFile = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fadeIn">
        <div className="text-center space-y-4">
          <FileSpreadsheet className="h-12 w-12 mx-auto text-brand-600" />
          <h1 className="text-4xl font-bold text-gray-900">Excel File</h1>
          <p className="text-xl text-gray-600">
            Soluzioni Excel personalizzate per l&apos;analisi e gestione dati
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Automazione Processi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Sviluppiamo soluzioni Excel avanzate con macro e VBA per
                automatizzare i processi aziendali, ridurre gli errori e
                aumentare la produttività.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Analisi Dati</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Creiamo dashboard interattive e report automatizzati per
                visualizzare e analizzare i dati aziendali in modo efficace e
                intuitivo.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>I Nostri Servizi Excel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Sviluppo macro e automazioni VBA</li>
              <li>Creazione dashboard personalizzate</li>
              <li>Integrazione con database esterni</li>
              <li>Ottimizzazione fogli di calcolo esistenti</li>
              <li>Formazione personalizzata</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ExcelFile;
