import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function User_table() {

    useEffect(() => {
        fetch()
    }, [])

    const [data, setData] = useState([])

    const fetch = async() => {
        const response = await axios.get(`http://localhost:3000/user`);
        console.log(response)
        setData(response.data)
    }

    const ondelete = async(id) => {
        const response = await axios.delete(`http://localhost:3000/user/${id}`);
        if(response.status == 200){
            toast.success('Data Deleted')
            fetch();
        }
    }


    const handleblock = async(id) => {
        const response = await axios.get(`http://localhost:3000/user/${id}`)
        console.log(response.data.status);
        if(response.data.status == "block"){
            const response = await axios.patch(`http://localhost:3000/user/${id}`, {status:"unblock"})
            toast.info("User Unblocked",{
                position: toast.POSITION.BOTTOM_RIGHT
            });

            fetch();
        }
        else{
            const response = await axios.patch(`http://localhost:3000/user/${id}`, {status:"block"})
            toast.info("User Blocked",{
                position: toast.POSITION.BOTTOM_RIGHT
            })      
            fetch();
        }
    }
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>User Data Tables</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item">Tables</li>
                        <li className="breadcrumb-item active">User Tables</li>
                    </ol>
                </nav>
            </div>{/* End Page Title */}
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">User Data table</h5>
                                <p>Add lightweight datatables to your project with using the <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">Simple DataTables</a> library. Just add <code>.datatable</code> class name to any table you wish to conver to a datatable</p>
                                {/* Table with stripped rows */}
                                <table className="table datatable">
                                    <thead>
                                        <tr>
                                            <th scope="col">#Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Password</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item) => { 
                                                return (
                                                    <tr
                                                    key = {item.id}
                                                    > 
                                                        <th scope="row">{item.id}</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.mobile}</td>
                                                        <td>{item.password}</td>
                                                        <td><button className='btn btn-danger' onClick={()=> ondelete(item.id)}>Delete</button></td>
                                                        <td><button className='btn btn-danger' onClick={()=> handleblock(item.id)}>{(item.status == "unblock" ? "Block":"Unblock" )}</button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                {/* End Table with stripped rows */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default User_table