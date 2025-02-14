import { Code } from "lucide-react";
import Layout from "../components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Assicurati di avere il componente Button

const Software = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fadeIn">
        <div className="text-center space-y-4">
          <Code className="h-12 w-12 mx-auto text-brand-600" />
          <h1 className="text-4xl font-bold text-gray-900">Sviluppo Software</h1>
          <p className="text-xl text-gray-600">
            Soluzioni software personalizzate per ogni esigenza
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Sviluppo Custom</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Sviluppiamo software su misura utilizzando le tecnologie più
                moderne: Python, JavaScript, C++, Rust e Go. Ogni soluzione è
                progettata per soddisfare le specifiche esigenze del cliente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integrazione AI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Implementiamo soluzioni di intelligenza artificiale nei software
                esistenti, migliorando l&apos;efficienza e automatizzando i
                processi decisionali.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Le Nostre Competenze</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Sviluppo web frontend e backend</li>
              <li>Applicazioni desktop multipiattaforma</li>
              <li>Integrazione sistemi e API</li>
              <li>Machine Learning e AI</li>
              <li>Ottimizzazione performance</li>
            </ul>
          </CardContent>
        </Card>

        {/* Card per AGtechAI con background azzurro */}
        <Card className="bg-blue-100 border-2 border-blue-400">
          <CardHeader>
            <CardTitle>AGtechAI</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800">
              AGtechAI è un software avanzato per l'automazione con intelligenza artificiale, progettato per semplificare processi complessi.
            </p>
            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal"
              asChild
            >
              <a
                href="/prodotti/AGtechAI.exe" // Il percorso del file eseguibile
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Scarica AGtechAI
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Software;
