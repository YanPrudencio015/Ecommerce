# 🎮 LevelUp — E-commerce de Jogos Digitais

> Plataforma de e-commerce para jogos digitais de PC, Xbox e PlayStation, com foco em performance, experiência de usuário e arquitetura escalável com Next.js 15.

**Deploy:** [ecommerce-eight-theta-66.vercel.app](https://ecommerce-eight-theta-66.vercel.app) · **Status:** Em desenvolvimento ativo

---

## O problema

Plataformas de jogos como Steam e Xbox Store oferecem experiências ricas, mas construir uma do zero exige decisões arquiteturais cuidadosas: como gerenciar estado global sem prop drilling excessivo? Como garantir que dados sensíveis de APIs não vazem para o cliente? Como organizar fontes e layout para uma identidade visual coerente?

O LevelUp nasceu como laboratório para essas decisões — construindo uma plataforma real de e-commerce de ponta a ponta, com autenticação, catálogo por plataforma, wishlist, sistema de comunidades e notificações.

---

## ✦ Funcionalidades

- Catálogo de jogos separado por plataforma (PC, Xbox, PlayStation)
- Sistema de autenticação e criação de conta
- Wishlist e carrinho por usuário
- Feed de notificações
- Comunidades e sistema de amigos
- Seção de lançamentos futuros
- Layout responsivo com sidebar dinâmica

---

## 🛠 Stack e decisões técnicas

| Tecnologia | Por que foi escolhida |
|---|---|
| **Next.js 15 (App Router + Turbopack)** | Separação entre Server e Client Components — lógica de dados e autenticação fica no servidor, sem expor tokens no cliente. Turbopack reduz tempo de build em desenvolvimento |
| **TypeScript** | Tipagem das respostas de API desde o início evita erros silenciosos em estruturas de dados de produtos e usuários |
| **React Context API** | Três contextos independentes (`GameContext`, `SidebarContext`, `LoadingContext`) segmentam responsabilidades: dados de jogo, estado de UI e feedback de carregamento — sem acoplamento desnecessário |
| **Axios** | Abstração de requisições HTTP com interceptors para tratamento centralizado de erros e tokens |
| **Motion (Framer Motion)** | Animações de UI declarativas sem overhead de CSS customizado |
| **Swiper** | Carrossel de jogos com performance nativa, substituindo implementações manuais |
| **Tailwind CSS v4** | Estilização responsiva com design system consistente |

---

## 🧠 Decisões de arquitetura

**Gerenciamento de estado com Context API segmentado**

Em vez de um único contexto global (que re-renderizaria toda a árvore a cada mudança), o projeto usa três contextos com responsabilidades bem definidas:

```
GameProvider        → dados de produtos, catálogo, wishlist
LoadingProvider     → estado de loading global (spinners, skeletons)
SidebarProvider     → estado de UI da sidebar (aberta/fechada)
```

Isso garante que uma mudança no estado da sidebar não dispara re-renders nos componentes de produto.

**Server Components para dados sensíveis**

Chamadas para APIs externas e lógica de autenticação são feitas em Server Components, mantendo credenciais fora do bundle do cliente — padrão equivalente ao adotado no Safe Ride para a API do Fogo Cruzado.

---

## ⚙️ Rodando localmente

```bash
git clone https://github.com/YanPrudencio015/Ecommerce
cd Ecommerce
npm install
npm run dev
```

Acesse `http://localhost:3000`

---

## 📁 Estrutura do projeto

```
app/
├── contexts/         # GameContext, SidebarContext, LoadingContext
├── components/       # Componentes reutilizáveis de UI
├── api/              # Route Handlers (Server-side)
├── globals.css       # Design tokens e estilos globais
lib/                  # Configurações e utilitários
public/               # Assets estáticos
```

---

## 🔜 Roadmap

- [ ] Integração com API real de catálogo de jogos (RAWG ou IGDB)
- [ ] Sistema de pagamento (Stripe)
- [ ] Persistência de carrinho e wishlist (banco de dados)
- [ ] Reviews e comentários por produto
- [ ] Autenticação com NextAuth.js
