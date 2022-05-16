import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer as Pdf } from '@react-pdf/renderer'

export default function PDFViewer({value}){
return(
  

          <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.subpage}>
        
    <View style={styles.titleContainer}>
      <Text style={styles.textMargin}>Department of</Text>
     
    </View>
      <View style={styles.section}>
        <Text style={styles.textMargin}>Approved Department</Text>
          <Text style={styles.textMargin}>Opened time</Text>
            <Text style={styles.textMargin}>Closed time</Text>
              <Text style={styles.textMargin}>Status</Text>

      </View>
      <View style={styles.section}>
        <Text style={styles.textMargin}>{value[0]}</Text>
        <Text style={styles.textMargin}>{value[1]}</Text>
        <Text style={styles.textMargin}>{value[2]}</Text>
        <Text style={styles.textMargin}>{value[3]}</Text>

      </View>
      
      </View>
    </Page>
  </Document>

  
)


}
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '100vh',
    border: "1px solid black",
    
    
  },
  textMargin:{
    margin: 10
  },
   subpage: {
    flexDirection: 'row',
    backgroundColor: 'white',

    width:"100%" ,
    border: "1px solid black",
    margin:5

    
  },
    titleContainer: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    padding: 5
  },
  section: {
    margin: 15,
    padding: 10,
    flexGrow: 1,
    fontSize:10
  }
});