
import { Code } from "lucide-react";
import Layout from "../components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      </div>
    </Layout>
  );
};

export default Software;
