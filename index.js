import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { gnomeCom } from './src/com/gnomeCom'
import { setData } from './src/context'
import App from './App';
// registerRootComponent(App);
//  (async () => { 
     
//     try {
//         const response =  await gnomeCom() 
//         const { state, data } = response
//         // console.log("RESPONSE: ", response)
//         if (state) {
//             setData("data", data)
           
//         }
        
//     } catch (error) {
        
//     }finally{

//         registerRootComponent(App);       
//     }
    
   

// })()

registerRootComponent(App);