"use client";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import { JSX, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { pdf } from "@react-pdf/renderer";

const PDFViewer = ({
  fileUrl,
  pdfComponent,
}: {
  fileUrl?: string;
  pdfComponent?: JSX.Element;
}) => {
  const [pdfUrl, setPdfUrl] = useState<string>(fileUrl || "");
  const pathName = usePathname();
  const segments = pathName.split("/").filter((segment) => segment);
  const [pdfTheme, setPdfTheme] = useState<string>();
  const { setOpen } = useSidebar();
  const { theme } = useTheme();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const onDocumentLoad = () => {
    requestAnimationFrame(() => {
      if (
        (segments[1] === "self-survey" || segments[1] === "actual-survey") &&
        segments[3] === "evidence"
      )
        setOpen(false);
      else setOpen(true);
      setPdfTheme(theme);
    });
  };

  useEffect(() => {
    setPdfTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (pdfComponent) {
      const generatePdf = async () => {
        const blob = await pdf(pdfComponent)?.toBlob();
        setPdfUrl(URL.createObjectURL(blob));
      };
      generatePdf();
    }
  }, [pdfComponent]);

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="h-full">
        {pdfUrl && (
          <Viewer
            fileUrl={pdfUrl}
            plugins={[defaultLayoutPluginInstance]}
            defaultScale={1.3}
            onDocumentLoad={onDocumentLoad}
            theme={pdfTheme}
          />
        )}
      </div>
    </Worker>
  );
};

export default PDFViewer;
