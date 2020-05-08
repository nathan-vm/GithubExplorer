import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import LogoImg from '../../assets/logo.svg'
import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório." />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/54302847?s=460&v=4"
            alt="Nathan Vieira Marcelino"
          />
          <div>
            <strong>GoBarber-backend</strong>
            <p>Backend da aplicação GoBarber</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/54302847?s=460&v=4"
            alt="Nathan Vieira Marcelino"
          />
          <div>
            <strong>GoBarber-backend</strong>
            <p>Backend da aplicação GoBarber</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/54302847?s=460&v=4"
            alt="Nathan Vieira Marcelino"
          />
          <div>
            <strong>GoBarber-backend</strong>
            <p>Backend da aplicação GoBarber</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
