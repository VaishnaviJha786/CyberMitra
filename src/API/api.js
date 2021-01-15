import * as  firebase from 'firebase';

  export function addReport(report,addComplete){
const user=firebase.auth().currentUser;
timeNow=new Date().toISOString();

    firebase.firestore()
    .collection('Reports')
    .doc(timeNow+" "+user.email)
    .set({
        rep: report.rep,
        sub: report.sub,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        createdBy: user.email
    }).then((data) => addComplete(data))
    .catch((error) => console.log(error));
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