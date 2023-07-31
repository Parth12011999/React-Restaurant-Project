import React,{useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



function AddProduct() {

    const [formData,setformData] = useState({
        id:"",
        image:"",
        name:"",
        description:"",
        price:"",
        isclicked:"",
        quantity:1
    })

    const onchange = (e) => {
        setformData({...formData,quantity:1,isclicked:false,id:new Date().getMilliseconds().toString(),[e.target.name]:e.target.value});
    }

    const validate = () => {
        let res = true;
        if(formData.image == "" || formData.image == null){
            toast.error('url Required')
            res= false;
        }
        if(formData.name == "" || formData.name == null){
            toast.error('name Required')
            res= false;
        }
        if(formData.description == "" || formData.description == null){
            toast.error('description Required')
            res= false;
        }
        if(formData.price == "" || formData.price == null){
            toast.error('url Required')
            res= false;
        }
        return res
    }

    const post = async(api,data) =>{
        const response = await axios.post(api,data);
        if (response.status > 200 && response.status <300) {
            toast.success('Product added successfully');
            setformData({...formData,name:"",image:"",description:"",price:""});
        }
    }
    const onsubmit = (e) => {
        e.preventDefault();
        if(validate()){
            post(`http://localhost:3000/product`,formData)
            post(`http://localhost:3000/userProduct`,formData)
        }
    }
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Add Product</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item">Forms</li>
                        <li className="breadcrumb-item active">Add Product</li>
                    </ol>
                </nav>
            </div>{/* End Page Title */}
            <div className="row">
                <div className="offset-lg-2 col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Add Product</h5>
                            <form>
                                <div className="row mb-3">
                                    <label htmlFor="url" className="col-sm-3 col-form-label">Product Image</label>
                                    <div className="col-sm-9">
                                        <input type="url" className="form-control" name='image' value={formData.image} onChange={onchange}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="name" className="col-sm-3 col-form-label">Product Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name='name' value={formData.name} onChange={onchange}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="description" className="col-sm-3 col-form-label">Product Description</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name='description' value={formData.description} onChange={onchange}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="price" className="col-sm-3 col-form-label">Price</label>
                                    <div className="col-sm-9">
                                        <input type="number" className="form-control" name='price' value={formData.price} onChange={onchange}/>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary mx-1" onClick={onsubmit}>Submit</button>
                                    <button type="reset" className="btn btn-secondary mx-1">Reset</button>
                                </div>
                            </form>{/* End Horizontal Form */}
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default AddProduct