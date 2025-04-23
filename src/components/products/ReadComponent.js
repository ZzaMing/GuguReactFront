import { useEffect, useState } from "react"
import { API_SERVER_HOST, putOne } from "../../api/todoApi"
import useCustomMove from "../../hooks/useCustomMove"
import { getOne } from "../../api/productsApi"
import FetchingModal from "../common/FetchingModal"

const initState = {
    pno: 0,
    pname: "",
    pdesc: "",
    price: 0,
    uploadFileNames: []
}

const host = API_SERVER_HOST

const ReadComponent = ({ pno }) => {

    const [product, setProduct] = useState(initState)

    const { moveToList, moveToModify } = useCustomMove()

    const [fetching, setFetching] = useState(false)

    useEffect(() => {

        setFetching(true)

        getOne(pno).then(data => {

            setProduct(data)
            setFetching(false)
        })
    }, [pno])

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">

            {fetching ? <FetchingModal /> : <></>}

            <div className="flex justify-center mt-10">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">
                        PNO
                    </div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
                        {product.pno}
                    </div>

                </div>

            </div>


        </div>
    )
}

export default ReadComponent