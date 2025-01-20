import { useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {

    const { tno } = useParams() //PathVariable
    const navigate = useNavigate()
    const [queryParams] = useSearchParams() //QueryString

    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10
    const queryStr = createSearchParams({ page, size }).toString()

    const moveToModify = useCallback((tno) => {
        navigate({
            pathname: `/todo/modify/${tno}`,
            search: queryStr
        })
    }, [tno, page, size])

    const moveToList = useCallback(() => {
        navigate({
            pathname: `/todo/list`,
            search: queryStr
        })
    }, [page, size])

    return (
        //     <div>
        //         <button onClick={() => moveToModify(tno)}>Test modify</button>
        //     </div>
        //     <div>
        //         <button onClick={() => moveToList()}>Test List</button>
        //     </div>
        <div className="font-extrabold w-full bg-white mt-6">
            <div className="text-2xl">
                Todo Read Page Components {tno}
            </div>
            <ReadComponent tno={tno}></ReadComponent>
        </div>
    )

}

export default ReadPage;