import { fetchConToken, fetchSinToken } from "../../helpers/fetch"

describe('Pruebas en Helper Fetch', () => {
    
    let token = '';

    test('fetchSinToken debe funcionar', async() => {
        
        const resp = await fetchSinToken('auth', {email: 'rogelio@gmail.com', password:'123456'},'POST');
        expect( resp instanceof Response).toBe( true );

        const body = await resp.json();
        expect(body.ok).toBe(true);

        token = body.token;
    });
    

    test('fetchConToken debe funcionar', async() => {
        
        localStorage.setItem('token', token);

        const resp = await fetchConToken('events/61c4bc6583c8a330328ec9ae', {},'DELETE');
        const body = await resp.json();

        expect(body.msg).toBe('Evento no existe por ese ID');
      

    });
    
})
