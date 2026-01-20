
import { AuthProvider } from '@/context/AuthContext';
import { MainContentProvider } from '@/context/MainContentContext';
import { Stack } from 'expo-router';
import 'react-native-reanimated';



export default function RootLayout() {


  return (
    <AuthProvider>
      <MainContentProvider>
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="index" />
        </Stack>
      </MainContentProvider>
    </AuthProvider>

  );
}
