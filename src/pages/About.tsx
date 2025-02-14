
import { Info } from "lucide-react";
import Layout from "../components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fadeIn">
        <div className="text-center space-y-4">
          <Info className="h-12 w-12 mx-auto text-brand-600" />
          <h1 className="text-4xl font-bold text-gray-900">Chi Siamo</h1>
          <p className="text-xl text-gray-600">
            Il nostro impegno per l&apos;innovazione tecnologica
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="leading-relaxed">
            AgTechDesigne nasce dalla passione per l&apos;innovazione e la tecnologia.
            Il nostro team di esperti sviluppatori e consulenti IT lavora ogni
            giorno per portare soluzioni all&apos;avanguardia ai nostri clienti,
            combinando competenze tecniche avanzate con una profonda comprensione
            delle esigenze aziendali.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>La Nostra Missione</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Rendere accessibili le tecnologie più avanzate alle aziende di
                ogni dimensione, guidando la trasformazione digitale attraverso
                soluzioni innovative e personalizzate.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>I Nostri Valori</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Innovazione continua</li>
                <li>Qualità e affidabilità</li>
                <li>Trasparenza e collaborazione</li>
                <li>Formazione continua</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Il Nostro Impegno</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Ci impegniamo a fornire soluzioni tecnologiche all&apos;avanguardia,
              mantenendo sempre al centro le esigenze dei nostri clienti. La
              nostra esperienza nel campo dell&apos;AI e dello sviluppo software ci
              permette di offrire servizi di alta qualità, garantendo risultati
              concreti e misurabili.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default About;
