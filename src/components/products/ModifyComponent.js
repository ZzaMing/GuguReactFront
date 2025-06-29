import { useEffect, useRef, useState } from "react"
import { getOne } from "../../api/productsApi"
import FetchingModal from "../common/FetchingModal"
import { API_SERVER_HOST } from "../../api/todoApi"


const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    delFlag: false,
    uploadFileNames: []
}

const host = API_SERVER_HOST

const ModifyComponent = ({ pno }) => {

    const [product, setProduct] = useState(initState)

    const [fetching, setFetching] = useState(false)

    const uploadRef = useRef()

    useEffect(() => {

        setFetching(true)

        getOne(pno).then(data => {

            setProduct(data)

            setFetching(false)
        })
    }, [pno])

    const handleChangeProduct = (e) => {

        product[e.target.name] = e.target.value

        setProduct({ ...product })
    }

    const deleteOldImages = (imageName) => {

    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">

            {fetching ? <FetchingModal /> : <></>}

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">
                        Product Name
                    </div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                        name="pname"
                        type={'text'}
                        value={product.pname}
                        onChange={handleChangeProduct}
                    >
                    </input>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">
                        Desc
                    </div>
                    <textarea className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md resize-y"
                        name="pdesc"
                        rows="4"
                        onChange={handleChangeProduct}
                        value={product.pdesc}
                    >
                        {product.pdesc}
                    </textarea>
                </div>
            </div>



        </div>
    )
}

export default ModifyComponent