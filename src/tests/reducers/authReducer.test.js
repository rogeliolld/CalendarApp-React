import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

const initiState = {
    checking: true,
}

describe('Pruebas en authReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {
        
        const action = {};
        const state = authReducer(initiState, action);

        expect(state).toEqual(initiState)

    });

    test('debe de autenticar el usuario', () => {
        
        const action = {
            type: types.authLogin,
            payload:{
                uid: '123',
                name: 'Rogelio'
            }
        };

        const state = authReducer(initiState, action);

        expect(state).toEqual({ checking: false, uid: '123', name: 'Rogelio' });

    });

    test('debe de validar el Checking', () => {
        
        const action = {
            type: types.authCheckingFinish,
            payload:{
                uid: '123',
                name: 'Rogelio'
            }
        };

        const state = authReducer(initiState, action);

        expect(state).toEqual({ checking: false });
    });

    test('debe de iniciar el authStarLogout', () => {

        const action = {
            type: types.authStarLogout,
        };
        const state = authReducer(initiState, action);

        expect(state).toEqual({ checking: false });

    })
    
    
    
    


})
