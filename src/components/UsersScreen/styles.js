import { StyleSheet } from "react-native";
import Colors from "../../res/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        
        
    },
    scrollView: {
        flex: 1,
    },
    layerColor: {
        flex: 2,
        width: '100%',
        backgroundColor: '#3a404935',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '80%',
        backgroundColor: Colors.white,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    scrollForm: {
        marginVertical: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#efefefff',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        color: Colors.charade,
    },

    formText:{
        color:Colors.charade
    },
    formgroup: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '80%',
    },
    input: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.zircon,   
    },
    inputText: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
    },
    inputPassword:{
        width: '85%',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    password:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.zircon,
    },
    submit:{
        marginVertical: 35,
        width: '35%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.zircon,
        backgroundColor: Colors.zircon,
    },
    submitText: {
        fontSize: 16,
        marginHorizontal: 15,
        marginVertical: 10,
        color: Colors.white,
        textAlign: 'center',
    },

    errorContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FF353C40',
        borderRadius: 5,
    },
    errorMsg: {
        color: '#990009',
    },
    signUpTouchable:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
    },
    signUpBoldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.zircon,
    },

});

export default styles;