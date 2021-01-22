import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {Card} from 'react-native-paper';


const List3=()=>
{
    return(
        <View style={styles.homeview}>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Dr. MY Khan
                    </Text>
                    <Text style={{fontSize:12}}>Noida, UP, Contact-1111111111</Text>
                </View>
            </Card>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Dr. Indu Goswami
                    </Text>
                    <Text style={{fontSize:12}}>RK Ashram, Delhi, Contact-2222222222</Text>
                </View>
            </Card>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Dr. Uttam Kumar
                    </Text>
                    <Text style={{fontSize:12}}>Rohini, Delhi, Contact-3333333333</Text>
                </View>
            </Card>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Dr. Aisha 
                    </Text>
                    <Text style={{fontSize:12}}>Vasundhara Enclave, Delhi, Contact-444444444</Text>
                </View>
            </Card>
            
        </View>
    );  
}
const styles=StyleSheet.create
(
    {   homeview:{
        flex: 1,
        
        },
        mycard:{   
            margin:10,
        },
        cardview:{
            flexDirection:'column',
            margin: 10
        },
        
    }
);

export default List3;
