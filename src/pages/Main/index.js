import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PodcastsActions from '../../store/ducks/podcasts';

import {
  Container, PodcastList, Podcast, PageTitle, Cover, Info, Title, Count,
} from './styles';
// import podcasts from '../../../jsonPodcast/podcastsJson';

import Player from '../../components/Player';

class Main extends Component {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  handlePodcastPress = (podcast) => {
    const { navigation } = this.props;

    navigation.navigate('Podcast', { podcast });
  };

  render() {
    const { podcasts } = this.props;

    // console.log(this.props);
    return (
      <Container>
        {!!podcasts.data && (
          <PodcastList
            ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
            data={podcasts.data || []}
            keyExtractor={podcast => String(podcast.id)}
            renderItem={({ item: podcast }) => (
              <Podcast onPress={() => this.handlePodcastPress(podcast)}>
                <Cover source={{ uri: podcast.cover }} />
                <Info>
                  <Title>{podcast.title}</Title>
                  <Count>{`${podcast.tracks.length} episódios`}</Count>
                </Info>
              </Podcast>
            )}
          />
        )}
        <Player />
      </Container>
    );
  }
}

// Qual é a informação que quero ouvir do meu estado do redux?
// Quero ouvir o meu reducer de podcasts
const mapStateToProps = state => ({
  // Crio uma propriedade podcasts que reflete o valor do estado de podcasts
  podcasts: state.podcasts,
});

const mapDispatchToProps = dispatch => bindActionCreators(PodcastsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
// 1. Importa o connect, bindActionsCreators e o ducks de PodcastsActions
// 2. Faz o export de connect
// 3. Cria o mapStateToProps e o mapDispatchToProps
// 4. No render, coloque para ter acesso a uma propriedade que é podcasts que contém os dados dos meus podcasts.
// 5. Mapeie com data que contém os dados do meu podcasts
// 6. ComponentDidMount (chame a função loadRequest)
