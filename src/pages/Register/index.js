import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {
  Container, Logo, Content, ContentInform, Title,
  Subtitle, Form, Input, Button, Link,
} from "../../style";

const schema = yup
  .object({
    firstName: yup.string().required(),
    email: yup.string().email('E-mail invalido').required(),
    password: yup.number().min(6, 'Minimo de 6 caracteres').required(),
  })
  .required()

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    node: 'onChange',
  });

  const onSubmit = (data) => console.log(data)

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
        <Title>Crie sua conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input name="firstName" type="text" placeholder="Nome completo" {...register("example")}/>
          <Input name="email" type="email" placeholder="E-mail" {...register("example")} />
          <Input name="password" type="password" placeholder="Password" {...register("exampleRequired", { required: true })} />
          <Button type="submit" >Criar minha conta</Button>
        </Form>
        <Link href="/">Já tenho conta. Fazer login</Link>
      </Content>
    </Container>
  );
}

export default Register;