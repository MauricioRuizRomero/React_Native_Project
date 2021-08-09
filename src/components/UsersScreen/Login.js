import React from 'react'
import {
	Text,
	TextInput,
	View,
	Image,
	TouchableOpacity,
	ImageBackground,
	StyleSheet,
	StatusBar,
} from 'react-native';
import styles from './styles';
import Colors from '../../res/Colors';
import UserSession from '../../libs/sessions';

const imageBackground = {
	uri: 'https://images.pexels.com/photos/5514994/pexels-photo-5514994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
};


class Login extends React.Component {

	state = {
		loading: false,
		error: null,
		user: undefined,
		isPasswordVisible: true,
		form: {},
	};

	handleSubmit = async () =>{
		try{
			this.setState({loading: true, error: null, user: undefined});
		let response = await UserSession.instance.login(this.state.form);

			if(typeof response === 'object'){
				console.log(response);
				this.setState({loading:false, error: response, user: undefined});
			}else{
				this.setState({loading: false, error: null, user: response});
			}
		}catch (err){
			this.setState({loading: false, error: err});
		}
		if(this.state.user){
			this.props.navigation.replace('BadgesTabNavigator');
		}
	};

	toggleIsPasswordVisible = () => {
		if(this.state.isPasswordVisible){
			this.setState({isPasswordVisible: false});
		}else {
			this.setState({isPasswordVisible:true});
		}
	};

	handleSignup= () =>{
		this.navigation.navigate('Signup');
	}

	render() {
		const { isPasswordVisible, loading, error } = this.state;
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="transparent" translucent={true} />
				<ImageBackground source={imageBackground} style={styles.image}>
					<View style={styles.layerColor}>
						<View style={styles.form}>
							<Text style={styles.title}>Login</Text>
							{error ? (
								<View style={styles.errorContainer}>
									<Text style={styles.errorMsg}>
										{'Invalid Username or Password. Please try again.'}
									</Text>
								</View>
							) : null}
							<View style={styles.formgroup}>
								<Text style={styles.inputText}>Username</Text>
								<TextInput
									style={styles.input}
									placeholder={'Username'}
									keyboardAppearance="dark"
									onChangeText={text => {
										this.setState(prevState => {
											let form = Object.assign({}, prevState.form);
											form.username = text;
											return { form }
										});
									}}
								/>
								<Text style={styles.inputText}>Password</Text>
								<View style={styles.password}>
									<TextInput
										style={styles.inputPassword}
										secureTextEntry={isPasswordVisible}
										placeholder={'Password'}
										keyboardAppearance="dark"
										onChangeText={text => {
											this.setState(prevState => {
												let form = Object.assign({}, prevState.form);
												form.password = text;
												return { form }
											});
										}}
									/>
									<TouchableOpacity onPress={this.toggleIsPasswordVisible}>
										<Image
											style={{ marginRight: 10 }}
											source={
												isPasswordVisible
													? require('../../assets/show.png')
													: require('../../assets/hide.png')
											}
										/>
									</TouchableOpacity>
								</View>
							</View>
							<TouchableOpacity
								style={styles.submit}
								onPress={this.handleSubmit}>
								<Text style={styles.submitText}>Login</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.signUpTouchable}
								onPress={this.handleSignup}>
								<Text>{"You don't have an account yet? "}</Text>
								<Text style={styles.signUpBoldText}>Sign Up</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

export default Login;