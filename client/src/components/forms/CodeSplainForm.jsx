import { useActionState } from "react";
import { explain } from "../../actions";
import CodeExplanation from "../CodeExplanation";
import Error from "../Error";

const CodeSplainForm = () => {
    const [result, submitAction, isPending] = useActionState(explain, null)

    return(
        <div className="w-full max-w-4xl  p-6 rounded-2xl shadow-lg">
            <form action={submitAction}>
                <label> Language: </label>
                <select name="language" className="border rounded-lg p-2 w-full mb-4 bg-transparent">
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="c++">C++</option>
                    <option value="java">Java</option>
                </select>

                <label className="block mb-2 font-semibold"> Your Code: </label>
                <textarea name="code" placeholder="Paste your code here" className="border rounded-lg w-full p-3 font-mono text-sm bg-transparent min-h-[150px]" />

                <button
                    type="submit"
                    disabled={isPending}
                    className="mt-4 px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 cursor-pointer tracking-wider"
                >
                    {isPending? "Explaining..." : "Explain Code"}
                </button>
            </form>

            {
                isPending? (
                    <p>Thinking...</p>
                ) : result?.success? (
                    <CodeExplanation explanation={result?.data.explanation} />
                ) : (
                    result?.success == false && (
                        <Error error={result?.error} />
                    )
                )
            }
        </div>
    )
}

export default CodeSplainForm;