import PDFViewer from "@/components/pdf-viewer";

const InstrumentPDF = () => {
  return <PDFViewer fileUrl={process.env.AACCUP_INSTRUMENT_PDF_URL} />;
};

export default InstrumentPDF;
