import AreaDetailPage from "@/components/AreaDetailPage";
import { Scale, Gavel, Wheat, CreditCard, AlertCircle, TrendingDown, Briefcase, Landmark, Shield, TrendingUp } from "lucide-react";

// Direito Bancário
export const DireitoBancarioPage = () => (
  <AreaDetailPage
    area={{
      title: "Direito Bancário",
      icon: Scale,
      description: "Especialização completa em questões envolvendo relações com instituições financeiras",
      longDescription: "O Direito Bancário é uma área complexa que envolve questões contratuais, regulatórias e litigiosas com instituições financeiras. Nossa experiência abrange desde revisão de contratos até litigância especializada em demandas contra bancos e financeiras. Nós ajudamos clientes a defender seus direitos quando enfrentam cobranças abusivas, tarifas indevidas e outras práticas irregulares.",
      items: [
        "Revisão de financiamentos",
        "Defesa contra tarifas e juros abusivos",
        "Ações de Superendividamento",
        "Negociação extrajudiciais com instituições financeiras",
        "Defesa em fraude em empréstimos",
        "Defesa em Golpe do pix",
        "Venda casada"
      ],
      whatsappMessage: "Olá! Gostaria de orientação sobre uma questão de Direito Bancário. Posso marcar uma consulta?"
    }}
  />
);

// Execuções
export const ExecucoesPage = () => (
  <AreaDetailPage
    area={{
      title: "Execuções",
      icon: Gavel,
      description: "Defesa estratégica em processos de execução e cobrança judicial",
      longDescription: "Os processos executivos demandam defesa rápida e precisa. Trabalhamos na elaboração de embargos à execução, defesa na impenhorabilidade de valores e patrimônio, bem como na construção de acordos judiciais. Nossa atuação busca proteger seus direitos, ensejando a defesa do seu mínimo existencial e patrimonial, encontrando soluções viáveis para resolver conflitos com segurança e eficiência.",
      items: [
        "Defesa em processos de execução",
        "Acordos judiciais em execução",
        "Defesa do patrimônio impenhorável"
      ],
      whatsappMessage: "Olá! Tenho uma questão relacionada a Execuções e gostaria de conversar com vocês. Posso agendar uma consulta?"
    }}
  />
);

// Direito do Agronegócio
export const DireitoAgronegocioPage = () => (
  <AreaDetailPage
    area={{
      title: "Direito do Agronegócio",
      icon: Wheat,
      description: "Assessoria jurídica especializada para o setor do agronegócio",
      longDescription: "O agronegócio possui características e desafios próprios. Oferecemos assessoria especializada em contratos rurais, financiamento agrícola, questões fundiárias e relacionamento com instituições financeiras que atuam no setor. Entendemos as particularidades da atividade agrícola e estamos prontos para proteger seus interesses.",
      items: [
        "Elaboração e revisão de contratos rurais",
        "Atuação na prorrogação/alongamento de dívidas rurais",
        "Defesas em execuções rurais",
        "Negociação com bancos e cooperativas",
        "Consultoria jurídica para produtores rurais"
      ],
      whatsappMessage: "Olá! Tenho uma questão de Direito do Agronegócio e gostaria de consultoria. Posso conversar com vocês?"
    }}
  />
);

// Empréstimos e Financiamentos
export const EmprestimosPage = () => (
  <AreaDetailPage
    area={{
      title: "Empréstimos e Financiamentos",
      icon: CreditCard,
      description: "Revisão e defesa em contratos de empréstimo e financiamento",
      longDescription: "Muitos empréstimos e financiamentos contêm cláusulas abusivas ou cobranças irregulares. Realizamos análise minuciosa de contratos, identificamos práticas irregulares e buscamos recuperar valores pagos indevidamente. Também atuamos em negociações para reestruturação de dívidas.",
      items: [
        "Revisão de contratos de empréstimo",
        "Análise de tarifas e juros cobrados",
        "Empréstimo consignado",
        "RMC e RCC",
        "Recuperação de valores pagos indevidamente"
      ],
      whatsappMessage: "Olá! Tenho dúvidas sobre um empréstimo ou financiamento. Gostaria de consultoria jurídica."
    }}
  />
);

// Cartões e Crédito
export const CartoesPage = () => (
  <AreaDetailPage
    area={{
      title: "Cartões e Crédito",
      icon: AlertCircle,
      description: "Defesa contra cobranças irregulares e práticas abusivas em cartões de crédito",
      longDescription: "Cartões de crédito frequentemente apresentam problemas como juros excessivos, limites aumentados sem autorização e cobranças não autorizadas. Nós ajudamos a identificar essas práticas abusivas e buscamos a resolução através de negociação ou litigância quando necessário.",
      items: [
        "Defesa contra juros elevados",
        "Limite aumentado sem autorização",
        "Venda casada e contratações indevidas",
        "Cancelamento de cobranças indevidas",
        "Negociação de dívidas de cartão"
      ],
      whatsappMessage: "Olá! Tenho problemas com meu cartão de crédito e gostaria de orientação jurídica."
    }}
  />
);

