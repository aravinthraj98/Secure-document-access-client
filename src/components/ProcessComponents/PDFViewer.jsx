import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer as Pdf } from '@react-pdf/renderer'

export default function PDFViewer({value}){
return(
   <Pdf>
          <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Approved Department</Text>
          <Text>Opened time</Text>
            <Text>Closed time</Text>
              <Text>Status</Text>

      </View>
      <View style={styles.section}>
        <Text>{value[0]}</Text>
        <Text>{value[1]}</Text>
        <Text>{value[2]}</Text>
        <Text>{value[3]}</Text>

      </View>
    </Page>
  </Document>
   </Pdf>
  
)


}
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    height: '100vh',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});