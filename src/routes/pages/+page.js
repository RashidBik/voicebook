export const load = async ({fetch}) =>
{
    let userId = ''
    let result;
    let error;
    const response = await fetch(`http://localhost:3030/user/${userId}`)
    if (response.status === 200) {
        result = response.json();
    } else {
         error = response.json();        
    }
    return {result}
}