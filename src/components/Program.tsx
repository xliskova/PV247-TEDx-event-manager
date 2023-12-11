'use client';

import { Timeline } from '@/components/Timeline';
import {useEvents, useSpeakers} from '@/app/api/api';

export default function Program() {

    const {data: events, isLoading: isLoadingEvents} = useEvents();
    const {data: speakers, isLoading: isLoadingSpeakers} = useSpeakers();

    events?.sort((a, b) => a.startTime.getTime() - b.startTime.getTime())

    if (isLoadingEvents || isLoadingSpeakers) return (<h1>Loading...</h1>)

    if (!speakers || !events) return (<h1>Unable to fetch data...</h1>)

    return (
        <>
            <h1 className="bg-red font-bold p-10 text-3xl text-center">
                Ahoj Marek :)
            </h1>
            <h1 className="bg-red pb-10 text-3xl text-center">
                Do začiatku akcie ostáva 2 dni 14 hodín 15 minút
            </h1>
            <Timeline events={events} speakers={speakers} />
        </>
    );
}
