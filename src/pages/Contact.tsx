
import { Mail, Instagram, Facebook } from "lucide-react";
import Layout from "../components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "agtechdesigne@gmail.com",
      href: "mailto:agtechdesigne@gmail.com",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Instagram",
      value: "agtechdesigne",
      href: "https://instagram.com/agtechdesigne",
    },
    {
      icon: <Facebook className="h-6 w-6" />,
      title: "Facebook",
      value: "Agtechdesigne",
      href: "https://facebook.com/Agtechdesigne",
    },
  ];

  return (
    <Layout>
      <div className="space-y-8 animate-fadeIn">
        <div className="text-center space-y-4">
          <Mail className="h-12 w-12 mx-auto text-brand-600" />
          <h1 className="text-4xl font-bold text-gray-900">Contatti</h1>
          <p className="text-xl text-gray-600">
            Restiamo in contatto
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((contact) => (
            <Card key={contact.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-brand-600">{contact.icon}</span>
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="link"
                  className="text-brand-600 hover:text-brand-700 p-0 h-auto font-normal"
                  asChild
                >
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base"
                  >
                    {contact.value}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lavoriamo Insieme</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Siamo sempre alla ricerca di nuove opportunità di collaborazione.
              Non esitare a contattarci per discutere del tuo progetto o per
              ricevere maggiori informazioni sui nostri servizi.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Contact;
