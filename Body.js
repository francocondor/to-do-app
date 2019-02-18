import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Body</Text>
                <FlatList
                    data={this.props.tareas}
                    renderItem={({ item }) => {

                        return <Text>{item.texto}</Text>
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: '#98FB98',
    },
});

export default Body;
