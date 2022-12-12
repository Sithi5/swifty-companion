export async function getUserByLogin(args: { api_user_token: string; login: string }) {
    const { api_user_token, login } = args;
    const url = 'https://api.intra.42.fr/v2/users?filter[login]=' + login;
    const header = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + api_user_token,
    };
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: header,
        });
        const json_response = await response.json();
        console.log('\njson_response ', json_response);
        return json_response;
    } catch (error) {
        console.error(error);
    }
}

export async function getMe(args: { api_user_token: string }) {
    const { api_user_token } = args;
    console.log('user_token = ', api_user_token);
    const url = 'https://api.intra.42.fr/v2/me?access_token=';
    const header = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + api_user_token,
    };
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: header,
        });
        const json_response = await response.json();
        return json_response;
    } catch (error) {
        console.error(error);
    }
}

export async function getCoa(args: { id: number; api_user_token: string }) {
    const { id, api_user_token } = args;
    console.log('user_token = ', api_user_token);
    const url = 'https://api.intra.42.fr/v2/users/' + id + '/coalitions?access_token=';
    const header = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + api_user_token,
    };
    console.log(url, api_user_token);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: header,
        });
        const json_response = await response.json();
        console.log(json_response);
        return json_response;
    } catch (error) {
        console.error(error);
    }
}
