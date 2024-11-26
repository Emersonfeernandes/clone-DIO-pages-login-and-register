import React from "react";
import {
  Container, ContentInform,
  Logo, Content, Title,
  Subtitle, Form, Input,
  Button, Link,
} from "../../style";

function Login() {
  return (
    <Container>
      <Logo>
        <img src="https://c5gwmsmjx1.execute-api.us-east-1.amazonaws.com/prod/dados_processo_seletivo/logo_empresa/119818/LOGO-DIO-COLOR.png_name_20221031-2831-ekn5hh.png" />
      </Logo>
      <ContentInform>
        <Title>Domine as tecnologias utilizadas pelas empresas mais inovadoras</Title>
        <Subtitle>
        +1.750 cursos, bootcamps, projetos e formações nas carreiras de back-end, front-end, mobile, games, data, inteligência artificial & cloud;
        </Subtitle>
        <Subtitle>
        Conquiste certificados reconhecidos por grandes empresas de tecnologia em Java, Python, .NET, C#, JavaScript, Node.js, React, Angular, SQL, AWS, Azure, GCP, MongoDB, Kotlin, Swift entre mais de 500 tecnologias;
        </Subtitle>
        <Subtitle>
        +10.000 pessoas contratadas por grandes empresas no Brasil e Exterior.
        </Subtitle>
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

export default Login;