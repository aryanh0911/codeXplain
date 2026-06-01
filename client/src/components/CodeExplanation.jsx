import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState } from 'react'

const CodeExplanation = ({explanation}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(explanation); //built-in browser API that copies text to the clipboard.
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div className="relative w-full mt-8 bg-white/[0.02] backdrop-blur-xl border border-indigo-500/20 p-8 rounded-3xl shadow-xl shadow-black/40 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 mix-blend-screen pointer-events-none"></div>

            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Explanation
                </h2>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
                >
                    {copied ? (
                        <>
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span className="text-green-400">Copied!</span>
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>
            
            <div className="markdown-body">
                <Markdown remarkPlugins={[remarkGfm]}>{explanation}</Markdown>
            </div>
        </div>
    )
}

export default CodeExplanation;