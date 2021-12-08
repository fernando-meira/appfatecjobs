import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import * as S from './styles';
import { Header } from './components';

interface VacancyProps {
  tipo: string;
  titulo: string;
  id_vaga: number;
  salario: number;
  descricao: string;
  localizacao: string;
  id_empresa_fk: number;
}

const Dashboard: React.FC = () => {
  const response: VacancyProps[] = [
    {
      id_vaga: 21,
      id_empresa_fk: 21,
      titulo: 'Desenvolvedor NodeJS',
      descricao:
        'É necessário conhecimento em x p t y tecnologias mínimo 5 anos de experiência em desenvolvimento backend com java EE',
      localizacao: 'Sorocaba-SP',
      salario: 4500,
      tipo: 'PJ',
    },
    {
      id_vaga: 22,
      id_empresa_fk: 22,
      titulo: 'Desenvolvedor Front-end Junior',
      descricao:
        'É necessário conhecimento em x p t y tecnologias mínimo 5 anos de experiência em desenvolvimento backend com java EE',
      localizacao: 'Sorocaba-SP',
      salario: 4500,
      tipo: 'PJ',
    },
    {
      id_vaga: 23,
      id_empresa_fk: 23,
      titulo: 'Desenvolvedor NodeJS',
      descricao:
        'É necessário conhecimento em x p t y tecnologias mínimo 5 anos de experiência em desenvolvimento backend com java EE',
      localizacao: 'Sorocaba-SP',
      salario: 4500,
      tipo: 'PJ',
    },
    {
      id_vaga: 24,
      id_empresa_fk: 24,
      titulo: 'Desenvolvedor NodeJS',
      descricao:
        'É necessário conhecimento em x p t y tecnologias mínimo 5 anos de experiência em desenvolvimento backend com java EE',
      localizacao: 'Sorocaba-SP',
      salario: 4500,
      tipo: 'PJ',
    },
    {
      id_vaga: 25,
      id_empresa_fk: 25,
      titulo: 'Desenvolvedor NodeJS',
      descricao:
        'É necessário conhecimento em x p t y tecnologias mínimo 5 anos de experiência em desenvolvimento backend com java EE',
      localizacao: 'Sorocaba-SP',
      salario: 4500,
      tipo: 'PJ',
    },
    {
      id_vaga: 26,
      id_empresa_fk: 26,
      titulo: 'Desenvolvedor NodeJS',
      descricao:
        'É necessário conhecimento em x p t y tecnologias mínimo 5 anos de experiência em desenvolvimento backend com java EE',
      localizacao: 'Sorocaba-SP',
      salario: 4500,
      tipo: 'PJ',
    },
  ];

  const renderItems = ({ item }: { item: VacancyProps }) => {
    return (
      <S.CarouselContent>
        <S.CarouselTitle>{item.titulo}</S.CarouselTitle>

        <S.ContentRow>
          <S.Label>Descrição da vaga: </S.Label>
          <S.CarouselDescription>{item.descricao}</S.CarouselDescription>
        </S.ContentRow>

        <S.ContentRow>
          <S.Label>Localização: </S.Label>
          <S.RegularText>{item.localizacao}</S.RegularText>
        </S.ContentRow>

        <S.ContentRow>
          <S.InfoWrapper>
            <View>
              <S.Label>Tipo da vaga: </S.Label>
              <S.RegularText>{item.tipo}</S.RegularText>
            </View>

            <View>
              <S.Label>Salário: </S.Label>
              <S.SalaryText>{`R$ ${item.salario}`}</S.SalaryText>
            </View>
          </S.InfoWrapper>
        </S.ContentRow>

        <S.Button
          text="Candidatar-se"
          style={{ marginTop: 'auto' }}
          onPress={() => console.log('Candidatar-se')}
        />
      </S.CarouselContent>
    );
  };

  const renderSmallCarousel = ({ item }: { item: VacancyProps }) => {
    return (
      <S.SmallCarouselWrapper>
        <S.SmallText>Minhas vagas</S.SmallText>

        <S.CarouselTitle>{item.titulo}</S.CarouselTitle>

        <S.ContentRow>
          <S.InfoWrapper>
            <View>
              <S.Label>Tipo da vaga: </S.Label>
              <S.RegularText>{item.tipo}</S.RegularText>
            </View>

            <View>
              <S.Label>Salário: </S.Label>
              <S.SalaryText>{`R$ ${item.salario}`}</S.SalaryText>
            </View>
          </S.InfoWrapper>
        </S.ContentRow>
      </S.SmallCarouselWrapper>
    );
  };

  return (
    <S.Container>
      <Header />

      <Carousel
        ref={null}
        data={response}
        itemWidth={wh('40')}
        renderItem={renderItems}
        sliderWidth={ww('100%')}
      />

      <Carousel
        ref={null}
        data={response}
        layout="tinder"
        itemWidth={wh('32')}
        sliderWidth={ww('100%')}
        renderItem={renderSmallCarousel}
      />

      <S.Button text="Ver perfil" />
    </S.Container>
  );
};

export default Dashboard;
