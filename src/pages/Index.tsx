import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, BarChart3, Shield } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: (
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
          <img
            src="/lovable-uploads/f407f2c0-f9eb-4b4d-ad5c-1625e78e64ee.png"
            alt="Agroloca"
            className="w-6 h-6 object-contain"
          />
        </div>
      ),
      title: "Localização Inteligente",
      description: "Encontre equipamentos agrícolas próximos a você com nossa tecnologia de geolocalização avançada."
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Rede de Produtores",
      description: "Conecte-se com outros produtores rurais e compartilhe experiências e recursos."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-600" />,
      title: "Analytics Avançado",
      description: "Acompanhe o desempenho e otimize o uso dos seus equipamentos com relatórios detalhados."
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Segurança Total",
      description: "Transações seguras e dados protegidos com a mais alta tecnologia de criptografia."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
              <img src="/lovable-uploads/f407f2c0-f9eb-4b4d-ad5c-1625e78e64ee.png" alt="Agroloca Logo" className="w-8 h-8 object-contain" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">agroloca</h1>
          </div>
          <Button
            onClick={() => navigate('/login')}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Entrar
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Revolucione sua
            <span className="text-emerald-500 block">agricultura</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A maior plataforma de equipamentos agrícolas do Brasil. Conecte-se, localize e otimize seus recursos com tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={() => navigate('/login')}
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-12 shadow-2xl animate-fade-in" style={{ animationDelay: '1s' }}>
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para transformar sua agricultura?
          </h3>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 1.000 produtores que já estão usando o Agroloca para otimizar seus recursos.
          </p>
          <Button
            onClick={() => navigate('/login')}
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Entrar na Plataforma
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <img src="/lovable-uploads/f407f2c0-f9eb-4b4d-ad5c-1625e78e64ee.png" alt="Agroloca Logo" className="w-6 h-6 object-contain" />
            </div>
            <span className="text-xl font-bold text-gray-900">agroloca</span>
          </div>
          <p className="text-gray-600">
            © 2024 Agroloca. Conectando o futuro da agricultura brasileira.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
