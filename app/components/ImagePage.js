import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';

class ImagePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const source = this.props.navigation.getParam('url');
        console.log(source)
        return (
            <Image 
                source={{uri: source}}
                style={{height: 500 }}/>
        );
    }
}

export default ImagePage