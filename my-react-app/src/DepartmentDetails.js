import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const DepartmentDetails = () => {
    const [Department, setDepartment] = useState([]);
    const { collegename } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5001/api/Home/GetDepartment/${collegename}`)
            .then((response) => response.json())
            .then((data) => {
                setDepartment(data);
            })
            .catch((error) => {
                console.error("Error fetching department details:", error);
            });
    }, [collegename]);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4 text-primary">{collegename} Departments</h2>
            <div className="row">
                {Department.map((dept) => (
                    <div key={dept.departmentid} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                           
                            <img
                                src={`/images/${dept.departmentname}.jpg`}
                                className="card-img-top"
                                alt={dept.departmentname}
                                style={{ height: '150px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-primary">
                                    <Link
                                        to={`/departments/${collegename}/${dept.departmentname}`}
                                        className="text-decoration-none"
                                    >
                                        {dept.departmentname}
                                    </Link>
                                </h5>
                                <p className="card-text text-muted">
                                    <strong>HOD:</strong> {dept.hod}
                                </p>
                                  <Link to={`/departments/${collegename}/${dept.departmentname}`} className="btn btn-outline-primary">
                                                                View Classes
                                  </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
             <Link to={"/view-college"} className="btn btn-primary"> BACK
                            </Link>
        </div>
    );
};

export default DepartmentDetails;
