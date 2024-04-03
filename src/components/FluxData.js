import {useState} from "react";

export default function FluxData() {
    const [check,isCheck] = useState(false)
    const onCheck = (e) => {
        isCheck(e.target.checked)
    }
    return <>
        <div className="col-md-6 m-2">
            <form>
                <div className="mb-3">
                    <label className="form-label">
                        <input type="checkbox" className="form-check-input" onChange={onCheck}/>
                        Accepter les conditions
                    </label>
                </div>
                <div className="mb-3">
                    <button disabled={!check} className="btn btn-success">clicker</button>
                </div>
            </form>
        </div>
    </>
}