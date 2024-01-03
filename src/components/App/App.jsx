import { Searchbar, ImageGallery, Button, Text } from 'components';
import React, { Component } from 'react';

import * as ImageService from 'service/image-service';

export class App extends Component {
  state = {
    images: [],
    search: '',
    error: null,
    page: 1,
    buttonShow: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  searchImages = search => {
    this.setState({ search, images: [], page: 1, error: null });
  };

  getImages = async () => {
    const { search, page } = this.state;
    try {
      const searchResult = await ImageService.getImages(search, page);
      console.log('searchResult :>> ', searchResult);
      console.log('searchResult.totalHits :>> ', searchResult.totalHits);
      console.log('ImageService.PER_PAGE :>> ', ImageService.PER_PAGE);
      this.setState(prevState => ({
        images: [...prevState.images, ...searchResult.hits],
        buttonShow:
          page < Math.ceil(searchResult.totalHits / ImageService.PER_PAGE),
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  nextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchImages} />
        {this.state.error && <Text>{this.state.error}</Text>}
        <ImageGallery images={this.state.images} />
        {this.state.buttonShow && (
          <Button onClick={this.nextPage}>Load more</Button>
        )}
      </>
    );
  }
}
