import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFViewer from "./PDFViewer";


export default function PDFDownloader({value,fullAddress}){

    return(
        <PDFDownloadLink
          document={<PDFViewer value={value} fullAddress={fullAddress} />}
          fileName={value[0]+ "certificate.pdf"}
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : `${value[0]} Download Pdf`
          }
        </PDFDownloadLink>
    )
}