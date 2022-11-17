export async function GetUser(login = '') {
    const url = '/v2/users?filter[login]=' + login;
    const header = {};
    console.log('\nGET REQUEST: ', url);
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
