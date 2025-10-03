import { MetricCard } from "@/components/MetricCard";
import { SalesChart } from "@/components/SalesChart";
import { TopList } from "@/components/TopList";
import { DateRangeFilter } from "@/components/DateRangeFilter";
import { TrendingUp, DollarSign, Eye, MousePointerClick, Store, Package, Users } from "lucide-react";

// Dados mockados - substituir pela sua API
const mockSalesData = [
  { date: "01/01", vendas: 120, acessos: 2400 },
  { date: "02/01", vendas: 150, acessos: 2800 },
  { date: "03/01", vendas: 180, acessos: 3200 },
  { date: "04/01", vendas: 145, acessos: 2950 },
  { date: "05/01", vendas: 210, acessos: 3600 },
  { date: "06/01", vendas: 195, acessos: 3400 },
  { date: "07/01", vendas: 240, acessos: 4100 },
];

const topLojistas = [
  { name: "Loja Premium SP", value: "R$ 125.400", metric: "487 vendas" },
  { name: "Mega Store RJ", value: "R$ 98.750", metric: "392 vendas" },
  { name: "Super Loja MG", value: "R$ 87.200", metric: "341 vendas" },
  { name: "Top Shop RS", value: "R$ 76.900", metric: "298 vendas" },
  { name: "Elite Store BA", value: "R$ 65.300", metric: "254 vendas" },
];

const topProdutos = [
  { name: "Produto A Premium", value: "R$ 45.200", metric: "1.234 unidades vendidas" },
  { name: "Produto B Especial", value: "R$ 38.900", metric: "987 unidades vendidas" },
  { name: "Produto C Destaque", value: "R$ 32.500", metric: "845 unidades vendidas" },
  { name: "Produto D Elite", value: "R$ 28.700", metric: "723 unidades vendidas" },
  { name: "Produto E Plus", value: "R$ 24.100", metric: "612 unidades vendidas" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Dashboard E-commerce
              </h1>
              <p className="text-muted-foreground mt-1">
                Visão completa da performance dos lojistas
              </p>
            </div>
            <DateRangeFilter />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Métricas Principais */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Métricas Gerais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard
                title="Vendas Totais"
                value="1.240"
                icon={TrendingUp}
                trend={{ value: 12.5, isPositive: true }}
                variant="primary"
              />
              <MetricCard
                title="Volume de Vendas"
                value="R$ 487.250"
                icon={DollarSign}
                trend={{ value: 18.2, isPositive: true }}
                subtitle="Receita total"
                variant="success"
              />
              <MetricCard
                title="Acessos Totais"
                value="22.650"
                icon={MousePointerClick}
                trend={{ value: 8.7, isPositive: true }}
              />
              <MetricCard
                title="Visualizações de Páginas"
                value="45.320"
                icon={Eye}
                trend={{ value: -2.3, isPositive: false }}
              />
            </div>
          </section>

          {/* Gráfico de Vendas */}
          <section>
            <SalesChart data={mockSalesData} />
          </section>

          {/* Top Lojistas e Top Produtos */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TopList 
              title="Top Lojistas"
              items={topLojistas}
            />
            <TopList 
              title="Top Produtos"
              items={topProdutos}
            />
          </section>

          {/* Métricas Adicionais */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Visão Geral</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricCard
                title="Lojistas Ativos"
                value="87"
                icon={Store}
                subtitle="Realizaram vendas este mês"
              />
              <MetricCard
                title="Produtos Cadastrados"
                value="2.341"
                icon={Package}
                subtitle="Disponíveis na plataforma"
              />
              <MetricCard
                title="Clientes Cadastrados"
                value="5.678"
                icon={Users}
                subtitle="Total na plataforma"
              />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16 bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            Dashboard E-commerce © 2025 - Dados atualizados em tempo real via API
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
