import React from 'react';
import List from '../component/List';


 
let appointmentData = localStorage.getItem('appointmentData')
console.log(appointmentData)

function AppointmentList(props) {
    return (

       

        <div>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Appointment List</h2>
                        {/* <div className="text-center"><NavLink to="/addpatient">addpatient</NavLink></div>  */}
                    </div>
                    <div className="row">
                          {/* <Addpatient rerenderprops={()=>handleReRender()}/> 
                         <div className="text-center"><NavLink to="/addpatient">addpatient</NavLink></div>    */}

                          {/* {
                            appointmentData.map((a)=><List name={a.name} email={a.email} phone={a.phone} date={a.date} department={a.department} message={a.message}/>)
                        }      */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AppointmentList;