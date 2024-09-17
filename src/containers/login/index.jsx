import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



import api from '../../services/api'
import logo from '../../assets/LogoDev.svg'

import { Button } from '../../components/Button'

import {
  Container,
  LeftContainer,
  RigtContainer,
  Title,
  Form,
  ImputContainer,
  Link
} from './styles'


export function Login() {

  const navigate = useNavigate()

  // fazendo validação com yup como estrutudo do schema deve ser baseados nos dados necessarios
  const schema = yup.object({
    email: yup
      .string()
      .required('O email é obrigatório')
      .email('Digite um e-mail válido'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no min 6 caracteres')
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
      const { status, data: { token } } = await api.post("/sessions", {
        email: data.email,
        password: data.password
      },
        {
          validateStatus: () => true
        }
      )
      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/')
        }, 2000)
        localStorage.setItem('token', token)
        toast.success('Login efetuado')
      }
      else if (status === 401 || status === 400) {
        toast.error('Email ou senha incorreto')
      }
      else {
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
        <Title>Olá, seja bem vindo ao <span> Dev Burguer!</span>
          <br />
          Acesse com seu <span> Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)} >
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
          <Button type='submit' >Entrar</Button>
        </Form>
        <p>Não possui conta? <Link to='/cadastro'> Clique aqui.</Link></p>
      </RigtContainer>
    </Container>
  );
}
