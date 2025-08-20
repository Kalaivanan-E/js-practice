
let Employees = ()=>{


    let employees = [{"eid":1,"ename":"Raine","gender":"Female"},
{"eid":2,"ename":"Nolie","gender":"Female"},
{"eid":3,"ename":"Elset","gender":"Female"},
{"eid":4,"ename":"Giavani","gender":"Male"},
{"eid":5,"ename":"Kirbie","gender":"Female"},
{"eid":6,"ename":"Pacorro","gender":"Male"},
{"eid":7,"ename":"Eulalie","gender":"Female"},
{"eid":8,"ename":"Hertha","gender":"Female"},
{"eid":9,"ename":"Poppy","gender":"Female"},
{"eid":10,"ename":"Buffy","gender":"Female"},
{"eid":11,"ename":"Flossi","gender":"Genderqueer"},
{"eid":12,"ename":"Murdock","gender":"Agender"},
{"eid":13,"ename":"Gris","gender":"Male"},
{"eid":14,"ename":"Rochell","gender":"Non-binary"},
{"eid":15,"ename":"Dorena","gender":"Female"},
{"eid":16,"ename":"Edna","gender":"Female"},
{"eid":17,"ename":"Ruy","gender":"Male"},
{"eid":18,"ename":"Torin","gender":"Bigender"},
{"eid":19,"ename":"Adara","gender":"Female"},
{"eid":20,"ename":"Meade","gender":"Male"},
{"eid":21,"ename":"Lindy","gender":"Genderfluid"},
{"eid":22,"ename":"Elana","gender":"Female"},
{"eid":23,"ename":"Mitchael","gender":"Male"},
{"eid":24,"ename":"Edita","gender":"Female"},
{"eid":25,"ename":"Lou","gender":"Female"},
{"eid":26,"ename":"Gordie","gender":"Male"},
{"eid":27,"ename":"Karina","gender":"Female"},
{"eid":28,"ename":"Denny","gender":"Male"},
{"eid":29,"ename":"Rich","gender":"Male"},
{"eid":30,"ename":"Alexis","gender":"Male"},
{"eid":31,"ename":"Elias","gender":"Male"},
{"eid":32,"ename":"Melessa","gender":"Female"},
{"eid":33,"ename":"Kiley","gender":"Male"},
{"eid":34,"ename":"Janetta","gender":"Female"},
{"eid":35,"ename":"Jodi","gender":"Male"},
{"eid":36,"ename":"Di","gender":"Female"},
{"eid":37,"ename":"Farly","gender":"Male"},
{"eid":38,"ename":"Modesty","gender":"Female"},
{"eid":39,"ename":"Sawyere","gender":"Male"},
{"eid":40,"ename":"Darleen","gender":"Female"},
{"eid":41,"ename":"Garland","gender":"Female"},
{"eid":42,"ename":"Rowena","gender":"Female"},
{"eid":43,"ename":"Ricki","gender":"Female"},
{"eid":44,"ename":"Lelah","gender":"Female"},
{"eid":45,"ename":"Charo","gender":"Genderfluid"},
{"eid":46,"ename":"Miriam","gender":"Agender"},
{"eid":47,"ename":"Daven","gender":"Male"},
{"eid":48,"ename":"Irwin","gender":"Male"},
{"eid":49,"ename":"Darwin","gender":"Genderfluid"},
{"eid":50,"ename":"Ulrich","gender":"Male"}]


    return <div className="container">
            <div className="row">
                <div className="col-6">
                    <table className="table table-bordered border border-3">
                        <thead className="bg-dark text-white">
                        <th> Eid  </th>
                        <th> Ename  </th>
                        <th> Gender  </th>           
                        </thead>
                        <tbody>
                            {
                                employees.map((emp)=>{
                                      return <tr>
                                        <td>{emp.eid}  </td>
                                        <td> {emp.ename} </td>
                                        <td> {emp.gender} </td>
                                      </tr>  
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

    </div>


}

export default Employees;