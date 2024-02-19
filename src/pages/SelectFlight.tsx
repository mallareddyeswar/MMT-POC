import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from "@nextui-org/react";

function SelectFlight(flightsData: any) {
    const extractTime = (isoDateTime: string) => {
        const date = new Date(isoDateTime);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    };
    function formatDuration(duration: any) {
        const match = duration.match(/PT(\d+H)?(\d+M)?/);
        const hours = match[1] ? match[1].slice(0, -1) : "0";
        const minutes = match[2] ? match[2].slice(0, -1) : "0";
        return `${hours}h:${minutes}m`;
    }


    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 pt-8">
                {flightsData.flightsData.data.map((flight: any, index: number) => (
                    <Card className="w-full max-w-xs" key={index} isHoverable>
                        {flight.itineraries.map(( itineraryIndex: number) => (
                            <div key={itineraryIndex}>
                                <CardHeader>
                                    <Image
                                        alt="nextui logo"
                                        height={40}
                                        width={40}
                                        src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=18"
                                    />
                                    <div className='pl-2'>
                                        <p>{flight.validatingAirlineCodes[0]} Flight {flight.id}</p>
                                    </div>
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    {flight.itineraries.map((itinerary: any, itineraryIndex: number) => (
                                        <div key={itineraryIndex} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                            {itinerary.segments.map((segment: any, segmentIndex: number) => (
                                                <div key={segmentIndex} style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                                    <div style={{ textAlign: 'left', width: '33%' }}>
                                                        <span style={{ fontSize: '20px', fontWeight: 'lighter' }}>
                                                            {extractTime(segment.departure.at)}
                                                        </span>
                                                        <br />
                                                        <span>
                                                            {segment.departure.iataCode}
                                                        </span>
                                                    </div>

                                                    <div style={{ textAlign: 'center', width: '33%' }}>
                                                        {formatDuration(segment.duration)}
                                                    </div>

                                                    <div style={{ textAlign: 'right', width: '33%' }}>
                                                        <span style={{ fontSize: '20px', fontWeight: 'lighter' }}>
                                                            {extractTime(segment.arrival.at)}
                                                        </span>
                                                        <br />
                                                        <span>
                                                            {segment.arrival.iataCode}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </CardBody>


                                <Divider />
                                <CardFooter style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span> €{flight.price.total}</span>
                                    <Button color="primary" size="sm" onClick={() => console.log('Booking flight...')}>
                                        Book Now
                                    </Button>
                                </CardFooter>
                            </div>
                        ))}
                    </Card>
                ))}
            </div>
        </>
    );
}

export default SelectFlight;
