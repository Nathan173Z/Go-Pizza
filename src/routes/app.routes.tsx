import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../screens/Login'
import { OrderProgress } from '../screens/OrderProgress'

const { Navigator, Screen, Group} = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
      <Screen name='Login' component={Login} />
      <Screen name='orderPress' component={OrderProgress} />
      </Group>
    </Navigator>
  )
}