import React from 'react'

function Form_editor() {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Form Editors</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item">Forms</li>
                        <li className="breadcrumb-item active">Editors</li>
                    </ol>
                </nav>
            </div>{/* End Page Title */}
            <section className="section">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Quill Editor Default</h5>
                                {/* Quill Editor Default */}
                                <div className="quill-editor-default">
                                    <p>Hello World!</p>
                                    <p>This is Quill <strong>default</strong> editor</p>
                                </div>
                                {/* End Quill Editor Default */}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Quill Editor Bubble</h5>
                                {/* Quill Editor Bubble */}
                                <p>Select some text to display options in poppovers</p>
                                <div className="quill-editor-bubble">
                                    <p>Hello World!</p>
                                    <p>This is Quill <strong>bubble</strong> editor</p>
                                </div>
                                {/* End Quill Editor Bubble */}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Quill Editor Full</h5>
                                {/* Quill Editor Full */}
                                <p>Quill editor with full toolset</p>
                                <div className="quill-editor-full">
                                    <p>Hello World!</p>
                                    <p>This is Quill <strong>full</strong> editor</p>
                                </div>
                                {/* End Quill Editor Full */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">TinyMCE Editor</h5>
                                {/* TinyMCE Editor */}
                                <textarea className="tinymce-editor" defaultValue={"<p>Hello World!</p> \n <p>This is TinyMCE <strong>full</strong> editor</p> \n "} />{/* End TinyMCE Editor */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Form_editor