"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useTheme } from "next-themes";
import { useSidebar } from "@/components/ui/sidebar";
import { useEffect } from "react";

const PDFViewer = ({ fileUrl }: { fileUrl: string }) => {
  const { theme, setTheme } = useTheme();
  const { setOpen } = useSidebar();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  useEffect(() => {
    setOpen(false);
    setTheme("white");
  }, []);
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="h-full">
        <Viewer
          fileUrl={fileUrl}
          plugins={[defaultLayoutPluginInstance]}
          theme={theme}
          defaultScale={1.3}
        />
      </div>
    </Worker>
  );
};

export default PDFViewer;
