# Sistema de Transição de Página (Page Transition)

## Descrição
Sistema implementado para criar um efeito visual suave quando o usuário navega entre páginas/subpáginas. Um overlay com fade aparece brevemente, criando uma transição elegante.

## Componentes Criados

### 1. **NavigationContext** (`src/contexts/NavigationContext.tsx`)
Contexto global que gerencia o estado de transição entre páginas.
- `isTransitioning`: Boolean que indica se está em transição
- `startTransition()`: Inicia a animação de fade out
- `endTransition()`: Encerra a animação

### 2. **usePageTransition Hook** (`src/hooks/usePageTransition.ts`)
Hook customizado para acessar o contexto de navegação em qualquer componente.

```tsx
const { isTransitioning, startTransition, endTransition } = usePageTransition();
```

### 3. **PageTransitionOverlay** (`src/components/PageTransitionOverlay.tsx`)
Componente de overlay que renderiza o efeito visual de fade.
- Aparece e desaparece automaticamente com animação CSS
- Usa gradiente para melhor integração visual
- Z-index alto (9999) para estar sempre no topo

### 4. **TransitionLink** (`src/components/TransitionLink.tsx`)
Componente wrapper para links de navegação que disparam o efeito.

```tsx
<TransitionLink to="/direito-bancario" className="btn-class">
  Ir para Direito Bancário
</TransitionLink>
```

## Como Usar

### Opção 1: Usar TransitionLink (Recomendado)
Para links simples, use o componente TransitionLink:

```tsx
import TransitionLink from '@/components/TransitionLink';

<TransitionLink 
  to="/direito-bancario"
  className="text-foreground hover:text-primary"
>
  Direito Bancário
</TransitionLink>
```

### Opção 2: Usar o Hook Diretamente
Para controle manual:

```tsx
import { usePageTransition } from '@/hooks/usePageTransition';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();
  const { startTransition } = usePageTransition();

  const handleNavigation = (path: string) => {
    startTransition();
    setTimeout(() => {
      navigate(path);
    }, 300); // Aguarda a animação
  };

  return (
    <button onClick={() => handleNavigation('/areas')}>
      Ir para Áreas
    </button>
  );
};
```

## Configuração

### Duração da Animação
A animação padrão é de **500ms** (definida em `PageTransitionOverlay.tsx`).
Para alterar, modifique a classe `duration-500`:

```tsx
className={`... transition-opacity duration-[sua-duracao] ...`}
```

### Aparência Visual
Para modificar a cor/gradiente do overlay, edite em `PageTransitionOverlay.tsx`:

```tsx
style={{
  background: 'linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--secondary) / 0.3))',
}}
```

## Integração Atual

O sistema já foi integrado em:
- ✅ **MentorsSection**: Buttons "Saiba mais" agora usam TransitionLink
- ✅ **App.tsx**: Envolto com NavigationProvider
- ✅ **Overlay**: Renderizado no nível raiz do app

## Próximas Integrações (Opcional)

Para melhorar ainda mais a experiência, você pode adicionar TransitionLink em:
- Header de navegação
- Botões em Hero component
- Links em FinalSection
- Qualquer outro componente com navegação

## Exemplos

### Botão com Transição
```tsx
<TransitionLink
  to="/execucoes"
  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
>
  Ver Execuções
</TransitionLink>
```

### Link com onClick Customizado
```tsx
<TransitionLink
  to="/fraudes-golpes"
  onClick={() => console.log('Navegando para Fraudes')}
>
  Fraudes e Golpes
</TransitionLink>
```

## Troubleshooting

**Problema**: Overlay não aparece
- **Solução**: Verifique se NavigationProvider está envolvendo o BrowserRouter

**Problema**: Navegação ocorre muito rápido
- **Solução**: Aumente o timeout em TransitionLink (padrão 300ms)

**Problema**: Estilos não estão aplicados
- **Solução**: Verifique se o Tailwind CSS está compilando corretamente
