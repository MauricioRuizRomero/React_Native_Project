import React from 'react';
import { View, ActivityIndicator, Text, FlatList, StyleSheet, Alert } from 'react-native';
import BadgesItem from '../../components/BadgesScreen/BadgesItem';
import Colors from '../../res/Colors';
import Http from '../../libs/http';

class BadgesScreen extends React.Component {
    state = {
        loading: false,
        badges: undefined,
    };

    componentDidMount(){
        this.fetchdata();
        this.setFetchInterval();
    }

    setFetchInterval= () =>{
        this.interval = setInterval(this.fetchdata, 3000);
    };

    fetchdata = async () => {
        this.setState({loading:true});
        let response = await Http.instance.get_all();
        this.setState({loading: false, badges: response});
    };

    handlePress = item =>{
        this.props.navigation.navigate('BadgesDetail', {item });
    };

    handleEdit = item => {
        this.props.navigation.navigate('BadgesEdit', {item});
    };

    handleDelete= item => {
        Alert.alert('Are you sure you want to delete this badge?',
        `Do you really want to delete ${item.name}'s badge?\n\nThis process cannot be undone.`,
        [
            {
                text:'Cancel',
                style: 'cancel',
            },
            {
                text: 'Delete',
                onPress: async () => {
                    this.setState({loading: true, badges:undefined});
                    await Http.instance.remove(item._id);
                    this.fetchdata();
                },
                style:'destructive',
            },
        ],
        {
            cancelable: true,
        },
        );
    };

    componentWillUnmount () {
        clearInterval(this.interval);
    }
    render(){
        const {badges, loading} = this.state;

        if(loading===true && !badges) {
            return(
        <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator style={styles.loader} color="#43ff0D" size="large" />
        </View>
        );
    } 
        return(
            <View style={[styles.container, styles.horizontal]}>
                
                <FlatList
                 style={styles.list}
                 data={badges} 
                 renderItem={ ({item}) => ( 
                 <BadgesItem 
                 key={item._id} 
                 item={item} 
                 onPress={() => this.handlePress(item)} 
                 onEdit={() => this.handleEdit(item)}
                 onDelete={() => this.handleDelete(item)}
                     />
                )}
                keyExtractor={(item, index)=> index.toString()}
                />     
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.charade,
    },
    horizontal: {
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    loader: {
        height: '100%',
        paddingHorizontal: 10,
    },
    list: {
        width:'100%',
        paddingHorizontal: 10,
    },
});
export default BadgesScreen;
