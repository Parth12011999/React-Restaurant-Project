import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Contact_table() {

    useEffect(() => {
        fetch()
    }, [])

    const [data, setData] = useState([])

    const fetch = async () => {
        const response = await axios.get(`http://localhost:3000/contact`);
        console.log(response)
        setData(response.data)
    }


    const ondelete = async (id) => {
        const response = await axios.delete(`http://localhost:3000/contact/${id}`);
        if (response.status == 200) {
            toast.success('Data Deleted')
            fetch();
        }
    }
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Contact Data Tables</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item">Tables</li>
                        <li className="breadcrumb-item active">Contact Tables</li>
                    </ol>
                </nav>
            </div>{/* End Page Title */}
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Contact Data table</h5>
                                <p>Add lightweight datatables to your project with using the <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">Simple DataTables</a> library. Just add <code>.datatable</code> class name to any table you wish to conver to a datatable</p>
                                {/* Table with stripped rows */}
                                <table className="table datatable">
                                    <thead>
                                        <tr>
                                            <th scope="col">#Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Subject</th>
                                            <th scope="col">Message</th>
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
                                                        <td>{item.subject}</td>
                                                        <td>{item.message}</td>
                                                        <td><button className='btn btn-danger' onClick={() => ondelete(item.id)}>Delete</button></td>
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

export default Contact_table