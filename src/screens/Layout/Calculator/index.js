 import {
    VStack,
    Button,
    FormControl,
    Input,
    NativeBaseProvider,
    Text,
    
} from 'native-base';
import {TextInput} from 'react-native'
import React from 'react';
import { useForm, Controller } from 'react-hook-form'; 

function FormHookTextareaExample() {
    const { control } = useForm();
    const [value1, setValue1] = React.useState(0);
    const [value2, setValue2] = React.useState(0);
    const result = parseFloat(value1) + parseFloat(value2) 
    return (
        <VStack width="80%" space={4}>
            <FormControl
            // isRequired isInvalid={'thought' in errors}
            >
                <FormControl.Label>The Result is:  <Text>{ (isNaN(result)?0:result)}</Text></FormControl.Label>
                <Controller
                    control={control}
                    render={() => {
                        const regex = new RegExp('^[0-9]*([.][0-9]{1,2})?$')
                        return(

                        <TextInput
                            placeholder="Value 1"
                            onChangeText={(val) => regex.test(val)&&setValue1(val)}
                            defaultValue={value1}
                            keyboardType="numeric"
                        />



                    )}}
                    name="value1"
                    
                     
                />
                <Controller
                    control={control}
                    render={() => {
                        const regex = new RegExp('^[0-9]*([.][0-9]{1,2})?$')
                        return (

                            <TextInput
                                placeholder="Value 2"
                                onChangeText={(val) => regex.test(val) && setValue2(val)}
                                defaultValue={value2}
                                keyboardType="numeric"
                            />



                        )
                    }}
                    name="value2"
                    
                />
                {/* <FormControl.ErrorMessage>
            {errors.thought?.message}
          </FormControl.ErrorMessage> */}
            </FormControl>
            {/* <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
                Calculate
            </Button> */}

        </VStack>
    );
}
export default function () {
    return (
      
        <NativeBaseProvider>
            <FormHookTextareaExample />
        </NativeBaseProvider>
      
    );
}