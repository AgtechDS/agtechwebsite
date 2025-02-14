
import { Server } from "lucide-react";
import Layout from "../components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NodePI = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fadeIn">
        <div className="text-center space-y-4">
          <Server className="h-12 w-12 mx-auto text-brand-600" />
          <h1 className="text-4xl font-bold text-gray-900">NodePI</h1>
          <p className="text-xl text-gray-600">
            Noleggio nodi Pi per progetti AI e computing distribuito
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Computing Distribuito</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Accedi a una rete di nodi Raspberry Pi ottimizzati per progetti di
                machine learning e AI. Ideale per addestrare modelli distribuiti e
                eseguire calcoli paralleli a costi contenuti.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gestione Flessibile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Noleggia i nodi in base alle tue necessità, con piani flessibili da
                1 a 12 mesi. Include configurazione, manutenzione e supporto
                tecnico dedicato.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Caratteristiche del Servizio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Cluster pre-configurati per machine learning</li>
              <li>Monitoraggio prestazioni in tempo reale</li>
              <li>Backup automatici e sicurezza avanzata</li>
              <li>Supporto tecnico 24/7</li>
              <li>Scalabilità on-demand</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default NodePI;
