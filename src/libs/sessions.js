import URLS from './url';
import Storage from "./storage";


class UserSession {
    static instance = new UserSession();

    login = async body => {
        try {
            let request = await fetch(`${URLS.users_url}/users/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            let response = await request.json();
            try{
                let key = `token-${response.user.username}`;
                await Storage.instance.store(key, response.token);
                return response.user.username;    
            }catch(err){
                return response;
            }
            
        } catch (err) {
            console.log('Login err', err)
            throw Error(err);
        }
    };

    logout = async key => {
        try {
            await Storage.instance.remove(key);
            return true;
        } catch (err) {
            console.log('Logout err', err);
            return false;
        }
    };

    signup = async body => {
        try {
            await fetch(`${URLS.users_url}/users/signup/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body),
            });
        } catch (err) {
            console.log('Sign up error', err);
            throw Error(err);
        }
    };

    getToken = async key => {
        try {
            return await Storage.instance.get(key);
        } catch (err) {
            console.log('Get token error', err);
        }
    };
}

export default UserSession;