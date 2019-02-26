import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight
} from 'react-native';

class GalleryItem extends Component {
    constructor(props) {
        super(props);
    }

    makeImageBlock = function(options) {
        const { width } = Dimensions.get('window');
        const itemWidth = Math.floor((width) / 3);
        return {
            paddingBottom: 5,
            paddingTop: 5,
            paddingRight: 5,
            paddingLeft: 5,
            width: itemWidth - 10,
            position: 'relative',
        }
    }
    render() {
        let {urls: {small: url}, user: {username}, description} = this.props.data
        let {navigate} = this.props;
        return (
            <View  style={this.makeImageBlock()}>
                <TouchableHighlight onPress={() => navigate('ImagePage', {url: url})}>
                    <Image source={{uri: url}}
                           style={{height: 100 }}
                           
                           // data={this.props.data}
                      />
                </TouchableHighlight>
                <View style={styles.imageCaption}>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.userName}>{username}</Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    userName: {
        color: '#ffffff',
        fontSize: 14,
        textAlign: 'center',
    },
    description: {
        color: '#ffffff',
        fontSize: 12,
        textAlign: 'center',
    },
    imageCaption: {
        backgroundColor: '#000000',
        height: 60,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
});

export default GalleryItem