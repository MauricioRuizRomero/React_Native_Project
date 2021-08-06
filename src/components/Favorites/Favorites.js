import React from 'react'
import {
    View,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    StatusBar,
} from 'react-native'
import Loader from '../Generics/Loader';
import Colors from '../../res/Colors.js';
import Storage from '../../libs/storage';
import exampleStyles from '../../styles/example.js'
import BadgesItem from '../BadgesScreen/BadgesItem.js';



class Favorites extends React.Component {
    state = {
        loading: false,
        badges: undefined,
    };

    componentDidMount = () => {
        this.getFavorites();
        this.focusEvent();
    };

    

    getFavorites = async () => {
        this.setState({loading: true, badges: undefined});
        try{
            const allKeys = await Storage.instance.getAllKeys();
            const keys = allKeys.filter( key => key.includes('favorite-'));
            const favs = await Storage.instance.multiGet(keys);
            const favorites = favs.map(fav => JSON.parse(fav[1]));
            this.setState({loading: false, badges: favorites});
        } catch (err){
            console.log('get favorites err', err);
        }
    };
    handlePress = item =>{
        this.props.navigation.navigate('FavoritesDetails', {item});
    };
     
    focusEvent = () => {
        this.focusListener = this.props.navigation.addListener('focus', () => {
            this.getFavorites();
        });
    };

    componentWillUnmount = () => {
        this.focusListener();
    };


    render() {
        const {badges, loading} = this.state;

        if(loading === true && !badges){
            <Loader />;
            <View 
            style={[
                styles.favoritesContainer, 
                exampleStyles.container,
                exampleStyles.horizontal]}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <ActivityIndicator
                    style={exampleStyles.loader}
                    color="#43FF0D"
                    size="large"
                />
            </View>
        }
        return(
            <View 
            style={[
                styles.favoritesContainer,
                exampleStyles.container,
                exampleStyles.horizontal]}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <FlatList
                    style={styles.list}
                    data={badges}
                    renderItem = {({item}) => (
                        <BadgesItem item={item} onPress ={()=> this.handlePress(item)} />
                    )}
                    keyExtractor={(item, index) => index.toString()}  
                />          
            </View>
        );   
    }
}

const styles = StyleSheet.create({
    favoritesContainer:{
        paddingTop: 45,

    },
    list:{
        width: '100%',
        paddingHorizontal: 10,
    },
});

export default Favorites;