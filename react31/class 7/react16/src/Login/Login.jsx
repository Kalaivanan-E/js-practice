

let Login = () =>{

    return <div className="container">
             <div className="row">
                <div className="col-4">
                    <form action="#">
            <div className="form-group">
                <label> UserName</label>
                <input className="form-control"  type="text" />
            </div>
            <div className="form-group">
                <label> Password</label>
                <input className="form-control" type="password" />
            </div>
            <input type="submit" className="btn btn-success" />
        </form>
                </div>
             </div>
        
    </div>
}

export default Login;