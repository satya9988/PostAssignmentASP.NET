import React from 'react';
import { Link } from 'react-router-dom';

const ViewData = ({ colleges }) => {

   
  
       

    return (
        <div className="row">
            {colleges.map((college) => (
                <div key={college.collegeid} className="col-md-4 mb-4">
                    <div className="card shadow-sm h-100">
                       
                        <img 
                            src={`/images/${college.collegename}.jpg`}
                            className="card-img-top"
                            alt={college.collegename}
                            style={{ height: '150px' }}
                        />
                        <div className="card-body">
                          
                            <h5 className="card-title text-primary">
                                <Link to={`/departments/${college.collegename}`} className="text-decoration-none">
                                    {college.collegename}
                                </Link>
                            </h5>
                           
                            <p className="card-text text-muted">
                                <i className="bi bi-geo-alt-fill me-2"></i>{college.collegeaddress}
                            </p>
                           
                            <Link to={`/departments/${college.collegename}`} className="btn btn-outline-primary">
                                View Departments
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ViewData;
