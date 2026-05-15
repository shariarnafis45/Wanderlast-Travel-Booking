import DestinationCard from '@/components/shared/DestinationCard';
import React from 'react';

const DestinationsPage = async() => {
    const res = await fetch('http://localhost:5000/destinations')
    const destinationsData = await res.json()
    
    return (
        <div className='max-w-7xl mx-auto py-15 px-5'>
            Destinations
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
                {
                    destinationsData.map(destination => <DestinationCard key={destination._id} destination={destination}/>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;