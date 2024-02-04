import { useRef, useEffect } from "react";
import Link from "next/link";
import { FileInfo } from "@/lib/clipboard";

export default function FileLink({
  fileInfo,
  autoDownloadedFunc,
}: {
  fileInfo: FileInfo;
  autoDownloadedFunc: () => void;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (fileInfo.fileURL != "" && !fileInfo.autoDownloaded) {
      autoDownloadedFunc();
      linkRef.current?.click();
    }
  }, [fileInfo.fileURL]);

  if (fileInfo.fileURL) {
    return (
      <Link
        ref={linkRef}
        className="text-primary underline decoration-solid line-clamp-1"
        href={fileInfo.fileURL}
        target="_blank"
        download={fileInfo.fileName}
      >
        {fileInfo.fileName}
      </Link>
    );
  } else {
    return <p className="w-full text-center truncate">{fileInfo.fileName}</p>;
  }
}
