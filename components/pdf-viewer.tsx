"use client";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const PDFViewer = ({ fileUrl }: { fileUrl: string }) => {
  const [pdfTheme, setPdfTheme] = useState<string>();
  const { setOpen } = useSidebar();
  const { theme } = useTheme();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const onDocumentLoad = () => {
    setOpen(false);
    setPdfTheme(theme);
  };
  useEffect(() => {
    setPdfTheme(theme);
  }, [theme]);
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="h-full p-3">
        <Viewer
          fileUrl={fileUrl}
          plugins={[defaultLayoutPluginInstance]}
          defaultScale={1.3}
          onDocumentLoad={onDocumentLoad}
          theme={pdfTheme}
        />
      </div>
    </Worker>
  );
};

export default PDFViewer;
