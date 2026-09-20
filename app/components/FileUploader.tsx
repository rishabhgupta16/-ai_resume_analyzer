import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { formatSize } from "../lib/utils";

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
    const maxFileSize = 20 * 1024 * 1024;

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const file = acceptedFiles[0] || null;
            onFileSelect?.(file);
        },
        [onFileSelect]
    );

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        acceptedFiles,
    } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            "application/pdf": [".pdf"],
        },
        maxSize: maxFileSize,
    });

    const file = acceptedFiles[0] || null;

    return (
        <div className="w-full">
            <div
                {...getRootProps()}
                className={`
                    relative w-full rounded-2xl border-2 border-dashed
                    px-6 py-10 cursor-pointer
                    transition-all duration-300
                    ${
                        isDragActive
                            ? "border-blue-500 bg-blue-50 scale-[1.01]"
                            : "border-blue-200 bg-slate-50 hover:border-blue-400 hover:bg-blue-50/50"
                    }
                `}
            >
                <input {...getInputProps()} />

                {file ? (
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100">
                            <img
                                src="/images/pdf.png"
                                alt="PDF file"
                                className="w-10 h-10"
                            />
                        </div>

                        <div className="text-center">
                            <p className="font-semibold text-slate-800 max-w-md truncate">
                                {file.name}
                            </p>

                            <p className="text-sm text-slate-500 mt-1">
                                {formatSize(file.size)}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            Resume ready for analysis
                        </div>

                        <p className="text-sm text-blue-600 font-medium">
                            Click or drop another PDF to replace this file
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                className="w-8 h-8 text-blue-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 15v3a2 2 0 002 2h10a2 2 0 002-2v-3"
                                />
                            </svg>
                        </div>

                        {isDragActive ? (
                            <>
                                <p className="text-lg font-semibold text-blue-600">
                                    Drop your resume here
                                </p>

                                <p className="text-sm text-slate-500 mt-2">
                                    Release the file to upload
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="text-lg font-semibold text-slate-800">
                                    Upload your resume
                                </p>

                                <p className="text-slate-500 mt-2">
                                    Drag & drop your PDF here, or{" "}
                                    <span className="text-blue-600 font-semibold">
                                        browse files
                                    </span>
                                </p>

                                <p className="text-sm text-slate-400 mt-3">
                                    PDF only • Maximum size {formatSize(maxFileSize)}
                                </p>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileUploader;