import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFViewer from "./PDFViewer";


export default function PDFDownloader(){

    return(
        <PDFDownloadLink
          document={<PDFViewer value={[1,2,3,4,5,6]} />}
          fileName="movielist.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>
    )
}