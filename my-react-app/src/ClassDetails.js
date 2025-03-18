import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const ClassDetails = () => {
    const [Classes, setClasses] = useState([]);
    const { collegename, departmentname } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5001/api/Home/GetClasses/${collegename}/${departmentname}`)
            .then((response) => response.json())
            .then((data) => {
                setClasses(data);
            })
            .catch((error) => {
                console.error("Error fetching department details:", error);
            });
    }, [collegename, departmentname]);

    return (
        <div className="container mt-4">
            <h2 className="text-center text-primary mb-4">
                {departmentname} Classes in {collegename}
            </h2>
            <div className="row">
                {Classes.map((classes) => (
                    <div key={classes.classid} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            
                           
                            <div className="card-body">
                                <h5 className="card-title text-primary">
                                    <Link
                                        to={`/student/${collegename}/${departmentname}/${classes.classname}`}
                                        className="text-decoration-none"
                                    >
                                        {classes.classname}
                                    </Link>
                                </h5>
                                <p className="card-text text-muted">
                                    <strong>Staff:</strong> {classes.staffname}
                                </p>
                                <p className="card-text text-muted">
                                    <strong>Capacity:</strong> {classes.classcapacity}
                                </p>
                                 <Link to={`/student/${collegename}/${departmentname}/${classes.classname}`} className="btn btn-outline-primary">
                                                                                                View Student
                                                                  </Link>
                            </div>
                        </div>
                    </div>
                ))}
           
         
            
           
                </div>
                <Link to={`/departments/${collegename}`} className="btn btn-primary"> BACK
                </Link>
            </div>
       
    );
};

export default ClassDetails;
