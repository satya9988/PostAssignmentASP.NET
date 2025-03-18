import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentDetails = () => {
    const [Students, setStudents] = useState([]);
    const { collegename, departmentname, classname } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5001/api/Home/GetStudent/${collegename}/${departmentname}/${classname}`)
            .then((response) => response.json())
            .then((data) => {
                setStudents(data);
            })
            .catch((error) => {
                console.error("Error fetching student details:", error);
            });
    }, [collegename, departmentname, classname]);

    return (
        <div className="container mt-4">
            <h2 className="text-center text-primary mb-4">
                Students in {classname} ({departmentname}, {collegename})
            </h2>
            <div className="row">
                {Students.map((std) => (
                    <div key={std.studentid} className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100">
                           
                            <img
                                src={`/images/${std.studentname}.jpg`}
                                className="card-img-top"
                                alt={std.studentname}
                                style={{ height: '180px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-primary">{std.studentname}</h5>
                                <p className="card-text text-muted">
                                    <strong>Date of Birth:</strong> {std.studentdateOfBirth}
                                </p>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           <Link to={`/departments/${collegename}/${departmentname}`} className="btn btn-outline-primary">
                                                                                                           BACK
                                                                             </Link>
        </div>
    );
};

export default StudentDetails;
