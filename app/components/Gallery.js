import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    FlatList
} from 'react-native';
import GalleryItem from './GalleryItem'

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gallery: [],
            isLoading: true,
        };

        this.clientId = "cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"

        this.loadingMessage = this.loadingMessage.bind(this);
        this.loadedData = this.loadedData.bind(this);
    }

    componentDidMount() {
        this.fetchGalleryJSON();
    }

    fetchGalleryJSON() {
        let url = `https://api.unsplash.com/photos?client_id=${this.clientId}`;

        fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                this.setState({
                    isLoading: false,
                    gallery: jsonData,
                });
            })
            .catch(error => console.log('Fetch error' + error));
    }

    renderItem = ({ item }) => {
        let navigate = this.props.navigation.navigate;
        return <GalleryItem data={item} navigate={navigate}/>
    };
    keyExtractor = (item, index) => item.id;

    loadingMessage = () =>
        <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>

    loadedData = () => {
        let { gallery } = this.state;
        return (
            <View style={styles.container}>
            <FlatList
              data={gallery}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns={3}
              horizontal={false}
              style={{paddingTop: 10}}
            />
      </View>
        )
    }

    render() {
        let { isLoading } = this.state;

        if (isLoading) {
            return this.loadingMessage()
        }

        return this.loadedData()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Gallery