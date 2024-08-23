import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// import { width, height } from '../Globals/getDimensions';
import { width,height } from '../Globals/getDImensions';
import MainHeader from '../Globals/Branding/MainHeader';
const AddFloorScreen = () => {
    const data = [
        { title: "Basement" },
        { title: "Floor 1" },
        { title: "Floor 2" },
        { title: "Floor 3" },
        { title: "Floor 4" },
        { title: "Attic" },
        { title: "Rooftop" },
    ];

    const renderFloorItem = ({ item }) => (
        <View style={styles.floorItem}>
            <Text style={styles.floorTitle}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <MainHeader screenName={"Add a Floow"}/>
            <View style={styles.content}>
                <Text style={styles.description}>
                    Choose area to get started:
                </Text>

                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add +</Text>
                </TouchableOpacity>

                <FlatList
                    data={data}
                    renderItem={renderFloorItem}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        padding: width * 0.05,
    },
    description: {
        fontSize: 13,
        color: '#344054',
        marginBottom: height * 0.02,
        lineHeight: 22,
    },
    addButton: {
        marginBottom: height * 0.02,
        alignSelf: 'flex-start',
    },
    addButtonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#344054',
    },
    listContainer: {
        marginTop: height * 0.02,
    },
    floorItem: {
        width: width * 0.9,
        paddingVertical: height * 0.02,
        borderBottomWidth: 0.59,
        borderBottomColor: '#D0D5DD',
        marginBottom: height * 0.02,
    },
    floorTitle: {
        fontSize: 13,
        color: '#344054',
        fontWeight:'300'
    },
});

export default AddFloorScreen;
