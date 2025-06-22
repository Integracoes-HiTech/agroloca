import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BarChart3, Shield, Zap, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (email === 'admin@agroloca.com' && password === '123456') {
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo ao Agroloca"
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Erro no login",
          description: "Email ou senha incorretos",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  const features = [
    {
      icon: (
        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
          <img
            src="/lovable-uploads/f407f2c0-f9eb-4b4d-ad5c-1625e78e64ee.png"
            alt="Agroloca"
            className="w-4 h-4 object-contain"
          />
        </div>
      ),
      title: "Localização Inteligente",
      description: "Encontre equipamentos agrícolas próximos a você",
      delay: "0s"
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-300" />,
      title: "Rede de Produtores",
      description: "Conecte-se com outros produtores rurais",
      delay: "0.2s"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-yellow-300" />,
      title: "Analytics Avançado",
      description: "Acompanhe o desempenho dos seus equipamentos",
      delay: "0.4s"
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-300" />,
      title: "Segurança Total",
      description: "Transações seguras e dados protegidos",
      delay: "0.6s"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-300" />,
      title: "Resposta Rápida",
      description: "Sistema otimizado para alta performance",
      delay: "0.8s"
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-300" />,
      title: "Alcance Nacional",
      description: "Cobertura em todo território brasileiro",
      delay: "1s"
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-white to-gray-50">
        <div className="w-full max-w-md animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 mb-4 shadow-lg rounded-full">
              <img
                src="/lovable-uploads/f407f2c0-f9eb-4b4d-ad5c-1625e78e64ee.png"
                alt="Agroloca Logo"
                className="w-10 h-10 object-scale-down"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">agroloca</h1>
            <p className="text-gray-600">Sua plataforma agrícola inteligente</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Bem-vindo de volta</CardTitle>
              <CardDescription className="text-center">
                Entre com suas credenciais para acessar sua conta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@agroloca.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="123456"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-11 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all duration-200 transform hover:scale-[1.02]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Entrando...
                    </div>
                  ) : (
                    'Entrar'
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Dados para teste: <br />
                  <span className="font-semibold">admin@agroloca.com</span> /{' '}
                  <span className="font-semibold">123456</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Side - Features */}
      <div className="flex-1 bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 flex items-center justify-center relative overflow-hidden">
        {/* Background Blur Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
              Revolucione sua agricultura
            </h2>
            <p className="text-emerald-100 text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Conecte-se com a maior rede de equipamentos agrícolas do Brasil
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-white animate-fade-in"
                style={{ animationDelay: feature.delay }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-emerald-100 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Sistema Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
