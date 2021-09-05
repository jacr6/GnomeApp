import React from 'react'
import { View, Text } from 'react-native'
import {Avatar} from 'native-base'
import {
    Cell,
    Section,
    TableView,
} from 'react-native-tableview-simple';

 
const SingleData = (props) => (
    <Cell
        {...props}
        cellContentView={
            <View
                style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
            >
                  {props.avatar&&( <Avatar
                    source={{
                      uri: props.thumbnail,
                    }}/>)}
                <Text
                    allowFontScaling
                    numberOfLines={1}
                    style={{ flex: 1, fontSize: 20 }}
                >
                   {props.title} {props.data}
                </Text>
            </View>
        }
    />
); 
 


const MasterData = (props) => (
    <Cell
        {...props}
        cellContentView={
            <View
                style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
            >
               
               <Text  allowFontScaling
                    numberOfLines={1}
                    style={{ flex: 1, fontSize: 20 }}
                    >{props.title}</Text>  {props.data.map((prof)=>{
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
            <SingleData title="Name:" data={props.data.name} avatar={true} thumbnail={props.data.thumbnail}  />
            <SingleData title="Age:" data={props.data.age}   />
            <SingleData title="Height:" data={props.data.height}   />
            <SingleData title="Weight:" data={props.data.weight}   />
            <SingleData title="Hair Color:" data={props.data.hair_color}   />             
            <MasterData title="Professions:" data={props.data.professions}  />
            <MasterData title="Friends:" data={props.data.friends}  />
        </Section>
    </TableView>
}

export default App

