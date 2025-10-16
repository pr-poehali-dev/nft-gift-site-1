import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-['Orbitron'] bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
              NFT GIFTS GAME
            </h1>
            <div className="flex items-center gap-6">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">
                Home
              </a>
              <a href="#game" className="text-white/80 hover:text-white transition-colors">
                Game
              </a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-amber-500 blur-3xl opacity-30"></div>
            <h2 className="text-6xl md:text-7xl font-black font-['Orbitron'] relative bg-gradient-to-r from-purple-400 via-amber-300 to-purple-400 bg-clip-text text-transparent animate-pulse">
              NFT GIFTS X
            </h2>
          </div>
          <p className="text-xl text-white/70 mb-12 max-w-2xl">
            Получайте эксклюзивные NFT подарки в Telegram. Играйте, собирайте коллекцию и обменивайтесь уникальными цифровыми активами с друзьями.
          </p>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 font-['Orbitron'] text-lg px-8 py-6 rounded-2xl transition-all hover:scale-105"
          >
            <Icon name="Gift" className="mr-2" size={24} />
            О ПОДАРКАХ
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-900/40 to-black border-purple-500/30 p-8 hover:scale-105 transition-transform">
            <div className="flex justify-center mb-6">
              <div className="bg-purple-600/20 p-4 rounded-2xl">
                <Icon name="Gift" size={48} className="text-purple-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold font-['Orbitron'] text-white mb-4 text-center">
              NFT Подарки
            </h3>
            <p className="text-white/60 text-center">
              Получайте уникальные NFT подарки прямо в Telegram. Каждый подарок — это эксклюзивный цифровой актив.
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-amber-900/40 to-black border-amber-500/30 p-8 hover:scale-105 transition-transform">
            <div className="flex justify-center mb-6">
              <div className="bg-amber-600/20 p-4 rounded-2xl">
                <Icon name="Gamepad2" size={48} className="text-amber-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold font-['Orbitron'] text-white mb-4 text-center">
              Играй и побеждай
            </h3>
            <p className="text-white/60 text-center">
              Участвуйте в захватывающих играх и зарабатывайте редкие коллекционные предметы.
            </p>
          </Card>


        </div>

        <Card className="bg-gradient-to-br from-purple-950/60 via-black to-amber-950/20 border-purple-500/50 p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-4xl font-black font-['Orbitron'] text-white mb-4 bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                Начни играть прямо сейчас!
              </h3>
              <p className="text-white/70 text-lg mb-6">
                Все версии игры есть в Телеграм
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 font-['Orbitron'] px-8 rounded-xl"
                onClick={() => window.open('https://t.me/+Vp53AATd4-s1NTk6', '_blank')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Telegram
              </Button>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-amber-500 blur-2xl opacity-50"></div>
                <Icon name="Trophy" size={120} className="relative text-amber-400" />
              </div>
            </div>
          </div>
        </Card>
      </main>

      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © 2025 NFT Gifts Game. Создано для любителей криптоискусства.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;