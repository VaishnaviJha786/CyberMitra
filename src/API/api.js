import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import storage from '@react-native-firebase/storage';
import { StackActions } from '@react-navigation/native';

export function addReport(report){
    var user=auth().currentUser;
    var timeNow=firestore.Timestamp.now();
     
    var timestamp = new Date(timeNow.toDate()).toISOString();
    var reportId=timestamp+" "+user.email;


    firestore()
    .collection('Reports')
    .doc(reportId)
    .set({
        rep: report.rep,
        sub: report.sub,
        createdAt: firestore.FieldValue.serverTimestamp(),
        createdBy: user.email
    }).then(Alert.alert("Incident reported Successfully",
    "Your Report was added successfully",

    )
    )
    .catch((error) => console.log(error));
    this.props.navigation.navigate('Options');
}
  
export async function getReport(reportRetrieved)
{   var reportList = [];

    var snapshot = await firebase.firestore()
    .collection('Reports')
    .orderBy('createdAt')
    .get()

    snapshot.array.forEach((doc) => {
        ReportList.push(doc.data());
    });
    reportRetrieved(reportList);
}