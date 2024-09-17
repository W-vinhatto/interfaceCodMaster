import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


import  api  from '../../services/api'
import logo from '../../assets/LogoDev.svg'

import { Button } from '../../components/Button'

import {
  Container,
  LeftContainer,
  RigtContainer,
  Title,
  Form,
  ImputContainer,
  Link,
} from './styles'


export function Register() {

  const navigate = useNavigate()

  // fazendo validação com yup como estrutudo do schema deve ser baseados nos dados necessarios
  const schema = yup.object({
    name: yup
      .string()
      .required('O nome é obrigatório'),
    email: yup
      .string()
      .required('O email é obrigatório')
      .email('Digite um e-mail válido'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no min 6 caracteres'),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
      .required('Confirme a senha')
  })
    .required()

  // ultilizado biblioteca form para coletar todos os dados enviados no formulario
  // apos coletar ele valida se está correto com schema e submete
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {

    try {
      const { status } = await api.post("/users", {
        name: data.name,
        email: data.email,
        password: data.password
      },
        {
          // fazendo com que axios traga status de response
          validateStatus: () => true
        })

      // fazendo validação juno ao status para retorna resposta certa para usuario
      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login')
        },2000)
        toast.success('Cadastro efetuado')
      } else if (status === 409 || status === 400) {
        toast.error('Email já cadastrado! Efetue login')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema')
    }
  }


  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt='logo marca' />
      </LeftContainer>

      <RigtContainer>
        <Title>Criar conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)} >
          <ImputContainer >
            <label>Name</label>
            <input type='text' {...register('name')} />
            <p>{errors?.name?.message}</p>
          </ImputContainer>

          <ImputContainer >
            <label>Email</label>
            <input type='email' {...register('email')} />
            <p>{errors?.email?.message}</p>
          </ImputContainer>

          <ImputContainer>
            <label>Senha</label>
            <input type='password' {...register('password')} />
            <p>{errors?.password?.message}</p>
          </ImputContainer>

          <ImputContainer>
            <label>Confirmar Senha</label>
            <input type='password' {...register('confirmpassword')} />
            <p>{errors?.confirmpassword?.message}</p>
          </ImputContainer>
          <Button type='submit'>Criar Conta</Button>
        </Form>
        <p>Já possui conta? <Link to='/login' > Clique aqui.</Link></p>
      </RigtContainer>
    </Container>
  );
}
