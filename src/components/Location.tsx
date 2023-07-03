import Image from "next/image";
import MapSP from "../assets/maps.png";

export function Location() {
    return (
        <section className="flex lg:flex-row flex-col justify-between gap-4 lg:px-48 px-6 py-16 bg-[#F3F4F6]" id="location">
            <div className="w-full">
                <Image className="lg:w-4/5 w-full object-cover aspect-video" src={MapSP} alt="Imagem mostrando a localização de São Paulo" />
            </div>

            <div className="lg:max-w-[50%] w-full">
                <h2 className="text-3xl font-semibold mb-4">Localização</h2>
                <p>São Paulo, SP</p>
            </div>
        </section>
    )
}