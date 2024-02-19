import  { useState } from 'react';
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import axios from 'axios';
import './css/home.css'; 
import SelectFlight from './SelectFlight';

function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState(1);

  const [flights, setFlights] = useState(null);
const [showSelectFlight, setShowSelectFlight] = useState(false);


  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log({ from, to, date, travelers });
  
    const amadeusFlightSearchEndpoint = "https://test.api.amadeus.com/v2/shopping/flight-offers";
  
    const yourAmadeusApiAccessToken = "ADtKB7BO05XMeNObfCj7Q4oKIAaK";
  
    try {
      const response = await axios.get(amadeusFlightSearchEndpoint, {
        headers: {
          Authorization: `Bearer ${yourAmadeusApiAccessToken}`
        },
        params: {
          originLocationCode: from,
          destinationLocationCode: to,
          departureDate: date,
          adults: travelers,
          nonStop: true, 
          max: 10 
        }
      });
  if(response.statusText == 'OK'){
    setFlights(response.data); 
      setShowSelectFlight(true); 
    } else {
      setShowSelectFlight(false);
    }
    } catch (error) {
      setShowSelectFlight(false);

      console.error('Error fetching flight data:', error);
    }
  };
    return (
        <>
            <div className="bannerContainer">
                <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg7.jpg" 
                     alt="Banner" 
                     className="bannerImage" />
                <div className="cardContainer">
                    <Card className="cardStyle">
                    <CardBody style={{ padding: '20px' }}>
                        <h3>Book Your Flight</h3>
                        <p className='pb-8'>Find great deals on flights worldwide.</p>
                        <form onSubmit={handleSubmit}>
  <div className="inputsContainer pb-8">
    <Input label="From" value={from} onChange={e => setFrom(e.target.value)} />
    <Input label="To" value={to} onChange={e => setTo(e.target.value)} />
    <Input type="date"  value={date} onChange={e => setDate(e.target.value)} />
    <Input type="number" label="Travelers" value={travelers.toString()} onChange={e => setTravelers(Number(e.target.value))} />
  </div>
  <Button type="submit" color="primary" className="submitBtn float-right">
    Search
  </Button>
</form>

                    </CardBody>
                    </Card>
                </div>
            </div>
            {showSelectFlight && <SelectFlight flightsData={flights} />}
        </>
    );
}

export default Home;
