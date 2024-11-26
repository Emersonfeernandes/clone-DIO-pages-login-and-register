### Projeto React que implementa uma interface simples com páginas de login e registro, usando React Router para gerenciar a navegação e styled-components para o design visual.

---

### **Componente `Login`**
Arquivo: **`Login.js`**

#### Código:
```javascript
function Login() {
  return (
    <Container>
      <Logo>
        <img src="URL_DA_LOGO" />
      </Logo>
      <ContentInform>
        <Title>Domine as tecnologias utilizadas pelas empresas mais inovadoras</Title>
        <Subtitle>Descrição dos cursos e formações disponíveis.</Subtitle>
      </ContentInform>
      <Content>
        <Title>Faça seu login</Title>
        <Form>
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Password" />
          <Button>Entrar</Button>
        </Form>
        <Link href="/recuperar-senha">Esqueci minha senha</Link>
        <Link href="/cadastro">Criar conta</Link>
      </Content>
    </Container>
  );
}
```

#### O que faz?
- **Estrutura da página:** Dividida em duas áreas principais:
  - **Informações principais (`ContentInform`)**: Contém textos promocionais sobre a plataforma.
  - **Formulário de login (`Content`)**: Formulário com campos de entrada para e-mail e senha.
- **Estilização:** Os elementos são estilizados usando componentes do `styled-components`.

---

### **Componente `Register`**
Arquivo: **`Register.js`**

#### Código:
```javascript
const schema = yup.object({
  firstName: yup.string().required(),
  email: yup.string().email('E-mail invalido').required(),
  password: yup.string().min(6, 'Minimo de 6 caracteres').required(),
}).required();

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Logo>
        <img src="URL_DA_LOGO" />
      </Logo>
      <ContentInform>
        <Title>Domine as tecnologias utilizadas pelas empresas mais inovadoras</Title>
      </ContentInform>
      <Content>
        <Title>Crie sua conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input name="firstName" type="text" placeholder="Nome completo" {...register("firstName")} />
          <Input name="email" type="email" placeholder="E-mail" {...register("email")} />
          <Input name="password" type="password" placeholder="Password" {...register("password")} />
          <Button type="submit">Criar minha conta</Button>
        </Form>
        <Link href="/">Já tenho conta. Fazer login</Link>
      </Content>
    </Container>
  );
}
```

#### O que faz?
- **Validação com Yup e react-hook-form:**
  - Esquema de validação (`schema`) define regras para os campos.
  - Integração com o formulário via `useForm`.
- **Formulário de registro:** Possui três campos (nome, e-mail, senha) e exibe erros automaticamente se os valores não atenderem ao esquema.

---

### **Navegação com React Router**
Arquivo: **`App.js`**

#### Código:
```javascript
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </Router>
  );
}
```

#### O que faz?
- **Navegação:** Utiliza `BrowserRouter`, `Routes` e `Route` para definir as rotas.
  - **`/`:** Página inicial (Login).
  - **`/cadastro`:** Página de registro (Register).
- **Componentes renderizados:** Cada rota renderiza um componente correspondente.

---

### **Estilização com styled-components**
Arquivo: **`style.js`**

#### Código:
```javascript
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: #090c1b;
  color: #fff;
  padding: 0 50px;
`;

// Estilizações adicionais para Logo, Content, ContentInform, Form, Input, Button, Link...
```

#### O que faz?
- **Estilização modular:** Cada elemento recebe uma classe estilizada específica.
- **Responsividade:** Estilizações como `width` e `margin` tornam a interface adaptável.
- **Aparência:** 
  - **Inputs:** Fundo escuro com borda realçada ao foco.
  - **Botão:** Cor principal com efeito de hover.

---

### **Validação do Formulário**
**Lógica principal em `Register.js`:**
- `yup`:
  - Define regras de validação, como e-mail válido e senha mínima.
- `react-hook-form`:
  - Gerencia estado do formulário e manipulação de eventos.
- Integração:
  - `yupResolver(schema)` conecta o esquema de validação ao formulário.