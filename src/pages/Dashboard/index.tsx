import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import * as S from './styles';
import { useAuth } from '~/hooks/auth';
import colors from '~/themes/colors';
import { api } from '~/services/api';
import { Header } from './components';
import { VacancyResponse, VacancyProps } from '~/interfaces/Vacancy';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigation();

  const id_aluno = user?.id_aluno || undefined;

  const [vacancy, setVacancy] = useState<VacancyProps[]>([]);
  const [vacancyLoading, setVacancyLoading] = useState(true);
  const [studentVacancies, setStudentVacancies] = useState<VacancyProps[]>([]);
  const [studentVacanciesLoading, setStudentVacanciesLoading] = useState(true);

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

  const fetchStudentVacancy = useCallback(async () => {
    if (id_aluno) {
      try {
        setStudentVacanciesLoading(true);

        const { data } = await api.get<VacancyResponse>(
          `vaga/candidatura?id_aluno=${20}`,
        );

        setStudentVacancies(data.response);
      } catch (error) {
        Alert.alert(
          'Erro ao suas vagas',
          'Por favor, tente novamente mais tarde!',
        );
      } finally {
        setStudentVacanciesLoading(false);
      }
    }
  }, [id_aluno]);

  useEffect(() => {
    fetchVacancy();
  }, [fetchVacancy]);

  useEffect(() => {
    fetchStudentVacancy();
  }, [fetchStudentVacancy]);

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

  const renderFooter = useMemo(() => {
    if (studentVacanciesLoading) {
      return <View />;
    }

    if (studentVacancies.length <= 0) {
      return (
        <S.SmallCarouselWrapper>
          <S.CarouselTitle>Você não tem nenhuma candidatura.</S.CarouselTitle>

          <S.RegularText style={{ textAlign: 'center' }}>
            Procure sua vaga ideal e candidate-se!
          </S.RegularText>
        </S.SmallCarouselWrapper>
      );
    }

    return (
      <Carousel
        ref={null}
        layout="tinder"
        itemWidth={wh('40')}
        data={studentVacancies}
        sliderWidth={ww('100%')}
        renderItem={renderSmallCarousel}
      />
    );
  }, [studentVacancies, studentVacanciesLoading]);

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

      {renderFooter}

      <S.Button
        text="Ver perfil"
        onPress={() => navigation.navigate('Profile')}
      />
    </S.Container>
  );
};

export default Dashboard;
