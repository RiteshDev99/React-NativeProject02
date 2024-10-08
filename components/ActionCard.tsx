import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
    return (
        <View>
            <Text style={Styles.headingText} >Blog Card</Text>
            <View style={[Styles.card, Styles.ElevatedCard]}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1505977003557-c907eece08e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGhhd2ElMjBtYWhhbCUyMGphaXB1ciUyMGluZGlhfGVufDB8fDB8fHww',
                    }}
                    style={Styles.cardImage}
                />
                <Text style={Styles.MoreAbout}>More About</Text>
                <View style={Styles.bodyContainer}>
                    <Text style={Styles.cardDescription}>Hawa Mahal famously known as the “
                        palace of winds “ has one of the best
                        architecture in Jaipur, Rajasthan. Maharaj
                        a Sawai Pratap Singh
                        built this palace in 1799.  Hawa Mahal is considered
                        to be unique as it has many small windows and
                        balconies that seem like a honeycomb.</Text>
                    <View style={Styles.footerContainer} >
                        <TouchableOpacity
                            onPress={() => openWebsite('https://issuu.com/amritkirat/docs/hawa_mahal_documentation')}
                        >
                            <Text style={Styles.ReadMore}>Read More...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    headingText: {
        paddingHorizontal: 12,
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        width: 373,
        height: 370,
        margin: 15,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        paddingHorizontal:8,
    },
    MoreAbout: {
        marginVertical: 8,
        fontSize: 18,
        fontWeight: 'bold',
    },
    ElevatedCard: {
        backgroundColor: '#EAF0F1',
    },
    cardImage: {
        height: 200,
        borderTopLeftRadius: 4,
        borderTopRightRadius:4,
    },
    bodyContainer: {},
    cardDescription: {
        color:'#2C3335',
    },
    footerContainer: {},
    ReadMore: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 8,
    },
});

export default ActionCard;
