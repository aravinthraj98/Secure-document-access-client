import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer as Pdf } from '@react-pdf/renderer'

export default function PDFViewer({value,fullAddress}){

  function getDate(sec){
    let time = new Date(Number(sec));
    return time.toLocaleString()
  }
return(
  

          <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.subpage}>
        
    <View style={styles.titleContainer}>
      <Text style={styles.textMargin}>Department of {value[0]}</Text>
     
    </View>
    <View>
      <Text style={{margin:2}}>{"        "}           This is to certify from the department of {value[0]}.Thus the applicant of the land located at {fullAddress} is applied for approval of plan. This certify is about the acknowledgement of the approval process. The status of the process is given below. </Text>
    </View>
    <View style={styles.status}>
      <View style={{width:"50%"}}>
        <Text style={styles.textMargin}>Approved Department</Text>
          <Text style={styles.textMargin}>Opened time</Text>
            <Text style={styles.textMargin}>Closed time</Text>
              <Text style={styles.textMargin}>Status</Text>
               <Text style={styles.textMargin}>Comments</Text>
                <Text style={styles.textMargin}>verifiedBy</Text>
               


      </View>
      <View style={{width:"50%"}}>
        <Text style={styles.textMargin}>{value[0]}</Text>
        <Text style={styles.textMargin}>{getDate(value[1])}</Text>
        <Text style={styles.textMargin}>{getDate(value[2])}</Text>
        <Text style={styles.textMargin}>{value[3]===true?"approved":"rejected"}</Text>
        <Text style={styles.textMargin}>{value[4]}</Text>
         <Text style={styles.textMargin}>{value[6]}</Text>
       

      </View>
      </View>
      
      </View>
    </Page>
  </Document>

  
)


}
const styles = StyleSheet.create({
  page: {
    flex:1,
    backgroundColor: 'white',
    height: '100vh',
    border: "1px solid black",
    
    
  },
  textMargin:{
    margin: 10,
   wordWrap:"break-word"
    
   
  },
   subpage: {
     flex:1,
    flexDirection: 'column',
    backgroundColor: 'white',

    width:"90%" ,
    border: "1px solid black",
    margin:"5%"

    
  },
    titleContainer: {
    backgroundColor: "white",
    display: "flex",
    textAlign:"center",
    flexDirection: "column",
    padding: 5,
    margin:1 ,
  },
  section: {
    margin: 15,
    padding: 10,
    fontSize:10
  },
  status:{
    flex:1 ,
    flexDirection:"row",
    margin:10,
    justifyContent:"space-between"
  }
});