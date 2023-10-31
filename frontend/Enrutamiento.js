import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Guardar from './Guardar';
import Listado from './Listado';

const Stack = createStackNavigator();
const Enrutamiento = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Guardar">
                <Stack.Screen name="Guardar" component={Guardar} options={{ headerShown: false }}  />
                <Stack.Screen name="Listado" component={Listado} options={{ headerShown: false }}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default Enrutamiento;