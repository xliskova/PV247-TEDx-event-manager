"use client";

import { DetailInformation } from '@/components/DetailInformation';
import { useSpeakers } from '@/app/api/api'

const ListOfDetailInformationPage = () => {

    const {data, isLoading} = useSpeakers();

    if (isLoading) return (<h1>Loading...</h1>)

    return (
        <div className="bg-grey pb-5">
            <div className="lg:mx-16">
                <h1 className="text-center p-10">REČNÍCI</h1>
                {data?.map((speaker, index) => (
                    <div key={speaker.id}>
                        <DetailInformation
                            className={
                                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                            }
                            speaker={speaker}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ListOfDetailInformationPage;
