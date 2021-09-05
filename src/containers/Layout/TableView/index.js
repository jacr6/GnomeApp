import React from 'react'
import { View, Text } from 'react-native'
import {Avatar} from 'native-base'
import {
    Cell,
    Section,
    TableView,
} from 'react-native-tableview-simple';

const CellVariant = (props) => (
    <Cell
        {...props}
        cellContentView={
            <View
                style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
            >
                <Avatar
                    source={{
                      uri: props.data.thumbnail,
                    }}/>
                <Text
                    allowFontScaling
                    numberOfLines={1}
                    style={{ flex: 1, fontSize: 20 }}
                >
                    {props.data.name}
                </Text>
                <Text
                    allowFontScaling
                    numberOfLines={1}
                    style={{ flex: 1, fontSize: 20 }}
                >
                   age: {props.data.age}
                </Text>
                <Text
                    allowFontScaling
                    numberOfLines={1}
                    style={{ flex: 1, fontSize: 20 }}
                >
                   weight: {props.data.weight}
                </Text>
                <Text
                    allowFontScaling
                    numberOfLines={1}
                    style={{ flex: 1, fontSize: 20 }}
                >
                   height: {props.data.height}
                </Text>
                <Text
                    allowFontScaling
                    numberOfLines={1}
                    style={{ flex: 1, fontSize: 20 }}
                >
                   Hair Color: {props.data.hair_color}
                </Text>
            </View>
        }
    />
);


const Friends = (props) => (
    <Cell
        {...props}
        cellContentView={
            <View
                style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
            >
                <Text  allowFontScaling
                    numberOfLines={1}
                    style={{ flex: 1, fontSize: 20 }}
                    >Friends:</Text>  {props.data.friends.map((item)=>{
                    return <Text
                    allowFontScaling
                    numberOfLines={1}
                    style={{ flex: 1, fontSize: 20 }}
                >
                  {item}
                </Text>
                })}
                
            </View>
        }
    />
);


const Professions = (props) => (
    <Cell
        {...props}
        cellContentView={
            <View
                style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
            >
               <Text  allowFontScaling
                    numberOfLines={1}
                    style={{ flex: 1, fontSize: 20 }}
                    >Professions:</Text>  {props.data.professions.map((prof)=>{
                    return <Text
                    allowFontScaling
                    numberOfLines={1}
                    style={{ flex: 1, fontSize: 20 }}
                >
                    {prof}
                </Text>
                })}
                
            </View>
        }
    />
);
export const App = (props) => {

    return <TableView>
        <Section>
            <CellVariant {...props}  />
            <Professions {...props}  />
            <Friends {...props}  />
        </Section>
    </TableView>
}

export default App

