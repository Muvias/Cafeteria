import Image, { StaticImageData } from "next/image";

interface InitialState {
    imageUrl: StaticImageData;
    imgDescription: string;
    title: string;
    description: string;
}

export function Card(cardDetails: InitialState) {
    return (
        <div className="flex flex-col gap-4 lg:w-1/3">
            <Image src={cardDetails.imageUrl} alt={cardDetails.imgDescription} className="aspect-video" />

            <h3 className="text-2xl font-semibold">
                {cardDetails.title}
            </h3>

            <p className="text-sm">
                {cardDetails.description}
            </p>
        </div>
    )
}