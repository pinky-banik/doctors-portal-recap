import { format } from 'date-fns';
import React, {useState} from 'react';
import AppointmentService from './AppointmentService';
import AvailableAppointmentService from './AvailableAppointmentService';
import loader from '../../assets/images/22.gif';
import {useQuery} from 'react-query';

const AvailbleAppointments = ({date}) => {
    // const [servicess,setServices] = useState([]);
    const [title,setTitle] = useState('');
    const[slots,setSlots] = useState([]);
    const[treatment,setTreatment] = useState({});

    const today = new Date();
    const formatedDate= format(date,'PP');
    // useEffect(()=>{
    //     fetch(`http://localhost:4000/available?date=${formatedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data));
    // },[formatedDate]);

    //using react query instead of useEffect

    const {data:services,isLoading,refetch} = useQuery(['available',formatedDate],()=>
    fetch(`http://localhost:4000/available?date=${formatedDate}`)
        .then(res=>res.json())
    )
    if(isLoading){
        return <div className='flex h-screen justify-center items-center'><img  src={loader} alt="" /></div>
    }

    return (
        <div className='py-10 text-center'>
            <div>
            <h1 className=' text-center text-2xl font-semibold text-accent'>
            Available Appointments On {format(date,'PP')}
            </h1>
            <p className='p-5 text-gray-400 text-lg'>Please select a service</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:w-4/5 mx-auto'>
                {
                    services?.map(service=>(
                        <AvailableAppointmentService
                        key={service._id}
                        service={service}
                        setTitle={setTitle}
                        setSlots={setSlots}
                        />
                    ))
                }
            </div>
            </div>
            <div className=' my-10'>
                {slots.length ? <h1 className='my-10 py-10 text-center text-2xl font-semibold text-accent'>Available slots for Teeth Orthodontics. <br /><span className='text-gray-500 text-[18px]'>{slots.length} slots are available</span></h1>:''}
                
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:w-4/5 mx-auto'>
                {
                    slots.map(slot=><AppointmentService
                    key={slot}
                    slot={slot}
                    title={title}
                    setTreatment={setTreatment}
                    treatment={treatment}
                    date={date}
                    slots={slots}
                    refetch={refetch}
                    isLoading = {isLoading}
                    />)
                }
            </div>
            
            </div>
        </div>
    );
};

export default AvailbleAppointments;