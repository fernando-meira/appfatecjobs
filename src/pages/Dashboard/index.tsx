import React, { useEffect, useCallback, useState } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import * as S from './styles';
import colors from '~/themes/colors';
import { api } from '~/services/api';
import { Header } from './components';
import { VacancyResponse, VacancyProps } from '~/interfaces/Vacancy';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const [vacancy, setVacancy] = useState<VacancyProps[]>([]);
  const [vacancyLoading, setVacancyLoading] = useState(true);

  const fetchVacancy = useCallback(async () => {
    try {
      setVacancyLoading(true);

      const { data } = await api.get<VacancyResponse>('vaga');

      setVacancy(data.response);
    } catch (error) {
      Alert.alert(
        'Erro ao listar as vagas',
        'Por favor, tente novamente mais tarde!',
      );
    } finally {
      setVacancyLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVacancy();
  }, [fetchVacancy]);

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

      {vacancyLoading ? (
        <ActivityIndicator color={colors.primaryColor} />
      ) : (
        <Carousel
          ref={null}
          data={vacancy}
          itemWidth={wh('40')}
          renderItem={renderItems}
          sliderWidth={ww('100%')}
        />
      )}

      <Carousel
        ref={null}
        data={response}
        layout="tinder"
        itemWidth={wh('32')}
        sliderWidth={ww('100%')}
        renderItem={renderSmallCarousel}
      />

      <S.Button
        text="Ver perfil"
        onPress={() => navigation.navigate('Profile')}
      />
    </S.Container>
  );
};

export default Dashboard;
