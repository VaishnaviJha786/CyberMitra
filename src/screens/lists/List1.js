import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {Card} from 'react-native-paper';


const List1=()=>
{
    return(
        <View style={styles.homeview}>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Advocate Swati Kapoor
                    </Text>
                    
                    <Text style={{fontSize:12}}>Sector-2, Rohini, Delhi </Text>
                </View>
            </Card>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Advocate Daksh Sinha
                    </Text>
                
                    <Text style={{fontSize:12}}>Pitampura, Delhi</Text>
                </View>
            </Card>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Advocate Seeta Devi
                    </Text>
                    <Text style={{fontSize:12}}>Wazirpur, Delhi</Text>
                </View>
            </Card>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Advocate Shubham Saxena
                    </Text>
                    <Text style={{fontSize:12}}>Laxmi Nagar,Delhi </Text>
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

export default List1;
