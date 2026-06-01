import { useActionState, useState } from "react";
import { explain } from "../../actions";
import CodeExplanation from "../CodeExplanation";
import Error from "../Error";

const CodeSplainForm = () => {
    const [result, submitAction, isPending] = useActionState(explain, null)
    const [code, setCode] = useState("");

    return(
        <div className="w-full max-w-3xl">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 rounded-3xl shadow-2xl shadow-black/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">Understand any code snippet</h2>
                    <p className="text-indigo-200/60 text-sm">Paste your code below and get a clear, concise explanation instantly.</p>
                </div>

                <form action={submitAction} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1"> Programming Language </label>
                        <div className="relative">
                            <select name="language" className="w-full appearance-none bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all cursor-pointer">
                                <option value="javascript" className="bg-gray-900">JavaScript</option>
                                <option value="python" className="bg-gray-900">Python</option>
                                <option value="c++" className="bg-gray-900">C++</option>
                                <option value="java" className="bg-gray-900">Java</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1"> Code Snippet </label>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-0 group-focus-within:opacity-30 transition duration-500"></div>
                            <textarea 
                                name="code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="function calculateTotal(items) {&#10;  return items.reduce((sum, item) => sum + item.price, 0);&#10;}" 
                                className="relative w-full bg-[#0a0a0f] border border-white/10 rounded-xl p-5 font-mono text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 min-h-[220px] shadow-inner transition-all resize-y"
                                spellCheck="false"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full relative overflow-hidden group px-6 py-4 rounded-xl font-semibold text-white transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mt-2"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all group-hover:from-indigo-500 group-hover:to-purple-500"></div>
                        <div className="relative flex items-center justify-center gap-2">
                            {isPending ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Analyzing Code...</span>
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                    <span>Explain Code</span>
                                </>
                            )}
                        </div>
                    </button>
                </form>

                {result?.success == false && (
                    <div className="mt-6">
                        <Error error={result?.error} />
                    </div>
                )}
            </div>

            {result?.success && !isPending && (
                <CodeExplanation explanation={result?.data.explanation} />
            )}
        </div>
    )
}

export default CodeSplainForm;