// Superendividamento
export const SuperendividamentoPage = () => (
  <AreaDetailPage
    area={{
      title: "Superendividamento",
      icon: TrendingDown,
      description: "Planejamento de reorganização financeira e mediação com credores",
      longDescription: "Quando o endividamento se torna incontrolável, é fundamental contar com orientação especializada. Oferecemos análise completa da situação financeira, planejamento de reorganização e mediação com credores. Nosso objetivo é ajudar você a recuperar a estabilidade financeira.",
      items: [
        "Análise de múltiplas dívidas",
        "Planejamento de reorganização financeira",
        "Renegociação com credores",
        "Alternativas de resolução de dívidas",
        "Consultoria financeira jurídica"
      ],
      whatsappMessage: "Olá! Estou em situação de superendividamento e gostaria de conversarcom vocês sobre opções de resolução."
    }}
  />
);

// Fraudes e Golpes
export const FraudesPage = () => (
  <AreaDetailPage
    area={{
      title: "Fraudes e Golpes Financeiros",
      icon: Briefcase,
      description: "Proteção contra fraudes, golpes e transferências indevidas",
      longDescription: "Fraudes financeiras e golpes prejudicam muitas pessoas. Oferecemos atuação rápida para identificar a fraude, tomar medidas preventivas e buscar recuperação dos valores. Auxiliamos na denúncia às autoridades competentes e litigamos contra as instituições responsáveis pela falta de segurança.",
      items: [
        "Identificação de golpe do Pix",
        "Defesa contra boletos falsos",
        "Combate à clonagem de cartão",
        "Recuperação de valores fraudados",
        "Litigância contra instituições financeiras"
      ],
      whatsappMessage: "Olá! Fui vítima de fraude ou golpe financeiro. Gostaria de orientação sobre como proceder."
    }}
  />
);

// Contas e Serviços Bancários
export const ContasPage = () => (
  <AreaDetailPage
    area={{
      title: "Contas e Serviços Bancários",
      icon: Landmark,
      description: "Proteção contra tarifas indevidas e problemas em serviços bancários",
      longDescription: "Os bancos frequentemente cobram tarifas indevidas ou fornecem serviços inadequados. Atuamos na identificação dessas práticas irregulares e na busca de restituição de valores pagos sem justificativa legal.",
      items: [
        "Combate a tarifas indevidas",
        "Recuperação de valores",
        "Defesa contra cobranças indevidas",
        "Análise de movimentações duvidosas",
        "Reparação por má prestação de serviço"
      ],
      whatsappMessage: "Olá! Tenho questionamentos sobre tarifas cobradas pela minha instituição financeira."
    }}
  />
);

// Execuções Bancárias
export const ExecucoesBancariasPage = () => (
  <AreaDetailPage
    area={{
      title: "Execuções Bancárias",
      icon: Shield,
      description: "Defesa do seu mínimo existencial e patrimônio em processos de execução",
      longDescription: "Quando um processo executivo bancário é ajuizado contra você, é fundamental contar com defesa especializada. Atuamos na proteção de seus bens essenciais e direitos fundamentais, buscando garantir a impenhorabilidade de bens protegidos por lei.",
      items: [
        "Impenhorabilidade de salário",
        "Impenhorabilidade do bem de família",
        "Impenhorabilidade do veículo",
        "Impenhorabilidade dos valores poupados",
        "Defesa integral em execuções bancárias"
      ],
      whatsappMessage: "Olá! Estou em processo de execução bancária e gostaria de orientação sobre meus direitos."
    }}
  />
);

// Prorrogação/Alongamento de Dívidas Rurais
export const DividasRuraisPage = () => (
  <AreaDetailPage
    area={{
      title: "Prorrogação e Alongamento de Dívidas Rurais",
      icon: TrendingUp,
      description: "Defesa do direito do produtor rural em pagar o que é justo e adequado",
      longDescription: "Produtores rurais frequentemente enfrentam dificuldades para pagar suas dívidas. Trabalhamos na renegociação junto a bancos e instituições financeiras, buscando condições mais adequadas à realidade do produtor rural. Nossas ações visam garantir que o produtor possa continuar sua atividade com sustentabilidade financeira.",
      items: [
        "Renegociação de dívidas rurais com bancos",
        "Prorrogação de prazos de pagamento",
        "Alongamento de financiamentos agrícolas",
        "Defesa dos direitos do produtor rural",
        "Orientação financeira e jurídica especializada"
      ],
      whatsappMessage: "Olá! Sou produtor rural com dificuldades em pagar minhas dívidas. Gostaria de conversar sobre opções de renegociação."
    }}
  />
);
